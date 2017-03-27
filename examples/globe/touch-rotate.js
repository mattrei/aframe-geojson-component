var bind = AFRAME.utils.bind;
var isMobile = AFRAME.utils.isMobile;

// https://stackoverflow.com/questions/23002984/three-js-calculating-relative-rotations
AFRAME.registerComponent('touch-rotate', {

  schema: {
    camera: {
      default: '#camera',
      type: 'selector'
    }
  },

  init: function () {
    var sceneEl = this.el.sceneEl;

    this.bindMethods();
    this.camera = this.data.camera.object3D;
  },

  update: function (oldData) {},

  play: function () {
    this.addEventListeners();
  },

  pause: function () {
    this.removeEventListeners();
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
    var canvasEl = sceneEl && sceneEl.canvas;
    if (!canvasEl) {
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
    if (!canvasEl) {
      return;
    }

        // Mouse Events
    canvasEl.removeEventListener('mousedown', this.onMouseDown);
    canvasEl.removeEventListener('mouseup', this.releaseMouse);
    canvasEl.removeEventListener('mouseout', this.releaseMouse);

        // Touch events
    canvasEl.removeEventListener('touchstart', this.onTouchStart);
    canvasEl.removeEventListener('touchend', this.onTouchEnd);
  },

  onMouseDown: function (event) {
    if (event.button != 1) return;
    THREE.SceneUtils.attach(this.el.object3D, this.el.sceneEl, this.camera);
        // this.el.sceneEl.appendChild(this.el)
  },

  releaseMouse: function () {
    if (event.button != 1) return;
    THREE.SceneUtils.detach(this.el.object3D, this.camera, this.el.sceneEl.object3D);
        // this.el.parentNode.appendChild(this.el)
  },

  onTouchStart: function (e) {
    if (e.touches.length !== 1) {
      return;
    }

    THREE.SceneUtils.attach(this.el.object3D, this.el.sceneEl, this.camera);
  },

  onTouchEnd: function () {
    THREE.SceneUtils.detach(this.el.object3D, this.camera, this.el.sceneEl.object3D);
  }
});
