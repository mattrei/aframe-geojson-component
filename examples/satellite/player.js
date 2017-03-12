var PI_2 = Math.PI / 2;
var PI_3_4 = PI_2 * 3;
var radToDeg = THREE.Math.radToDeg;

AFRAME.registerComponent('satellite', {
    schema: {
        speed: {
            type: 'int',
            default : 1
        },
        globe: {
            type: "selector",
            default: "#globe"
        },
        camera: {
            type: "selector",
            default: "#camera"
        }
    },

    init: function() {

        this.active = true;

        this.camera = this.data.camera.object3D
        this.globe = this.data.globe.object3D

        this.speed = 1


        this.direction = new THREE.Vector3(); // create once and reuse it!



/*
        this.pitchObject = new THREE.Object3D();
        this.yawObject = new THREE.Object3D();
        this.yawObject.position.y = 10;
        this.yawObject.add(this.pitchObject);
*/

        this.pitchObject = document.querySelector("#pitchObject").object3D
        this.yawObject = document.querySelector("#yawObject").object3D
        //this.yawObject.add(this.pitchObject);
        //this.pitchObject.add(this.globe)
    },
    update: function(oldData) {

        //this.position.setLength(this.data.radius)
        //this.el.object3D.position.copy(this.position)


        //this.el.object3D.up = new THREE.Vector3(0, 1, 0)
        //this.el.object3D.lookAt(this.look)
    },

    tick: function(time, delta) {
        if (!this.active) {
            return;
        }

        this.move(delta)
    },
    getForward: function() {
        var xaxis = new THREE.Vector3()
        var yaxis = new THREE.Vector3()
        var zaxis = new THREE.Vector3()

        return function() {
            //this.camera.getWorldDirection(zaxis)
            // extract local looking direction
            this.camera.matrix.extractBasis(xaxis, yaxis, zaxis)
            return zaxis
        }

    }(),
    move: function(delta) {


        var distance = this.data.speed * (delta / 1000)

        var forward = this.getForward()
        

        this.pitchObject.rotation.x += -forward.y * distance
        this.pitchObject.rotation.x %= Math.PI * 2

        var dirCorrection = 1
        if (Math.abs(this.pitchObject.rotation.x) > PI_2 && 
            Math.abs(this.pitchObject.rotation.x) < PI_3_4) {
            dirCorrection = -1
        }

 
        this.yawObject.rotation.y += forward.x * distance * dirCorrection
    },

    play: function() {
        this.active = true;
    },
    pause: function() {
        this.active = false;
    },

});


