/* globals AFRAME, THREE, SVGPathSegMovetoAbs, SVGPathSegLinetoRel, SVGPathSegLinetoVerticalRel, SVGPathSegLinetoHorizontalRel, SVGPathSegLinetoHorizontalAbs, SVGPathSegLinetoVerticalAbs, SVGPathSegClosePath, SVGPathSegLinetoAbs */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

require('pathseg'); // polyfill

const d3 = require('d3');
const d3GeoProjection = require('d3-geo-projection');
const topojson = require('topojson-client');

const FEATURE_SELECTED_EVENT = 'geojson-feature-selected';
const GEOJSON_GENERATED_EVENT = 'geojson-loaded';

AFRAME.registerComponent('geojson', {
  dependencies: ['geometry', 'material'],
  schema: {
    src: {
      type: 'asset'
    },
    featureKey: {
      default: 'id'
    },
    dataSrc: {
      type: 'asset'
    },
    dataType: {
      default: 'tsv',
      oneOf: ['csv', 'tsv']
    },
    dataKey: {
      default: 'id'
    },
    // for a topojson, else first will be taken
    topologyObject: {
      default: ''
    },
    raycasterAccuracy: {
      default: 1,
      type: 'int'
    },
    projection: {
      default: 'geoEquirectangular'
    },
    featureEventName: {
      default: '',
      oneOf: ['', 'click', 'raycaster-intersected']
    },
    lineWidth: {
      default: 1
    },
    pointScale: {
      default: 0.1
    },
    pointScaling: {
      default: 'linear',
      oneOf: ['linear', 'exponential']
    },
    pointSizeFeature: {
      default: ''
    },
    pointAs: {
      default: 'point',
      oneOf: ['point', 'line']
    },
    omitBoundingBox: {
      default: false,
      type: 'boolean'
    },
    selectLatency: {
      default: 500
    }
  },

  init: function () {
    const data = this.data;

    this.loader = new THREE.FileLoader();

    this.el.addEventListener('componentchanged', (evt) => {
      const mesh = this.el.getObject3D('mesh');
      if (evt.detail.name === 'material') {
        const matData = evt.target.getAttribute('material');
        if (mesh.type === 'Group') {

          let i;
          for (i=0; i < mesh.children.length; i++) {
            const child = mesh.children[i];
            child.material.color = new THREE.Color(matData.color);
            child.material.opacity = matData.opacity;
          }
        } else {
          mesh.material.color = new THREE.Color(matData.color);
          mesh.material.opacity = matData.opacity;
        }
      }
    });

    this.tick = AFRAME.utils.throttleTick(this.tick, data.selectLatency, this);
  },

  update: function (oldData) {
    const data = this.data;

    // Nothing changed
    if (AFRAME.utils.deepEqual(oldData, data)) {
      return;
    }

    const src = data.src;
    if (src && src !== oldData.src) {
      this.loader.load(src, this.onGeojsonLoaded.bind(this));
    }
    // remove visualisation if src is not set
    if (!src) {
      this.el.removeObject3D('mesh');
      if (this.hitScene) {
        this.hitScene.remove(this.maskMesh);
      }
      this.maskMesh = null;
      this.geometryMap = null;
    }

    if (this.mesh) {
      if (oldData.lineWidth !== data.lineWidth) {
        this.mesh.material.linewidth = data.lineWidth;
      }
      if (oldData.pointScale !== data.pointScale) {
        this.mesh.material.size = data.pointScale;
      }
    }
  },

  remove: function() {

  },

  tick: function (time, delta) {
    if (this.data.featureEventName === 'raycaster-intersected') {
        // https://github.com/aframevr/aframe/issues/3248
      const raycasterEls = document.querySelectorAll('[raycaster]');
      let i;
      for (i=0; i < raycasterEls.length; i++) {
        const raycasterEl = raycasterEls[i];
        //raycasterEl.components.raycaster.updateOriginDirection();
        if (raycasterEl.components.raycaster.data.enabled) {
          const detail = raycasterEl.components.raycaster.getIntersection(this.el);
          if (detail) {
            this.select(raycasterEl);
          }
        }
      }
    }
  },
  getMaskMesh: function () {
    return this.maskMesh;
  },
  getData: function () {
    return this.geometryMap;
  },
  onGeojsonLoaded: function (file) {
    const json = JSON.parse(file);

    const data = this.data;

    this.dataMap = new Map();
    if (data.dataSrc) {
      this.loader.load(data.dataSrc, this.onDataLoaded.bind(this));
    }

    const width = 360; // corresponds to longitude
    const height = 180; // corresponds to positive scaled latitude

    const projectionFunc = d3[data.projection] ? d3[data.projection] : d3GeoProjection[data.projection];
    const projection = projectionFunc().scale(height / Math.PI)
            // http://bl.ocks.org/mbostock/3757119
            .translate([
              width / 2,
              height / 2
            ]);
    const path = d3.geoPath(projection).pointRadius(0.1); // why 0.1?

    var svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

    var isTopojson = json.features === undefined;

    var features;
    if (isTopojson) {
      var topologyObjectName = data.topologyObject;
      if (!data.topologyObject) {
        topologyObjectName = Object.keys(json.objects)[0];
      }
      features = topojson.feature(json, json.objects[topologyObjectName]).features;
    } else {
      features = json.features;
    }

    var paths = svg.append('g').attr('class', 'features');
    paths.selectAll('path')
            .data(features)
            .enter()
            .append('path')
            .attr('d', path).attr('fill', 'none')
            .style('stroke', 'black'); // important for lines!

    this.geometryMap = this.generateLinesMap(svg.selectAll('path'), isTopojson);
    const isPointData = this.geometryMap.size === 0;
    if (isPointData) {
      this.geometryMap = this.generatePointsMap(svg.selectAll('path'));
    }

    svg.remove();

    this.matComponent = this.el.components.material;

    this._selectedFeature = null;
    this.isSelecting = false;

    this.codes = new Map(); // country color codes for selecting
    this.hitScene = new THREE.Scene();
    this.hitCamera = new THREE.PerspectiveCamera(0.001, 1, 0.01, 3000);
    this.hitTexture = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType
    });
    this.hitTexture.generateMipMaps = false;
    this.hitTexture.setSize(100, 100);

    this.shapesMap = new Map();

    const mesh = !isPointData ? this.generateLines(features)
      : (data.pointAs === 'point' ? this.generatePoints() : this.generateBars());

    this.mesh = mesh;

    const group = new THREE.Group();
    this.shapesMap.forEach(function (shape) {
      group.add(shape);
    });

    if (isTopojson || isPointData) {
      this.el.setObject3D('mesh', mesh);
    } else {
      this.el.setObject3D('mesh', group);
    }

    this.maskMesh = this.generateMask(features);

    if (data.featureEventName === 'click') {
      this.el.addEventListener(data.featureEventName, this.select.bind(this));
    }

    this.el.emit(GEOJSON_GENERATED_EVENT, {data: this.geometryMap});
  },
  onDataLoaded: function (file) {
    const data = this.data;

    const contents = data.dataType === 'tsv' ? d3.tsvParse(file) : d3.csvParse(file);

    for (var i = 0; i < contents.length; i++) {
      const content = contents[i];
      this.dataMap.set(content[data.dataKey], content);
    }
  },
  generatePointsMap: function (paths) {
    var map = new Map();

    var pathNodes = paths.nodes();

    for (var i = 0; i < pathNodes.length; i++) {
      const p = pathNodes[i];

      const properties = p.__data__.properties;
      const key = properties[this.data.featureKey];
      const type = p.__data__.geometry.type; // Point, String, Polygon
      // const pointSize = properties[this.data.pointSizeFeature] || 1;

      var segments = p.pathSegList;
      for (var j = 0; j < segments.numberOfItems; j++) {
        var segment = segments.getItem(j);
        if (segment instanceof SVGPathSegMovetoAbs) {
          if (type.includes('Point')) {
            const xy = new THREE.Vector2(segment.x, segment.y);
            map.set(key, {point: xy, properties: properties});
          }
        }
      }
    }

    return map;
  },
  generateLinesMap: function (paths, isTopojson) {
    var map = new Map();

    const pathNodes = paths.nodes();

    pathNodes.forEach((p) => {
      const key = isTopojson ? p.__data__.id : p.__data__.properties[this.data.featureKey];
      const type = p.__data__.geometry.type; // Point, String, Polygon

      if (type.includes('Point')) return;

      const territory = {
        id: key,
        lines: [],
        properties: null
      };
      var line = [];
            // var vertices = line.vertices
      var x,
        y;

            // origin coorindates when closing the path
      var ox,
        oy;
      var px,
        py;

      var segments = p.pathSegList;
      for (var i = 0; i < segments.numberOfItems; i++) {
        var segment = segments.getItem(i);

        if (this.data.omitBoundingBox &&
              (
              (segment.x >= 359.9 || segment.x <= 0.1) ||
              (segment.y >= 179.9 || segment.y <= 0.1)
              ) && segment instanceof SVGPathSegLinetoAbs) {
                    // some GeoJSON files have a border around them
                    // to avoid having a frame aroudn the plane we omit
                    // the top-, left, right-, bottomost lines
                    // console.log(segment.x + ' ' + segment.y)
        } else {
          if (segment instanceof SVGPathSegMovetoAbs) {
            x = segment.x;
            y = segment.y;
            ox = x;
            oy = y;

            territory.lines.push(line);
            line = [];
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoRel) {
            x = px + segment.x;
            y = py + segment.y;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoAbs) {
            x = segment.x;
            y = segment.y;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoVerticalRel) {
            x = px;
            y = py + segment.y;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoHorizontalRel) {
            x = px + segment.x;
            y = py;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoHorizontalAbs) {
            x = segment.x;
            y = py;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoVerticalAbs) {
            x = px;
            y = segment.y;
            line.push(new THREE.Vector2(x, y));
          }

          if (segment instanceof SVGPathSegClosePath || i + 1 === segments.numberOfItems) {
            x = ox;
            y = oy;
            if (type.includes('Polygon') && isTopojson) { // do not close line geometries, just polygons
                            // close the segment only if it is a topojson
              line.push(new THREE.Vector2(x, y));
            }
            territory.lines.push(line);
            line = [];
          }

          px = x;
          py = y;
        }
      }

      territory.lines = territory.lines.filter(function (l) {
        return l.length > 0;
      });

      if (!isTopojson) {
        territory.properties = p.__data__.properties;
      }

      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(territory);
    });

    return map;
  },
  generatePoints: function (features) {
    const mapData = this.geometryMap;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(mapData.size * 3);

    // TODO? if data defines size or color
    // const sizes = new Float32Array(mapData.size);
    // const colors = new Float32Array(points)

    var i = 0;
    mapData.forEach((entry, idx) => {
      const pos = this.latLngToVec3(entry.point.y, entry.point.x);

      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;

      entry.position = new THREE.Vector3().copy(pos);

      // sizes[i] = 0.01;

      i += 1;
    });

    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    // geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));
    // does not work or?
    geometry.computeBoundingSphere();

    const material = new THREE.PointsMaterial({
      size: this.data.pointScale,
      sizeAttenuation: true,
      transparent: this.matComponent.data.transparent,
      color: this.matComponent.data.color,
      opacity: this.matComponent.data.opacity
    });

    const mesh = new THREE.Points(
            geometry,
            material
        );

    return mesh;
  },
  generateBars: function () {
    const mapData = this.geometryMap;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(mapData.size * 3 * 2);

    const tmp = new THREE.Vector3();
    var i = 0;
    mapData.forEach((entry, idx) => {
      const pos = this.latLngToVec3(entry.point.y, entry.point.x);
      positions[i * 6] = pos.x;
      positions[i * 6 + 1] = pos.y;
      positions[i * 6 + 2] = pos.z;
      entry.position = new THREE.Vector3().copy(pos);

      var pointSize = entry.properties[this.data.pointSizeFeature] || 1;

      if (this.data.pointScaling === 'exponential') {
        pointSize = Math.pow(pointSize, 2);
      }

      const scalingFactor = pointSize * this.data.pointScale;
      tmp.copy(pos).multiplyScalar(1 + scalingFactor);
      positions[ i * 6 + 3 ] = tmp.x;
      positions[ i * 6 + 4 ] = tmp.y;
      positions[ i * 6 + 5 ] = tmp.z;
      entry.endPosition = new THREE.Vector3().copy(tmp);

      i += 1;
    });

    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.computeBoundingSphere();

    const material = new THREE.LineBasicMaterial({
      transparent: this.matComponent.data.transparent,
      color: this.matComponent.data.color,
      opacity: this.matComponent.data.opacity,
      linewidth: this.data.lineWidth
    });

    const mesh = new THREE.LineSegments(
      geometry,
      material
    );
    // mesh.frustumCulled = false;

    return mesh;
  },
  generateLines: function (features) {
    const data = this.data;

    const mapData = this.geometryMap;

    var min = 10000000;
    var max = -10000000;

    var lines = 0;
    mapData.forEach(function (entry, idx) {
      for (var i = 0; i < entry.length; i++) {
        const path = entry[i];
        for (var j = 0; j < path.lines.length; j++) {
          lines += path.lines[j].length;
        }
      }
    });

    var lineGeometry = new THREE.BufferGeometry();
    var positions = new Float32Array(lines * 2 * 3);
    var gptr = 0;

    const defaultPartMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      linewidth: 2,
      opacity: this.matComponent.data.opacity,
      color: 0xff0000,
      side: THREE.DoubleSide
    });

    mapData.forEach((entry, id) => {
      var parts = [];

      entry.forEach( (path) => {
        path.lines.forEach((line) => {
          var partPositions = new Float32Array(line.length * 2 * 3);
          var ptr = 0;

          for (var j = 0; j < line.length - 1; j++) {
            var p = line[j];
            if (p.y < min) min = p.y;
            if (p.y > max) max = p.x;

            var res = this.latLngToVec3(p.y, p.x);

            partPositions[ptr] = res.x;
            partPositions[ptr + 1] = res.y;
            partPositions[ptr + 2] = res.z;

            ptr += 3;

            p = line[j + 1];

            res = this.latLngToVec3(p.y, p.x);

            partPositions[ptr] = res.x;
            partPositions[ptr + 1] = res.y;
            partPositions[ptr + 2] = res.z;

            ptr += 3;
          }

          parts.push(partPositions);

          memcpy(partPositions, 0, positions, gptr, partPositions.length);
          gptr += ptr;
        });
      });

      // the positions only of the curent polygon or line
      var partPositions = new Float32Array(parts.reduce((a, b) => {
        return a + b.length;
      }, 0));

      var tPtr = 0;
      parts.forEach(function (p) {
        memcpy(p, 0, partPositions, tPtr, p.length);
        tPtr += p.length;
      });

      var partGeometry = new THREE.BufferGeometry();
      partGeometry.addAttribute('position', new THREE.BufferAttribute(partPositions, 3));
      partGeometry.computeBoundingSphere();

      var partMaterial = defaultPartMaterial;
      // set simplestyle properties if available

      if (entry[0].properties) {
        const properties = entry[0].properties;
        partMaterial = this._getLineMaterial(properties);
      }

      var mesh = new THREE.LineSegments(partGeometry, partMaterial);
      //mesh.frustumCulled = false;
      mesh.visible = true;

      this.shapesMap.set(entry[0].id, mesh);

      entry.shape = mesh;
    });

    lineGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.computeBoundingSphere();

    const material = this._getLineMaterial();

    const mesh = new THREE.LineSegments(lineGeometry, material);
    //mesh.frustumCulled = false;

    return mesh;
  },
  _getLineWidthOr: function (properties, defaultWidth) {
    return properties['stroke-width'] || defaultWidth;
  },
  _getOpacityOr: function (properties, defaultOpacity) {
    return properties['stroke-opacity'] || defaultOpacity;
  },
  _getStrokeColorOr: function (properties, defaultColor) {
    if (properties.stroke) {
      const color = properties['stroke'];
      return new THREE.Color(color);
    }
    return defaultColor;
  },
  _getLineMaterial: function (properties) {
    if (!properties) {
      properties = {};
    }
    return new THREE.LineBasicMaterial({
      transparent: this.matComponent.data.transparent || false,
      linewidth: this._getLineWidthOr(properties, this.data.lineWidth),
      opacity: this._getOpacityOr(properties, this.matComponent.data.opacity),
      color: this._getStrokeColorOr(properties, this.matComponent.data.color),
      side: this.matComponent.data.side || THREE.DoubleSide
    });
  },

  latLngToVec3: function (lat, lon) {
    const geomComponent = this.el.components.geometry;
    if (geomComponent.data.primitive === 'sphere') {
      return this._sphericalLatLngToVec3(lat, lon);
    } else if (geomComponent.data.primitive === 'plane') {
      return this._planarLatLngToVec3(lat, lon);
    }
  },
  _planarLatLngToVec3: function (lat, lon) {
    const geomComponent = this.el.components.geometry;

    const width = geomComponent.data.width;
    const height = geomComponent.data.height;

    return new THREE.Vector3(
            lon / 360 * width - (width / 2),
            -lat / 180 * height + (height / 2),
            0);
  },
  _sphericalLatLngToVec3: function (lat, lon) {
        // lat = Math.max(175, Math.min(5, lat))
        // lat = Math.min(160, lat)

    const geomComponent = this.el.components.geometry;
    const radius = geomComponent.data.radius;

    const phi = lat * Math.PI / 180;
    const theta = lon * Math.PI / 180;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  },
  selectFeature: function (feature, point) {
    const data = this.data;
    this.isSelecting = false;
    if (!feature) return;

    var selected = null;
    var featureKey = Object.keys(feature.properties).length === 0 ? feature[data.featureKey] : feature.properties[data.featureKey];

    if (this.dataMap.size > 0) {
      selected = this.dataMap.get(featureKey);
    } else {
      selected = feature.properties;
    }

    var shape = this.shapesMap.get(featureKey);

    if (!this._selectedFeature ||
            (this._selectedFeature[data.featureKey] || this._selectedFeature[data.dataKey]) !==
                (selected[data.featureKey] || selected[data.dataKey])) {
      this._selectedFeature = selected;

      this.el.emit(FEATURE_SELECTED_EVENT, {feature: selected, mesh: shape, point: point});
    }
  },
  hitTest: function (obj) {
    const pixelBuffer = new Uint8Array(4);

    var renderer = this.el.sceneEl.renderer;

    this.hitCamera.position.copy(obj.position);
    this.hitCamera.rotation.copy(obj.rotation);

    const isVREnabled = renderer.vr.enabled;
    renderer.vr.enabled = false;
    renderer.setRenderTarget(this.hitTexture);
    renderer.clear();
    renderer.render(this.hitScene, this.hitCamera);
    renderer.setRenderTarget(null);
    renderer.vr.enabled = isVREnabled;

    return new Promise((resolve, reject) => {
      var res = null;

      renderer.readRenderTargetPixels(this.hitTexture, 0, 0, 1, 1, pixelBuffer);
      if (pixelBuffer[0] === 255) { // encoding test
        var multiplicator = pixelBuffer[1];
        var number = pixelBuffer[2];

        var code = multiplicator * 255 + number;
        res = this.codes.get(code);
      }
      resolve(res);
    });
  },
  select: (function () {
    const up = new THREE.Vector3(0,1,0);
    const dummy = new THREE.Object3D();
    return function (raycasterEl) {
      if (this.isSelecting || !this.maskMesh) return;

      if (!raycasterEl || !raycasterEl.components) {
        raycasterEl = document.querySelector('[raycaster]');
      }
      const raycaster = raycasterEl.components.raycaster.raycaster;

      const intersections = raycaster.intersectObject(this.maskMesh);
      if (intersections.length > 0) {
        this.isSelecting = true;
        const point = intersections[0].point.clone();

        // needed if its a sphere
        if (this.el.components.geometry.data.primitive === 'sphere') {
           this.el.object3D.getWorldPosition(dummy.position);
        } 
        dummy.lookAt(point);
        dummy.rotation.y += Math.PI;

        this.hitTest(dummy).then((res) => {
          point.applyAxisAngle(up, Math.PI/2)
          this.selectFeature(res, point);
        });
      }
            // entity.components.raycaster.refreshObjects()
    };
  }()),
  generateMask: function (features) {
    const CANVAS_DATA_FACTOR = 10;

    const width = 512 * 2;
    const height = 256 * 2;

    const projection = d3.geoEquirectangular()
            .scale(height / Math.PI)
            .translate([width / 2, height / 2])
            .rotate([0, 0, 0]);

    const path = d3.geoPath(projection);

    var canvas = d3
            .select('body')
            .append('canvas')
            .attr('id', 'mask-canvas')
            .attr('image-rendering', 'pixelated')
            .attr('width', width + 'px')
            .attr('height', height + 'px');
    const ctx = d3.select('#mask-canvas').node().getContext('2d');
    const ctxPath = path.context(ctx);

    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = 1;

    for (var i = 0; i < features.length; i++) {
      const feature = features[i];
      var multiplicator = Math.floor(i / 255);
      var number = i % 255;

      this.codes.set(multiplicator * 255 + number, feature); // feature.id

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'rgb(255,' + multiplicator + ',' + number + ')';
      ctx.strokeStyle = 'rgb(255,' + multiplicator + ',' + number + ')';
      ctx.lineWidth = CANVAS_DATA_FACTOR * this.data.raycasterAccuracy;
      ctxPath(feature);
      if (feature.geometry.type.includes('LineString')) {
        ctx.stroke();
      } else if (feature.geometry.type.includes('Polygon')) {
        ctx.fill();
      } else if (feature.geometry.type.includes('Point')) {
        // TODO how to adjust point size according to raycaster accuracy?
        ctx.fill();
      }
      ctx.restore();
    }

    //console.log(canvas.node().toDataURL())
    const texture = new THREE.CanvasTexture(canvas.node());

    const geomComponent = this.el.components.geometry;

    const mesh = new THREE.Mesh(
            geomComponent.geometry.clone(),
            new THREE.MeshBasicMaterial({
              map: texture,
              side: THREE.DoubleSide,
              transparent: true,
              opacity: 1
            })
        );

    this.el.object3D.getWorldScale(mesh.scale);
    this.el.object3D.getWorldQuaternion(mesh.quaternion);
    this.el.object3D.getWorldPosition(mesh.position);

    this.hitScene.add(mesh);

    canvas.remove();
    return mesh;
  }

});

