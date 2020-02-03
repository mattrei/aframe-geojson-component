/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["t"] = acos;
/* harmony export (immutable) */ __webpack_exports__["g"] = asin;
/* harmony export (immutable) */ __webpack_exports__["u"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample_js__ = __webpack_require__(118);











var transformRadians = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__transform_js__["b" /* transformer */])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */]);
  }
});

function transformRotate(rotate) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__transform_js__["b" /* transformer */])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function scaleTranslate(k, dx, dy) {
  function transform(x, y) {
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function(x, y) {
    return [(x - dx) / k, (dy - y) / k];
  };
  return transform;
}

function scaleTranslateRotate(k, dx, dy, alpha) {
  var cosAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math_js__["d" /* cos */])(alpha),
      sinAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math_js__["e" /* sin */])(alpha),
      a = cosAlpha * k,
      b = sinAlpha * k,
      ai = cosAlpha / k,
      bi = sinAlpha / k,
      ci = (sinAlpha * dy - cosAlpha * dx) / k,
      fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function(x, y) {
    return [ai * x - bi * y + ci, fi - bi * x - ai * y];
  };
  return transform;
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
      alpha = 0, // post-rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian_js__["a" /* default */], // pre-clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity_js__["a" /* default */], // post-clip extent
      delta2 = 0.5, // precision
      projectResample,
      projectTransform,
      projectRotateTransform,
      cache,
      cacheStream;

  function projection(point) {
    return projectRotateTransform(point[0] * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */]);
  }

  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */]];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__clip_circle_js__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian_js__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity_js__["a" /* default */]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle_js__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */]];
  };

  projection.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * __WEBPACK_IMPORTED_MODULE_5__math_js__["h" /* radians */], recenter()) : alpha * __WEBPACK_IMPORTED_MODULE_5__math_js__["i" /* degrees */];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__resample_js__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math_js__["o" /* sqrt */])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit_js__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit_js__["b" /* fitSize */])(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit_js__["c" /* fitWidth */])(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit_js__["d" /* fitHeight */])(projection, height, object);
  };

  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, alpha).apply(null, project(lambda, phi)),
        transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k, x - center[0], y - center[1], alpha);
    rotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__rotation_js__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__compose_js__["a" /* default */])(project, transform);
    projectRotateTransform = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__compose_js__["a" /* default */])(rotate, projectTransform);
    projectResample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__resample_js__["a" /* default */])(projectTransform, delta2);
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["b"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__join__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sort__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__call__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nodes__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__size__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__empty__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__each__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__attr__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__style__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__property__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__classed__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__text__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__html__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__raise__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__lower__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__append__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__insert__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__remove__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__clone__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__datum__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__on__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__dispatch__ = __webpack_require__(133);
































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["a" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  join: __WEBPACK_IMPORTED_MODULE_6__join__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_7__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_8__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_9__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_10__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_11__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_12__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_13__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_14__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_15__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_16__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_17__style__["b" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_18__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_19__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_20__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_21__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_22__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_23__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_24__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_25__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_26__remove__["a" /* default */],
  clone: __WEBPACK_IMPORTED_MODULE_27__clone__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_28__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_29__on__["c" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_30__dispatch__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (selection);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


function spherical(cartesian) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(cartesian[1], cartesian[0]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(phi);
  return [cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(lambda), cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(x),
        cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y),
        k = scale(cx * cy);
    return [
      k * cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(x),
      k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(c),
        cc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(c);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(x * sc, z * cc),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])(z && y * sc / z)
    ];
  }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_js__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(15);






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */] ? direction > 0 ? 0 : 3
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */] ? direction > 0 ? 2 : 1
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__buffer_js__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["b" /* merge */])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__rejoin_js__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__line_js__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function rotationIdentity(lambda, phi) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */] ? lambda + Math.round(-lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* tau */]) * __WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* tau */]) ? (deltaPhi || deltaGamma ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__compose_js__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(deltaPhi),
      sinDeltaPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(deltaPhi),
      cosDeltaGamma = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(deltaGamma),
      sinDeltaGamma = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* degrees */], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* degrees */], coordinates;
  };

  return forward;
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transformer;
/* harmony default export */ __webpack_exports__["a"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(24);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect__ = __webpack_require__(32);
/* unused harmony reexport bisect */
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(5);
/* unused harmony reexport ascending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bisector__ = __webpack_require__(33);
/* unused harmony reexport bisector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cross__ = __webpack_require__(75);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descending__ = __webpack_require__(76);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deviation__ = __webpack_require__(34);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extent__ = __webpack_require__(35);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histogram__ = __webpack_require__(77);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__threshold_freedmanDiaconis__ = __webpack_require__(87);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__threshold_scott__ = __webpack_require__(88);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__threshold_sturges__ = __webpack_require__(39);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__max__ = __webpack_require__(79);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mean__ = __webpack_require__(80);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__median__ = __webpack_require__(81);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__merge__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_14__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__min__ = __webpack_require__(36);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pairs__ = __webpack_require__(37);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__permute__ = __webpack_require__(83);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__quantile__ = __webpack_require__(16);
/* unused harmony reexport quantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__range__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_19__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scan__ = __webpack_require__(84);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shuffle__ = __webpack_require__(85);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sum__ = __webpack_require__(86);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ticks__ = __webpack_require__(40);
/* unused harmony reexport ticks */
/* unused harmony reexport tickIncrement */
/* unused harmony reexport tickStep */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__transpose__ = __webpack_require__(41);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__variance__ = __webpack_require__(42);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__zip__ = __webpack_require__(89);
/* unused harmony reexport zip */





























/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear(), 4) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

/* harmony default export */ __webpack_exports__["a"] = (function(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
});


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(1);



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* pi */] / 3,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */]];
  };

  return p;
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea_js__ = __webpack_require__(112);




function conicEqualAreaRaw(y0, y1) {
  var sy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y0), n = (sy0 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea_js__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(c - 2 * n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y)) / n;
    return [r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(x *= n), r0 - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(r0y)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* sign */])(r0y), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic_js__["a" /* conicProjection */])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitSize;
/* harmony export (immutable) */ __webpack_exports__["c"] = fitWidth;
/* harmony export (immutable) */ __webpack_exports__["d"] = fitHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds_js__ = __webpack_require__(53);



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stream_js__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds_js__["a" /* default */]));
  fitBounds(__WEBPACK_IMPORTED_MODULE_1__path_bounds_js__["a" /* default */].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(1);




function mercatorRaw(lambda, phi) {
  return [lambda, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["k" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["n" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* tau */]);
});

function mercatorProjection(project) {
  var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* pi */] * scale(),
        t = m(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rotation_js__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(24);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return event; });
/* harmony export (immutable) */ __webpack_exports__["b"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["c"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(25);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["a" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = object;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reverse_js__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform_js__ = __webpack_require__(30);



/* harmony default export */ __webpack_exports__["a"] = (function(topology, o) {
  if (typeof o === "string") o = topology.objects[o];
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature(topology, o); })}
      : feature(topology, o);
});

function feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transform_js__["a" /* default */])(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__reverse_js__["a" /* default */])(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(65);


/* harmony default export */ __webpack_exports__["a"] = (function(transform) {
  if (transform == null) return __WEBPACK_IMPORTED_MODULE_0__identity_js__["a" /* default */];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(33);



var ascendingBisect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(42);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tickIncrement */
/* harmony export (immutable) */ __webpack_exports__["a"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* unused harmony default export */ var _unused_webpack_default_export = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream_js__ = __webpack_require__(4);





var areaRingSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])();

var areaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */];
  lambda0 = lambda, cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* quarterPi */]), sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi),
      sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(adLambda),
      v = k * sdLambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(adLambda);
  areaRingSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  areaSum.reset();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__stream_js__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation_js__ = __webpack_require__(11);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(radius),
      sinRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["g" /* spherical */])([cosRadius, -sinRadius * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(t), -sinRadius * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])(point), point[0] -= cosRadius;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["c" /* cartesianNormalizeInPlace */])(point);
  var radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["t" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* tau */];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var center = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])([0, 0]),
      radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(90),
      precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math_js__["i" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* radians */];
    ring = [];
    rotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__rotation_js__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant_js__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */],
          delta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda1 - lambda0);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */]) { // line crosses antimeridian
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]; // handle degeneracies
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(lambda0 - lambda1);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]
      ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["m" /* atan */])((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi0) * (cosPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi1)) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(lambda1)
          - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi1) * (cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi0)) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */], phi);
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_js__ = __webpack_require__(48);






/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var cr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* radians */],
      smallRadius = cr > 0,
      notHemisphere = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__circle_js__["b" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(lambda) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual_js__["a" /* default */])(point0, point2) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual_js__["a" /* default */])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual_js__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])(a),
        pb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["b" /* cartesianCross */])(pa, pb),
        n2n2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["b" /* cartesianCross */])(n1, n2),
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["e" /* cartesianScale */])(n1, c1),
        B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["e" /* cartesianScale */])(n2, c2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["f" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(A, u),
        uu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["d" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["o" /* sqrt */])(t2),
        q = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["e" /* cartesianScale */])(u, (-w - t) / uu);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["f" /* cartesianAddInPlace */])(q, A);
    q = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["g" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["e" /* cartesianScale */])(u, (-w + t) / uu);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["f" /* cartesianAddInPlace */])(q1, A);
      return [q, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["g" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__index_js__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */]]);
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(15);






/* harmony default export */ __webpack_exports__["a"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__buffer_js__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["b" /* merge */])(segments);
        var startInside = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__polygonContains_js__["a" /* default */])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rejoin_js__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - b[1]);
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual_js__ = __webpack_require__(54);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pointEqual_js__["a" /* default */])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length_js__ = __webpack_require__(52);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__length_js__["a" /* default */])(object);
});


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream_js__ = __webpack_require__(4);





var lengthSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */];
  lambda0 = lambda, sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi), cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */];
  var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi),
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(phi),
      delta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda - lambda0),
      cosDelta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(delta),
      sinDelta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  lengthSum.reset();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__stream_js__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(3);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */];
});


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




var sum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])();

function longitude(point) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(point[0]) <= __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */])
    return point[0];
  else
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["r" /* sign */])(point[0]) * ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* abs */])(point[0]) + __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */]) % __WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */]);
}

/* harmony default export */ __webpack_exports__["a"] = (function(polygon, point) {
  var lambda = longitude(point),
      phi = point[1],
      sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sin */])(phi),
      normal = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sin */])(lambda), -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  if (sinPhi === 1) phi = __WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */];
  else if (sinPhi === -1) phi = -__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */];

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = longitude(point0),
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* quarterPi */],
        sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sin */])(phi0),
        cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = longitude(point1),
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* quarterPi */],
          sinPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sin */])(phi1),
          cosPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* atan2 */])(k * sign * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["b" /* cartesianCross */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["a" /* cartesian */])(point0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["a" /* cartesian */])(point1));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["c" /* cartesianNormalizeInPlace */])(arc);
        var intersection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["b" /* cartesianCross */])(normal, arc);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian_js__["c" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* epsilon */]) ^ (winding & 1);
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea_js__ = __webpack_require__(20);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea_js__["a" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(28);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transform_js__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = (function(topology) {
  var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transform_js__["a" /* default */])(topology.transform), key,
      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

  function bboxPoint(p) {
    p = t(p);
    if (p[0] < x0) x0 = p[0];
    if (p[0] > x1) x1 = p[0];
    if (p[1] < y0) y0 = p[1];
    if (p[1] > y1) y1 = p[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = -1, n = arc.length, p;
    while (++i < n) {
      p = t(arc[i], i);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
  });

  for (key in topology.objects) {
    bboxGeometry(topology.objects[key]);
  }

  return [x0, y0, x1, y1];
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(65);


/* harmony default export */ __webpack_exports__["a"] = (function(transform) {
  if (transform == null) return __WEBPACK_IMPORTED_MODULE_0__identity_js__["a" /* default */];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2,
        n = input.length,
        output = new Array(n),
        x1 = Math.round((input[0] - dx) / kx),
        y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__dsv_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_js__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRow", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatValue", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tsv_js__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRow", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatValue", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autoType_js__ = __webpack_require__(90);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autoType", function() { return __WEBPACK_IMPORTED_MODULE_3__autoType_js__["a"]; });






/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area_js__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return __WEBPACK_IMPORTED_MODULE_0__area_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bounds_js__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return __WEBPACK_IMPORTED_MODULE_1__bounds_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__centroid_js__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return __WEBPACK_IMPORTED_MODULE_2__centroid_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circle_js__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return __WEBPACK_IMPORTED_MODULE_3__circle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clip_antimeridian_js__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return __WEBPACK_IMPORTED_MODULE_4__clip_antimeridian_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clip_circle_js__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return __WEBPACK_IMPORTED_MODULE_5__clip_circle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clip_extent_js__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return __WEBPACK_IMPORTED_MODULE_6__clip_extent_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clip_rectangle_js__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return __WEBPACK_IMPORTED_MODULE_7__clip_rectangle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contains_js__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return __WEBPACK_IMPORTED_MODULE_8__contains_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__distance_js__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return __WEBPACK_IMPORTED_MODULE_9__distance_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graticule_js__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return __WEBPACK_IMPORTED_MODULE_10__graticule_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return __WEBPACK_IMPORTED_MODULE_10__graticule_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interpolate_js__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return __WEBPACK_IMPORTED_MODULE_11__interpolate_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__length_js__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return __WEBPACK_IMPORTED_MODULE_12__length_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__path_index_js__ = __webpack_require__(104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return __WEBPACK_IMPORTED_MODULE_13__path_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projection_albers_js__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return __WEBPACK_IMPORTED_MODULE_14__projection_albers_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projection_albersUsa_js__ = __webpack_require__(107);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return __WEBPACK_IMPORTED_MODULE_15__projection_albersUsa_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea_js__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant_js__ = __webpack_require__(109);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal_js__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea_js__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant_js__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth_js__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarth", function() { return __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarthRaw", function() { return __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular_js__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic_js__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__projection_identity_js__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return __WEBPACK_IMPORTED_MODULE_24__projection_identity_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__projection_index_js__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return __WEBPACK_IMPORTED_MODULE_25__projection_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return __WEBPACK_IMPORTED_MODULE_25__projection_index_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__projection_mercator_js__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return __WEBPACK_IMPORTED_MODULE_26__projection_mercator_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_26__projection_mercator_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1_js__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__projection_orthographic_js__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return __WEBPACK_IMPORTED_MODULE_28__projection_orthographic_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_28__projection_orthographic_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__projection_stereographic_js__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return __WEBPACK_IMPORTED_MODULE_29__projection_stereographic_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_29__projection_stereographic_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator_js__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__rotation_js__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return __WEBPACK_IMPORTED_MODULE_31__rotation_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__stream_js__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return __WEBPACK_IMPORTED_MODULE_32__stream_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__transform_js__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return __WEBPACK_IMPORTED_MODULE_33__transform_js__["a"]; });






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).





























/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_0__create__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creator__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_1__creator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_2__local__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matcher__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_3__matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mouse__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_4__mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__namespace__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_5__namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__namespaces__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_6__namespaces__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__point__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return __WEBPACK_IMPORTED_MODULE_7__point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_8__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectAll__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_9__selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection_index__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_10__selection_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selector__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_11__selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectorAll__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_12__selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selection_style__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_13__selection_style__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__touch__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_14__touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__touches__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_15__touches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__window__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_16__window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__selection_on__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_17__selection_on__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_17__selection_on__["b"]; });




















/***/ }),
/* 71 */
/***/ (function(module, exports) {

// SVGPathSeg API polyfill
// https://github.com/progers/pathseg
//
// This is a drop-in replacement for the SVGPathSeg and SVGPathSegList APIs that were removed from
// SVG2 (https://lists.w3.org/Archives/Public/www-svg/2015Jun/0044.html), including the latest spec
// changes which were implemented in Firefox 43 and Chrome 46.

(function() { "use strict";
    if (!("SVGPathSeg" in window)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSeg
        window.SVGPathSeg = function(type, typeAsLetter, owningPathSegList) {
            this.pathSegType = type;
            this.pathSegTypeAsLetter = typeAsLetter;
            this._owningPathSegList = owningPathSegList;
        }

        window.SVGPathSeg.prototype.classname = "SVGPathSeg";

        window.SVGPathSeg.PATHSEG_UNKNOWN = 0;
        window.SVGPathSeg.PATHSEG_CLOSEPATH = 1;
        window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2;
        window.SVGPathSeg.PATHSEG_MOVETO_REL = 3;
        window.SVGPathSeg.PATHSEG_LINETO_ABS = 4;
        window.SVGPathSeg.PATHSEG_LINETO_REL = 5;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9;
        window.SVGPathSeg.PATHSEG_ARC_ABS = 10;
        window.SVGPathSeg.PATHSEG_ARC_REL = 11;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12;
        window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14;
        window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16;
        window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18;
        window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19;

        // Notify owning PathSegList on any changes so they can be synchronized back to the path element.
        window.SVGPathSeg.prototype._segmentChanged = function() {
            if (this._owningPathSegList)
                this._owningPathSegList.segmentChanged(this);
        }

        window.SVGPathSegClosePath = function(owningPathSegList) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", owningPathSegList);
        }
        window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegClosePath.prototype.toString = function() { return "[object SVGPathSegClosePath]"; }
        window.SVGPathSegClosePath.prototype._asPathString = function() { return this.pathSegTypeAsLetter; }
        window.SVGPathSegClosePath.prototype.clone = function() { return new window.SVGPathSegClosePath(undefined); }

        window.SVGPathSegMovetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoAbs.prototype.toString = function() { return "[object SVGPathSegMovetoAbs]"; }
        window.SVGPathSegMovetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoAbs.prototype.clone = function() { return new window.SVGPathSegMovetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegMovetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegMovetoRel.prototype.toString = function() { return "[object SVGPathSegMovetoRel]"; }
        window.SVGPathSegMovetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegMovetoRel.prototype.clone = function() { return new window.SVGPathSegMovetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoAbs.prototype.toString = function() { return "[object SVGPathSegLinetoAbs]"; }
        window.SVGPathSegLinetoAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoAbs.prototype.clone = function() { return new window.SVGPathSegLinetoAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoRel.prototype.toString = function() { return "[object SVGPathSegLinetoRel]"; }
        window.SVGPathSegLinetoRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegLinetoRel.prototype.clone = function() { return new window.SVGPathSegLinetoRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicAbs = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicAbs]"; }
        window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicAbs(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicRel = function(owningPathSegList, x, y, x1, y1, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicRel]"; }
        window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicRel(undefined, this._x, this._y, this._x1, this._y1, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticAbs = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticAbs]"; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticRel = function(owningPathSegList, x, y, x1, y1) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x1 = x1;
            this._y1 = y1;
        }
        window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticRel]"; }
        window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticRel(undefined, this._x, this._y, this._x1, this._y1); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", { get: function() { return this._x1; }, set: function(x1) { this._x1 = x1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", { get: function() { return this._y1; }, set: function(y1) { this._y1 = y1; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcAbs = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcAbs.prototype.toString = function() { return "[object SVGPathSegArcAbs]"; }
        window.SVGPathSegArcAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcAbs.prototype.clone = function() { return new window.SVGPathSegArcAbs(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegArcRel = function(owningPathSegList, x, y, r1, r2, angle, largeArcFlag, sweepFlag) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", owningPathSegList);
            this._x = x;
            this._y = y;
            this._r1 = r1;
            this._r2 = r2;
            this._angle = angle;
            this._largeArcFlag = largeArcFlag;
            this._sweepFlag = sweepFlag;
        }
        window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegArcRel.prototype.toString = function() { return "[object SVGPathSegArcRel]"; }
        window.SVGPathSegArcRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y; }
        window.SVGPathSegArcRel.prototype.clone = function() { return new window.SVGPathSegArcRel(undefined, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag); }
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", { get: function() { return this._r1; }, set: function(r1) { this._r1 = r1; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", { get: function() { return this._r2; }, set: function(r2) { this._r2 = r2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", { get: function() { return this._angle; }, set: function(angle) { this._angle = angle; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", { get: function() { return this._largeArcFlag; }, set: function(largeArcFlag) { this._largeArcFlag = largeArcFlag; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", { get: function() { return this._sweepFlag; }, set: function(sweepFlag) { this._sweepFlag = sweepFlag; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalAbs = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalAbs]"; }
        window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalAbs(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoHorizontalRel = function(owningPathSegList, x) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", owningPathSegList);
            this._x = x;
        }
        window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() { return "[object SVGPathSegLinetoHorizontalRel]"; }
        window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x; }
        window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() { return new window.SVGPathSegLinetoHorizontalRel(undefined, this._x); }
        Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalAbs = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalAbs]"; }
        window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalAbs(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegLinetoVerticalRel = function(owningPathSegList, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", owningPathSegList);
            this._y = y;
        }
        window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegLinetoVerticalRel.prototype.toString = function() { return "[object SVGPathSegLinetoVerticalRel]"; }
        window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._y; }
        window.SVGPathSegLinetoVerticalRel.prototype.clone = function() { return new window.SVGPathSegLinetoVerticalRel(undefined, this._y); }
        Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothAbs = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothAbs]"; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoCubicSmoothRel = function(owningPathSegList, x, y, x2, y2) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", owningPathSegList);
            this._x = x;
            this._y = y;
            this._x2 = x2;
            this._y2 = y2;
        }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoCubicSmoothRel]"; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, this._x, this._y, this._x2, this._y2); }
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", { get: function() { return this._x2; }, set: function(x2) { this._x2 = x2; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", { get: function() { return this._y2; }, set: function(y2) { this._y2 = y2; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothAbs = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        window.SVGPathSegCurvetoQuadraticSmoothRel = function(owningPathSegList, x, y) {
            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", owningPathSegList);
            this._x = x;
            this._y = y;
        }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype);
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() { return "[object SVGPathSegCurvetoQuadraticSmoothRel]"; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() { return this.pathSegTypeAsLetter + " " + this._x + " " + this._y; }
        window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, this._x, this._y); }
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", { get: function() { return this._x; }, set: function(x) { this._x = x; this._segmentChanged(); }, enumerable: true });
        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", { get: function() { return this._y; }, set: function(y) { this._y = y; this._segmentChanged(); }, enumerable: true });

        // Add createSVGPathSeg* functions to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-Interfacewindow.SVGPathElement.
        window.SVGPathElement.prototype.createSVGPathSegClosePath = function() { return new window.SVGPathSegClosePath(undefined); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(x, y) { return new window.SVGPathSegMovetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(x, y) { return new window.SVGPathSegMovetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(x, y) { return new window.SVGPathSegLinetoAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(x, y) { return new window.SVGPathSegLinetoRel(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicAbs(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(x, y, x1, y1, x2, y2) { return new window.SVGPathSegCurvetoCubicRel(undefined, x, y, x1, y1, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticAbs(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(x, y, x1, y1) { return new window.SVGPathSegCurvetoQuadraticRel(undefined, x, y, x1, y1); }
        window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcAbs(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegArcRel = function(x, y, r1, r2, angle, largeArcFlag, sweepFlag) { return new window.SVGPathSegArcRel(undefined, x, y, r1, r2, angle, largeArcFlag, sweepFlag); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(x) { return new window.SVGPathSegLinetoHorizontalAbs(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(x) { return new window.SVGPathSegLinetoHorizontalRel(undefined, x); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(y) { return new window.SVGPathSegLinetoVerticalAbs(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(y) { return new window.SVGPathSegLinetoVerticalRel(undefined, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothAbs(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(x, y, x2, y2) { return new window.SVGPathSegCurvetoCubicSmoothRel(undefined, x, y, x2, y2); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothAbs(undefined, x, y); }
        window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(x, y) { return new window.SVGPathSegCurvetoQuadraticSmoothRel(undefined, x, y); }

        if (!("getPathSegAtLength" in window.SVGPathElement.prototype)) {
            // Add getPathSegAtLength to SVGPathElement.
            // Spec: https://www.w3.org/TR/SVG11/single-page.html#paths-__svg__SVGPathElement__getPathSegAtLength
            // This polyfill requires SVGPathElement.getTotalLength to implement the distance-along-a-path algorithm.
            window.SVGPathElement.prototype.getPathSegAtLength = function(distance) {
                if (distance === undefined || !isFinite(distance))
                    throw "Invalid arguments.";

                var measurementElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
                measurementElement.setAttribute("d", this.getAttribute("d"));
                var lastPathSegment = measurementElement.pathSegList.numberOfItems - 1;

                // If the path is empty, return 0.
                if (lastPathSegment <= 0)
                    return 0;

                do {
                    measurementElement.pathSegList.removeItem(lastPathSegment);
                    if (distance > measurementElement.getTotalLength())
                        break;
                    lastPathSegment--;
                } while (lastPathSegment > 0);
                return lastPathSegment;
            }
        }
    }

    // Checking for SVGPathSegList in window checks for the case of an implementation without the
    // SVGPathSegList API.
    // The second check for appendItem is specific to Firefox 59+ which removed only parts of the
    // SVGPathSegList API (e.g., appendItem). In this case we need to re-implement the entire API
    // so the polyfill data (i.e., _list) is used throughout.
    if (!("SVGPathSegList" in window) || !("appendItem" in window.SVGPathSegList.prototype)) {
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGPathSegList
        window.SVGPathSegList = function(pathElement) {
            this._pathElement = pathElement;
            this._list = this._parsePath(this._pathElement.getAttribute("d"));

            // Use a MutationObserver to catch changes to the path's "d" attribute.
            this._mutationObserverConfig = { "attributes": true, "attributeFilter": ["d"] };
            this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        window.SVGPathSegList.prototype.classname = "SVGPathSegList";

        Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
            get: function() {
                this._checkPathSynchronizedToList();
                return this._list.length;
            },
            enumerable: true
        });

        // Add the pathSegList accessors to window.SVGPathElement.
        // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-InterfaceSVGAnimatedPathData
        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
            get: function() {
                if (!this._pathSegList)
                    this._pathSegList = new window.SVGPathSegList(this);
                return this._pathSegList;
            },
            enumerable: true
        });
        // FIXME: The following are not implemented and simply return window.SVGPathElement.pathSegList.
        Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });
        Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", { get: function() { return this.pathSegList; }, enumerable: true });

        // Process any pending mutations to the path element and update the list as needed.
        // This should be the first call of all public functions and is needed because
        // MutationObservers are not synchronous so we can have pending asynchronous mutations.
        window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
        }

        window.SVGPathSegList.prototype._updateListFromPathMutations = function(mutationRecords) {
            if (!this._pathElement)
                return;
            var hasPathMutations = false;
            mutationRecords.forEach(function(record) {
                if (record.attributeName == "d")
                    hasPathMutations = true;
            });
            if (hasPathMutations)
                this._list = this._parsePath(this._pathElement.getAttribute("d"));
        }

        // Serialize the list and update the path's 'd' attribute.
        window.SVGPathSegList.prototype._writeListToPath = function() {
            this._pathElementMutationObserver.disconnect();
            this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list));
            this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
        }

        // When a path segment changes the list needs to be synchronized back to the path element.
        window.SVGPathSegList.prototype.segmentChanged = function(pathSeg) {
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.clear = function() {
            this._checkPathSynchronizedToList();

            this._list.forEach(function(pathSeg) {
                pathSeg._owningPathSegList = null;
            });
            this._list = [];
            this._writeListToPath();
        }

        window.SVGPathSegList.prototype.initialize = function(newItem) {
            this._checkPathSynchronizedToList();

            this._list = [newItem];
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype._checkValidIndex = function(index) {
            if (isNaN(index) || index < 0 || index >= this.numberOfItems)
                throw "INDEX_SIZE_ERR";
        }

        window.SVGPathSegList.prototype.getItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            return this._list[index];
        }

        window.SVGPathSegList.prototype.insertItemBefore = function(newItem, index) {
            this._checkPathSynchronizedToList();

            // Spec: If the index is greater than or equal to numberOfItems, then the new item is appended to the end of the list.
            if (index > this.numberOfItems)
                index = this.numberOfItems;
            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.splice(index, 0, newItem);
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.replaceItem = function(newItem, index) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._checkValidIndex(index);
            this._list[index] = newItem;
            newItem._owningPathSegList = this;
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList.prototype.removeItem = function(index) {
            this._checkPathSynchronizedToList();

            this._checkValidIndex(index);
            var item = this._list[index];
            this._list.splice(index, 1);
            this._writeListToPath();
            return item;
        }

        window.SVGPathSegList.prototype.appendItem = function(newItem) {
            this._checkPathSynchronizedToList();

            if (newItem._owningPathSegList) {
                // SVG2 spec says to make a copy.
                newItem = newItem.clone();
            }
            this._list.push(newItem);
            newItem._owningPathSegList = this;
            // TODO: Optimize this to just append to the existing attribute.
            this._writeListToPath();
            return newItem;
        }

        window.SVGPathSegList._pathSegArrayAsString = function(pathSegArray) {
            var string = "";
            var first = true;
            pathSegArray.forEach(function(pathSeg) {
                if (first) {
                    first = false;
                    string += pathSeg._asPathString();
                } else {
                    string += " " + pathSeg._asPathString();
                }
            });
            return string;
        }

        // This closely follows SVGPathParser::parsePath from Source/core/svg/SVGPathParser.cpp.
        window.SVGPathSegList.prototype._parsePath = function(string) {
            if (!string || string.length == 0)
                return [];

            var owningPathSegList = this;

            var Builder = function() {
                this.pathSegList = [];
            }

            Builder.prototype.appendSegment = function(pathSeg) {
                this.pathSegList.push(pathSeg);
            }

            var Source = function(string) {
                this._string = string;
                this._currentIndex = 0;
                this._endIndex = this._string.length;
                this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN;

                this._skipOptionalSpaces();
            }

            Source.prototype._isCurrentSpace = function() {
                var character = this._string[this._currentIndex];
                return character <= " " && (character == " " || character == "\n" || character == "\t" || character == "\r" || character == "\f");
            }

            Source.prototype._skipOptionalSpaces = function() {
                while (this._currentIndex < this._endIndex && this._isCurrentSpace())
                    this._currentIndex++;
                return this._currentIndex < this._endIndex;
            }

            Source.prototype._skipOptionalSpacesOrDelimiter = function() {
                if (this._currentIndex < this._endIndex && !this._isCurrentSpace() && this._string.charAt(this._currentIndex) != ",")
                    return false;
                if (this._skipOptionalSpaces()) {
                    if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ",") {
                        this._currentIndex++;
                        this._skipOptionalSpaces();
                    }
                }
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.hasMoreData = function() {
                return this._currentIndex < this._endIndex;
            }

            Source.prototype.peekSegmentType = function() {
                var lookahead = this._string[this._currentIndex];
                return this._pathSegTypeFromChar(lookahead);
            }

            Source.prototype._pathSegTypeFromChar = function(lookahead) {
                switch (lookahead) {
                case "Z":
                case "z":
                    return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                case "M":
                    return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                case "m":
                    return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                case "L":
                    return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                case "l":
                    return window.SVGPathSeg.PATHSEG_LINETO_REL;
                case "C":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                case "c":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                case "Q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                case "q":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                case "A":
                    return window.SVGPathSeg.PATHSEG_ARC_ABS;
                case "a":
                    return window.SVGPathSeg.PATHSEG_ARC_REL;
                case "H":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                case "h":
                    return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                case "V":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                case "v":
                    return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                case "S":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                case "s":
                    return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                case "T":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                case "t":
                    return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                default:
                    return window.SVGPathSeg.PATHSEG_UNKNOWN;
                }
            }

            Source.prototype._nextCommandHelper = function(lookahead, previousCommand) {
                // Check for remaining coordinates in the current command.
                if ((lookahead == "+" || lookahead == "-" || lookahead == "." || (lookahead >= "0" && lookahead <= "9")) && previousCommand != window.SVGPathSeg.PATHSEG_CLOSEPATH) {
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_ABS)
                        return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                    if (previousCommand == window.SVGPathSeg.PATHSEG_MOVETO_REL)
                        return window.SVGPathSeg.PATHSEG_LINETO_REL;
                    return previousCommand;
                }
                return window.SVGPathSeg.PATHSEG_UNKNOWN;
            }

            Source.prototype.initialCommandIsMoveTo = function() {
                // If the path is empty it is still valid, so return true.
                if (!this.hasMoreData())
                    return true;
                var command = this.peekSegmentType();
                // Path must start with moveTo.
                return command == window.SVGPathSeg.PATHSEG_MOVETO_ABS || command == window.SVGPathSeg.PATHSEG_MOVETO_REL;
            }

            // Parse a number from an SVG path. This very closely follows genericParseNumber(...) from Source/core/svg/SVGParserUtilities.cpp.
            // Spec: http://www.w3.org/TR/SVG11/single-page.html#paths-PathDataBNF
            Source.prototype._parseNumber = function() {
                var exponent = 0;
                var integer = 0;
                var frac = 1;
                var decimal = 0;
                var sign = 1;
                var expsign = 1;

                var startIndex = this._currentIndex;

                this._skipOptionalSpaces();

                // Read the sign.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "+")
                    this._currentIndex++;
                else if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == "-") {
                    this._currentIndex++;
                    sign = -1;
                }

                if (this._currentIndex == this._endIndex || ((this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && this._string.charAt(this._currentIndex) != "."))
                    // The first character of a number must be one of [0-9+-.].
                    return undefined;

                // Read the integer part, build right-to-left.
                var startIntPartIndex = this._currentIndex;
                while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9")
                    this._currentIndex++; // Advance to first non-digit.

                if (this._currentIndex != startIntPartIndex) {
                    var scanIntPartIndex = this._currentIndex - 1;
                    var multiplier = 1;
                    while (scanIntPartIndex >= startIntPartIndex) {
                        integer += multiplier * (this._string.charAt(scanIntPartIndex--) - "0");
                        multiplier *= 10;
                    }
                }

                // Read the decimals.
                if (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) == ".") {
                    this._currentIndex++;

                    // There must be a least one digit following the .
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;
                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        frac *= 10;
                        decimal += (this._string.charAt(this._currentIndex) - "0") / frac;
                        this._currentIndex += 1;
                    }
                }

                // Read the exponent part.
                if (this._currentIndex != startIndex && this._currentIndex + 1 < this._endIndex && (this._string.charAt(this._currentIndex) == "e" || this._string.charAt(this._currentIndex) == "E") && (this._string.charAt(this._currentIndex + 1) != "x" && this._string.charAt(this._currentIndex + 1) != "m")) {
                    this._currentIndex++;

                    // Read the sign of the exponent.
                    if (this._string.charAt(this._currentIndex) == "+") {
                        this._currentIndex++;
                    } else if (this._string.charAt(this._currentIndex) == "-") {
                        this._currentIndex++;
                        expsign = -1;
                    }

                    // There must be an exponent.
                    if (this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                        return undefined;

                    while (this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9") {
                        exponent *= 10;
                        exponent += (this._string.charAt(this._currentIndex) - "0");
                        this._currentIndex++;
                    }
                }

                var number = integer + decimal;
                number *= sign;

                if (exponent)
                    number *= Math.pow(10, expsign * exponent);

                if (startIndex == this._currentIndex)
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();

                return number;
            }

            Source.prototype._parseArcFlag = function() {
                if (this._currentIndex >= this._endIndex)
                    return undefined;
                var flag = false;
                var flagChar = this._string.charAt(this._currentIndex++);
                if (flagChar == "0")
                    flag = false;
                else if (flagChar == "1")
                    flag = true;
                else
                    return undefined;

                this._skipOptionalSpacesOrDelimiter();
                return flag;
            }

            Source.prototype.parseSegment = function() {
                var lookahead = this._string[this._currentIndex];
                var command = this._pathSegTypeFromChar(lookahead);
                if (command == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                    // Possibly an implicit command. Not allowed if this is the first command.
                    if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                    command = this._nextCommandHelper(lookahead, this._previousCommand);
                    if (command == window.SVGPathSeg.PATHSEG_UNKNOWN)
                        return null;
                } else {
                    this._currentIndex++;
                }

                this._previousCommand = command;

                switch (command) {
                case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                    return new window.SVGPathSegMovetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                    return new window.SVGPathSegMovetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_REL:
                    return new window.SVGPathSegLinetoRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                    return new window.SVGPathSegLinetoAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                    return new window.SVGPathSegLinetoHorizontalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                    return new window.SVGPathSegLinetoHorizontalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                    return new window.SVGPathSegLinetoVerticalRel(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                    return new window.SVGPathSegLinetoVerticalAbs(owningPathSegList, this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                    this._skipOptionalSpaces();
                    return new window.SVGPathSegClosePath(owningPathSegList);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothRel(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                    var points = {x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoCubicSmoothAbs(owningPathSegList, points.x, points.y, points.x2, points.y2);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticRel(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegCurvetoQuadraticAbs(owningPathSegList, points.x, points.y, points.x1, points.y1);
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                    return new window.SVGPathSegCurvetoQuadraticSmoothRel(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                    return new window.SVGPathSegCurvetoQuadraticSmoothAbs(owningPathSegList, this._parseNumber(), this._parseNumber());
                case window.SVGPathSeg.PATHSEG_ARC_REL:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcRel(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                case window.SVGPathSeg.PATHSEG_ARC_ABS:
                    var points = {x1: this._parseNumber(), y1: this._parseNumber(), arcAngle: this._parseNumber(), arcLarge: this._parseArcFlag(), arcSweep: this._parseArcFlag(), x: this._parseNumber(), y: this._parseNumber()};
                    return new window.SVGPathSegArcAbs(owningPathSegList, points.x, points.y, points.x1, points.y1, points.arcAngle, points.arcLarge, points.arcSweep);
                default:
                    throw "Unknown path seg type."
                }
            }

            var builder = new Builder();
            var source = new Source(string);

            if (!source.initialCommandIsMoveTo())
                return [];
            while (source.hasMoreData()) {
                var pathSeg = source.parseSegment();
                if (!pathSeg)
                    return [];
                builder.appendSegment(pathSeg);
            }

            return builder.pathSegList;
        }
    }
}());


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bbox_js__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return __WEBPACK_IMPORTED_MODULE_0__bbox_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_js__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return __WEBPACK_IMPORTED_MODULE_1__feature_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesh_js__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return __WEBPACK_IMPORTED_MODULE_2__mesh_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return __WEBPACK_IMPORTED_MODULE_2__mesh_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__merge_js__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_3__merge_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return __WEBPACK_IMPORTED_MODULE_3__merge_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__neighbors_js__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return __WEBPACK_IMPORTED_MODULE_4__neighbors_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quantize_js__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_5__quantize_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transform_js__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return __WEBPACK_IMPORTED_MODULE_6__transform_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__untransform_js__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return __WEBPACK_IMPORTED_MODULE_7__untransform_js__["a"]; });










/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

/* globals AFRAME, THREE, SVGPathSegMovetoAbs, SVGPathSegLinetoRel, SVGPathSegLinetoVerticalRel, SVGPathSegLinetoHorizontalRel, SVGPathSegLinetoHorizontalAbs, SVGPathSegLinetoVerticalAbs, SVGPathSegClosePath, SVGPathSegLinetoAbs */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

__webpack_require__(71); // polyfill

const d3sel = __webpack_require__(70)
const d3geo = __webpack_require__(69)
const d3dsv = __webpack_require__(68)
const topojson = __webpack_require__(72);

const FEATURE_SELECTED_EVENT = 'geojson-feature-selected';
const GEOJSON_GENERATED_EVENT = 'geojson-loaded';

AFRAME.registerComponent('geojson', {
  dependencies: ['geometry', 'material'],
  schema: {
    src: {
      type: 'asset'
    },
    featureKey: {
      default: 'id'
    },
    dataSrc: {
      type: 'asset'
    },
    dataType: {
      default: 'tsv',
      oneOf: ['csv', 'tsv']
    },
    dataKey: {
      default: 'id'
    },
    // for a topojson, else first will be taken
    topologyObject: {
      default: ''
    },
    raycasterAccuracy: {
      default: 1,
      type: 'int'
    },
    projection: {
      default: 'geoEquirectangular'
    },
    featureEventName: {
      default: '',
      //oneOf: ['', 'click', 'raycaster-intersected']
    },
    lineWidth: {
      default: 1
    },
    pointScale: {
      default: 0.1
    },
    pointScaling: {
      default: 'linear',
      oneOf: ['linear', 'exponential']
    },
    pointSizeFeature: {
      default: ''
    },
    pointAs: {
      default: 'point',
      oneOf: ['point', 'line']
    },
    omitBoundingBox: {
      default: false,
      type: 'boolean'
    },
    selectLatency: {
      default: 500
    }
  },

  init: function () {
    const data = this.data;

    this.loader = new THREE.FileLoader();

    this.el.addEventListener('componentchanged', (evt) => {
      const mesh = this.el.getObject3D('mesh');
      if (evt.detail.name === 'material') {
        const matData = evt.target.getAttribute('material');
        if (mesh.type === 'Group') {

          let i;
          for (i=0; i < mesh.children.length; i++) {
            const child = mesh.children[i];
            child.material.color = new THREE.Color(matData.color);
            child.material.opacity = matData.opacity;
          }
        } else {
          mesh.material.color = new THREE.Color(matData.color);
          mesh.material.opacity = matData.opacity;
        }
      }
    });

    this.tick = AFRAME.utils.throttleTick(this.tick, data.selectLatency, this);
  },

  update: function (oldData) {
    const data = this.data;

    // Nothing changed
    if (AFRAME.utils.deepEqual(oldData, data)) {
      return;
    }

    const src = data.src;
    if (src && src !== oldData.src) {
      this.loader.load(src, this.onGeojsonLoaded.bind(this));
    }
    // remove visualisation if src is not set
    if (!src) {
      this.el.removeObject3D('mesh');
      if (this.hitScene) {
        this.hitScene.remove(this.maskMesh);
      }
      this.maskMesh = null;
      this.geometryMap = null;
    }

    if (this.mesh) {
      if (oldData.lineWidth !== data.lineWidth) {
        this.mesh.material.linewidth = data.lineWidth;
      }
      if (oldData.pointScale !== data.pointScale) {
        this.mesh.material.size = data.pointScale;
      }
    }
  },

  remove: function() {

  },

  tick: function (time, delta) {
    if (this.data.featureEventName === 'raycaster-intersected') {
        // https://github.com/aframevr/aframe/issues/3248
      const raycasterEls = document.querySelectorAll('[raycaster]');
      let i;
      for (i=0; i < raycasterEls.length; i++) {
        const raycasterEl = raycasterEls[i];
        //raycasterEl.components.raycaster.updateOriginDirection();
        if (raycasterEl.components.raycaster.data.enabled) {
          const detail = raycasterEl.components.raycaster.getIntersection(this.el);
          if (detail) {
            this.select(raycasterEl);
          }
        }
      }
    }
  },
  getMaskMesh: function () {
    return this.maskMesh;
  },
  getData: function () {
    return this.geometryMap;
  },
  onGeojsonLoaded: function (file) {
    const json = JSON.parse(file);

    const data = this.data;

    this.dataMap = new Map();
    if (data.dataSrc) {
      this.loader.load(data.dataSrc, this.onDataLoaded.bind(this));
    }

    const width = 360; // corresponds to longitude
    const height = 180; // corresponds to positive scaled latitude

    const projectionFunc = d3geo[data.projection];
    const projection = projectionFunc().scale(height / Math.PI)
            // http://bl.ocks.org/mbostock/3757119
            .translate([
              width / 2,
              height / 2
            ]);
    const path = d3geo.geoPath(projection).pointRadius(0.1); // why 0.1?

    var svg = d3sel.select('body').append('svg').attr('width', width).attr('height', height);

    var isTopojson = json.features === undefined;

    var features;
    if (isTopojson) {
      var topologyObjectName = data.topologyObject;
      if (!data.topologyObject) {
        topologyObjectName = Object.keys(json.objects)[0];
      }
      features = topojson.feature(json, json.objects[topologyObjectName]).features;
    } else {
      features = json.features;
    }

    var paths = svg.append('g').attr('class', 'features');
    paths.selectAll('path')
            .data(features)
            .enter()
            .append('path')
            .attr('d', path).attr('fill', 'none')
            .style('stroke', 'black'); // important for lines!

    this.geometryMap = this.generateLinesMap(svg.selectAll('path'), isTopojson);
    const isPointData = this.geometryMap.size === 0;
    if (isPointData) {
      this.geometryMap = this.generatePointsMap(svg.selectAll('path'));
    }

    svg.remove();

    this.matComponent = this.el.components.material;

    this._selectedFeature = null;
    this.isSelecting = false;

    this.codes = new Map(); // country color codes for selecting
    this.hitScene = new THREE.Scene();
    this.hitCamera = new THREE.PerspectiveCamera(0.001, 1, 0.01, 3000);
    this.hitTexture = new THREE.WebGLRenderTarget(1, 1, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType
    });
    this.hitTexture.generateMipMaps = false;
    this.hitTexture.setSize(100, 100);

    this.shapesMap = new Map();

    const mesh = !isPointData ? this.generateLines(features)
      : (data.pointAs === 'point' ? this.generatePoints() : this.generateBars());

    this.mesh = mesh;

    const group = new THREE.Group();
    this.shapesMap.forEach(function (shape) {
      group.add(shape);
    });

    if (isTopojson || isPointData) {
      this.el.setObject3D('mesh', mesh);
    } else {
      this.el.setObject3D('mesh', group);
    }

    this.maskMesh = this.generateMask(features);

    if (data.featureEventName !== 'raycaster-intersected') {
      this.el.addEventListener(data.featureEventName, this.select.bind(this));
    }

    this.el.emit(GEOJSON_GENERATED_EVENT, {data: this.geometryMap});
  },
  onDataLoaded: function (file) {
    const data = this.data;

    const contents = data.dataType === 'tsv' ? d3dsv.tsvParse(file) : d3dsv.csvParse(file);

    for (var i = 0; i < contents.length; i++) {
      const content = contents[i];
      this.dataMap.set(content[data.dataKey], content);
    }
  },
  generatePointsMap: function (paths) {
    var map = new Map();

    var pathNodes = paths.nodes();

    for (var i = 0; i < pathNodes.length; i++) {
      const p = pathNodes[i];

      const properties = p.__data__.properties;
      const key = properties[this.data.featureKey];
      const type = p.__data__.geometry.type; // Point, String, Polygon
      // const pointSize = properties[this.data.pointSizeFeature] || 1;

      var segments = p.pathSegList;
      for (var j = 0; j < segments.numberOfItems; j++) {
        var segment = segments.getItem(j);
        if (segment instanceof SVGPathSegMovetoAbs) {
          if (type.includes('Point')) {
            const xy = new THREE.Vector2(segment.x, segment.y);
            map.set(key, {point: xy, properties: properties});
          }
        }
      }
    }

    return map;
  },
  generateLinesMap: function (paths, isTopojson) {
    var map = new Map();

    const pathNodes = paths.nodes();

    pathNodes.forEach((p) => {
      const key = isTopojson ? p.__data__.id : p.__data__.properties[this.data.featureKey];
      const type = p.__data__.geometry.type; // Point, String, Polygon

      if (type.includes('Point')) return;

      const territory = {
        id: key,
        lines: [],
        properties: null
      };
      var line = [];
            // var vertices = line.vertices
      var x,
        y;

            // origin coorindates when closing the path
      var ox,
        oy;
      var px,
        py;

      var segments = p.pathSegList;
      for (var i = 0; i < segments.numberOfItems; i++) {
        var segment = segments.getItem(i);

        if (this.data.omitBoundingBox &&
              (
              (segment.x >= 359.9 || segment.x <= 0.1) ||
              (segment.y >= 179.9 || segment.y <= 0.1)
              ) && segment instanceof SVGPathSegLinetoAbs) {
                    // some GeoJSON files have a border around them
                    // to avoid having a frame aroudn the plane we omit
                    // the top-, left, right-, bottomost lines
                    // console.log(segment.x + ' ' + segment.y)
        } else {
          if (segment instanceof SVGPathSegMovetoAbs) {
            x = segment.x;
            y = segment.y;
            ox = x;
            oy = y;

            territory.lines.push(line);
            line = [];
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoRel) {
            x = px + segment.x;
            y = py + segment.y;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoAbs) {
            x = segment.x;
            y = segment.y;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoVerticalRel) {
            x = px;
            y = py + segment.y;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoHorizontalRel) {
            x = px + segment.x;
            y = py;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoHorizontalAbs) {
            x = segment.x;
            y = py;
            line.push(new THREE.Vector2(x, y));
          }
          if (segment instanceof SVGPathSegLinetoVerticalAbs) {
            x = px;
            y = segment.y;
            line.push(new THREE.Vector2(x, y));
          }

          if (segment instanceof SVGPathSegClosePath || i + 1 === segments.numberOfItems) {
            x = ox;
            y = oy;
            if (type.includes('Polygon') && isTopojson) { // do not close line geometries, just polygons
                            // close the segment only if it is a topojson
              line.push(new THREE.Vector2(x, y));
            }
            territory.lines.push(line);
            line = [];
          }

          px = x;
          py = y;
        }
      }

      territory.lines = territory.lines.filter(function (l) {
        return l.length > 0;
      });

      if (!isTopojson) {
        territory.properties = p.__data__.properties;
      }

      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(territory);
    });

    return map;
  },
  generatePoints: function (features) {
    const mapData = this.geometryMap;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(mapData.size * 3);

    // TODO? if data defines size or color
    // const sizes = new Float32Array(mapData.size);
    // const colors = new Float32Array(points)

    var i = 0;
    mapData.forEach((entry, idx) => {
      const pos = this.latLngToVec3(entry.point.y, entry.point.x);

      positions[i * 3] = pos.x;
      positions[i * 3 + 1] = pos.y;
      positions[i * 3 + 2] = pos.z;

      entry.position = new THREE.Vector3().copy(pos);

      // sizes[i] = 0.01;

      i += 1;
    });

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    // geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    // does not work or?
    geometry.computeBoundingSphere();

    const material = new THREE.PointsMaterial({
      size: this.data.pointScale,
      sizeAttenuation: true,
      transparent: this.matComponent.data.transparent,
      color: this.matComponent.data.color,
      opacity: this.matComponent.data.opacity
    });

    const mesh = new THREE.Points(
            geometry,
            material
        );

    return mesh;
  },
  generateBars: function () {
    const mapData = this.geometryMap;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(mapData.size * 3 * 2);

    const tmp = new THREE.Vector3();
    var i = 0;
    mapData.forEach((entry, idx) => {
      const pos = this.latLngToVec3(entry.point.y, entry.point.x);
      positions[i * 6] = pos.x;
      positions[i * 6 + 1] = pos.y;
      positions[i * 6 + 2] = pos.z;
      entry.position = new THREE.Vector3().copy(pos);

      var pointSize = entry.properties[this.data.pointSizeFeature] || 1;

      if (this.data.pointScaling === 'exponential') {
        pointSize = Math.pow(pointSize, 2);
      }

      const scalingFactor = pointSize * this.data.pointScale;
      tmp.copy(pos).multiplyScalar(1 + scalingFactor);
      positions[ i * 6 + 3 ] = tmp.x;
      positions[ i * 6 + 4 ] = tmp.y;
      positions[ i * 6 + 5 ] = tmp.z;
      entry.endPosition = new THREE.Vector3().copy(tmp);

      i += 1;
    });

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.computeBoundingSphere();

    const material = new THREE.LineBasicMaterial({
      transparent: this.matComponent.data.transparent,
      color: this.matComponent.data.color,
      opacity: this.matComponent.data.opacity,
      linewidth: this.data.lineWidth
    });

    const mesh = new THREE.LineSegments(
      geometry,
      material
    );

    return mesh;
  },
  generateLines: function (features) {
    const data = this.data;

    const mapData = this.geometryMap;

    var min = 10000000;
    var max = -10000000;

    var lines = 0;
    mapData.forEach(function (entry, idx) {
      for (var i = 0; i < entry.length; i++) {
        const path = entry[i];
        for (var j = 0; j < path.lines.length; j++) {
          lines += path.lines[j].length;
        }
      }
    });

    var lineGeometry = new THREE.BufferGeometry();
    var positions = new Float32Array(lines * 2 * 3);
    var gptr = 0;

    const defaultPartMaterial = new THREE.LineBasicMaterial({
      transparent: true,
      linewidth: 2,
      opacity: this.matComponent.data.opacity,
      color: 0xff0000,
      side: THREE.DoubleSide
    });

    mapData.forEach((entry, id) => {
      var parts = [];

      entry.forEach( (path) => {
        path.lines.forEach((line) => {
          var partPositions = new Float32Array(line.length * 2 * 3);
          var ptr = 0;

          for (var j = 0; j < line.length - 1; j++) {
            var p = line[j];
            if (p.y < min) min = p.y;
            if (p.y > max) max = p.x;

            var res = this.latLngToVec3(p.y, p.x);

            partPositions[ptr] = res.x;
            partPositions[ptr + 1] = res.y;
            partPositions[ptr + 2] = res.z;

            ptr += 3;

            p = line[j + 1];

            res = this.latLngToVec3(p.y, p.x);

            partPositions[ptr] = res.x;
            partPositions[ptr + 1] = res.y;
            partPositions[ptr + 2] = res.z;

            ptr += 3;
          }

          parts.push(partPositions);

          memcpy(partPositions, 0, positions, gptr, partPositions.length);
          gptr += ptr;
        });
      });

      // the positions only of the curent polygon or line
      var partPositions = new Float32Array(parts.reduce((a, b) => {
        return a + b.length;
      }, 0));

      var tPtr = 0;
      parts.forEach(function (p) {
        memcpy(p, 0, partPositions, tPtr, p.length);
        tPtr += p.length;
      });

      var partGeometry = new THREE.BufferGeometry();
      partGeometry.setAttribute('position', new THREE.BufferAttribute(partPositions, 3));
      partGeometry.computeBoundingSphere();

      var partMaterial = defaultPartMaterial;
      // set simplestyle properties if available

      if (entry[0].properties) {
        const properties = entry[0].properties;
        partMaterial = this._getLineMaterial(properties);
      }

      var mesh = new THREE.LineSegments(partGeometry, partMaterial);
      mesh.visible = true;

      this.shapesMap.set(entry[0].id, mesh);

      entry.shape = mesh;
    });

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lineGeometry.computeBoundingSphere();

    const material = this._getLineMaterial();

    const mesh = new THREE.LineSegments(lineGeometry, material);

    return mesh;
  },
  _getLineWidthOr: function (properties, defaultWidth) {
    return properties['stroke-width'] || defaultWidth;
  },
  _getOpacityOr: function (properties, defaultOpacity) {
    return properties['stroke-opacity'] || defaultOpacity;
  },
  _getStrokeColorOr: function (properties, defaultColor) {
    if (properties.stroke) {
      const color = properties['stroke'];
      return new THREE.Color(color);
    }
    return defaultColor;
  },
  _getLineMaterial: function (properties) {
    if (!properties) {
      properties = {};
    }
    return new THREE.LineBasicMaterial({
      transparent: this.matComponent.data.transparent || false,
      linewidth: this._getLineWidthOr(properties, this.data.lineWidth),
      opacity: this._getOpacityOr(properties, this.matComponent.data.opacity),
      color: this._getStrokeColorOr(properties, this.matComponent.data.color),
      side: this.matComponent.data.side || THREE.DoubleSide
    });
  },

  latLngToVec3: function (lat, lon) {
    const geomComponent = this.el.components.geometry;
    if (geomComponent.data.primitive === 'sphere') {
      return this._sphericalLatLngToVec3(lat, lon);
    } else if (geomComponent.data.primitive === 'plane') {
      return this._planarLatLngToVec3(lat, lon);
    }
  },
  _planarLatLngToVec3: function (lat, lon) {
    const geomComponent = this.el.components.geometry;

    const width = geomComponent.data.width;
    const height = geomComponent.data.height;

    return new THREE.Vector3(
            lon / 360 * width - (width / 2),
            -lat / 180 * height + (height / 2),
            0);
  },
  _sphericalLatLngToVec3: function (lat, lon) {
        // lat = Math.max(175, Math.min(5, lat))
        // lat = Math.min(160, lat)

    const geomComponent = this.el.components.geometry;
    const radius = geomComponent.data.radius;

    const phi = lat * Math.PI / 180;
    const theta = lon * Math.PI / 180;
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);

    return new THREE.Vector3(x, y, z);
  },
  selectFeature: function (feature, point) {
    const data = this.data;
    this.isSelecting = false;
    if (!feature) return;

    var selected = null;
    var featureKey = Object.keys(feature.properties).length === 0 ? feature[data.featureKey] : feature.properties[data.featureKey];

    if (this.dataMap.size > 0) {
      selected = this.dataMap.get(featureKey);
    } else {
      selected = feature.properties;
    }

    var shape = this.shapesMap.get(featureKey);

    if (!this._selectedFeature ||
            (this._selectedFeature[data.featureKey] || this._selectedFeature[data.dataKey]) !==
                (selected[data.featureKey] || selected[data.dataKey])) {
      this._selectedFeature = selected;

      this.el.emit(FEATURE_SELECTED_EVENT, {feature: selected, mesh: shape, point: point});
    }
  },
  hitTest: function (obj) {
    const pixelBuffer = new Uint8Array(4);

    var renderer = this.el.sceneEl.renderer;

    this.hitCamera.position.copy(obj.position);
    this.hitCamera.rotation.copy(obj.rotation);

    const isXREnabled = renderer.xr.enabled;
    renderer.xr.enabled = false;
    renderer.setRenderTarget(this.hitTexture);
    renderer.clear();
    renderer.render(this.hitScene, this.hitCamera);
    renderer.setRenderTarget(null);
    renderer.xr.enabled = isXREnabled;

    return new Promise((resolve, reject) => {
      var res = null;

      renderer.readRenderTargetPixels(this.hitTexture, 0, 0, 1, 1, pixelBuffer);
      if (pixelBuffer[0] === 255) { // encoding test
        var multiplicator = pixelBuffer[1];
        var number = pixelBuffer[2];

        var code = multiplicator * 255 + number;
        res = this.codes.get(code);
      }
      resolve(res);
    });
  },
  select: (function () {
    const up = new THREE.Vector3(0,1,0);
    const dummy = new THREE.Object3D();
    return function (raycasterEl) {
      if (this.isSelecting || !this.maskMesh) return;

      if (!raycasterEl || !raycasterEl.components) {
        raycasterEl = document.querySelector('[raycaster]');
      }
      const raycaster = raycasterEl.components.raycaster.raycaster;

      const intersections = raycaster.intersectObject(this.maskMesh);
      if (intersections.length > 0) {
        this.isSelecting = true;
        const point = intersections[0].point.clone();

        // needed if its a sphere
        if (this.el.components.geometry.data.primitive === 'sphere') {
           this.el.object3D.getWorldPosition(dummy.position);
        } 
        dummy.lookAt(point);
        dummy.rotation.y += Math.PI;

        this.hitTest(dummy).then((res) => {
          //point.applyAxisAngle(up, Math.PI/2)
          this.selectFeature(res, point);
        });
      }
            // entity.components.raycaster.refreshObjects()
    };
  }()),
  generateMask: function (features) {
    const CANVAS_DATA_FACTOR = 10;

    const width = 512 * 2;
    const height = 256 * 2;

    const projection = d3geo.geoEquirectangular()
            .scale(height / Math.PI)
            .translate([width / 2, height / 2])
            .rotate([0, 0, 0]);

    const path = d3geo.geoPath(projection);

    var canvas = d3sel
            .select('body')
            .append('canvas')
            .attr('id', 'mask-canvas')
            .attr('image-rendering', 'pixelated')
            .attr('width', width + 'px')
            .attr('height', height + 'px');
    const ctx = d3sel.select('#mask-canvas').node().getContext('2d');
    const ctxPath = path.context(ctx);

    ctx.imageSmoothingEnabled = false;
    ctx.globalAlpha = 1;

    for (var i = 0; i < features.length; i++) {
      const feature = features[i];
      var multiplicator = Math.floor(i / 255);
      var number = i % 255;

      this.codes.set(multiplicator * 255 + number, feature); // feature.id

      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = 'rgb(255,' + multiplicator + ',' + number + ')';
      ctx.strokeStyle = 'rgb(255,' + multiplicator + ',' + number + ')';
      ctx.lineWidth = CANVAS_DATA_FACTOR * this.data.raycasterAccuracy;
      ctxPath(feature);
      if (feature.geometry.type.includes('LineString')) {
        ctx.stroke();
      } else if (feature.geometry.type.includes('Polygon')) {
        ctx.fill();
      } else if (feature.geometry.type.includes('Point')) {
        // TODO how to adjust point size according to raycaster accuracy?
        ctx.fill();
      }
      ctx.restore();
    }

    //console.log(canvas.node().toDataURL())
    const texture = new THREE.CanvasTexture(canvas.node());

    const geomComponent = this.el.components.geometry;

    const mesh = new THREE.Mesh(
            geomComponent.geometry.clone(),
            new THREE.MeshBasicMaterial({
              map: texture,
              side: THREE.DoubleSide,
              transparent: true,
              opacity: 1
            })
        );

    this.el.object3D.getWorldScale(mesh.scale);
    this.el.object3D.getWorldQuaternion(mesh.quaternion);
    this.el.object3D.getWorldPosition(mesh.position);

    this.hitScene.add(mesh);

    canvas.remove();
    return mesh;
  }

});

function memcpy (src, srcOffset, dst, dstOffset, length) {
  var i;
  src = src.subarray || src.slice ? src : src.buffer;
  dst = dst.subarray || dst.slice ? dst : dst.buffer;
  src = srcOffset ? src.subarray ? src.subarray(srcOffset, length && srcOffset + length) : src.slice(srcOffset, length && srcOffset + length) : src;
  if (dst.set) {
    dst.set(src, dstOffset);
  } else {
    for (i = 0; i < src.length; i++) {
      dst[i + dstOffset] = src[i];
    }
  }
  return dst;
}

const CANVAS_GENERATED_EVENT = 'geojson-texture-generated';

AFRAME.registerComponent('geojson-texture', {
  //dependencies: ['material'],
  schema: {
    src: {
      type: 'asset'
    },
    topologyObject: {
      default: ''
    },
    canvas: {
      default: '',
      type: 'selector'
    },
    projection: {
      type: 'string',
      default: 'geoEquirectangular'
    },
    fillColor: {
      default: '#fff',
      type: 'color'
    },
    lineColor: {
      default: '#000',
      type: 'color'
    },
    lineWidth: {
      default: 1
    },
    fillOpacity: {
      default: 1
    },
    lineOpacity: {
      default: 1
    },
    center: {
      type: 'vec2'
    },
    rotation: {
      type: 'vec2'
    }
  },

  init: function () {
    this.loader = new THREE.FileLoader();
    this.ctx = this.data.canvas.getContext('2d');
  },
  update: function (oldData) {
    const data = this.data;

    if (AFRAME.utils.deepEqual(oldData, data)) {
      return;
    }

    if (oldData.lineColor !== data.lineColor) {
      this._lineColor = this._getColorStyle(new THREE.Color(data.lineColor), data.lineOpacity);
    }
    if (oldData.fillColor !== data.fillColor) {
      this._fillColor = this._getColorStyle(new THREE.Color(data.fillColor), data.fillOpacity);
    }

    if (oldData.projection !== data.projection) {
      const width = data.canvas.width;
      const height = data.canvas.height;
      
      const projectionFunc = d3geo[data.projection];
      this.projection = projectionFunc()
                .scale(height / Math.PI)
                .translate([width / 2, height / 2]);
      this.mapPath = d3geo.geoPath(this.projection);
    }
    if (oldData.rotation !== data.rotation) {
      this.projection.rotate(this._vec2ToArray(data.rotation));
    }
    if (oldData.center !== data.center) {
      this.projection.center(this._vec2ToArray(data.center));
    }

    if (data.src && data.src !== oldData.src) {
      this.loader.load(data.src, this.onGeojsonLoaded.bind(this));
    } else {
      this.redraw();
      this.el.emit(CANVAS_GENERATED_EVENT);
    }
  },
  _vec2ToArray: function (vec2) {
    return [vec2.x, vec2.y];
  },
  onGeojsonLoaded: function (file) {
    const json = JSON.parse(file);

    var data = this.data;

    var isTopojson = json.features === undefined;
    if (isTopojson) {
      var topologyObjectName = data.topologyObject;
      if (!data.topologyObject) {
        topologyObjectName = Object.keys(json.objects)[0];
      }
      this.features = topojson.feature(json, json.objects[topologyObjectName]).features;
    } else {
      this.features = json.features;
    }

    this.redraw();
    this.el.emit(CANVAS_GENERATED_EVENT);
  },
  getStrokeColorOr: function (feature, defaultColor) {
    if (feature.properties) {
      const color = feature.properties.stroke || this.data.lineColor;
      const opacity = feature.properties['stroke-opacity'] || this.data.lineOpacity;

      return this._getColorStyle(new THREE.Color(color), opacity);
    }
    return defaultColor;
  },
  getFillColorOr: function (feature, defaultColor) {
    if (feature.properties) {
      const color = feature.properties.fill || this.data.fillColor;
      const opacity = feature.properties['fill-opacity'] || this.data.fillOpacity;

      return this._getColorStyle(new THREE.Color(color), opacity);
    }
    return defaultColor;
  },
  getLineWidthOr: function (feature, defaultWidth) {
    return (feature.properties && feature.properties['stroke-width']) || defaultWidth;
  },
  _getColorStyle: function (color, opacity) {
    const r = (color.r * 255) | 0;
    const g = (color.g * 255) | 0;
    const b = (color.b * 255) | 0;

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
  },
  redraw: function () {
    if (!this.features) return;

    const data = this.data;
    var context = this.ctx;
    var contextPath = this.mapPath.context(context);

    context.clearRect(0, 0, data.canvas.width, data.canvas.height);
    for (let i = 0; i < this.features.length; i++) {
      const feature = this.features[i];
      const strokeColor = this.getStrokeColorOr(feature, this._lineColor);
      const fillColor = this.getFillColorOr(feature, this._fillColor);
      const lineWidth = this.getLineWidthOr(feature, data.lineWidth);

      context.beginPath();
      contextPath(feature);
      context.lineWidth = lineWidth;
      context.strokeStyle = strokeColor;
      context.stroke();
      context.fillStyle = fillColor;
      context.fill();
    }
  },
  getProjection: function () {
    return this.projection;
  }
});



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(37);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(39);









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ticks__["a" /* tickStep */])(x0, x1, tz);
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(7);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(16);




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(5);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(16);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(34);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(41);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = autoType;
function autoType(object) {
  for (var key in object) {
    var value = object[key].trim(), number, m;
    if (!value) value = null;
    else if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value === "NaN") value = NaN;
    else if (!isNaN(number = +value)) value = number;
    else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    }
    else continue;
    object[key] = value;
  }
  return object;
}

// https://github.com/d3/d3-dsv/issues/45
var fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return csvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return csvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return csvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return csvFormatRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return csvFormatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return csvFormatValue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(17);


var csv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv_js__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tsvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tsvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tsvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tsvFormatRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return tsvFormatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return tsvFormatValue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(17);


var tsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv_js__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream_js__ = __webpack_require__(4);






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].polygonStart();
  },
  polygonEnd: function() {
    __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area_js__["c" /* areaRingSum */] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math_js__["p" /* epsilon */]) phi1 = 90;
    else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math_js__["p" /* epsilon */]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  },
  sphere: function() {
    lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["a" /* cartesian */])([lambda * __WEBPACK_IMPORTED_MODULE_3__math_js__["h" /* radians */], phi * __WEBPACK_IMPORTED_MODULE_3__math_js__["h" /* radians */]]);
  if (p0) {
    var normal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["b" /* cartesianCross */])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["b" /* cartesianCross */])(equatorial, normal);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["c" /* cartesianNormalizeInPlace */])(inflection);
    inflection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian_js__["g" /* spherical */])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math_js__["i" /* degrees */] * sign,
        phii,
        antimeridian = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math_js__["i" /* degrees */];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math_js__["i" /* degrees */];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area_js__["b" /* areaStream */].lineEnd();
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math_js__["a" /* abs */])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math_js__["p" /* epsilon */]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["a"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__stream_js__["a" /* default */])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream_js__ = __webpack_require__(4);




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(phi);
  centroidPointCartesian(cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(lambda), cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(phi);
  x0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(lambda);
  y0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(lambda);
  z0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(phi),
      x = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(lambda),
      y = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(lambda),
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(phi),
      w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */];
  centroidStream.point = centroidRingPoint;
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(phi);
  x0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(lambda);
  y0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(lambda);
  z0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(phi),
      x = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(lambda),
      y = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(lambda),
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(cx * cx + cy * cy + cz * cz),
      w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__stream_js__["a" /* default */])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* epsilon2 */]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* epsilon2 */]) return [NaN, NaN];
  }

  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])(z / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(m)) * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */]];
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle_js__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rectangle_js__["a" /* default */])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance_js__["a" /* default */])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ao, bo, ab;
  for (var i = 0, n = coordinates.length; i < n; i++) {
    bo = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance_js__["a" /* default */])(coordinates[i], point);
    if (bo === 0) return true;
    if (i > 0) {
      ab = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance_js__["a" /* default */])(coordinates[i], coordinates[i - 1]);
      if (
        ab > 0 &&
        ao <= ab &&
        bo <= ab &&
        (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < __WEBPACK_IMPORTED_MODULE_2__math_js__["q" /* epsilon2 */] * ab
      )
        return true;
    }
    ao = bo;
  }
  return false;
}

