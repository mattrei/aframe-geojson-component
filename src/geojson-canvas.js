var d3 = require('d3');
var topojson = require('topojson-client')

const PI_TWO = Math.PI / 2

AFRAME.registerComponent('geojson-canvas', {
    schema: {
        src: {
            type: "asset"
        },
        projection: {
            type: "string",
            default: "equirectangular"
        },
        fillColor: {
            default: "#fff",
            type: "color"
        },
        strokeColor: {
            default: "#fff",
            type: "color"
        },
        canvas: {
            default: '',
            type: "selector"
        },
        center: {
            default: [0, 0],
            type: "array"
        },
        rotation: {
            default: [0, 0],
            type: "array"
        }
    },

    init: function() {


        var el = this.el
        var data = this.data


        var canvas = this.canvas = data.canvas
        var ctx = this.ctx = this.canvas.getContext('2d');

        var width = this.canvas.width
        var height = this.canvas.height

        var geoFunc = data.projection === "equirectangular" ? 
            d3.geoEquirectangular :
            d3.geoOrthographic

        this.projection = geoFunc()
            .scale(height / Math.PI)
            .translate([width / 2, height / 2])
        this.mapPath = d3.geoPath(this.projection)

        d3.json(this.data.src, this.initialize.bind(this));
    },
    update: function(oldData) {
        var data = this.data
        this.projection.rotate(data.rotation)
        this.projection.center(data.center)
        this.draw()
    },
    initialize: function(err, json) {

        this.features = json.features ||
            topojson.feature(json, json.objects.countries).features

        this.draw()
    },
    draw: function() {
        if (!this.features) return

        var context = this.ctx
        var width = this.canvas.width
        var height = this.canvas.height

        var contextPath = this.mapPath.context(context);

        context.clearRect(0, 0, width, height)
        this.features.forEach((feature, i) => {
            // TODO really needed?
            context.save();
            context.beginPath()
            contextPath(feature);
            context.strokeStyle = `rgba(0,120,0,0.4)`
            context.stroke()
            context.fillStyle = `rgba(0,0,0,0.4)`
            context.fill();
            context.restore();
        })

    },
    getProjection: function() {
        return this.projection
    },
    xyFromLatLon: function(lat, lon) {
        // lat lon are in rad, but d3 needs them in degrees
        // TODO use THREEJS Math.DEG_RAD
        

        var point = this.projection(this._degFromRad([lon, lat]))
        return {
            x: point[0] / this.canvas.width,
            y: point[1] / this.canvas.height
        }
    },
    rotateToLatLon: function(lat, lon) {

        var lonLat = this._degFromRad([lon, lat])
        //console.log(lonLat)

        this.projection.rotate([-lonLat[0], -lonLat[1]])
        this.draw()
    },
    _degFromRad: function(lonLat) {
        return [lonLat[0] / Math.PI * 180, lonLat[1] / (PI_TWO) * 90]
    }
});