/* globals AFRAME */

AFRAME.registerComponent('mercator-set-scale', {
  dependencies: ['geojson-texture'],

  init: function () {
    const geojsonTexture = this.el.components['geojson-texture'];
    geojsonTexture.getProjection().scale(geojsonTexture.data.canvas.width / (2 * Math.PI));
  }
});
