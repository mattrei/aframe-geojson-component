/* globals AFRAME, THREE, SVGPathSegMovetoAbs, SVGPathSegLinetoRel, SVGPathSegLinetoVerticalRel, SVGPathSegLinetoHorizontalRel, SVGPathSegLinetoHorizontalAbs, SVGPathSegLinetoVerticalAbs, SVGPathSegClosePath, SVGPathSegLinetoAbs */

require('pathseg'); // polyfill

var d3 = require('d3');

var topojson = require('topojson-client');

const FEATURE_SELECTED_EVENT = 'geojson-feature-selected';
const GEOJSON_GENERATED_EVENT = 'geojson-generated';

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
    lineWidth: {
      default: 1
    },
    // setting the resolution of the data raycasting resolution; set lower if data is very dense; set higher if you have not much data
    raycastResolution: {
      default: 1,
      type: 'int'
    },
    projection: {
      default: 'geoEquirectangular'
    }
  },

  init: function () {
    this.loader = new THREE.FileLoader();
  },
  update: function (oldData) {
    const src = this.data.src;
    if (!src || src === oldData.src) { return; }

    this.loader.load(src, this.onGeojsonLoaded.bind(this));
  },
  onGeojsonLoaded: function (file) {
    const json = JSON.parse(file);

    const data = this.data;
    const el = this.el;

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
      if (data.topologyObject !== '') {
        topologyObjectName = Object.keys(json.objects)[0];
      }
      features = topojson.feature(json, json.objects[topologyObjectName]).features;
    } else {
      features = json.features;
    }

    var paths = svg.append('g').attr('class', 'features');
    paths.selectAll('path').data(features).enter().append('path')
      /*.attr('id', d => isTopojson
      ? d.id
      : d.properties[data.featureProperty])*/
      .attr('d', path).attr('fill', 'none')
      .style('stroke', 'black'); // important for lines!

    var mapData = this.generate(svg.selectAll('path'));

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

    this.dataMap = new Map();
    if (data.dataSrc) {
      this.loader.load(data.dataSrc, this.onDataLoaded.bind(this));
    }

    var pointsMesh = this.generatePoints(mapData);
    var linesMesh = this.generateLines(mapData);

    this.maskMesh = this.generateMask(features);

    var layer = new THREE.Object3D();
    layer.add(pointsMesh);
    layer.add(linesMesh);

    this.el.setObject3D('mesh', layer);
    //this.el.addEventListener('click', this.select.bind(this))
    this.el.addEventListener('raycaster-intersected', this.select.bind(this));

    this.el.emit(GEOJSON_GENERATED_EVENT);
  },
  onDataLoaded: function (file) {

    const data = this.data

    const contents = data.dataType === 'tsv' ? d3.tsvParse(file) : d3.csvParse(file)

    contents.forEach(e => {
        this.dataMap.set(e[data.dataKey], e);
    });

  },
  generate: function (paths) {
    var map = new Map();

    var pathNodes = paths.nodes();

    pathNodes.forEach(p => {
      var key = p.__data__.properties[this.data.featureKey]; // p.id
      var type = p.__data__.geometry.type; // Point, String, Polygon

      var territory = {
        id: key,
        lines: [],
        points: []
      };
      var line = [];
      // var vertices = line.vertices
      var x,
        y;
      var ox,
        oy;
      var px,
        py;

      var segments = p.pathSegList;
      for (var i = 0; i < segments.numberOfItems; i++) {
        var segment = segments.getItem(i);

        if (((segment.x >= 359 || segment.x <= 1) || (segment.y === 180 || segment.y === 0)) && segment instanceof SVGPathSegLinetoAbs) {
          // console.log(segment)
          // some GEOJSON files have a border around them
          // to avoid having a frame aroudn the plane we omit
          // the top-, left, right-, bottomost lines
        } else {
          if (segment instanceof SVGPathSegMovetoAbs) {
            x = segment.x;
            y = segment.y;
            ox = x;
            oy = y;

            if (type.includes('Point')) {
              territory.points.push(new THREE.Vector2(x, y));
            } else {
              // add line
              territory.lines.push(line);
              line = [];
              line.push(new THREE.Vector2(x, y));
            }
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
          if (segment instanceof SVGPathSegClosePath || i + 1 === segments.numberOfItems) { // Lines are not closed
            // x = ox
            // y = oy
            // line.push( new THREE.Vector2( x, y ) )
            // add line
            territory.lines.push(line);
            line = [];
          }

          px = x;
          py = y;
        }
      }

      territory.lines = territory.lines.filter((l) => {
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
  generatePoints: function (mapData) {
    const data = this.data;

    var points = 0;
    mapData.forEach(territory => {
      territory.forEach(path => {
        points += path.points.length;
      });
    });

    const pointsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(points * 3);
    // TODO
    // const sizes = new Float32Array(points)
    // const colors = new Float32Array(points)

    var ptr = 0;
    mapData.forEach((territory, id) => {
      territory.forEach(path => {
        path.points.forEach(point => {
          var res = this.latLngToVec3(point.y, point.x);

          positions[ptr] = res.x;
          positions[ptr + 1] = res.y;
          positions[ptr + 2] = res.z;
          ptr += 3;
        });
      });
    });

    pointsGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.computeBoundingSphere();

    let pointsMaterial = new THREE.PointsMaterial({
      size: 0.02,
      sizeAttenuation: true,
      transparent: this.matComponent.data.transparent,
      color: this.matComponent.data.color,
      opacity: this.matComponent.data.opacity
    });

    let pointsMesh = new THREE.Points(
      pointsGeometry,
      pointsMaterial
    );

    return pointsMesh;
  },
  generateLines: function (mapData) {
    const data = this.data;

    var layer = new THREE.Object3D();

    var min = 10000000,
      max = -10000000;

    var lines = 0;
    mapData.forEach((territory, id) => {
      territory.forEach(path => {
        path.lines.forEach(line => {
          lines += line.length;
        });
      });
    });

    var lineGeometry = new THREE.BufferGeometry();
    var positions = new Float32Array(lines * 2 * 3);
    var gptr = 0;

    const shapesMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      linewidth: 2,
      opacity: this.matComponent.data.opacity,
      color: 0xff0000
    });

    mapData.forEach((territory, id) => {
      var territoryGeometry = new THREE.BufferGeometry();
      var parts = [];

      territory.forEach(path => {
        path.lines.forEach(line => {
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

            var p = line[j + 1];

            var res = this.latLngToVec3(p.y, p.x);

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

      var partPositions = new Float32Array(parts.reduce((a, b) => a + b.length, 0));

      var tPtr = 0;
      parts.forEach(p => {
        memcpy(p, 0, partPositions, tPtr, p.length);
        tPtr += p.length;
      });

      var partGeometry = new THREE.BufferGeometry();
      partGeometry.addAttribute('position', new THREE.BufferAttribute(partPositions, 3));
      partGeometry.computeBoundingSphere();

      var mesh = new THREE.LineSegments(partGeometry, shapesMaterial);
      mesh.fustrumCulled = false;
      mesh.visible = false;

      territory.shape = mesh;
    });

    lineGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.computeBoundingSphere();

    const bordersMaterial = new THREE.LineBasicMaterial({
      transparent: this.matComponent.data.transparent,
      linewidth: data.lineWidth,
      opacity: this.matComponent.data.opacity,
      color: this.matComponent.data.color,
      side: THREE.DoubleSide
    });

    var bordersMesh = new THREE.LineSegments(lineGeometry, bordersMaterial);
    bordersMesh.fustrumCulled = false;

    layer.add(bordersMesh);
    return layer;
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
      lon / 360 * geomComponent.data.width,
      -lat / 180 * geomComponent.data.height, 
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

    const data = this.data
    console.log(feature)

    this.isSelecting = false;
    if (!feature) return;

    var selected = null;
    if (this.dataMap.size > 0) {
      selected = this.dataMap.get(feature.id);
    } else {
      selected = feature.properties;
    }

    if (!this._selectedFeature ||
      (this._selectedFeature[data.featureKey] || this._selectedFeature[data.dataKey] 
        !== (selected[data.featureKey] || selected[data.dataKey]))) {

      this._selectedFeature = selected;
      this.el.emit(FEATURE_SELECTED_EVENT, selected);
    }
  },
  hitTest: function (obj) {
    const pixelBuffer = new Uint8Array(4);

    var renderer = this.el.sceneEl.renderer;

    this.hitCamera.position.copy(obj.position);
    this.hitCamera.rotation.copy(obj.rotation);
    renderer.render(this.hitScene, this.hitCamera, this.hitTexture);

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
  select: (function (evt) {
    var dummy = new THREE.Object3D();

    return function () {
      if (this.isSelecting) return;

      var entity = document.querySelector('[raycaster]');
      var raycaster = entity.components.raycaster.raycaster;

      var intersections = raycaster.intersectObject(this.maskMesh);
      console.log(this.maskMesh)
      console.log(intersections)
      if (intersections.length > 0) {
        console.log("Inter")
        this.isSelecting = true;
        var p = intersections[0].point;

        dummy.lookAt(p);
        dummy.rotation.y += Math.PI

        
        this.hitTest(dummy).then(res => this.selectFeature(res));
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
      .attr('width', `${width}px`)
      .attr('height', `${height}px`);
    const ctx = d3.select('#mask-canvas').node().getContext('2d');
    const ctxPath = path.context(ctx);

    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = 1;

    features.forEach((feature, i) => {
      var multiplicator = Math.floor(i / 255);
      var number = i % 255;

      this.codes.set(multiplicator * 255 + number, feature); // feature.id

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = `rgb(255,${multiplicator},${number})`;
      ctx.strokeStyle = `rgb(255,${multiplicator},${number})`;
      ctx.lineWidth = CANVAS_DATA_FACTOR * this.data.raycastResolution;
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

    //console.log(canvas.node().toDataURL())
    const texture = new THREE.CanvasTexture(canvas.node());

    const geomComponent = this.el.components.geometry;

    const radius = geomComponent.data.radius;
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
    mesh.scale.y = scale.y ; // was minus
    mesh.scale.z = scale.z;

    //console.log(mesh)

    this.hitScene.add(mesh);

    canvas.remove();
    return mesh;
  }

});

function memcpy (src, srcOffset, dst, dstOffset, length) {
  var i;
  src = src.subarray || src.slice ? src : src.buffer;
  dst = dst.subarray || dst.slice ? dst : dst.buffer;
  src = srcOffset ? src.subarray ?
    src.subarray(srcOffset, length && srcOffset + length) :
    src.slice(srcOffset, length && srcOffset + length) : src;
  if (dst.set) {
    dst.set(src, dstOffset);
  } else {
    for (i = 0; i < src.length; i++) {
      dst[i + dstOffset] = src[i];
    }
  }
  return dst;
}
