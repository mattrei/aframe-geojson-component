/* globals AFRAME, THREE */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

var d3 = require('d3');
var topojson = require('topojson-client');

const CANVAS_GENERATED_EVENT = 'geojson-texture-generated';

AFRAME.registerComponent('geojson-texture', {
  dependencies: ['material'],
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

        // Nothing changed
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
      this.projection = d3[data.projection]()
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
    this.redraw();

    if (data.src && data.src !== oldData.src) {
      this.loader.load(data.src, this.onGeojsonLoaded.bind(this));
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

    this.el.emit(CANVAS_GENERATED_EVENT, {});
  },
  _getStrokeColorOr: function (feature) {
    if (feature.properties.stroke) {
      const color = feature.properties['stroke'];
      const opacity = feature.properties['stroke-opacity'] || 1.0;

      return this._getColorStyle(new THREE.Color(color), opacity);
    }
    return this._lineColor;
  },
  _getFillColorOr: function (feature) {
    if (feature.properties.stroke) {
      const color = feature.properties['fill'];
      const opacity = feature.properties['fill-opacity'] || 0.6;

      return this._getColorStyle(new THREE.Color(color), opacity);
    }
    return this._fillColor;
  },
  _getColorStyle: function (color, opacity) {
    const r = (color.r * 255) | 0;
    const g = (color.g * 255) | 0;
    const b = (color.b * 255) | 0;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
  },
  redraw: function () {
        // a very expensive operation, takes around 100 ms!
    if (!this.features) return;

    var self = this;

    const data = this.data;
    var context = this.ctx;
    var contextPath = this.mapPath.context(context);

    context.clearRect(0, 0, data.canvas.width, data.canvas.height);
    this.features.forEach(function (feature, i) {
      const strokeColor = self._getStrokeColorOr(feature);
      const fillColor = self._getFillColorOr(feature);

      context.beginPath();
      contextPath(feature);
      context.lineWidth = feature.properties['stroke-width'] || data.lineWidth;
      context.strokeStyle = strokeColor;
      context.stroke();
      context.fillStyle = fillColor;
      context.fill();
    });
  },
  getProjection: function () {
    return this.projection;
  }
});
