/* globals AFRAME, d3 */

AFRAME.registerComponent('draw-path', {
  dependencies: ['geojson-texture'],

  init: function () {
    this.el.addEventListener('geojson-texture-generated', e => {
      const geojsonTexture = this.el.components['geojson-texture'];
      const ctx = this.el.components.material.data.src.getContext('2d');

      const json = {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'LineString',
              'coordinates': [
                [
                  -110.5224609375, 35.24561909420681
                ],
                [
                  -90.7470703125, 40.81380923056958
                ]
              ]
            }
          }
        ]
      };

      const path = d3.geoPath(geojsonTexture.getProjection())
        .context(ctx);
      ctx.beginPath();
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 4;
      path(json.features[0]);
      ctx.stroke();
    });
  }
});
