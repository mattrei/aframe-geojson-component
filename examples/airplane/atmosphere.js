var TextureLoader = new THREE.TextureLoader()

AFRAME.registerComponent('atmosphere', {
    schema: {
        texture: {
            type: 'asset',
        },
        radius: {
            default: 16
        },
        player: {
            type: "selector"
        }
    },

    init: function() {
        var data = this.data;

        var textureLoader = new THREE.TextureLoader()

        this.rimTexture = textureLoader.load(data.texture)
        const points = []
        for (i = 3; i < data.radius; i++) {
            // taken from examples
            points.push(new THREE.Vector2(data.radius * Math.sin(0.2 * i), 2 * (i - 2.2)));
        }

        var geometry = new THREE.LatheGeometry(points, 24)
        var material = new THREE.MeshBasicMaterial({
            map: this.rimTexture,
            transparent: true,
            side: THREE.BackSide,
            fog: false,
            shading: THREE.SmoothShading,
            depthTest: true, // was false
            depthWrite: false
        })

        var mesh = new THREE.Mesh(geometry, material)
        mesh.rotation.x = Math.PI / 2

        //mesh.scale.set(data.radius, data.radius, data.radius)
        
        this.el.setObject3D('mesh', mesh)
    },
    tick: function(time, delta) {
        var pos = this.data.player.components['player'].getPosition()
        const object = this.el.object3D
        object.up.copy(pos.clone().normalize())
        object.lookAt(pos)
    }
})