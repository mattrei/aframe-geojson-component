/* globals AFRAME, THREE, SVGPathSegMovetoAbs, SVGPathSegLinetoRel, SVGPathSegLinetoVerticalRel, SVGPathSegLinetoHorizontalRel, SVGPathSegLinetoHorizontalAbs, SVGPathSegLinetoVerticalAbs, SVGPathSegClosePath, SVGPathSegLinetoAbs */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

require('pathseg'); // polyfill

var d3 = require('d3');

var topojson = require('topojson-client');

const FEATURE_SELECTED_EVENT = 'geojson-feature-selected';
const GEOJSON_GENERATED_EVENT = 'geojson-loaded';

AFRAME.registerComponent('geojson', {
  schema: {
    src: {
      type: 'asset'
    },
    featureKey: {
      default: 'id'
    },
        // the data that holds the data; if not set then it is supposed to be already included
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
    // setting the resolution of the data raycasting resolution; set lower if data is very dense; set higher if you have not much data
    raycastResolution: {
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
    // TODO
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
    }
  },

  init: function () {
    this.loader = new THREE.FileLoader();
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
  },
  tick: function (time, delta) {
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

    const projection = d3[data.projection]().scale(height / Math.PI)
            // http://bl.ocks.org/mbostock/3757119
            .translate([
              width / 2,
              height / 2
            ]);
    const path = d3.geoPath(projection).pointRadius(0.1);

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
            /* .attr('id', d => isTopojson
            ? d.id
            : d.properties[data.featureProperty])*/
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
    this.hitTexture = new THREE.WebGLRenderTarget(1, 1);
    this.hitTexture.texture.minFilter = THREE.NearestFilter;
    this.hitTexture.texture.magFilter = THREE.NearestFilter;
    this.hitTexture.generateMipMaps = false;
    this.hitTexture.setSize(100, 100);

    this.shapesMap = new Map();
    const mesh = !isPointData ? this.generateLines() :
      (data.pointAs === 'point' ? this.generatePoints() : this.generateBars());

    this.el.setObject3D('mesh', mesh);

    this.maskMesh = this.generateMask(features);

    if (data.featureEventName) {
      this.el.addEventListener(data.featureEventName, this.select.bind(this));
    }

    this.el.emit(GEOJSON_GENERATED_EVENT);
  },
  onDataLoaded: function (file) {
    var self = this;
    const data = this.data;

    const contents = data.dataType === 'tsv' ? d3.tsvParse(file) : d3.csvParse(file);

    contents.forEach(function (e) {
      self.dataMap.set(e[data.dataKey], e);
    });
  },
  generatePointsMap: function (paths) {
    var self = this;

    var map = new Map();

    var pathNodes = paths.nodes();

    pathNodes.forEach(function (p) {
      const properties = p.__data__.properties;
      const key = properties[self.data.featureKey];
      const type = p.__data__.geometry.type; // Point, String, Polygon
      // const pointSize = properties[self.data.pointSizeFeature] || 1;

      var segments = p.pathSegList;
      for (var i = 0; i < segments.numberOfItems; i++) {
        var segment = segments.getItem(i);
        if (segment instanceof SVGPathSegMovetoAbs) {
          if (type.includes('Point')) {
            const xy = new THREE.Vector2(segment.x, segment.y);
            map.set(key, {point: xy, properties});
          }
        }
      }
    });

    return map;
  },
  generateLinesMap: function (paths, isTopojson) {
    var self = this;
    var map = new Map();

    var pathNodes = paths.nodes();

    pathNodes.forEach(function (p) {
      const key = isTopojson ? p.__data__.id : p.__data__.properties[self.data.featureKey];
      const type = p.__data__.geometry.type; // Point, String, Polygon

      if (type.includes('Point')) return;

      const territory = {
        id: key,
        lines: []
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

        if (((segment.x >= 359.9 || segment.x <= 0.1) || (segment.y === 180 || segment.y === 0)) && segment instanceof SVGPathSegLinetoAbs) {
                    // some GeoJSON files have a border around them
                    // to avoid having a frame aroudn the plane we omit
                    // the top-, left, right-, bottomost lines
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
            // countries.push( territory )

      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(territory);
    });

    return map;
  },
  generatePoints: function (features) {
    var self = this;

    const mapData = this.geometryMap;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(mapData.size * 3);

    // TODO? if data defines size or color
    // const sizes = new Float32Array(mapData.size);
    // const colors = new Float32Array(points)

    var i = 0;
    mapData.forEach(function (entry, idx) {
      const pos = self.latLngToVec3(entry.point.y, entry.point.x);

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
    var self = this;

    const mapData = this.geometryMap;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(mapData.size * 3 * 2);

    const tmp = new THREE.Vector3();
    var i = 0;
    mapData.forEach(function (entry, idx) {
      const pos = self.latLngToVec3(entry.point.y, entry.point.x);
      positions[i * 6] = pos.x;
      positions[i * 6 + 1] = pos.y;
      positions[i * 6 + 2] = pos.z;
      entry.position = new THREE.Vector3().copy(pos);

      const pointSize = entry.properties[self.data.pointSizeFeature] || 1;

      const scalingFactor = pointSize * self.data.pointScale;
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
    var self = this;
    const data = this.data;

    const mapData = this.geometryMap;

    var min = 10000000;
    var max = -10000000;

    var lines = 0;
    mapData.forEach(function (entry) {
      entry.forEach(function (path) {
        path.lines.forEach(function (line) {
          lines += line.length;
        });
      });
    });

    var lineGeometry = new THREE.BufferGeometry();
    var positions = new Float32Array(lines * 2 * 3);
    var gptr = 0;

    const shapesMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      linewidth: 5,
      opacity: this.matComponent.data.opacity,
      color: 0xff0000,
      side: THREE.DoubleSide
    });

    mapData.forEach(function (entry, id) {
      var parts = [];

      entry.forEach(function (path) {
        path.lines.forEach(function (line) {
          var partPositions = new Float32Array(line.length * 2 * 3);
          var ptr = 0;

          for (var j = 0; j < line.length - 1; j++) {
            var p = line[j];
            if (p.y < min) min = p.y;
            if (p.y > max) max = p.x;

            var res = self.latLngToVec3(p.y, p.x);

            partPositions[ptr] = res.x;
            partPositions[ptr + 1] = res.y;
            partPositions[ptr + 2] = res.z;

            ptr += 3;

            p = line[j + 1];

            res = self.latLngToVec3(p.y, p.x);

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
      var partPositions = new Float32Array(parts.reduce(function (a, b) {
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

      var mesh = new THREE.LineSegments(partGeometry, shapesMaterial);
      mesh.fustrumCulled = false;
      mesh.visible = true;

      self.shapesMap.set(entry[0].id, mesh);

      entry.shape = mesh;
    });

    lineGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.computeBoundingSphere();

    const material = new THREE.LineBasicMaterial({
      transparent: this.matComponent.data.transparent,
      linewidth: data.lineWidth,
      opacity: this.matComponent.data.opacity,
      color: this.matComponent.data.color,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.LineSegments(lineGeometry, material);
    mesh.fustrumCulled = false;

    return mesh;
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

    return new THREE.Vector3(
            lon / 360 * geomComponent.data.width, -lat / 180 * geomComponent.data.height,
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
  selectFeature: function (feature) {
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
            (this._selectedFeature[data.featureKey] || this._selectedFeature[data.dataKey] !==
                (selected[data.featureKey] || selected[data.dataKey]))) {
      this._selectedFeature = selected;
      this.el.emit(FEATURE_SELECTED_EVENT, {feature: selected, mesh: shape});
    }
  },
  hitTest: function (obj) {
    var self = this;
    const pixelBuffer = new Uint8Array(4);

    var renderer = this.el.sceneEl.renderer;

    this.hitCamera.position.copy(obj.position);
    this.hitCamera.rotation.copy(obj.rotation);
    renderer.render(this.hitScene, this.hitCamera, this.hitTexture);

    return new Promise(function (resolve, reject) {
      var res = null;

      renderer.readRenderTargetPixels(self.hitTexture, 0, 0, 1, 1, pixelBuffer);
      if (pixelBuffer[0] === 255) { // encoding test
        var multiplicator = pixelBuffer[1];
        var number = pixelBuffer[2];

        var code = multiplicator * 255 + number;
        res = self.codes.get(code);
      }
      resolve(res);
    });
  },
  select: (function (evt) {
    const dummy = new THREE.Object3D();
    return function () {
      var self = this;
      if (this.isSelecting) return;

      var entity = document.querySelector('[raycaster]');
      var raycaster = entity.components.raycaster.raycaster;

      var intersections = raycaster.intersectObject(this.maskMesh);
      if (intersections.length > 0) {
        this.isSelecting = true;
        var p = intersections[0].point;

        dummy.lookAt(p);
        dummy.rotation.y += Math.PI;

        this.hitTest(dummy).then(function (res) {
          self.selectFeature(res);
        });
      }
            // entity.components.raycaster.refreshObjects()
    };
  }()),
  generateMask: function (features) {
    var self = this;

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

    features.forEach(function (feature, i) {
      var multiplicator = Math.floor(i / 255);
      var number = i % 255;

      self.codes.set(multiplicator * 255 + number, feature); // feature.id

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'rgb(255,' + multiplicator + ',' + number + ')';
      ctx.strokeStyle = 'rgb(255,' + multiplicator + ',' + number + ')';
      ctx.lineWidth = CANVAS_DATA_FACTOR * self.data.raycastResolution;
      ctxPath(feature);
      if (feature.geometry.type.includes('LineString')) {
        ctx.stroke();
      } else if (feature.geometry.type.includes('Polygon')) {
        ctx.fill();
      } else if (feature.geometry.type.includes('Point')) {
        ctx.fill();
      }
      ctx.restore();
    });

    // console.log(canvas.node().toDataURL())
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

    var scale = this.el.object3D.getWorldScale();
    mesh.scale.x = scale.x;
    mesh.scale.y = scale.y;
    mesh.scale.z = scale.z;

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
