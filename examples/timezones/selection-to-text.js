/* globals AFRAME */

AFRAME.registerComponent('selection-to-text', {

  schema: {
  },

  init: function () {
    this.el.addEventListener('geojson-feature-selected', evt => {
      console.log(evt.detail.feature, evt.detail.point);
    });
  }
});
