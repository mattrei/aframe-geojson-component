/* globals AFRAME */

AFRAME.registerComponent('rotator', {
  dependencies: ['geojson'],
  schema: {
  },

  init: function () {

    // this.yawObject = document.querySelector('#yawObject').object3D;

  },

  tick: function (time, delta) {
    this.el.getObject3D('mesh').rotation.y += delta * 0.0001;
  }
});

