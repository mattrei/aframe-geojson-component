//const getComponentProperty = AFRAME.utils.entity.getComponentProperty


AFRAME.registerComponent('ortho-arrow', {
    schema: {
        player: {
            type: 'selector',
        }
    },

    init: function() {
        this.initialize = this.initialize.bind(this);
    },
    update: function(oldData) {
        this.el.sceneEl.addEventListener('loaded', this.initialize);
    },
    initialize: function () {
        this.player = this.data.player.components.player
        this.projection = this.el.parentNode.components['geojson-canvas']

        this.mapWidth = getComponentProperty(this.el.parentNode, 'geometry.width')
        this.mapHeight = getComponentProperty(this.el.parentNode, 'geometry.height')

    },
    tick: function(time, delta) {
        if (!this.player) return

        var loc = this.player.getLatLonAzimuth();

        var rotation = this.el.getAttribute("rotation")

        this.el.setAttribute("rotation", {
            x: rotation.x,
            y: rotation.y,
            z: (loc.azimuth / (Math.PI * 2)) * 360
        })

        this.projection.rotateToLatLon(loc.lat, loc.lon)

        this.el.setAttribute("position", {
                x: 0,
                y: 0
            })
    },
})