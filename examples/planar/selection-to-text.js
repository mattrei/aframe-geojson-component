/* globals AFRAME */

AFRAME.registerComponent('selection-to-text', {

  schema: {
    text: {
      type: 'selector',
      default: '#infoText'
    },
    featureProperty: {
      default: 'name'
    }
  },

  init: function () {
    this.el.addEventListener('geojson-feature-selected', this.setText.bind(this));
  },
  setText: function (event) {
    const data = this.data;
    const {feature} = event.detail;

    data.text.setAttribute('value', feature[data.featureProperty]);
  }
});
