var d3 = require('d3');

AFRAME.registerShader('geojson-texture', {
    schema: {
        projection: {
            default: "#projection",
            type: "selector"
        },
        color: {
            default: "#fff",
            type: "color"
        },
        width: {
            default: 2048
        },
        height: {
            default: 1024
        }
    },

    init: function(data) {
        this.material = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0, 
                depthWrite: false
            }) 

        data.projection.addEventListener("geojson-projection-generated", e => {

            var texture = this.generate(e.detail.features, data)

            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.offset.x = 0.5

            this.material.map = texture
            this.material.opacity = 1
            this.material.transparent = true

            this.material.needsUpdate = true

            this.texture = texture
            this.update(data)
            //this.el.emit('material-texture-loaded', {texture: this.texture});
        })
    },
    update: function (data) {

        //AFRAME.utils.material.updateMap(this, data);
        this.material.needsUpdate = true
    },
    generate: function(countries, data) {

        var width = data.width
        var height = data.height

        const INITIAL_ROTATE = [0, 0]

        const id = "_geojson-canvas"

        const projection = d3.geoEquirectangular()
            .scale(height / Math.PI)
            .translate([width / 2, height / 2])
            .rotate(INITIAL_ROTATE)
        const mapPath = d3.geoPath(projection)

        var canvas = d3
            .select("body")
            .append("canvas")
            .attr("id", id)
            .attr("width", `${width}px`)
            .attr("height", `${height}px`)
        var context = d3.select(`#${id}`).node().getContext("2d"),
            contextPath = mapPath.context(context);

        countries.forEach((c, i) => {
            context.save();
            context.beginPath()
            context.fillStyle = `rgba(255,0,${i},0.1)`
            contextPath(c);
            context.stroke()
            context.fill();
            context.restore();
        })

        const texture = new THREE.CanvasTexture(canvas.node());

        //canvas.remove();
        // probably not remove it
        // https://bl.ocks.org/dongli/e9291c411cd7ed409e71bcd14d681952

        return texture;
    }
});