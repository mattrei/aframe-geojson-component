## aframe-geojson-component

A Geojson/Topojson component for [A-Frame](https://aframe.io).

### API

This library provides two components working with Geojson/Topojson files

#### `geojson-equirectangular` component

##### Schema
| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| src | The geojson/topojson asset | "" |
| featureKey | The unique id of the Geojson feature properties. Must be given and unique. For Topojson this is always _id_ | id |
| dataSrc | The additional data that should be used emitted when selecting a feature | "" |
| dataType | The data type of the dataSrc attribute. Either csv or tsv. | csv |
| dataKey | The property of the data that is matched to the Geojson feature. | id |
| topologyObjct | *Only for Topojson*: Specifies the object to use. If `undefined` then the first will be taken. Mainly probably used for the world-atlas topojson. | `undefined` |
| raycastResolution | The "resolution" of the raycaster selection. The smaller the closer you have to point with raycaster on the feature to be selected. Set smaller if you have many features close by, higher otherwise. Normalized to a generally good working condition. | 1 |

##### Events
| Name | Data | Description |
| -------- | ----------- | ------------- |
| geojson-generated | { map, features }| map: the loaded data, features contains all geojson/topojson features|
| geojson-feature-selected | { feature }| The selected feature |

#### `geojson-canvas` component

##### Schema
| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| src | The geojson/topojson asset | "" |
| projection | One of [D3's projection](https://github.com/d3/d3-geo/blob/master/README.md#projections). Use the function name, like "geoEquirectangular" or "geoOrthographic". Use "geoEquirectangular" if you want to wrap it around a sphere. | "geoEquirectangular" |
| featureProperty | The geojson feature attribute that is used for matching with the generated hit mask. All Topojson documents have an id, most Geojson also in the feature description.  | "id" |
| topologyObjct | *Only for Topojson*: Specifies the object to use. If `undefined` then the first will be taken. | `undefined` |

##### Events
| Name | Data | Description |
| -------- | ----------- | ------------- |
| geojson-canvas-generated | _None_| |

### Styling
The library respects the commonly used [Geojson Styling Spec](https://github.com/mapbox/simplestyle-spec)

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.5.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-geojson-component/dist/aframe-geojson-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity geojson="foo: bar"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-geojson-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-geojson-component
```

Then require and use.

```js
require('aframe');
require('aframe-geojson-component');
```


### Implementation details
The componenet uses the D3 library to convert the Geojson object into a SVG.
The SVG is then converted into THREE.Js lines and points. Furthermore a invisble hit mask is generated to obtain the selected geojson feature via raycasting.
I have seen this idea and method implemented by the wonderful @thespite and enhanced it for more use cases.



https://gamedev.stackexchange.com/questions/131012/how-can-i-rotate-the-camera-for-a-player-walking-around-the-surface-of-a-sphere