function memcpy (src, srcOffset, dst, dstOffset, length) {
  var i;
  src = src.subarray || src.slice ? src : src.buffer;
  dst = dst.subarray || dst.slice ? dst : dst.buffer;
  src = srcOffset ? src.subarray ? src.subarray(srcOffset, length && srcOffset + length) : src.slice(srcOffset, length && srcOffset + length) : src;
  if (dst.set) {
    dst.set(src, dstOffset);
  } else {
    for (i = 0; i < src.length; i++) {
      dst[i + dstOffset] = src[i];
    }
  }
  return dst;
}

const CANVAS_GENERATED_EVENT = 'geojson-texture-generated';

AFRAME.registerComponent('geojson-texture', {
  //dependencies: ['material'],
  schema: {
    src: {
      type: 'asset'
    },
    topologyObject: {
      default: ''
    },
    canvas: {
      default: '',
      type: 'selector'
    },
    projection: {
      type: 'string',
      default: 'geoEquirectangular'
    },
    fillColor: {
      default: '#fff',
      type: 'color'
    },
    lineColor: {
      default: '#000',
      type: 'color'
    },
    lineWidth: {
      default: 1
    },
    fillOpacity: {
      default: 1
    },
    lineOpacity: {
      default: 1
    },
    center: {
      type: 'vec2'
    },
    rotation: {
      type: 'vec2'
    }
  },

  init: function () {
    this.loader = new THREE.FileLoader();
    this.ctx = this.data.canvas.getContext('2d');
  },
  update: function (oldData) {
    const data = this.data;

    if (AFRAME.utils.deepEqual(oldData, data)) {
      return;
    }

    if (oldData.lineColor !== data.lineColor) {
      this._lineColor = this._getColorStyle(new THREE.Color(data.lineColor), data.lineOpacity);
    }
    if (oldData.fillColor !== data.fillColor) {
      this._fillColor = this._getColorStyle(new THREE.Color(data.fillColor), data.fillOpacity);
    }

    if (oldData.projection !== data.projection) {
      const width = data.canvas.width;
      const height = data.canvas.height;
      
      const projectionFunc = d3[data.projection] ? d3[data.projection] : d3GeoProjection[data.projection];
      this.projection = projectionFunc()
                .scale(height / Math.PI)
                .translate([width / 2, height / 2]);
      this.mapPath = d3.geoPath(this.projection);
    }
    if (oldData.rotation !== data.rotation) {
      this.projection.rotate(this._vec2ToArray(data.rotation));
    }
    if (oldData.center !== data.center) {
      this.projection.center(this._vec2ToArray(data.center));
    }

    if (data.src && data.src !== oldData.src) {
      this.loader.load(data.src, this.onGeojsonLoaded.bind(this));
    } else {
      this.redraw();
      this.el.emit(CANVAS_GENERATED_EVENT);
    }
  },
  _vec2ToArray: function (vec2) {
    return [vec2.x, vec2.y];
  },
  onGeojsonLoaded: function (file) {
    const json = JSON.parse(file);

    var data = this.data;

    var isTopojson = json.features === undefined;
    if (isTopojson) {
      var topologyObjectName = data.topologyObject;
      if (!data.topologyObject) {
        topologyObjectName = Object.keys(json.objects)[0];
      }
      this.features = topojson.feature(json, json.objects[topologyObjectName]).features;
    } else {
      this.features = json.features;
    }

    this.redraw();
    this.el.emit(CANVAS_GENERATED_EVENT);
  },
  getStrokeColorOr: function (feature, defaultColor) {
    if (feature.properties && feature.properties.stroke) {
      const color = feature.properties.stroke;
      const opacity = feature.properties['stroke-opacity'] || 1.0;

      return this._getColorStyle(new THREE.Color(color), opacity);
    }
    return defaultColor;
  },
  getFillColorOr: function (feature, defaultColor) {
    if (feature.properties && feature.properties.fill) {
      const color = feature.properties.fill;
      const opacity = feature.properties['fill-opacity'] || 0.6;

      return this._getColorStyle(new THREE.Color(color), opacity);
    }
    return defaultColor;
  },
  getLineWidthOr: function (feature, defaultWidth) {
    return (feature.properties && feature.properties['stroke-width']) || defaultWidth;
  },
  _getColorStyle: function (color, opacity) {
    const r = (color.r * 255) | 0;
    const g = (color.g * 255) | 0;
    const b = (color.b * 255) | 0;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
  },
  redraw: function () {
    if (!this.features) return;

    const data = this.data;
    var context = this.ctx;
    var contextPath = this.mapPath.context(context);

    context.clearRect(0, 0, data.canvas.width, data.canvas.height);
    for (let i = 0; i < this.features.length; i++) {
      const feature = this.features[i];
      const strokeColor = this.getStrokeColorOr(feature, this._lineColor);
      const fillColor = this.getFillColorOr(feature, this._fillColor);
      const lineWidth = this.getLineWidthOr(feature, data.lineWidth);

      context.beginPath();
      contextPath(feature);
      context.lineWidth = lineWidth;
      context.strokeStyle = strokeColor;
      context.stroke();
      context.fillStyle = fillColor;
      context.fill();
    }
  },
  getProjection: function () {
    return this.projection;
  }
});

