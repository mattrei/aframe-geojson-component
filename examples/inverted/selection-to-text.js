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
    this.lastSelectedMesh = null
    this.el.addEventListener('geojson-feature-selected', this.setText.bind(this));
  },
  setText: function (event) {
    const data = this.data;
    const {feature, mesh} = event.detail;

    console.log(mesh)
    mesh.visible = true

    if (this.lastSelectedMesh) {
      this.el.object3D.remove(this.lastSelectedMesh)  
    }
    this.el.object3D.add(mesh)

    //data.text.setAttribute('value', feature[data.featureProperty]);
  }
});