function containsPolygon(coordinates, point) {
  return !!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__polygonContains_js__["a" /* default */])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* radians */]];
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graticule;
/* harmony export (immutable) */ __webpack_exports__["b"] = graticule10;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function graticuleX(y0, y1, dy) {
  var y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(X0 / DX) * DX, X1, DX).map(X)
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function(x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]; }).map(x))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function(y) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]]])
      .extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* radians */],
      cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y0),
      sy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y0),
      cy1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y1),
      sy1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y1),
      kx0 = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(x0),
      ky0 = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(x0),
      kx1 = cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(x1),
      ky1 = cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(x1),
      d = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* haversin */])(y1 - y0) + cy0 * cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* haversin */])(x1 - x0))),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(d);

  var interpolate = d ? function(t) {
    var B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(t *= d) / k,
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */],
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(z, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */]
    ];
  } : function() {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */], y0 * __WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* degrees */]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(3);




var areaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])(),
    areaRingSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
    areaSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["a"] = (areaStream);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["a"] = (centroidStream);


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_js__ = __webpack_require__(3);



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* tau */]);
        break;
      }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */]
};


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds_js__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context_js__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure_js__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string_js__ = __webpack_require__(106);









/* harmony default export */ __webpack_exports__["a"] = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_2__area_js__["a" /* default */].result();
  };

  path.measure = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_6__measure_js__["a" /* default */].result();
  };

  path.bounds = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds_js__["a" /* default */].result();
  };

  path.centroid = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream_js__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid_js__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid_js__["a" /* default */].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity_js__["a" /* default */]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string_js__["a" /* default */]) : new __WEBPACK_IMPORTED_MODULE_5__context_js__["a" /* default */](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(3);




var lengthSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder_js__["a" /* default */])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop_js__["a" /* default */];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* sqrt */])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (lengthStream);


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit_js__ = __webpack_require__(21);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var cache,
      cacheStream,
      lower48 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__albers_js__["a" /* default */])(), lower48Point,
      alaska = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea_js__["a" /* default */])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea_js__["a" /* default */])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["a" /* fitExtent */])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["b" /* fitSize */])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["c" /* fitWidth */])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["d" /* fitHeight */])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(1);




var azimuthalEqualAreaRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["b" /* azimuthalRaw */])(function(cxcy) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(function(z) {
  return 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])(z / 2);
});

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(1);




var azimuthalEquidistantRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["b" /* azimuthalRaw */])(function(c) {
  return (c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["t" /* acos */])(c)) && c / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(c);
});

azimuthalEquidistantRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(function(z) {
  return z;
});

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicConformalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator_js__ = __webpack_require__(22);




function tany(y) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["k" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y0),
      n = y0 === y1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y0) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* log */])(cy0 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y1)) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* log */])(tany(y1) / tany(y0)),
      f = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* pow */])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator_js__["b" /* mercatorRaw */];

  function project(x, y) {
    if (f > 0) { if (y < -__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]) y = -__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]; }
    else { if (y > __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]) y = __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]; }
    var r = f / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* pow */])(tany(y), n);
    return [r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(n * x), f - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* sign */])(n) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(x * x + fy * fy);
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(fy)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* sign */])(fy), 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* pow */])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */]];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic_js__["a" /* conicProjection */])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicEquidistantRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular_js__ = __webpack_require__(57);




function conicEquidistantRaw(y0, y1) {
  var cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y0),
      n = y0 === y1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y0) : (cy0 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular_js__["b" /* equirectangularRaw */];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(nx), g - gy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(gy)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* sign */])(gy), g - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* sign */])(n) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["o" /* sqrt */])(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic_js__["a" /* conicProjection */])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equalEarthRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var A1 = 1.340264,
    A2 = -0.081106,
    A3 = 0.000893,
    A4 = 0.003796,
    M = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* sqrt */])(3) / 2,
    iterations = 12;

