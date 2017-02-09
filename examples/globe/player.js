AFRAME.registerComponent('player', {
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
        this.position.setLength(this.data.radius)
        this.forward = new THREE.Vector3(0, 0, 1)
        this.previousForward = new THREE.Vector3(0, 0, 1)

    },
    update: function(oldData) {

        var t = forward = this.forward.normalize()

        var e = direction = this.position.clone().sub(this.origin).normalize() // NORMALE - Y-VEKTOR

        var i = rotation = direction.clone().cross(forward).normalize() // NORMALE MIT VORWÄRTS CROSS = X VEKTOR --> ROTATION?

        this.previousForward = forward



        var matrix = new THREE.Matrix4,
            n = matrix.elements;
        n[0] = i.x, n[1] = i.y, n[2] = i.z, n[3] = 0,   // ROTATION  - X VEKTOR
        n[4] = e.x, n[5] = e.y, n[6] = e.z, n[7] = 0,   // NORMALE  . Y VEKTOR
        n[8] = t.x, n[9] = t.y, n[10] = t.z, n[11] = 0,  // VORWÄRTS  - Z VEKTOR
        n[12] = this.position.x, n[13] = this.position.y, n[14] = this.position.z, n[15] = 1   // AKTUELLE POSITON


        var object = this.el.object3D

        object.matrixAutoUpdate = false
        object.matrix = matrix
        object.updateMatrixWorld()
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
            // extract the direction of the camera in the zaxis
            this.camera.matrixWorld.extractBasis(xaxis, yaxis, zaxis)
            //this.el.object3D.matrixWorld.extractBasis(xaxis, yaxis, zaxis)
            return zaxis
        }

    }(),
    move: function(delta) {

        var distance = this.speed * (delta / 1000)

        var forward = this.getForward().setLength(distance) //LÄNGE SETZEN FÜR VORWÄRTSBEWEGUNG IN Z RICHTUNG


        // change position by forward
        this.position.sub(forward)
/*
        if (this.position.sub(forward) < minglenth) {
            this.position.setLength(radius)
        }
        */


        var r = direction = this.position.clone().sub(this.origin).normalize() // ENTFERNUNG VON URSPRUNG (NORMALE)
        var s = rotation = direction.clone().cross(this.previousForward).normalize() // ROTATION VON VORIGEM MALE
        var a = previousForward = rotation.clone().cross(direction).normalize(); // BERECHNE VORIGEN VEKTOR

        this.previousForward = previousForward

        var matrix = new THREE.Matrix4,
            c = matrix.elements;
        c[0] = s.x, c[1] = s.y, c[2] = s.z, c[3] = 0, 
        c[4] = r.x, c[5] = r.y, c[6] = r.z, c[7] = 0, 
        c[8] = a.x, c[9] = a.y, c[10] = a.z, c[11] = 0, 
        c[12] = this.position.x, c[13] = this.position.y, c[14] = this.position.z, c[15] = 1

        var object = this.el.object3D 

        object.matrixAutoUpdate = false
        object.matrix = matrix
        object.updateMatrixWorld()
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