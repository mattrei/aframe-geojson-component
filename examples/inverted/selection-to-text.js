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
    this.lastSelectedMesh = null;
    this.el.addEventListener('geojson-feature-selected', this.setText.bind(this));
  },
  setText: function (event) {
    const data = this.data;
    const {feature, mesh} = event.detail;
    console.log(feature[data.featureProperty]);
    if (mesh) {
      mesh.visible = true;

      if (this.lastSelectedMesh) {
        this.lastSelectedMesh.visible = false;
        this.el.object3D.remove(this.lastSelectedMesh);
      }
      this.el.object3D.add(mesh);
      this.lastSelectedMesh = mesh;
    }

    data.text.setAttribute('value', feature[data.featureProperty]);
  }
});