function equalEarthRaw(lambda, phi) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* asin */])(M * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}

equalEarthRaw.invert = function(x, y) {
  var l = y, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* epsilon2 */]) break;
  }
  return [
    M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(l),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sin */])(l) / M)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(equalEarthRaw)
      .scale(177.158);
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gnomonicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(1);




function gnomonicRaw(x, y) {
  var cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y), k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(x) * cy;
  return [cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(x) / k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y) / k];
}

gnomonicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* atan */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit_js__ = __webpack_require__(21);





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__transform_js__["b" /* transformer */])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity_js__["a" /* default */]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__clip_rectangle_js__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["a" /* fitExtent */])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["b" /* fitSize */])(projection, size, object);
    },
    fitWidth: function(width, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["c" /* fitWidth */])(projection, width, object);
    },
    fitHeight: function(height, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit_js__["d" /* fitHeight */])(projection, height, object);
    }
  };
});


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = naturalEarth1Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = orthographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(1);




function orthographicRaw(x, y) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(x), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y)];
}

orthographicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* asin */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */]);
});


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_js__ = __webpack_require__(12);




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* cos */])(30 * __WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* radians */]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["a"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__transform_js__["b" /* transformer */])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* sqrt */])(a * a + b * b + c * c),
          phi2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* asin */])(c /= m),
          lambda2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */] ? (lambda0 + lambda1) / 2 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* atan2 */])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian_js__["a" /* cartesian */])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = stereographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(1);




