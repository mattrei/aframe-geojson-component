var bind = AFRAME.utils.bind
var isMobile = AFRAME.utils.isMobile

var PI_2 = Math.PI / 2;
var radToDeg = THREE.Math.radToDeg;



AFRAME.registerComponent('touch-rotate', {
  dependencies: ['position', 'rotation', "geojson-canvas"],

  schema: {
    enabled: {default: true},
    hmdEnabled: {default: true},
    reverseMouseDrag: {default: false},
    standing: {default: true},
    camera: {default: "#camera", type: "selector"}
  },

  init: function () {
    var sceneEl = this.el.sceneEl;

    //this.el.object3D.scale.x = -1

    this.previousHMDPosition = new THREE.Vector3();
    this.setupHMDControls();
    this.setupMouseControls();
    
    this.bindMethods();

    this.lastHmdEuler = new THREE.Euler()

    this.geojsonCanvas = this.el.components["geojson-canvas"]

    // Enable grab cursor class on canvas.
    function enableGrabCursor () { sceneEl.canvas.classList.add('a-grab-cursor'); }
    if (!sceneEl.canvas) {
      sceneEl.addEventListener('render-target-loaded', enableGrabCursor);
    } else {
      enableGrabCursor();
    }
  },

  update: function (oldData) {
    var data = this.data;
    var hmdEnabled = data.hmdEnabled;
    if (!data.enabled) { return; }
    if (!hmdEnabled && oldData && hmdEnabled !== oldData.hmdEnabled) {
      this.pitchObject.rotation.set(0, 0, 0);
      this.yawObject.rotation.set(0, 0, 0);
    }
    this.controls.standing = data.standing;
    this.controls.update();

    if (this.mouseDown || this.touchStarted) {
      this.updateOrientation();  
    }
  },

  play: function () {
    this.addEventListeners();
  },

  pause: function () {
    this.removeEventListeners();
  },

  tick: function (t) {
    this.update();
  },

  remove: function () {
    this.pause();
  },

  bindMethods: function () {
    this.onMouseDown = bind(this.onMouseDown, this);
    this.onMouseMove = bind(this.onMouseMove, this);
    this.releaseMouse = bind(this.releaseMouse, this);
    this.onTouchStart = bind(this.onTouchStart, this);
    this.onTouchMove = bind(this.onTouchMove, this);
    this.onTouchEnd = bind(this.onTouchEnd, this);
  },

  setupMouseControls: function () {
    // The canvas where the scene is painted

    this.mouseDown = false;
    this.pitchObject = new THREE.Object3D();
    this.pitchObject.rotation.order = "YXZ"

    this.yawObject = new THREE.Object3D();
    this.yawObject.rotation.order = "YXZ"
    this.yawObject.position.y = 10;
    this.yawObject.add(this.pitchObject);
    
  },

  setupHMDControls: function () {
    this.dolly = new THREE.Object3D();
    this.euler = new THREE.Euler();
    this.controls = new THREE.VRControls(this.dolly);
    this.controls.userHeight = 0.0;
  },

  addEventListeners: function () {
    var sceneEl = this.el.sceneEl;
    var canvasEl = sceneEl.canvas;

    // listen for canvas to load.
    if (!canvasEl) {
      sceneEl.addEventListener('render-target-loaded', bind(this.addEventListeners, this));
      return;
    }

    // Mouse Events
    canvasEl.addEventListener('mousedown', this.onMouseDown, false);
    window.addEventListener('mousemove', this.onMouseMove, false);
    window.addEventListener('mouseup', this.releaseMouse, false);

    // Touch events
    canvasEl.addEventListener('touchstart', this.onTouchStart);
    window.addEventListener('touchmove', this.onTouchMove);
    window.addEventListener('touchend', this.onTouchEnd);
  },

  removeEventListeners: function () {
    var sceneEl = this.el.sceneEl;
    var canvasEl = sceneEl && sceneEl.canvas;
    if (!canvasEl) { return; }

    // Mouse Events
    canvasEl.removeEventListener('mousedown', this.onMouseDown);
    canvasEl.removeEventListener('mousemove', this.onMouseMove);
    canvasEl.removeEventListener('mouseup', this.releaseMouse);
    canvasEl.removeEventListener('mouseout', this.releaseMouse);

    // Touch events
    canvasEl.removeEventListener('touchstart', this.onTouchStart);
    canvasEl.removeEventListener('touchmove', this.onTouchMove);
    canvasEl.removeEventListener('touchend', this.onTouchEnd);
  },
  updateOrientation: (function () {
    var hmdEuler = new THREE.Euler();
    return function () {
      var currentRotation;
      var deltaRotation;
      var pitchObject = this.pitchObject;
      var yawObject = this.yawObject;
      var hmdQuaternion = this.calculateHMDQuaternion();
      var sceneEl = this.el.sceneEl;
      var rotation;
      hmdEuler.setFromQuaternion(hmdQuaternion, 'YXZ');
      if (isMobile) {
        // In mobile we allow camera rotation with touch events and sensors
        rotation = {
          x: radToDeg(hmdEuler.x) + radToDeg(pitchObject.rotation.x),
          y: radToDeg(hmdEuler.y) + radToDeg(yawObject.rotation.y),
          z: radToDeg(hmdEuler.z)
        };
      } else if (!sceneEl.is('vr-mode') || isNullVector(hmdEuler) || !this.data.hmdEnabled) {
        currentRotation = this.el.getAttribute('rotation');
        deltaRotation = this.calculateDeltaRotation();
        // Mouse look only if HMD disabled or no info coming from the sensors
        if (this.data.reverseMouseDrag) {
          rotation = {
            x: currentRotation.x - deltaRotation.x,
            y: currentRotation.y - deltaRotation.y,
            z: currentRotation.z
          };
        } else {
          rotation = {
            x: currentRotation.x + deltaRotation.x,
            y: currentRotation.y + deltaRotation.y,
            z: currentRotation.z
          };
        }
      } else {
        // Mouse rotation ignored with an active headset.
        // The user head rotation takes priority
        rotation = {
          x: radToDeg(hmdEuler.x),
          y: radToDeg(hmdEuler.y),
          z: radToDeg(hmdEuler.z)
        };
      }
      //this.el.setAttribute('rotation', rotation);
      var pivot = this.el.parentNode
      var pivotRotation = {
        x: -rotation.x,
        y: -rotation.y,
        z: -rotation.z
      }
      //pivot.setAttribute('rotation', pivotRotation);
      //console.log(pivot.object3D.rotation.x + " " + this.el.object3D.rotation.x)
      

      var camera = this.data.camera.object3D

      var pivotRotation = pivot.getAttribute('rotation')

      var rotation = {
            x: rotation.x,
            y: radToDeg(camera.rotation.y),
            //y: pivotRotation.y,
            z: rotation.z
          };
      pivot.setAttribute('rotation', rotation);
      var globeRotation = {
          x: radToDeg(0),
          y: -pivotRotation.y,//radToDeg(-camera.rotation.y),
          z: radToDeg(0)
        };

      this.el.setAttribute('rotation', globeRotation);

      console.log("Pivot")
      console.log(pivot.getAttribute('rotation'))
      console.log("Camera")
      console.log(this.data.camera.getAttribute('rotation'))
      console.log("Layer")
      console.log(this.el.getAttribute('rotation'))

    };
  })(),

  calculateDeltaRotation: (function () {
    var previousRotationX;
    var previousRotationY;
    return function () {
      var currentRotationX = radToDeg(this.pitchObject.rotation.x);
      var currentRotationY = radToDeg(this.yawObject.rotation.y);
      var deltaRotation;
      previousRotationX = previousRotationX || currentRotationX;
      previousRotationY = previousRotationY || currentRotationY;
      deltaRotation = {
        x: currentRotationX - previousRotationX,
        y: currentRotationY - previousRotationY
      };
      previousRotationX = currentRotationX;
      previousRotationY = currentRotationY;
      return deltaRotation;
    };
  })(),

  calculateHMDQuaternion: (function () {
    var hmdQuaternion = new THREE.Quaternion();
    return function () {
      hmdQuaternion.copy(this.dolly.quaternion);
      return hmdQuaternion;
    };
  })(),

  onMouseMove: function (event) {
    var pitchObject = this.pitchObject;
    var yawObject = this.yawObject;
    var previousMouseEvent = this.previousMouseEvent;

    if (!this.mouseDown || !this.data.enabled) { return; }

    var movementX = event.movementX || event.mozMovementX;
    var movementY = event.movementY || event.mozMovementY;

    if (movementX === undefined || movementY === undefined) {
      movementX = event.screenX - previousMouseEvent.screenX;
      movementY = event.screenY - previousMouseEvent.screenY;
    }
    this.previousMouseEvent = event;

    yawObject.rotation.y -= movementX * 0.002;
    pitchObject.rotation.x -= movementY * 0.002;
    //pitchObject.rotation.x = Math.max(-PI_2, Math.min(PI_2, pitchObject.rotation.x));
  },


  onMouseDown: function (event) {
    if (event.button != 1) return

    var camera = this.data.camera.object3D
    var object = this.el.object3D

    var pivot = this.el.parentNode
    

    var pivotRotation = {
          x: radToDeg(camera.rotation.x),
          y: radToDeg(camera.rotation.y),
          z: radToDeg(camera.rotation.z)
        };
    pivot.setAttribute('rotation', pivotRotation);



    var globeRotation = {
          x: radToDeg(0),
          y: radToDeg(-camera.rotation.y),
          z: radToDeg(0)
        };

    //this.el.setAttribute('rotation', globeRotation);

    console.log("Pivot")
    console.log(pivot.getAttribute('rotation'))
    //console.log("Camera")
    //console.log(this.data.camera.getAttribute('rotation'))
    console.log("Layer")
    console.log(this.el.getAttribute('rotation'))

    //this.data.camera.setAttribute("look-controls-enabled", "false")

    //console.log(this.data.camera.getAttribute("look-controls-enabled"))

    this.rotationMatrix = 
      object.matrix.clone().multiply(
        new THREE.Matrix4().getInverse(camera.matrix)).clone()


    
    this.mouseDown = true;
    this.previousMouseEvent = event;
    document.body.classList.add('a-grabbing');
  },

  releaseMouse: function () {
    if (event.button != 1) return
      this.data.camera.setAttribute("look-controls-enabled", "true")
    this.mouseDown = false;
    document.body.classList.remove('a-grabbing');
  },

  onTouchStart: function (e) {
    if (e.touches.length !== 1) { return; }
    this.touchStart = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
    this.touchStarted = true;
  },

  onTouchMove: function (e) {
    var deltaY;
    var yawObject = this.yawObject;
    var previousTouchEvent = this.previousTouchEvent;


    if (!this.touchStarted || !this.data.enabled) { return; }
    deltaY = 2 * Math.PI * (e.touches[0].pageX - this.touchStart.x) /
            this.el.sceneEl.canvas.clientWidth;
    // Limits touch orientaion to to yaw (y axis)
    yawObject.rotation.y -= deltaY * 0.5;
    this.touchStart = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  },

  onTouchEnd: function () {
    this.touchStarted = false;
  }
});

function isNullVector (vector) {
  return vector.x === 0 && vector.y === 0 && vector.z === 0;
}