var d3 = require('d3');

var FEATURE_SELECTED_EVENT = "feature-selected"

AFRAME.registerComponent('geojson-globe', {

    dependencies: ["geojson-projection"],
    schema: {
        color: {
            default: "#fff",
            type: "color"
        },
        linewidth: {    // TODO rename to size?
            default: 1
        },
        radius: {
            default: 2
        },
        // the data that holds the data; if not set then it is supposed to be already included
        dataSrc: {
            type: "asset"
        },
        dataType: {
            default: 'tsv',
            oneOf: ['csv', 'tsv']
        }
    },

    init: function() {

        var data = this.data

        this._selectedFeature = null
        this.isSelecting = false

        this.codes = new Map(); // country color codes for selecting
        this.hitScene = new THREE.Scene();
        this.hitCamera = new THREE.PerspectiveCamera(.001, 1, .01, 3000);
        this.hitTexture = new THREE.WebGLRenderTarget(1, 1);
        this.hitTexture.texture.minFilter = THREE.NearestFilter;
        this.hitTexture.texture.magFilter = THREE.NearestFilter;
        this.hitTexture.generateMipMaps = false;
        this.hitTexture.setSize(100, 100)

        this.dataMap = new Map()
        if (data.dataSrc) {
            d3[data.dataType](data.dataSrc, (error, dataObject) => {
                dataObject.forEach(e => {
                    this.dataMap.set(e.iso_n3, e)
                })
            })

        }


        this.el.addEventListener("geojson-projection-generated", e => {

            this.codes = e.detail.map

            var pointsMesh = this.generatePoints(e.detail.map)
            var linesMesh = this.generateLines(e.detail.map)
            

            this.maskMesh = this.generateMask(e.detail.features)

            var layer = new THREE.Object3D()
            layer.add(pointsMesh)
            layer.add(linesMesh)

            this.el.setObject3D('mesh', layer)
            //this.el.addEventListener('click', this.select.bind(this))

            this.el.addEventListener('raycaster-intersected', this.select.bind(this));
            //el.addEventListener('raycaster-intersected-cleared', _ => console.log("BORDER Cleared"));
            this.el.emit('geojson-globe-generated');
        })

    },
    generatePoints: function(mapData) {

        var points = 0;
        mapData.forEach(territory => {
            territory.forEach(path => {
                points += path.points.length;
            });

        });

        const pointsGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(points * 3);
        // TODO
        const sizes = new Float32Array(points);
        const colors = new Float32Array(points);

        var ptr = 0;
        mapData.forEach((territory, id) => {

            territory.forEach(path => {


                path.points.forEach(point => {

                    var res = this.latLngToVec3(point.y, point.x);

                    positions[ptr] = res.x;
                    positions[ptr + 1] = res.y;
                    positions[ptr + 2] = res.z;
                    ptr += 3;
                })
            })


        });

        pointsGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        pointsGeometry.computeBoundingSphere();

        let pointsMaterial = new THREE.PointsMaterial({
            size: 0.02,
            sizeAttenuation: true,
            transparent: true,
            color: 0xff0000
        });

/*
        pointsMaterial = new THREE.ShaderMaterial({
            //size: 0.02,
            //sizeAttenuation: true,
            transparent: true
        });
        */
        /*<script id="shader-vs" type="x-shader/x-vertex" >
attribute vec3 position;
attribute vec3 color;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec3 vColor;

void main(){

    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1. );

}
</script>

<script id="shader-fs" type="x-shader/x-fragment" >
varying vec3 vColor;

void main(){

    gl_FragColor = vec4( vColor, 1. );

}
*/

        let pointsMesh = new THREE.Points(
            pointsGeometry,
            pointsMaterial
        );

        return pointsMesh

    },
    generateLines: function(mapData) {

        var layer = new THREE.Object3D()

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
            //layer.add(mesh);

            territory.shape = mesh;


        });


        lineGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        lineGeometry.computeBoundingSphere();

        const bordersMaterial = new THREE.LineBasicMaterial({
            transparent: true,
            linewidth: this.data.linewidth,
            color: this.data.color,
            side: THREE.DoubleSide,
        });

        var bordersMesh = new THREE.LineSegments(lineGeometry, bordersMaterial);
        bordersMesh.fustrumCulled = false;
        //return bordersMesh TODO
        layer.add(bordersMesh)
        return layer
    },
    latLngToVec3: function(lat, lon) {
        //lat -= 90
        //lat *= -1
        //lat = Math.max(175, Math.min(5, lat));
        //lat = Math.min(160, lat)
        const phi = (lat) * Math.PI / 180;
        // -lon for inversion
        const theta = (lon) * Math.PI / 180;
        const d = this.data.radius;
        const x = -d * Math.sin(phi) * Math.cos(theta);
        const y = d * Math.cos(phi);
        const z = d * Math.sin(phi) * Math.sin(theta);

        return new THREE.Vector3(x, y, z);

    },
    selectFeature: function(feature) {
        
        this.isSelecting = false
        if (!feature) return

        var selected = null
        if (this.dataMap.size > 0) {
            selected = this.dataMap.get(feature.id)
        } else {
            selected = feature.properties
        }

        if (this._selectedFeature !== selected) {
            console.log(selected.name_long)
            this._selectedFeature = selected
            this.el.emit(FEATURE_SELECTED_EVENT, selected)
        }
    },
    hitTest: function(obj) {

        const pixelBuffer = new Uint8Array(4);

        var renderer = this.el.sceneEl.renderer

        this.hitCamera.position.copy(obj.position);
        this.hitCamera.rotation.copy(obj.rotation);
        renderer.render(this.hitScene, this.hitCamera, this.hitTexture);

        return new Promise((resolve, reject) => {

            //requestAnimationFrame(function() {
                var res = null;

                renderer.readRenderTargetPixels(this.hitTexture, 0, 0, 1, 1, pixelBuffer);
                //if (pixelBuffer[3] === 255) {
                    if (pixelBuffer[0] === 255) {
                        //console.log("Getting " + pixelBuffer[2])
                        res = this.codes.get(pixelBuffer[2])
                    }
                //}
                resolve(res);

            //}.bind(this));

        });


    },
    select: function(e) {
        if (this.isSelecting) return

        var entity = document.querySelector("[raycaster]")
        var raycaster = entity.components.raycaster.raycaster

        //var intersections = raycaster.intersectObject(this.el.object3DMap.mesh)
        var intersections = raycaster.intersectObject(this.maskMesh)
        if (intersections.length > 0) {
            this.isSelecting = true
            var p = intersections[0].point;

            var dummy = new THREE.Object3D();
            //dummy.scale.y = -1
            dummy.lookAt(p)
            //dummy.rotation.y += Math.PI;
            //dummy.rotation.z = Math.PI
            

            this.hitTest(dummy).then(res => this.selectFeature(res))
        }

        //entity.components.raycaster.refreshObjects()

    },
    generateMask: function(features) {

        var width = 512*4,
            height = 256*4

        const projection = d3.geoEquirectangular()
            .scale(height / Math.PI)
            .translate([width / 2, height / 2])
            .rotate([0, 0, 0])

        const path = d3.geoPath(projection)

        var canvas = d3
            .select("body")
            .append("canvas")
            .attr("id", "mask-canvas")
            .attr("width", `${width}px`)
            .attr("height", `${height}px`)
        var context = d3.select("#mask-canvas").node().getContext("2d"),
            contextPath = path.context(context);

        features.forEach((feature, i) => {
            //console.log(feature)
            // TODO what if more than 255?

            //var valued = feature.id 

            this.codes.set(i, feature) // feature.id

            context.save();
            context.beginPath()
            context.fillStyle = `rgb(255,0,${i})`
            context.strokeStyle = `rgb(255,0,${i})`
            context.lineWidth = 10 // TODO set higher?
            contextPath(feature);
            if (feature.geometry.type.includes("LineString"))
                context.stroke()
            else if (feature.geometry.type.includes("Polygon"))
                context.fill();
            else if (feature.geometry.type.includes("Point"))
                context.fill();
            context.restore();
        })

        //console.log(canvas.node().toDataURL());
        const texture = new THREE.Texture(canvas.node());
        texture.needsUpdate = true;

        const mesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(this.data.radius + 1, 6),
            new THREE.MeshBasicMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 1
            })
        );
        // TODO?
        var scale = this.el.getAttribute("scale")
        //console.log(scale)
        //mesh.scale.x = this.el.object3D.scale.x
        mesh.scale.x = -1
        mesh.scale.y = -1

        this.hitScene.add(mesh);

        canvas.remove();
        return mesh
    }

});

function memcpy(src, srcOffset, dst, dstOffset, length) {
    var i
    src = src.subarray || src.slice ? src : src.buffer
    dst = dst.subarray || dst.slice ? dst : dst.buffer
    src = srcOffset ? src.subarray ?
        src.subarray(srcOffset, length && srcOffset + length) :
        src.slice(srcOffset, length && srcOffset + length) : src
    if (dst.set) {
        dst.set(src, dstOffset)
    } else {
        for (i = 0; i < src.length; i++) {
            dst[i + dstOffset] = src[i]
        }
    }
    return dst
}