function stereographicRaw(x, y) {
  var cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(y), k = 1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* cos */])(x) * cy;
  return [cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(x) / k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sin */])(y) / k];
}

stereographicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal_js__["a" /* azimuthalInvert */])(function(z) {
  return 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* atan */])(z);
});

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transverseMercatorRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator_js__ = __webpack_require__(22);



function transverseMercatorRaw(lambda, phi) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["k" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["m" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["n" /* exp */])(x)) - __WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* halfPi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mercator_js__["c" /* mercatorProjection */])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(59);



/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__select__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name).call(document.documentElement));
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  var event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(13);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(23);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ __webpack_exports__["a"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(121);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(28);


function dispatchEvent(node, type, params) {
  var window = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(58);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(26);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](merges, this._parents);
});


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(26);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(63);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, parents);
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(14);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches) {
  if (touches == null) touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
});


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mergeArcs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stitch_js__ = __webpack_require__(66);



function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

/* harmony default export */ __webpack_exports__["a"] = (function(topology) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__feature_js__["b" /* object */])(topology, mergeArcs.apply(this, arguments));
});

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__feature_js__["b" /* object */])(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stitch_js__["a" /* default */])(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    }).filter(function(arcs) {
      return arcs.length > 0;
    })
  };
}


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = meshArcs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stitch_js__ = __webpack_require__(66);



/* harmony default export */ __webpack_exports__["a"] = (function(topology) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__feature_js__["b" /* object */])(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stitch_js__["a" /* default */])(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect_js__ = __webpack_require__(156);


/* harmony default export */ __webpack_exports__["a"] = (function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__bisect_js__["a" /* default */])(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__bisect_js__["a" /* default */])(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bbox_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__untransform_js__ = __webpack_require__(67);



/* harmony default export */ __webpack_exports__["a"] = (function(topology, transform) {
  if (topology.transform) throw new Error("already quantized");

  if (!transform || !transform.scale) {
    if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
    box = topology.bbox || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__bbox_js__["a" /* default */])(topology);
    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
  } else {
    box = topology.bbox;
  }

  var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__untransform_js__["a" /* default */])(transform), box, key, inputs = topology.objects, outputs = {};

  function quantizePoint(point) {
    return t(point);
  }

  function quantizeGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function quantizeArc(input) {
    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
    output[0] = t(input[0], 0);
    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
    output.length = j;
    return output;
  }

  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

  return {
    type: "Topology",
    bbox: box,
    transform: transform,
    objects: outputs,
    arcs: topology.arcs.map(quantizeArc)
  };
});


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});


/***/ })
/******/ ]);