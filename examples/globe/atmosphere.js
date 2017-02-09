var TextureLoader = new THREE.TextureLoader()

AFRAME.registerComponent('atmosphere', {
    schema: {
        texture: {
            type: 'asset',
            default: "assets/rim.png"
        },
        radius: {
            default: 10
        },
        player: {
            type: "selector"
        }
    },

    init: function() {
        var data = this.data;


        var loadingManager = new THREE.LoadingManager(this.generate.bind(this));
        var textureLoader = new THREE.TextureLoader(loadingManager);

        this.rimTexture = textureLoader.load(data.texture)
        for (var i = [],
                var o = 3; o < 10; o++) {
            i.push(new THREE.Vector2(10 * Math.sin(.2 * o), 2 * (o - 2.2)));
        }

        var geometry = new THREE.LatheGeometry(i, 24)
        var material = new THREE.MeshBasicMaterial({
            map: this.rimTexture,
            transparent: true,
            side: THREE.BackSide,
            fog: false,
            shading: THREE.SmoothShading,
            depthTest: false,
            depthWrite: false
        })

        var mesh = new THREE.Mesh(geometry, material)

        mesh.scale.set(data.radius, data.radius, data.radius)
        mesh.rotation.x = Math.PI / 2

        this.el.setObject3D('mesh', mesh)
    }
    tick: function(time, delta) {
        this.el.object3D.lookAt(this.data.player.el.object3D)
    }
})