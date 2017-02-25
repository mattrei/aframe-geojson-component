var bind = AFRAME.utils.bind
var isMobile = AFRAME.utils.isMobile

var PI_2 = Math.PI / 2;
var radToDeg = THREE.Math.radToDeg;


// https://stackoverflow.com/questions/23002984/three-js-calculating-relative-rotations
AFRAME.registerComponent('touch-rotate', {

  schema: {
    camera: {default: "#camera", type: "selector"}
  },

  init: function () {
    var sceneEl = this.el.sceneEl;
  
    this.bindMethods();


    this.camera = this.data.camera.object3D

    // Enable grab cursor class on canvas.
    function enableGrabCursor () { sceneEl.canvas.classList.add('a-grab-cursor'); }
    if (!sceneEl.canvas) {
      sceneEl.addEventListener('render-target-loaded', enableGrabCursor);
    } else {
      enableGrabCursor();
    }
  },

  update: function (oldData) {
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
    this.releaseMouse = bind(this.releaseMouse, this);
    this.onTouchStart = bind(this.onTouchStart, this);
    this.onTouchEnd = bind(this.onTouchEnd, this);
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
    window.addEventListener('mouseup', this.releaseMouse, false);

    // Touch events
    canvasEl.addEventListener('touchstart', this.onTouchStart);
    window.addEventListener('touchend', this.onTouchEnd);
  },

  removeEventListeners: function () {
    var sceneEl = this.el.sceneEl;
    var canvasEl = sceneEl && sceneEl.canvas;
    if (!canvasEl) { return; }

    // Mouse Events
    canvasEl.removeEventListener('mousedown', this.onMouseDown);
    canvasEl.removeEventListener('mouseup', this.releaseMouse);
    canvasEl.removeEventListener('mouseout', this.releaseMouse);

    // Touch events
    canvasEl.removeEventListener('touchstart', this.onTouchStart);
    canvasEl.removeEventListener('touchend', this.onTouchEnd);
  },

  onMouseDown: function (event) {

    var object = this.el.object3D

    
  
    if (event.button != 1) return

    this.touching = true
    THREE.SceneUtils.attach( object, this.el.sceneEl, this.camera); 
    
    this.mouseDown = true;
    this.previousMouseEvent = event;
    document.body.classList.add('a-grabbing');
  },


  releaseMouse: function () {
    if (event.button != 1) return

      var object = this.el.object3D

      THREE.SceneUtils.detach( object, this.camera, this.el.sceneEl.object3D); 

    this.touching = false
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

  onTouchEnd: function () {
    this.touchStarted = false;
  }
});
