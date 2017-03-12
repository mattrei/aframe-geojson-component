AFRAME.registerComponent('satellite', {
    dependencies: ['velocity'],
    schema: {
        radius: {
            type: 'number',
            default: 14
        },
        camera: {
            type: "selector",
            default: "[camera]"
        },
        speed: {
            type: 'int',
            default: 2
        }
    },

    init: function() {

        var el = this.el
        var data = this.data

        this.active = true;

        this.camera = data.camera.object3D
        console.log(data.camera.components)

        this.speed = 1

        this.velocity = new THREE.Vector3()

        this.origin = new THREE.Vector3(0, 0, 0)


        this.position = new THREE.Vector3(0, 1, 0)
        var triggerElement = document.createElement('a-sphere');
        triggerElement.setAttribute('radius', this.data.radius - 0.5);
        triggerElement.setAttribute('side', 'double');
        triggerElement.setAttribute('opacity', 0.2);
        triggerElement.setAttribute('color', 'red');
        this.sphereElement = this.el.sceneEl.appendChild(triggerElement);


    },
    update: function(oldData) {

        var el = this.el
        var data = this.data




        this.position.setLength(data.radius)
        el.object3D.position.copy(this.position)
        //this.camera.position.copy(this.position)

        this.raycaster = new THREE.Raycaster(el.object3D.position.clone(), 
            new THREE.Vector3(0, -1, 0));
        



    },

    tick: function(time, delta) {
        if (!this.active) {
            return;
        }

        //this.velocity.copy(this.data.camera.getAttribute('velocity'));
//        console.log(this.velocity)


        var distance = this.data.speed * (delta / 1000)

        const player = this.el.object3D

        var sphereObject = this.sphereElement.object3D

        this.position.copy(this.camera.position)




        //this.position.copy(player.position)
        //this.position.y += 10 // safe value
        // Always update player position to raycaster!


        //this.raycaster.ray.origin.copy(this.position);
        var direction = this.origin.clone().sub(this.position).normalize()
        //console.log(direction)
        this.raycaster.set(this.position.clone().multiplyScalar(1.1), direction);

        const intersects = this.raycaster.intersectObject(sphereObject, true);
        if (intersects.length) {
            const intersection = intersects[0]
            console.log(intersection.point)


            

            var normal = intersection.face.normal
            var up = this.position.clone().sub(intersection.point).normalize()

            var tangent = up.clone().cross(normal)

            var newPosition = intersection.point.clone().multiplyScalar(1.1)
            
            //player.position.copy(intersection.point)
            //player.position.copy(newPosition)
            //this.el.setAttribute("position", newPosition)
            this.data.camera.setAttribute("position", newPosition)
            //this.camera.position.set(0, 0, 0)
            //player.up.copy(direction.negate())
            //player.lookAt(tangent)
        }
        
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
   
    play: function() {
        this.active = true;
    },
    pause: function() {
        this.active = false;
    },

});