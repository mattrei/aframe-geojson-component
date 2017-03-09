AFRAME.registerComponent('drone', {
    schema: {
        radius: {
            type: 'number',
            default: 13
        },
        camera: {
            type: "selector",
            default: "[camera]"
        }
    },

    init: function() {

        this.active = true;

        this.camera = this.data.camera.object3D

        this.speed = 1

        this.origin = new THREE.Vector3(0, 0, 0)
        this.position = new THREE.Vector3(0, 1, 0)
        
        this.forward = new THREE.Vector3(0, 0, 1)
        this.look = new THREE.Vector3(0, 0, 1)


        this.direction = new THREE.Vector3(); // create once and reuse it!


        this.sphericalDelta = new THREE.Spherical();
        this.spherical = new THREE.Spherical();
    },
    update: function(oldData) {

        this.position.setLength(this.data.radius)
        this.el.object3D.position.copy(this.position)


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
            yaxis = new THREE.Vector3()
            zaxis = new THREE.Vector3()

        return function() {
            this.camera.matrixWorld.extractBasis(xaxis, yaxis, zaxis)
            return zaxis
            //return new THREE.Vector3(0,0,-1)
        }

    }(),
    move: function(delta) {

        var object = this.el.object3D 

        var distance = this.speed * (delta / 1000)

        var forward = this.camera.getWorldDirection( this.forward );
        this.forward.normalize()

        if (Math.abs(this.forward.z) > 1) this.forward.z = 0
        //this.forward.setLength(distance) 


        // x for theta
        // z for phi

        // set length of forward z-axis
        // position = position + speed
        //console.log(this.getForward())

        // change position by forward
        //this.position.sub(forward)
        // up

        //this.sphericalDelta.phi += 0.005

        //this.sphericalDelta.theta += -this.forward.x * 0.01
        this.sphericalDelta.theta %= (Math.PI * 2)

        this.sphericalDelta.phi +=  forward.z * 0.01
        this.sphericalDelta.phi %= (Math.PI * 2)

        this.spherical.theta = this.sphericalDelta.theta;
        this.spherical.phi = this.sphericalDelta.phi - Math.PI
        
        //this.spherical.makeSafe();
        //console.log(this.spherical.phi + " " + this.spherical.theta)
        this.spherical.radius = this.data.radius;

        var position = new THREE.Vector3()
        position.setFromSpherical( this.spherical );

        var look = new THREE.Vector3()
        var lookSpherical = this.spherical.clone()
        // be one unit behind the moving object
        //lookSpherical.phi -= 0.01
        lookSpherical.radius += 1
        look.setFromSpherical( lookSpherical );
        //console.log(position)
        // set height
/*
        if (this.position.sub(forward) < minglenth) {
            this.position.setLength(radius)
        }
        */

        // thats were cross products are used most
        // https://classroom.udacity.com/courses/cs291/lessons/158750187/concepts/1694147620923#
        // find the frame of reference

        // looAt
        var up = position.clone().sub(this.origin).normalize()
        // xaxis, right vector
        var right = up.clone().cross(forward).normalize()
        // true look vector
        var realLook = right.clone().cross(up).normalize()




        
        //object.up = up
        object.up = new THREE.Vector3(0, 0, 1)
        object.lookAt(look)
        //object.lookAt(this.origin)

        object.position.copy(position)


    },

    play: function() {
        this.active = true;
    },
    pause: function() {
        this.active = false;
    },
    getLatLonAzimuth: function() {

        var e = position = this.position.clone(),

            i = nextPosition = position.clone().sub(this.getForward()),           // EXTRAHIERT DEN ANGESTREBTEN Z-VEKTOR!

            o = latLon = this.latLonFromXYZ(position.x, position.y, position.z),     // AKTUELLE POSITON
            n = nextLatLon = this.latLonFromXYZ(nextPosition.x, nextPosition.y, nextPosition.z)     // VORWÄRTSBEWEGUNG


            // DELTA "VEKTOR" ROTATION BERECHNEN
        var azimuth = Math.atan2(-(nextLatLon.lon - latLon.lon), nextLatLon.lat - latLon.lat);

        return {
            lat: latLon.lat,
            lon: latLon.lon,
            azimuth: azimuth
        }
    },
    latLonFromXYZ: function(x, y, z) {
        var radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2)),
            lat = Math.asin(y / radius),    // or acos(z / radius)
            lon = Math.atan2(x, z) - Math.PI / 2;   // or atan2(y, x)

        // reset longitude to the positive datum of the world
        if (lon < -Math.PI) {
            lon += 2 * Math.PI
        }
        return {
            lat: lat,
            lon: lon
        }
    },
    xyzFromLatLon: function(lat, lon) {
        // center lat and lon
        var nlat = lat * Math.PI / 180,
            nlon = (lon + 180) * Math.PI / 180

        var x = -Math.cos(nlat) * Math.cos(nlon),
            y = Math.sin(nlat),
            z = Math.cos(nlat) * Math.sin(nlon);

        return {
            x: x,
            y: y,
            z: z
        }
    }

});


/*
e.latLonFromXYZ = function(t, e, i) {
        var o = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2) + Math.pow(i, 2)),
            n = Math.asin(e / o),
            r = Math.atan2(t, i) - Math.PI / 2;
        return r < -Math.PI && (r += 2 * Math.PI), {
            lat: n,
            lon: r
        }
    }, e.xyzFromLatLon = function(t, e) {
        var i = t * Math.PI / 180,
            o = (e + 180) * Math.PI / 180,
            n = -Math.cos(i) * Math.cos(o),
            r = Math.sin(i),
            s = Math.cos(i) * Math.sin(o);
        return {
            x: n,
            y: r,
            z: s
        }
        */