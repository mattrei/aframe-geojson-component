/* globals AFRAME, THREE */

var d3 = require('d3');
var topojson = require('topojson-client');

const PI_2 = Math.PI / 2;

const CANVAS_GENERATED_EVENT = 'geojson-canvas-generated';

AFRAME.registerComponent('geojson-canvas', {
  dependencies: ['material'],
  schema: {
    src: {
      type: 'asset'
    },
    canvas: {
      default: '',
      type: 'selector'
    },
    projection: {
      type: 'string',
      default: 'geoEquirectangular '
    },
    fillColor: {
      default: '#fff',
      type: 'color'
    },
    lineColor: {
      default: '#fff',
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
      default: [0, 0],
      type: 'array'
    },
    rotation: {
      default: [0, 0],
      type: 'array'
    },
    topologyObject: {
      default: undefined
    }
  },

  init: function () {
    this.loader = new THREE.FileLoader();
  },
  update: function (oldData) {
    var data = this.data;

    this._lineColor = this._getColorStyle(new THREE.Color(data.lineColor), data.lineOpacity);
    this._fillColor = this._getColorStyle(new THREE.Color(data.fillColor), data.fillOpacity);

    const width = data.canvas.width;
    const height = data.canvas.height;

    this.projection = d3[data.projection]()
      .scale(height / Math.PI)
      .translate([width / 2, height / 2]);
    this.mapPath = d3.geoPath(this.projection);
    console.log(data.rotation)
    this.projection.rotate(data.rotation);
    this.projection.center(data.center);

    var src = this.data.src;
    if (!src || src === oldData.src) { return; }

    this.loader.load(data.src, this.onGeojsonLoaded.bind(this));

    this.ctx = data.canvas.getContext('2d');

    this.draw();
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

    this.draw();

    this.el.emit(CANVAS_GENERATED_EVENT, {});
  },
  draw: function () {
    if (!this.features) return;

    const data = this.data;
    var context = this.ctx;
    var contextPath = this.mapPath.context(context);

    context.clearRect(0, 0, data.canvas.width, data.canvas.height);
    this.features.forEach((feature, i) => {
      context.beginPath();
      contextPath(feature);
      context.lineWidth = data.lineWidth;
      context.strokeStyle = this._lineColor;
      context.stroke();
      context.fillStyle = this._fillColor;
      context.fill();
    });
  },
  _getColorStyle: function (color, opacity) {
    return `rgba( ${((color.r * 255) | 0)}, ${((color.g * 255) | 0)},${((color.b * 255) | 0)}, ${opacity})`;
  },
  getProjection: function () {
    return this.projection;
  },
  xyFromLatLon: function (lat, lon) {
    // lat lon are in rad, but d3 needs them in degrees
    // TODO use THREEJS Math.DEG_RAD
    const data = this.data;

    var point = this.projection(this._degFromRad([lon, lat]));
    return {
      x: point[0] / data.canvas.width,
      y: point[1] / data.canvas.height
    };
  },
  rotateToLatLon: function (lat, lon) {
    var lonLat = this._degFromRad([lon, lat]);
    // console.log(lonLat)

    this.projection.rotate([-lonLat[0], -lonLat[1]]);
    this.draw();
  },
  _degFromRad: function (lonLat) {
    return [lonLat[0] / Math.PI * 180, lonLat[1] / (PI_2) * 90];
  }
});
