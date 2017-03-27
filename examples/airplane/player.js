AFRAME.registerComponent('player', {
  schema: {
    radius: {
      type: 'number',
      default: 16
    },
    minRadius: {
      type: 'number',
      default: 13.5
    },
    maxRadius: {
      type: 'number',
      default: 20
    },
    camera: {
      type: 'selector',
      default: '[camera]'
    },
    speed: {
      type: 'int',
      default: 1
    }
  },

  init: function () {
    this.active = true;

    this.camera = this.data.camera.object3D;

    this.origin = new THREE.Vector3(0, 0, 0);
    this.position = new THREE.Vector3(0, 1, 0);
    this.position.setLength(this.data.radius);
    this.forward = new THREE.Vector3(0, 0, 1);
    this.look = new THREE.Vector3(0, 0, 1);
  },
  update: function (oldData) {
  },

  tick: function (time, delta) {
    if (!this.active) {
      return;
    }

    this.move(delta);
  },
  getForward: function () {
    var xaxis = new THREE.Vector3();
    var yaxis = new THREE.Vector3();
    var zaxis = new THREE.Vector3();

    return function () {
            // extract the direction of the camera in the zaxis
            // was before
            // this.camera.matrixWorld.extractBasis(xaxis, yaxis, zaxis)
      this.camera.getWorldDirection(zaxis);    // new method
      return zaxis;
    };
  }(),
  move: function (delta) {
    var distance = this.data.speed * (delta / 1000);

    var forward = this.getForward().setLength(distance);
        // set length of forward z-axis

        // change position by forward
    if (this.position.sub(forward)) {
      var length = this.position.length();

      if (length < this.data.minRadius) {
        this.position.setLength(this.data.minRadius);
      } else if (length > this.data.maxRadius) {
        this.position.setLength(this.data.maxRadius);
      }
    }

        // set height

/*
        if (this.position.sub(forward) < this.data.minRadius) {
            this.position.setLength(this.data.minRadius)
        }
        */
        /*
        var altitude = this.position.sub(forward).length()
        console.log(altitude)
        if (altitude < this.data.minRadius) {
            this.position.add(forward)
            console.log(this.position)
        }
        */

        // thats were cross products are used most
        // https://classroom.udacity.com/courses/cs291/lessons/158750187/concepts/1694147620923#
        // find the frame of reference

        // calculate with the cross product the real forward/look vector

        // up or normal vector
    var up = this.position.clone().sub(this.origin).normalize();
        // tangent vector
    var tangent = up.clone().cross(this.look).normalize();

        // look vector or binormal/bitangent vector
    var look = tangent.clone().cross(up).normalize();

    var object = this.el.object3D;

        // object.position.copy(this.position)
        // nearly works
        // object.quaternion.setFromUnitVectors(this.forward, look);

    this.look = look;

    var matrix = new THREE.Matrix4,
      c = matrix.elements;
        // aplpy x, y and z axis basis vector
        // 4th column is position
    c[0] = tangent.x, c[1] = tangent.y, c[2] = tangent.z, c[3] = 0;   // tangent vector
    c[4] = up.x, c[5] = up.y, c[6] = up.z, c[7] = 0;   // up Vector
    c[8] = look.x, c[9] = look.y, c[10] = look.z, c[11] = 0; // look vector
    c[12] = this.position.x, c[13] = this.position.y, c[14] = this.position.z, c[15] = 1;

    object.matrixAutoUpdate = false;
    object.matrix = matrix;
    object.updateMatrixWorld();  // also apply to child
  },
  getPosition: function () {
    return this.position;
  },

  play: function () {
    this.active = true;
  },
  pause: function () {
    this.active = false;
  },
  getLatLonAzimuth: function () {
    var e = position = this.position.clone(),

      i = nextPosition = position.clone().sub(this.getForward()),           // EXTRAHIERT DEN ANGESTREBTEN Z-VEKTOR!

      o = latLon = this.latLonFromXYZ(position.x, position.y, position.z),     // AKTUELLE POSITON
      n = nextLatLon = this.latLonFromXYZ(nextPosition.x, nextPosition.y, nextPosition.z);     // VORWÄRTSBEWEGUNG

            // DELTA "VEKTOR" ROTATION BERECHNEN
    var azimuth = Math.atan2(-(nextLatLon.lon - latLon.lon), nextLatLon.lat - latLon.lat);

    return {
      lat: latLon.lat,
      lon: latLon.lon,
      azimuth: azimuth
    };
  },
  latLonFromXYZ: function (x, y, z) {
    var radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2)),
      lat = Math.asin(y / radius),    // or acos(z / radius)
      lon = Math.atan2(x, z) - Math.PI / 2;   // or atan2(y, x)

        // reset longitude to the positive datum of the world
    if (lon < -Math.PI) {
      lon += 2 * Math.PI;
    }
    return {
      lat: lat,
      lon: lon
    };
  },
  xyzFromLatLon: function (lat, lon) {
        // center lat and lon
    var nlat = lat * Math.PI / 180,
      nlon = (lon + 180) * Math.PI / 180;

    var x = -Math.cos(nlat) * Math.cos(nlon),
      y = Math.sin(nlat),
      z = Math.cos(nlat) * Math.sin(nlon);

    return {
      x: x,
      y: y,
      z: z
    };
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
