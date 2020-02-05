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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return atan2; });
/* unused harmony export ceil */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return sqrt1_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sqrt2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return sqrtPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return radians; });
/* harmony export (immutable) */ __webpack_exports__["H"] = sinci;
/* harmony export (immutable) */ __webpack_exports__["i"] = asin;
/* harmony export (immutable) */ __webpack_exports__["d"] = acos;
/* harmony export (immutable) */ __webpack_exports__["e"] = sqrt;
/* harmony export (immutable) */ __webpack_exports__["C"] = tanh;
/* harmony export (immutable) */ __webpack_exports__["D"] = sinh;
/* harmony export (immutable) */ __webpack_exports__["B"] = cosh;
/* harmony export (immutable) */ __webpack_exports__["G"] = arsinh;
/* harmony export (immutable) */ __webpack_exports__["F"] = arcosh;
var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var ceil = Math.ceil;
var cos = Math.cos;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var max = Math.max;
var min = Math.min;
var pow = Math.pow;
var round = Math.round;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sin = Math.sin;
var tan = Math.tan;

var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var sqrt1_2 = Math.SQRT1_2;
var sqrt2 = sqrt(2);
var sqrtPi = sqrt(pi);
var tau = pi * 2;
var degrees = 180 / pi;
var radians = pi / 180;

function sinci(x) {
  return x ? x / Math.sin(x) : 1;
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function sqrt(x) {
  return x > 0 ? Math.sqrt(x) : 0;
}

function tanh(x) {
  x = exp(2 * x);
  return (x - 1) / (x + 1);
}

function sinh(x) {
  return (exp(x) - exp(-x)) / 2;
}

function cosh(x) {
  return (exp(x) + exp(-x)) / 2;
}

function arsinh(x) {
  return log(x + sqrt(x * x + 1));
}

function arcosh(x) {
  return log(x + sqrt(x * x - 1));
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area_js__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return __WEBPACK_IMPORTED_MODULE_0__area_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bounds_js__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return __WEBPACK_IMPORTED_MODULE_1__bounds_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__centroid_js__ = __webpack_require__(203);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return __WEBPACK_IMPORTED_MODULE_2__centroid_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__circle_js__ = __webpack_require__(68);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return __WEBPACK_IMPORTED_MODULE_3__circle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clip_antimeridian_js__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return __WEBPACK_IMPORTED_MODULE_4__clip_antimeridian_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__clip_circle_js__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return __WEBPACK_IMPORTED_MODULE_5__clip_circle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clip_extent_js__ = __webpack_require__(204);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return __WEBPACK_IMPORTED_MODULE_6__clip_extent_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clip_rectangle_js__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return __WEBPACK_IMPORTED_MODULE_7__clip_rectangle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contains_js__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return __WEBPACK_IMPORTED_MODULE_8__contains_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__distance_js__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return __WEBPACK_IMPORTED_MODULE_9__distance_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graticule_js__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return __WEBPACK_IMPORTED_MODULE_10__graticule_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return __WEBPACK_IMPORTED_MODULE_10__graticule_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interpolate_js__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return __WEBPACK_IMPORTED_MODULE_11__interpolate_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__length_js__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return __WEBPACK_IMPORTED_MODULE_12__length_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__path_index_js__ = __webpack_require__(213);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return __WEBPACK_IMPORTED_MODULE_13__path_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projection_albers_js__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return __WEBPACK_IMPORTED_MODULE_14__projection_albers_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__projection_albersUsa_js__ = __webpack_require__(216);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return __WEBPACK_IMPORTED_MODULE_15__projection_albersUsa_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea_js__ = __webpack_require__(217);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_16__projection_azimuthalEqualArea_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant_js__ = __webpack_require__(218);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_17__projection_azimuthalEquidistant_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal_js__ = __webpack_require__(219);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return __WEBPACK_IMPORTED_MODULE_18__projection_conicConformal_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea_js__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_19__projection_conicEqualArea_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant_js__ = __webpack_require__(220);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_20__projection_conicEquidistant_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth_js__ = __webpack_require__(222);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarth", function() { return __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarthRaw", function() { return __WEBPACK_IMPORTED_MODULE_21__projection_equalEarth_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular_js__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return __WEBPACK_IMPORTED_MODULE_22__projection_equirectangular_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic_js__ = __webpack_require__(223);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return __WEBPACK_IMPORTED_MODULE_23__projection_gnomonic_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__projection_identity_js__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return __WEBPACK_IMPORTED_MODULE_24__projection_identity_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__projection_index_js__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return __WEBPACK_IMPORTED_MODULE_25__projection_index_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return __WEBPACK_IMPORTED_MODULE_25__projection_index_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__projection_mercator_js__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return __WEBPACK_IMPORTED_MODULE_26__projection_mercator_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_26__projection_mercator_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1_js__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return __WEBPACK_IMPORTED_MODULE_27__projection_naturalEarth1_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__projection_orthographic_js__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return __WEBPACK_IMPORTED_MODULE_28__projection_orthographic_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_28__projection_orthographic_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__projection_stereographic_js__ = __webpack_require__(228);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return __WEBPACK_IMPORTED_MODULE_29__projection_stereographic_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_29__projection_stereographic_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator_js__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_30__projection_transverseMercator_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__rotation_js__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return __WEBPACK_IMPORTED_MODULE_31__rotation_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__stream_js__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return __WEBPACK_IMPORTED_MODULE_32__stream_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__transform_js__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return __WEBPACK_IMPORTED_MODULE_33__transform_js__["a"]; });






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).





























/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle_js__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample_js__ = __webpack_require__(227);











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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["b"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__join__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__order__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sort__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__call__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nodes__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__size__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__empty__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__each__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__attr__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__style__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__property__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__classed__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__text__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__html__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__raise__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__lower__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__append__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__insert__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__remove__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__clone__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__datum__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__on__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__dispatch__ = __webpack_require__(242);
































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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




function pointEqual(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */];
}

function interpolateLine(coordinates, m) {
  var i = -1,
      n = coordinates.length,
      p0 = coordinates[0],
      p1,
      dx,
      dy,
      resampled = [];
  while (++i < n) {
    p1 = coordinates[i];
    dx = (p1[0] - p0[0]) / m;
    dy = (p1[1] - p0[1]) / m;
    for (var j = 0; j < m; ++j) resampled.push([p0[0] + j * dx, p0[1] + j * dy]);
    p0 = p1;
  }
  resampled.push(p1);
  return resampled;
}

function interpolateSphere(lobes) {
  var coordinates = [],
      lobe,
      lambda0, phi0, phi1,
      lambda2, phi2,
      i, n = lobes[0].length;

  // Northern Hemisphere
  for (i = 0; i < n; ++i) {
    lobe = lobes[0][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi0 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi1 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi1 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi2 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]]
    ], 30));
  }

  // Southern Hemisphere
  for (i = lobes[1].length - 1; i >= 0; --i) {
    lobe = lobes[1][i];
    lambda0 = lobe[0][0], phi0 = lobe[0][1], phi1 = lobe[1][1];
    lambda2 = lobe[2][0], phi2 = lobe[2][1];
    coordinates.push(interpolateLine([
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi2 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]],
      [lambda2 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi1 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi1 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]],
      [lambda0 + __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */], phi0 - __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]]
    ], 30));
  }

  return {
    type: "Polygon",
    coordinates: [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* merge */])(coordinates)]
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(project, lobes, inverse) {
  var sphere, bounds;

  function forward(lambda, phi) {
    var sign = phi < 0 ? -1 : +1, lobe = lobes[+(phi < 0)];
    for (var i = 0, n = lobe.length - 1; i < n && lambda > lobe[i][2][0]; ++i);
    var p = project(lambda - lobe[i][1][0], phi);
    p[0] += project(lobe[i][1][0], sign * phi > sign * lobe[i][0][1] ? lobe[i][0][1] : phi)[0];
    return p;
  }

  if (inverse) {
    forward.invert = inverse(forward);
  } else if (project.invert) {
    forward.invert = function(x, y) {
      var bound = bounds[+(y < 0)], lobe = lobes[+(y < 0)];
      for (var i = 0, n = bound.length; i < n; ++i) {
        var b = bound[i];
        if (b[0][0] <= x && x < b[1][0] && b[0][1] <= y && y < b[1][1]) {
          var p = project.invert(x - project(lobe[i][1][0], 0)[0], y);
          p[0] += lobe[i][1][0];
          return pointEqual(forward(p[0], p[1]), [x, y]) ? p : null;
        }
      }
    };
  }

  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["geoProjection"])(forward),
      stream_ = p.stream;

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["geoStream"])(sphere, sphereStream); };
    return rotateStream;
  };
  
  p.lobes = function(_) {
    if (!arguments.length) return lobes.map(function(lobe) {
      return lobe.map(function(l) {
        return [
          [l[0][0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* degrees */], l[0][1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* degrees */]],
          [l[1][0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* degrees */], l[1][1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* degrees */]],
          [l[2][0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* degrees */], l[2][1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["p" /* degrees */]]
        ];
      });
    });

    sphere = interpolateSphere(_);

    lobes = _.map(function(lobe) {
      return lobe.map(function(l) {
        return [
          [l[0][0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["o" /* radians */], l[0][1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["o" /* radians */]],
          [l[1][0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["o" /* radians */], l[1][1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["o" /* radians */]],
          [l[2][0] * __WEBPACK_IMPORTED_MODULE_2__math_js__["o" /* radians */], l[2][1] * __WEBPACK_IMPORTED_MODULE_2__math_js__["o" /* radians */]]
        ];
      });
    });

    bounds = lobes.map(function(lobe) {
      return lobe.map(function(l) {
        var x0 = project(l[0][0], l[0][1])[0],
            x1 = project(l[2][0], l[2][1])[0],
            y0 = project(l[1][0], l[0][1])[1],
            y1 = project(l[1][0], l[1][1])[1],
            t;
        if (y0 > y1) t = y0, y0 = y1, y1 = t;
        return [[x0, y0], [x1, y1]];
      });
    });

    return p;
  };

  if (lobes != null) p.lobes(lobes);

  return p;
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = mollweideBromleyTheta;
/* harmony export (immutable) */ __webpack_exports__["c"] = mollweideBromleyRaw;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mollweideRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function mollweideBromleyTheta(cp, phi) {
  var cpsinPhi = cp * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi), i = 30, delta;
  do phi -= delta = (phi + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) - cpsinPhi) / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi));
  while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
  return phi / 2;
}

function mollweideBromleyRaw(cx, cy, cp) {

  function forward(lambda, phi) {
    return [cx * lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi = mollweideBromleyTheta(cp, phi)), cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)];
  }

  forward.invert = function(x, y) {
    return y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y / cy), [x / (cx * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((2 * y + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * y)) / cp)];
  };

  return forward;
}

var mollweideRaw = mollweideBromleyRaw(__WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */] / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */], __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */], __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(mollweideRaw)
      .scale(169.529);
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = solve;
/* harmony export (immutable) */ __webpack_exports__["b"] = solve2d;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


// Approximate Newton-Raphson
// Solve f(x) = y, start from x
function solve(f, y, x) {
  var steps = 100, delta, f0, f1;
  x = x === undefined ? 0 : +x;
  y = +y;
  do {
    f0 = f(x);
    f1 = f(x + __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */]);
    if (f0 === f1) f1 = f0 + __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */];
    x -= delta = (-1 * __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */] * (f0 - y)) / (f0 - f1);
  } while (steps-- > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */]);
  return steps < 0 ? NaN : x;
}

// Approximate Newton-Raphson in 2D
// Solve f(a,b) = [x,y]
function solve2d(f, MAX_ITERATIONS, eps) {
  if (MAX_ITERATIONS === undefined) MAX_ITERATIONS = 40;
  if (eps === undefined) eps = __WEBPACK_IMPORTED_MODULE_0__math_js__["u" /* epsilon2 */];
  return function(x, y, a, b) {
    var err2, da, db;
    a = a === undefined ? 0 : +a;
    b = b === undefined ? 0 : +b;
    for (var i = 0; i < MAX_ITERATIONS; i++) {
      var p = f(a, b),
        // diffs
        tx = p[0] - x,
        ty = p[1] - y;
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(tx) < eps && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(ty) < eps) break; // we're there!

      // backtrack if we overshot
      var h = tx * tx + ty * ty;
      if (h > err2) {
        a -= da /= 2;
        b -= db /= 2;
        continue;
      }
      err2 = h;

      // partial derivatives
      var ea = (a > 0 ? -1 : 1) * eps,
        eb = (b > 0 ? -1 : 1) * eps,
        pa = f(a + ea, b),
        pb = f(a, b + eb),
        dxa = (pa[0] - p[0]) / ea,
        dya = (pa[1] - p[1]) / ea,
        dxb = (pb[0] - p[0]) / eb,
        dyb = (pb[1] - p[1]) / eb,
        // determinant
        D = dyb * dxa - dya * dxb,
        // newton step — or half-step for small D
        l = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(D) < 0.5 ? 0.5 : 1) / D;
      da = (ty * dxb - tx * dyb) * l;
      db = (tx * dya - ty * dxa) * l;
      a += da;
      b += db;
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(da) < eps && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(db) < eps) break; // we're crawling
    }
    return [a, b];
  };
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function(projectAt) {
  var phi0 = 0,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(projectAt),
      p = m(phi0);

  p.parallel = function(_) {
    return arguments.length ? m(phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]) : phi0 * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
  };

  return p;
});


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect__ = __webpack_require__(46);
/* unused harmony reexport bisect */
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(9);
/* unused harmony reexport ascending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bisector__ = __webpack_require__(47);
/* unused harmony reexport bisector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cross__ = __webpack_require__(99);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__descending__ = __webpack_require__(100);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deviation__ = __webpack_require__(48);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__extent__ = __webpack_require__(49);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__histogram__ = __webpack_require__(101);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__threshold_freedmanDiaconis__ = __webpack_require__(111);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__threshold_scott__ = __webpack_require__(112);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__threshold_sturges__ = __webpack_require__(53);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__max__ = __webpack_require__(103);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mean__ = __webpack_require__(104);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__median__ = __webpack_require__(105);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__merge__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_14__merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__min__ = __webpack_require__(50);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pairs__ = __webpack_require__(51);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__permute__ = __webpack_require__(107);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__quantile__ = __webpack_require__(25);
/* unused harmony reexport quantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__range__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_19__range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scan__ = __webpack_require__(108);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shuffle__ = __webpack_require__(109);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sum__ = __webpack_require__(110);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ticks__ = __webpack_require__(54);
/* unused harmony reexport ticks */
/* unused harmony reexport tickIncrement */
/* unused harmony reexport tickStep */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__transpose__ = __webpack_require__(55);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__variance__ = __webpack_require__(56);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__zip__ = __webpack_require__(113);
/* unused harmony reexport zip */





























/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sinusoidalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function sinusoidalRaw(lambda, phi) {
  return [lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi), phi];
}

sinusoidalRaw.invert = function(x, y) {
  return [x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y), y];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(sinusoidalRaw)
      .scale(152.63);
});


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);


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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);


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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f, g, h) {
  if (arguments.length < 8) h = 0;

  function forward(lambda, phi) {
    if (!phi) return [a * lambda / __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */], 0];
    var phi2 = phi * phi,
        xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
        yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
        m = (xB * xB + yB * yB) / (2 * yB),
        alpha = lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* asin */])(xB / m) / __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */];
    return [m * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(alpha), phi * (1 + phi2 * h) + m * (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(alpha))];
  }

  forward.invert = function(x, y) {
    var lambda = __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */] * x / a,
        phi = y,
        deltaLambda, deltaPhi, i = 50;
    do {
      var phi2 = phi * phi,
          xB = a + phi2 * (b + phi2 * (c + phi2 * d)),
          yB = phi * (e - 1 + phi2 * (f - h + phi2 * g)),
          p = xB * xB + yB * yB,
          q = 2 * yB,
          m = p / q,
          m2 = m * m,
          dAlphadLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* asin */])(xB / m) / __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */],
          alpha = lambda * dAlphadLambda,
          xB2 = xB * xB,
          dxBdPhi = (2 * b + phi2 * (4 * c + phi2 * 6 * d)) * phi,
          dyBdPhi = e + phi2 * (3 * f + phi2 * 5 * g),
          dpdPhi = 2 * (xB * dxBdPhi + yB * (dyBdPhi - 1)),
          dqdPhi = 2 * (dyBdPhi - 1),
          dmdPhi = (dpdPhi * q - p * dqdPhi) / (q * q),
          cosAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(alpha),
          sinAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(alpha),
          mcosAlpha = m * cosAlpha,
          msinAlpha = m * sinAlpha,
          dAlphadPhi = ((lambda / __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */]) * (1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(1 - xB2 / m2)) * (dxBdPhi * m - xB * dmdPhi)) / m2,
          fx = msinAlpha - x,
          fy = phi * (1 + phi2 * h) + m - mcosAlpha - y,
          deltaxDeltaPhi = dmdPhi * sinAlpha + mcosAlpha * dAlphadPhi,
          deltaxDeltaLambda = mcosAlpha * dAlphadLambda,
          deltayDeltaPhi = 1 + dmdPhi - (dmdPhi * cosAlpha - msinAlpha * dAlphadPhi),
          deltayDeltaLambda = msinAlpha * dAlphadLambda,
          denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
      if (!denominator) break;
      lambda -= deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator;
      phi -= deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */]) && --i > 0);
    return [lambda, phi];
  };

  return forward;
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__matrix_js__ = __webpack_require__(179);




// Creates a polyhedral projection.
//  * root: a spanning tree of polygon faces.  Nodes are automatically
//    augmented with a transform matrix.
//  * face: a function that returns the appropriate node for a given {lambda, phi}
//    point (radians).
//  * r: rotation angle for root face [deprecated by .angle()].
/* harmony default export */ __webpack_exports__["a"] = (function(root, face, r) {

  recurse(root, {transform: null});

  function recurse(node, parent) {
    node.edges = faceEdges(node.face);
    // Find shared edge.
    if (parent.face) {
      var shared = node.shared = sharedEdge(node.face, parent.face),
          m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__matrix_js__["a" /* default */])(shared.map(parent.project), shared.map(node.project));
      node.transform = parent.transform ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__matrix_js__["b" /* multiply */])(parent.transform, m) : m;
      // Replace shared edge in parent edges array.
      var edges = parent.edges;
      for (var i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = node;
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = node;
      }
      edges = node.edges;
      for (i = 0, n = edges.length; i < n; ++i) {
        if (pointEqual(shared[0], edges[i][0]) && pointEqual(shared[1], edges[i][1])) edges[i] = parent;
        if (pointEqual(shared[0], edges[i][1]) && pointEqual(shared[1], edges[i][0])) edges[i] = parent;
      }
    } else {
      node.transform = parent.transform;
    }
    if (node.children) {
      node.children.forEach(function(child) {
        recurse(child, node);
      });
    }
    return node;
  }

  function forward(lambda, phi) {
    var node = face(lambda, phi),
        point = node.project([lambda * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]]),
        t;
    if (t = node.transform) {
      return [
        t[0] * point[0] + t[1] * point[1] + t[2],
        -(t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    point[1] = -point[1];
    return point;
  }

  // Naive inverse!  A faster solution would use bounding boxes, or even a
  // polygonal quadtree.
  if (hasInverse(root)) forward.invert = function(x, y) {
    var coordinates = faceInvert(root, [x, -y]);
    return coordinates && (coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */], coordinates);
  };

  function faceInvert(node, coordinates) {
    var invert = node.project.invert,
        t = node.transform,
        point = coordinates;
    if (t) {
      t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__matrix_js__["c" /* inverse */])(t);
      point = [
        t[0] * point[0] + t[1] * point[1] + t[2],
        (t[3] * point[0] + t[4] * point[1] + t[5])
      ];
    }
    if (invert && node === faceDegrees(p = invert(point))) return p;
    var p,
        children = node.children;
    for (var i = 0, n = children && children.length; i < n; ++i) {
      if (p = faceInvert(children[i], coordinates)) return p;
    }
  }

  function faceDegrees(coordinates) {
    return face(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]);
  }

  var proj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(forward),
      stream_ = proj.stream;

  proj.stream = function(stream) {
    var rotate = proj.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (proj.rotate([0, 0]), stream_(stream));
    proj.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart();
      sphereStream.lineStart();
      outline(sphereStream, root);
      sphereStream.lineEnd();
      sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return proj.angle(r == null ? -30 : r * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]);
});

function outline(stream, node, parent) {
  var point,
      edges = node.edges,
      n = edges.length,
      edge,
      multiPoint = {type: "MultiPoint", coordinates: node.face},
      notPoles = node.face.filter(function(d) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(d[1]) !== 90; }),
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoBounds"])({type: "MultiPoint", coordinates: notPoles}),
      inside = false,
      j = -1,
      dx = b[1][0] - b[0][0];
  // TODO
  var c = dx === 180 || dx === 360
      ? [(b[0][0] + b[1][0]) / 2, (b[0][1] + b[1][1]) / 2]
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoCentroid"])(multiPoint);
  // First find the shared edge…
  if (parent) while (++j < n) {
    if (edges[j] === parent) break;
  }
  ++j;
  for (var i = 0; i < n; ++i) {
    edge = edges[(i + j) % n];
    if (Array.isArray(edge)) {
      if (!inside) {
        stream.point((point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoInterpolate"])(edge[0], c)(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]))[0], point[1]);
        inside = true;
      }
      stream.point((point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoInterpolate"])(edge[1], c)(__WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]))[0], point[1]);
    } else {
      inside = false;
      if (edge !== parent) outline(stream, edge, node);
    }
  }
}

// Tests equality of two spherical points.
function pointEqual(a, b) {
  return a && b && a[0] === b[0] && a[1] === b[1];
}

// Finds a shared edge given two clockwise polygons.
function sharedEdge(a, b) {
  var x, y, n = a.length, found = null;
  for (var i = 0; i < n; ++i) {
    x = a[i];
    for (var j = b.length; --j >= 0;) {
      y = b[j];
      if (x[0] === y[0] && x[1] === y[1]) {
        if (found) return [found, x];
        found = x;
      }
    }
  }
}

// Converts an array of n face vertices to an array of n + 1 edges.
function faceEdges(face) {
  var n = face.length,
      edges = [];
  for (var a = face[n - 1], i = 0; i < n; ++i) edges.push([a, a = face[i]]);
  return edges;
}

function hasInverse(node) {
  return node.project.invert || node.children && node.children.some(hasInverse);
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_js__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(13);






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
          visible = (segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* merge */])(segments)).length;
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose_js__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);



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
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(38);



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
/* 24 */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(14);


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
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = collignonRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function collignonRaw(lambda, phi) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi));
  return [(2 / __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */]) * lambda * alpha, __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */] * (1 - alpha)];
}

collignonRaw.invert = function(x, y) {
  var lambda = (lambda = y / __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */] - 1) * lambda;
  return [lambda > 0 ? x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / lambda) / 2 : 0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(1 - lambda)];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(collignonRaw)
      .scale(95.6464)
      .center([0, 30]);
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hammerRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function hammerRaw(A, B) {
  if (arguments.length < 2) B = A;
  if (B === 1) return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEqualAreaRaw"];
  if (B === Infinity) return hammerQuarticAuthalicRaw;

  function forward(lambda, phi) {
    var coordinates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEqualAreaRaw"])(lambda / B, phi);
    coordinates[0] *= A;
    return coordinates;
  }

  forward.invert = function(x, y) {
    var coordinates = __WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEqualAreaRaw"].invert(x / A, y);
    coordinates[0] *= B;
    return coordinates;
  };

  return forward;
}

function hammerQuarticAuthalicRaw(lambda, phi) {
  return [
    lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi /= 2),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)
  ];
}

hammerQuarticAuthalicRaw.invert = function(x, y) {
  var phi = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y / 2);
  return [
    x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi / 2) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var B = 2,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(hammerRaw),
      p = m(B);

  p.coefficient = function(_) {
    if (!arguments.length) return B;
    return m(B = +_);
  };

  return p
    .scale(169.529);
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// TODO generate on-the-fly to avoid external modification.
var octahedron = [
  [0, 90],
  [-90, 0], [0, 0], [90, 0], [180, 0],
  [0, -90]
];

/* harmony default export */ __webpack_exports__["a"] = ([
  [0, 2, 1],
  [0, 3, 2],
  [5, 1, 2],
  [5, 2, 3],
  [0, 1, 4],
  [0, 4, 3],
  [5, 4, 1],
  [5, 3, 4]
].map(function(face) {
  return face.map(function(i) {
    return octahedron[i];
  });
}));


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function(project) {
  var dx = project(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */], 0)[0] - project(-__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */], 0)[0];

  function projectQuincuncial(lambda, phi) {
    var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
        p = project(t ? lambda : lambda > 0 ? lambda - __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] : lambda + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */], phi),
        x = (p[0] - p[1]) * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */],
        y = (p[0] + p[1]) * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */];
    if (t) return [x, y];
    var d = dx * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */],
        s = x > 0 ^ y > 0 ? -1 : 1;
    return [s * x - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * d, s * y - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * d];
  }

  if (project.invert) projectQuincuncial.invert = function(x0, y0) {
    var x = (x0 + y0) * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */],
        y = (y0 - x0) * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */],
        t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x) < 0.5 * dx && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) < 0.5 * dx;

    if (!t) {
      var d = dx * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */],
          s = x > 0 ^ y > 0 ? -1 : 1,
          x1 = -s * x0 + (y > 0 ? 1 : -1) * d,
          y1 = -s * y0 + (x > 0 ? 1 : -1) * d;
      x = (-x1 - y1) * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */];
      y = (x1 - y1) * __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */];
    }

    var p = project.invert(x, y);
    if (!t) p[0] += x > 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */];
    return p;
  };

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(projectQuincuncial)
      .rotate([-90, -90, 45])
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sinuMollweidePhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sinuMollweideY; });
/* harmony export (immutable) */ __webpack_exports__["b"] = sinuMollweideRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mollweide_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinusoidal_js__ = __webpack_require__(15);




var sinuMollweidePhi = 0.7109889596207567;

var sinuMollweideY = 0.0528035274542;

function sinuMollweideRaw(lambda, phi) {
  return phi > -sinuMollweidePhi
      ? (lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mollweide_js__["b" /* mollweideRaw */])(lambda, phi), lambda[1] += sinuMollweideY, lambda)
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__sinusoidal_js__["b" /* sinusoidalRaw */])(lambda, phi);
}

sinuMollweideRaw.invert = function(x, y) {
  return y > -sinuMollweidePhi
      ? __WEBPACK_IMPORTED_MODULE_1__mollweide_js__["b" /* mollweideRaw */].invert(x, y - sinuMollweideY)
      : __WEBPACK_IMPORTED_MODULE_2__sinusoidal_js__["b" /* sinusoidalRaw */].invert(x, y);
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(sinuMollweideRaw)
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(3);



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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea_js__ = __webpack_require__(221);




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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitSize;
/* harmony export (immutable) */ __webpack_exports__["c"] = fitWidth;
/* harmony export (immutable) */ __webpack_exports__["d"] = fitHeight;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds_js__ = __webpack_require__(77);



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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(3);




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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(38);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(39);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["a" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = object;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reverse_js__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform_js__ = __webpack_require__(44);



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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(89);


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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(47);



var ascendingBisect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);


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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(56);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 49 */
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(50);


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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(14);


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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = aitoffRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function aitoffRaw(x, y) {
  var cosy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y), sincia = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["H" /* sinci */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(cosy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(x /= 2)));
  return [2 * cosy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(x) * sincia, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(y) * sincia];
}

// Abort if [x, y] is not within an ellipse centered at [0, 0] with
// semi-major axis pi and semi-minor axis pi/2.
aitoffRaw.invert = function(x, y) {
  if (x * x + 4 * y * y > __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] + __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return;
  var x1 = x, y1 = y, i = 25;
  do {
    var sinx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(x1),
        sinx_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(x1 / 2),
        cosx_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(x1 / 2),
        siny = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(y1),
        cosy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y1),
        sin_2y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * y1),
        sin2y = siny * siny,
        cos2y = cosy * cosy,
        sin2x_2 = sinx_2 * sinx_2,
        c = 1 - cos2y * cosx_2 * cosx_2,
        e = c ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(cosy * cosx_2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(f = 1 / c) : f = 0,
        f,
        fx = 2 * e * cosy * sinx_2 - x,
        fy = e * siny - y,
        dxdx = f * (cos2y * sin2x_2 + e * cosy * cosx_2 * sin2y),
        dxdy = f * (0.5 * sinx * sin_2y - e * 2 * siny * sinx_2),
        dydx = f * 0.25 * (sin_2y * sinx_2 - e * siny * cos2y * sinx),
        dydy = f * (sin2y * cosx_2 + e * sin2x_2 * cosy),
        z = dxdy * dydx - dydy * dxdx;
    if (!z) break;
    var dx = (fy * dxdy - fx * dydy) / z,
        dy = (fx * dydx - fy * dxdx) / z;
    x1 -= dx, y1 -= dy;
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dx) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dy) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) && --i > 0);
  return [x1, y1];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(aitoffRaw)
      .scale(152.63);
});


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = augustRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function augustRaw(lambda, phi) {
  var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi / 2),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - tanPhi * tanPhi),
      c = 1 + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda /= 2),
      x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda) * k / c,
      y = tanPhi / c,
      x2 = x * x,
      y2 = y * y;
  return [
    4 / 3 * x * (3 + x2 - 3 * y2),
    4 / 3 * y * (3 + 3 * x2 - y2)
  ];
}

augustRaw.invert = function(x, y) {
  x *= 3 / 8, y *= 3 / 8;
  if (!x && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) > 1) return null;
  var x2 = x * x,
      y2 = y * y,
      s = 1 + x2 + y2,
      sin3Eta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])((s - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(s * s - 4 * y * y)) / 2),
      eta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sin3Eta) / 3,
      xi = sin3Eta ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["F" /* arcosh */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y / sin3Eta)) / 3 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["G" /* arsinh */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x)) / 3,
      cosEta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(eta),
      coshXi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["B" /* cosh */])(xi),
      d = coshXi * coshXi - cosEta * cosEta;
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["D" /* sinh */])(xi) * cosEta, 0.25 - d),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(coshXi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(eta), 0.25 + d)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(augustRaw)
      .scale(66.1603);
});


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = boggsRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mollweide_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




var k = 2.00276,
    w = 1.11072;

function boggsRaw(lambda, phi) {
  var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mollweide_js__["d" /* mollweideBromleyTheta */])(__WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */], phi);
  return [k * lambda / (1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(phi) + w / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(theta)), (phi + __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(theta)) / k];
}

boggsRaw.invert = function(x, y) {
  var ky = k * y, theta = y < 0 ? -__WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* quarterPi */] : __WEBPACK_IMPORTED_MODULE_2__math_js__["s" /* quarterPi */], i = 25, delta, phi;
  do {
    phi = ky - __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(theta);
    theta -= delta = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(2 * theta) + 2 * theta - __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(phi)) / (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(2 * theta) + 2 + __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(phi) * __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(theta));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */] && --i > 0);
  phi = ky - __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(theta);
  return [x * (1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(phi) + w / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(theta)) / k, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(boggsRaw)
      .scale(160.857);
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1_js__ = __webpack_require__(11);



function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* asin */])(y * cosPhi0)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1_js__["a" /* default */])(cylindricalEqualAreaRaw)
      .parallel(38.58) // acos(sqrt(width / height / pi)) * radians
      .scale(195.044); // width / (sqrt(width / height / pi) * 2 * pi)
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gringortenRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__square_js__ = __webpack_require__(65);




function gringortenRaw(lambda, phi) {
  var sLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(lambda),
      sPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi),
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
      x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda) * cosPhi,
      y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda) * cosPhi,
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(sPhi * phi);
  lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(y, z));
  phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(x);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) lambda %= __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */];
  var point = gringortenHexadecant(lambda > __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - lambda : lambda, phi);
  if (lambda > __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4) z = point[0], point[0] = -point[1], point[1] = -z;
  return (point[0] *= sLambda, point[1] *= -sPhi, point);
}

gringortenRaw.invert = function(x, y) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x) > 1) x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * 2 - x;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) > 1) y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * 2 - y;
  var sx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x),
      sy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y),
      x0 = -sx * x,
      y0 = -sy * y,
      t = y0 / x0 < 1,
      p = gringortenHexadecantInvert(t ? y0 : x0, t ? x0 : y0),
      lambda = p[0],
      phi = p[1],
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi);
  if (t) lambda = -__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - lambda;
  return [sx * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda) * cosPhi, -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)) + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]), sy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda) * cosPhi)];
};

function gringortenHexadecant(lambda, phi) {
  if (phi === __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) return [0, 0];

  var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
      r = sinPhi * sinPhi,
      r2 = r * r,
      j = 1 + r2,
      k = 1 + 3 * r2,
      q = 1 - r2,
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(j)),
      v = q + r * j * z,
      p2 = (1 - sinPhi) / v,
      p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(p2),
      a2 = p2 * j,
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a2),
      h = p * q,
      x,
      i;

  if (lambda === 0) return [0, -(h + r * a)];

  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * k) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = (0.5 * dp2dPhi) / p,
      dhdPhi = q * dpdPhi - 2 * r * p * drdPhi,
      dra2dPhi = r * j * dp2dPhi + p2 * k * drdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * dra2dPhi,
      zeta = -2 * secPhi * dhdPhi,
      lambda1 = 4 * lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */],
      delta;

  // Slower but accurate bisection method.
  if (lambda > 0.222 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] || phi < __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4 && lambda > 0.175 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) {
    x = (h + r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a2 * (1 + r2) - h * h)) / (1 + r2);
    if (lambda > __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4) return [x, x];
    var x1 = x, x0 = 0.5 * x;
    x = 0.5 * (x0 + x1), i = 50;
    do {
      var g = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a2 - x * x),
          f = (x * (zeta + mu * g) + nu * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(x / a)) - lambda1;
      if (!f) break;
      if (f < 0) x0 = x;
      else x1 = x;
      x = 0.5 * (x0 + x1);
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x1 - x0) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
  }

  // Newton-Raphson.
  else {
    x = __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */], i = 25;
    do {
      var x2 = x * x,
          g2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a2 - x2),
          zetaMug = zeta + mu * g2,
          f2 = x * zetaMug + nu * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(x / a) - lambda1,
          df = zetaMug + (nu - mu * x2) / g2;
      x -= delta = g2 ? f2 / df : 0;
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
  }

  return [x, -h - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a2 - x * x)];
}

function gringortenHexadecantInvert(x, y) {
  var x0 = 0,
      x1 = 1,
      r = 0.5,
      i = 50;

  while (true) {
    var r2 = r * r,
        sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(r),
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 + r2)),
        v = (1 - r2) + r * (1 + r2) * z,
        p2 = (1 - sinPhi) / v,
        p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(p2),
        a2 = p2 * (1 + r2),
        h = p * (1 - r2),
        g2 = a2 - x * x,
        g = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(g2),
        y0 = y + h + r * g;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x1 - x0) < __WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* epsilon2 */] || --i === 0 || y0 === 0) break;
    if (y0 > 0) x0 = r;
    else x1 = r;
    r = 0.5 * (x0 + x1);
  }

  if (!i) return null;

  var phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sinPhi),
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
      secPhi = 1 / cosPhi,
      drdPhi = 2 * sinPhi * cosPhi,
      dvdPhi = (-3 * r + z * (1 + 3 * r2)) * drdPhi,
      dp2dPhi = (-v * cosPhi - (1 - sinPhi) * dvdPhi) / (v * v),
      dpdPhi = 0.5 * dp2dPhi / p,
      dhdPhi = (1 - r2) * dpdPhi - 2 * r * p * drdPhi,
      zeta = -2 * secPhi * dhdPhi,
      mu = -secPhi * drdPhi,
      nu = -secPhi * (r * (1 + r2) * dp2dPhi + p2 * (1 + 3 * r2) * drdPhi);

  return [__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4 * (x * (zeta + mu * g) + nu * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a2))), phi];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__square_js__["a" /* default */])(gringortenRaw))
      .scale(239.75);
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = guyouRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elliptic_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__square_js__ = __webpack_require__(65);





function guyouRaw(lambda, phi) {
  var k_ = (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] - 1) / (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] + 1),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(1 - k_ * k_),
      K = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic_js__["a" /* ellipticF */])(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */], k * k),
      f = -1,
      psi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["l" /* tan */])(__WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] / 4 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(phi) / 2)),
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* exp */])(f * psi) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(k_),
      at = guyouComplexAtan(r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(f * lambda), r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(f * lambda)),
      t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic_js__["b" /* ellipticFi */])(at[0], at[1], k * k);
  return [-t[1], (phi >= 0 ? 1 : -1) * (0.5 * K - t[0])];
}

function guyouComplexAtan(x, y) {
  var x2 = x * x,
      y_1 = y + 1,
      t = 1 - x2 - y * y;
  return [
   0.5 * ((x >= 0 ? __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */]) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* atan2 */])(t, 2 * x)),
    -0.25 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* log */])(t * t + 4 * x2) +0.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* log */])(y_1 * y_1 + x2)
  ];
}

function guyouComplexDivide(a, b) {
  var denominator = b[0] * b[0] + b[1] * b[1];
  return [
    (a[0] * b[0] + a[1] * b[1]) / denominator,
    (a[1] * b[0] - a[0] * b[1]) / denominator
  ];
}

guyouRaw.invert = function(x, y) {
  var k_ = (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] - 1) / (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] + 1),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(1 - k_ * k_),
      K = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic_js__["a" /* ellipticF */])(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */], k * k),
      f = -1,
      j = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__elliptic_js__["c" /* ellipticJi */])(0.5 * K - y, -x, k * k),
      tn = guyouComplexDivide(j[0], j[1]),
      lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["h" /* atan2 */])(tn[1], tn[0]) / f;
  return [
    lambda,
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["r" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["x" /* exp */])(0.5 / f * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* log */])(k_ * tn[0] * tn[0] + k_ * tn[1] * tn[1]))) - __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */]
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__square_js__["a" /* default */])(guyouRaw))
      .scale(151.496);
});


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = homolosineRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sinusoidal_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sinuMollweide_js__ = __webpack_require__(31);






function homolosineRaw(lambda, phi) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) > __WEBPACK_IMPORTED_MODULE_4__sinuMollweide_js__["c" /* sinuMollweidePhi */]
      ? (lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mollweide_js__["b" /* mollweideRaw */])(lambda, phi), lambda[1] -= phi > 0 ? __WEBPACK_IMPORTED_MODULE_4__sinuMollweide_js__["d" /* sinuMollweideY */] : -__WEBPACK_IMPORTED_MODULE_4__sinuMollweide_js__["d" /* sinuMollweideY */], lambda)
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__sinusoidal_js__["b" /* sinusoidalRaw */])(lambda, phi);
}

homolosineRaw.invert = function(x, y) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) > __WEBPACK_IMPORTED_MODULE_4__sinuMollweide_js__["c" /* sinuMollweidePhi */]
      ? __WEBPACK_IMPORTED_MODULE_2__mollweide_js__["b" /* mollweideRaw */].invert(x, y + (y > 0 ? __WEBPACK_IMPORTED_MODULE_4__sinuMollweide_js__["d" /* sinuMollweideY */] : -__WEBPACK_IMPORTED_MODULE_4__sinuMollweide_js__["d" /* sinuMollweideY */]))
      : __WEBPACK_IMPORTED_MODULE_3__sinusoidal_js__["b" /* sinusoidalRaw */].invert(x, y);
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(homolosineRaw)
      .scale(152.63);
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guyou_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(30);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__guyou_js__["b" /* guyouRaw */])
      .scale(111.48);
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(project) {
  var dx = project(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* halfPi */], 0)[0] - project(-__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* halfPi */], 0)[0];

  function projectSquare(lambda, phi) {
    var s = lambda > 0 ? -0.5 : 0.5,
        point = project(lambda + s * __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */], phi);
    point[0] -= s * dx;
    return point;
  }

  if (project.invert) projectSquare.invert = function(x, y) {
    var s = x > 0 ? -0.5 : 0.5,
        location = project.invert(x + s * dx, y),
        lambda = location[0] - s * __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */];
    if (lambda < -__WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */]) lambda += 2 * __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */];
    else if (lambda > __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */]) lambda -= 2 * __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */];
    location[0] = lambda;
    return location;
  };

  return projectSquare;
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



// Compute the origin as the midpoint of the two reference points.
// Rotate one of the reference points by the origin.
// Apply the spherical law of sines to compute gamma rotation.
/* harmony default export */ __webpack_exports__["a"] = (function(raw, p0, p1) {
  var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoInterpolate"])(p0, p1),
      o = i(0.5),
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoRotation"])([-o[0], -o[1]])(p0),
      b = i.distance / 2,
      y = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(a[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(b)),
      R = [-o[0], -o[1], -(a[0] > 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] - y : y) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]],
      p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(raw(b)).rotate(R),
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoRotation"])(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream_js__ = __webpack_require__(8);





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
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation_js__ = __webpack_require__(21);





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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);



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
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(7);


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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual_js__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index_js__ = __webpack_require__(72);






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
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin_js__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(13);






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
        segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["a" /* merge */])(segments);
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
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual_js__ = __webpack_require__(78);


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
/* 74 */
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length_js__ = __webpack_require__(76);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__length_js__["a" /* default */])(object);
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream_js__ = __webpack_require__(8);





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
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(7);


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
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math_js__["p" /* epsilon */];
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(2);




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
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea_js__ = __webpack_require__(34);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea_js__["a" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(3);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(4);



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
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(42);


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
/* 87 */
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
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transform_js__ = __webpack_require__(44);


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
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(89);


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
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_0__dsv_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__csv_js__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParse", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormat", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatBody", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatRow", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "csvFormatValue", function() { return __WEBPACK_IMPORTED_MODULE_1__csv_js__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tsv_js__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParse", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvParseRows", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormat", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatBody", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRows", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatRow", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tsvFormatValue", function() { return __WEBPACK_IMPORTED_MODULE_2__tsv_js__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autoType_js__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autoType", function() { return __WEBPACK_IMPORTED_MODULE_3__autoType_js__["a"]; });






/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__airy__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAiry", function() { return __WEBPACK_IMPORTED_MODULE_0__airy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAiryRaw", function() { return __WEBPACK_IMPORTED_MODULE_0__airy__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aitoff__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAitoff", function() { return __WEBPACK_IMPORTED_MODULE_1__aitoff__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAitoffRaw", function() { return __WEBPACK_IMPORTED_MODULE_1__aitoff__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__armadillo__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArmadillo", function() { return __WEBPACK_IMPORTED_MODULE_2__armadillo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArmadilloRaw", function() { return __WEBPACK_IMPORTED_MODULE_2__armadillo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__august__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAugust", function() { return __WEBPACK_IMPORTED_MODULE_3__august__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAugustRaw", function() { return __WEBPACK_IMPORTED_MODULE_3__august__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__baker__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBaker", function() { return __WEBPACK_IMPORTED_MODULE_4__baker__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBakerRaw", function() { return __WEBPACK_IMPORTED_MODULE_4__baker__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__berghaus__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBerghaus", function() { return __WEBPACK_IMPORTED_MODULE_5__berghaus__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBerghausRaw", function() { return __WEBPACK_IMPORTED_MODULE_5__berghaus__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bertin__ = __webpack_require__(121);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBertin1953", function() { return __WEBPACK_IMPORTED_MODULE_6__bertin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBertin1953Raw", function() { return __WEBPACK_IMPORTED_MODULE_6__bertin__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boggs__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBoggs", function() { return __WEBPACK_IMPORTED_MODULE_7__boggs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBoggsRaw", function() { return __WEBPACK_IMPORTED_MODULE_7__boggs__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bonne__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBonne", function() { return __WEBPACK_IMPORTED_MODULE_8__bonne__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBonneRaw", function() { return __WEBPACK_IMPORTED_MODULE_8__bonne__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bottomley__ = __webpack_require__(123);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBottomley", function() { return __WEBPACK_IMPORTED_MODULE_9__bottomley__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBottomleyRaw", function() { return __WEBPACK_IMPORTED_MODULE_9__bottomley__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bromley__ = __webpack_require__(124);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBromley", function() { return __WEBPACK_IMPORTED_MODULE_10__bromley__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBromleyRaw", function() { return __WEBPACK_IMPORTED_MODULE_10__bromley__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chamberlin__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoChamberlin", function() { return __WEBPACK_IMPORTED_MODULE_11__chamberlin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoChamberlinRaw", function() { return __WEBPACK_IMPORTED_MODULE_11__chamberlin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoChamberlinAfrica", function() { return __WEBPACK_IMPORTED_MODULE_11__chamberlin__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__collignon__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCollignon", function() { return __WEBPACK_IMPORTED_MODULE_12__collignon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCollignonRaw", function() { return __WEBPACK_IMPORTED_MODULE_12__collignon__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__craig__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCraig", function() { return __WEBPACK_IMPORTED_MODULE_13__craig__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCraigRaw", function() { return __WEBPACK_IMPORTED_MODULE_13__craig__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__craster__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCraster", function() { return __WEBPACK_IMPORTED_MODULE_14__craster__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCrasterRaw", function() { return __WEBPACK_IMPORTED_MODULE_14__craster__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cylindricalEqualArea__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_15__cylindricalEqualArea__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_15__cylindricalEqualArea__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__cylindricalStereographic__ = __webpack_require__(128);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalStereographic", function() { return __WEBPACK_IMPORTED_MODULE_16__cylindricalStereographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCylindricalStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_16__cylindricalStereographic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__eckert1_js__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert1", function() { return __WEBPACK_IMPORTED_MODULE_17__eckert1_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert1Raw", function() { return __WEBPACK_IMPORTED_MODULE_17__eckert1_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__eckert2_js__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert2", function() { return __WEBPACK_IMPORTED_MODULE_18__eckert2_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert2Raw", function() { return __WEBPACK_IMPORTED_MODULE_18__eckert2_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__eckert3_js__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert3", function() { return __WEBPACK_IMPORTED_MODULE_19__eckert3_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert3Raw", function() { return __WEBPACK_IMPORTED_MODULE_19__eckert3_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__eckert4_js__ = __webpack_require__(132);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert4", function() { return __WEBPACK_IMPORTED_MODULE_20__eckert4_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert4Raw", function() { return __WEBPACK_IMPORTED_MODULE_20__eckert4_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__eckert5_js__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert5", function() { return __WEBPACK_IMPORTED_MODULE_21__eckert5_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert5Raw", function() { return __WEBPACK_IMPORTED_MODULE_21__eckert5_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__eckert6_js__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert6", function() { return __WEBPACK_IMPORTED_MODULE_22__eckert6_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEckert6Raw", function() { return __WEBPACK_IMPORTED_MODULE_22__eckert6_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__eisenlohr_js__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEisenlohr", function() { return __WEBPACK_IMPORTED_MODULE_23__eisenlohr_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEisenlohrRaw", function() { return __WEBPACK_IMPORTED_MODULE_23__eisenlohr_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__fahey_js__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFahey", function() { return __WEBPACK_IMPORTED_MODULE_24__fahey_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFaheyRaw", function() { return __WEBPACK_IMPORTED_MODULE_24__fahey_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__foucaut_js__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFoucaut", function() { return __WEBPACK_IMPORTED_MODULE_25__foucaut_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFoucautRaw", function() { return __WEBPACK_IMPORTED_MODULE_25__foucaut_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__foucautSinusoidal_js__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFoucautSinusoidal", function() { return __WEBPACK_IMPORTED_MODULE_26__foucautSinusoidal_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoFoucautSinusoidalRaw", function() { return __WEBPACK_IMPORTED_MODULE_26__foucautSinusoidal_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__gilbert_js__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGilbert", function() { return __WEBPACK_IMPORTED_MODULE_27__gilbert_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__gingery_js__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGingery", function() { return __WEBPACK_IMPORTED_MODULE_28__gingery_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGingeryRaw", function() { return __WEBPACK_IMPORTED_MODULE_28__gingery_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ginzburg4_js__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg4", function() { return __WEBPACK_IMPORTED_MODULE_29__ginzburg4_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg4Raw", function() { return __WEBPACK_IMPORTED_MODULE_29__ginzburg4_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ginzburg5_js__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg5", function() { return __WEBPACK_IMPORTED_MODULE_30__ginzburg5_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg5Raw", function() { return __WEBPACK_IMPORTED_MODULE_30__ginzburg5_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ginzburg6_js__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg6", function() { return __WEBPACK_IMPORTED_MODULE_31__ginzburg6_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg6Raw", function() { return __WEBPACK_IMPORTED_MODULE_31__ginzburg6_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ginzburg8_js__ = __webpack_require__(145);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg8", function() { return __WEBPACK_IMPORTED_MODULE_32__ginzburg8_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg8Raw", function() { return __WEBPACK_IMPORTED_MODULE_32__ginzburg8_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ginzburg9_js__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg9", function() { return __WEBPACK_IMPORTED_MODULE_33__ginzburg9_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGinzburg9Raw", function() { return __WEBPACK_IMPORTED_MODULE_33__ginzburg9_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__gringorten_js__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGringorten", function() { return __WEBPACK_IMPORTED_MODULE_34__gringorten_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGringortenRaw", function() { return __WEBPACK_IMPORTED_MODULE_34__gringorten_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guyou_js__ = __webpack_require__(62);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGuyou", function() { return __WEBPACK_IMPORTED_MODULE_35__guyou_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGuyouRaw", function() { return __WEBPACK_IMPORTED_MODULE_35__guyou_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__hammer_js__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammer", function() { return __WEBPACK_IMPORTED_MODULE_36__hammer_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammerRaw", function() { return __WEBPACK_IMPORTED_MODULE_36__hammer_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__hammerRetroazimuthal_js__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammerRetroazimuthal", function() { return __WEBPACK_IMPORTED_MODULE_37__hammerRetroazimuthal_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHammerRetroazimuthalRaw", function() { return __WEBPACK_IMPORTED_MODULE_37__hammerRetroazimuthal_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__healpix_js__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHealpix", function() { return __WEBPACK_IMPORTED_MODULE_38__healpix_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHealpixRaw", function() { return __WEBPACK_IMPORTED_MODULE_38__healpix_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__hill_js__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHill", function() { return __WEBPACK_IMPORTED_MODULE_39__hill_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHillRaw", function() { return __WEBPACK_IMPORTED_MODULE_39__hill_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__homolosine_js__ = __webpack_require__(63);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHomolosine", function() { return __WEBPACK_IMPORTED_MODULE_40__homolosine_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHomolosineRaw", function() { return __WEBPACK_IMPORTED_MODULE_40__homolosine_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__hufnagel_js__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHufnagel", function() { return __WEBPACK_IMPORTED_MODULE_41__hufnagel_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHufnagelRaw", function() { return __WEBPACK_IMPORTED_MODULE_41__hufnagel_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__hyperelliptical__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHyperelliptical", function() { return __WEBPACK_IMPORTED_MODULE_42__hyperelliptical__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoHyperellipticalRaw", function() { return __WEBPACK_IMPORTED_MODULE_42__hyperelliptical__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__interrupted_index__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterrupt", function() { return __WEBPACK_IMPORTED_MODULE_43__interrupted_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__interrupted_boggs__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedBoggs", function() { return __WEBPACK_IMPORTED_MODULE_44__interrupted_boggs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__interrupted_homolosine__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedHomolosine", function() { return __WEBPACK_IMPORTED_MODULE_45__interrupted_homolosine__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__interrupted_mollweide__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedMollweide", function() { return __WEBPACK_IMPORTED_MODULE_46__interrupted_mollweide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__interrupted_mollweideHemispheres__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedMollweideHemispheres", function() { return __WEBPACK_IMPORTED_MODULE_47__interrupted_mollweideHemispheres__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__interrupted_sinuMollweide__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedSinuMollweide", function() { return __WEBPACK_IMPORTED_MODULE_48__interrupted_sinuMollweide__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__interrupted_sinusoidal__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedSinusoidal", function() { return __WEBPACK_IMPORTED_MODULE_49__interrupted_sinusoidal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__kavrayskiy7_js__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoKavrayskiy7", function() { return __WEBPACK_IMPORTED_MODULE_50__kavrayskiy7_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoKavrayskiy7Raw", function() { return __WEBPACK_IMPORTED_MODULE_50__kavrayskiy7_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__lagrange_js__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLagrange", function() { return __WEBPACK_IMPORTED_MODULE_51__lagrange_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLagrangeRaw", function() { return __WEBPACK_IMPORTED_MODULE_51__lagrange_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__larrivee__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLarrivee", function() { return __WEBPACK_IMPORTED_MODULE_52__larrivee__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLarriveeRaw", function() { return __WEBPACK_IMPORTED_MODULE_52__larrivee__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__laskowski__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLaskowski", function() { return __WEBPACK_IMPORTED_MODULE_53__laskowski__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLaskowskiRaw", function() { return __WEBPACK_IMPORTED_MODULE_53__laskowski__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__littrow_js__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLittrow", function() { return __WEBPACK_IMPORTED_MODULE_54__littrow_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLittrowRaw", function() { return __WEBPACK_IMPORTED_MODULE_54__littrow_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__loximuthal_js__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLoximuthal", function() { return __WEBPACK_IMPORTED_MODULE_55__loximuthal_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLoximuthalRaw", function() { return __WEBPACK_IMPORTED_MODULE_55__loximuthal_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__miller__ = __webpack_require__(166);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMiller", function() { return __WEBPACK_IMPORTED_MODULE_56__miller__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMillerRaw", function() { return __WEBPACK_IMPORTED_MODULE_56__miller__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographic", function() { return __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicAlaska", function() { return __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicGs48", function() { return __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicGs50", function() { return __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicMiller", function() { return __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoModifiedStereographicLee", function() { return __WEBPACK_IMPORTED_MODULE_57__modifiedStereographic__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__mollweide__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMollweide", function() { return __WEBPACK_IMPORTED_MODULE_58__mollweide__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMollweideRaw", function() { return __WEBPACK_IMPORTED_MODULE_58__mollweide__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__mtFlatPolarParabolic__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarParabolic", function() { return __WEBPACK_IMPORTED_MODULE_59__mtFlatPolarParabolic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarParabolicRaw", function() { return __WEBPACK_IMPORTED_MODULE_59__mtFlatPolarParabolic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__mtFlatPolarQuartic__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarQuartic", function() { return __WEBPACK_IMPORTED_MODULE_60__mtFlatPolarQuartic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarQuarticRaw", function() { return __WEBPACK_IMPORTED_MODULE_60__mtFlatPolarQuartic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__mtFlatPolarSinusoidal__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarSinusoidal", function() { return __WEBPACK_IMPORTED_MODULE_61__mtFlatPolarSinusoidal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMtFlatPolarSinusoidalRaw", function() { return __WEBPACK_IMPORTED_MODULE_61__mtFlatPolarSinusoidal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62_d3_geo__ = __webpack_require__(1);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth", function() { return __WEBPACK_IMPORTED_MODULE_62_d3_geo__["geoNaturalEarth1"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarthRaw", function() { return __WEBPACK_IMPORTED_MODULE_62_d3_geo__["geoNaturalEarth1Raw"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__naturalEarth2__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth2", function() { return __WEBPACK_IMPORTED_MODULE_63__naturalEarth2__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth2Raw", function() { return __WEBPACK_IMPORTED_MODULE_63__naturalEarth2__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__nellHammer__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNellHammer", function() { return __WEBPACK_IMPORTED_MODULE_64__nellHammer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNellHammerRaw", function() { return __WEBPACK_IMPORTED_MODULE_64__nellHammer__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__interrupted_quarticAuthalic__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterruptedQuarticAuthalic", function() { return __WEBPACK_IMPORTED_MODULE_65__interrupted_quarticAuthalic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__nicolosi__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNicolosi", function() { return __WEBPACK_IMPORTED_MODULE_66__nicolosi__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNicolosiRaw", function() { return __WEBPACK_IMPORTED_MODULE_66__nicolosi__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__patterson__ = __webpack_require__(175);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPatterson", function() { return __WEBPACK_IMPORTED_MODULE_67__patterson__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPattersonRaw", function() { return __WEBPACK_IMPORTED_MODULE_67__patterson__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__polyconic__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyconic", function() { return __WEBPACK_IMPORTED_MODULE_68__polyconic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyconicRaw", function() { return __WEBPACK_IMPORTED_MODULE_68__polyconic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__polyhedral_index_js__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedral", function() { return __WEBPACK_IMPORTED_MODULE_69__polyhedral_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__polyhedral_butterfly_js__ = __webpack_require__(177);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralButterfly", function() { return __WEBPACK_IMPORTED_MODULE_70__polyhedral_butterfly_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__polyhedral_collignon_js__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralCollignon", function() { return __WEBPACK_IMPORTED_MODULE_71__polyhedral_collignon_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__polyhedral_waterman_js__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPolyhedralWaterman", function() { return __WEBPACK_IMPORTED_MODULE_72__polyhedral_waterman_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__project_index__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProject", function() { return __WEBPACK_IMPORTED_MODULE_73__project_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__quincuncial_gringorten_js__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGringortenQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_74__quincuncial_gringorten_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__quincuncial_peirce_js__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPeirceQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_75__quincuncial_peirce_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPierceQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_75__quincuncial_peirce_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__quantize__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoQuantize", function() { return __WEBPACK_IMPORTED_MODULE_76__quantize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__quincuncial_index_js__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoQuincuncial", function() { return __WEBPACK_IMPORTED_MODULE_77__quincuncial_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__rectangularPolyconic__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRectangularPolyconic", function() { return __WEBPACK_IMPORTED_MODULE_78__rectangularPolyconic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRectangularPolyconicRaw", function() { return __WEBPACK_IMPORTED_MODULE_78__rectangularPolyconic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__robinson__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRobinson", function() { return __WEBPACK_IMPORTED_MODULE_79__robinson__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRobinsonRaw", function() { return __WEBPACK_IMPORTED_MODULE_79__robinson__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__satellite__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSatellite", function() { return __WEBPACK_IMPORTED_MODULE_80__satellite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSatelliteRaw", function() { return __WEBPACK_IMPORTED_MODULE_80__satellite__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__sinuMollweide__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinuMollweide", function() { return __WEBPACK_IMPORTED_MODULE_81__sinuMollweide__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinuMollweideRaw", function() { return __WEBPACK_IMPORTED_MODULE_81__sinuMollweide__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__sinusoidal__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinusoidal", function() { return __WEBPACK_IMPORTED_MODULE_82__sinusoidal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoSinusoidalRaw", function() { return __WEBPACK_IMPORTED_MODULE_82__sinusoidal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__stitch__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStitch", function() { return __WEBPACK_IMPORTED_MODULE_83__stitch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__times__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTimes", function() { return __WEBPACK_IMPORTED_MODULE_84__times__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTimesRaw", function() { return __WEBPACK_IMPORTED_MODULE_84__times__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__twoPointAzimuthal__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthal", function() { return __WEBPACK_IMPORTED_MODULE_85__twoPointAzimuthal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthalRaw", function() { return __WEBPACK_IMPORTED_MODULE_85__twoPointAzimuthal__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointAzimuthalUsa", function() { return __WEBPACK_IMPORTED_MODULE_85__twoPointAzimuthal__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__twoPointEquidistant__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_86__twoPointEquidistant__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_86__twoPointEquidistant__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTwoPointEquidistantUsa", function() { return __WEBPACK_IMPORTED_MODULE_86__twoPointEquidistant__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__vanDerGrinten__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten", function() { return __WEBPACK_IMPORTED_MODULE_87__vanDerGrinten__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrintenRaw", function() { return __WEBPACK_IMPORTED_MODULE_87__vanDerGrinten__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__vanDerGrinten2__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten2", function() { return __WEBPACK_IMPORTED_MODULE_88__vanDerGrinten2__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten2Raw", function() { return __WEBPACK_IMPORTED_MODULE_88__vanDerGrinten2__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__vanDerGrinten3__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten3", function() { return __WEBPACK_IMPORTED_MODULE_89__vanDerGrinten3__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten3Raw", function() { return __WEBPACK_IMPORTED_MODULE_89__vanDerGrinten3__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__vanDerGrinten4__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten4", function() { return __WEBPACK_IMPORTED_MODULE_90__vanDerGrinten4__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoVanDerGrinten4Raw", function() { return __WEBPACK_IMPORTED_MODULE_90__vanDerGrinten4__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__wagner_js__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner", function() { return __WEBPACK_IMPORTED_MODULE_91__wagner_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner7", function() { return __WEBPACK_IMPORTED_MODULE_91__wagner_js__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagnerRaw", function() { return __WEBPACK_IMPORTED_MODULE_91__wagner_js__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__wagner4_js__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner4", function() { return __WEBPACK_IMPORTED_MODULE_92__wagner4_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner4Raw", function() { return __WEBPACK_IMPORTED_MODULE_92__wagner4_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__wagner6_js__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner6", function() { return __WEBPACK_IMPORTED_MODULE_93__wagner6_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWagner6Raw", function() { return __WEBPACK_IMPORTED_MODULE_93__wagner6_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__wiechel_js__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWiechel", function() { return __WEBPACK_IMPORTED_MODULE_94__wiechel_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWiechelRaw", function() { return __WEBPACK_IMPORTED_MODULE_94__wiechel_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__winkel3__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWinkel3", function() { return __WEBPACK_IMPORTED_MODULE_95__winkel3__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoWinkel3Raw", function() { return __WEBPACK_IMPORTED_MODULE_95__winkel3__["b"]; });






























































 // DEPRECATED moved to d3-geo













 // DEPRECATED misspelling






















/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_0__create__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__creator__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_1__creator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__local__ = __webpack_require__(232);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_2__local__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matcher__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_3__matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mouse__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_4__mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__namespace__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_5__namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__namespaces__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_6__namespaces__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__point__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return __WEBPACK_IMPORTED_MODULE_7__point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__select__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_8__select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectAll__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_9__selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__selection_index__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_10__selection_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selector__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_11__selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectorAll__ = __webpack_require__(87);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_12__selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selection_style__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_13__selection_style__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__touch__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_14__touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__touches__ = __webpack_require__(264);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_15__touches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__window__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_16__window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__selection_on__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_17__selection_on__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_17__selection_on__["b"]; });




















/***/ }),
/* 95 */
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
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bbox_js__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return __WEBPACK_IMPORTED_MODULE_0__bbox_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_js__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return __WEBPACK_IMPORTED_MODULE_1__feature_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mesh_js__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return __WEBPACK_IMPORTED_MODULE_2__mesh_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return __WEBPACK_IMPORTED_MODULE_2__mesh_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__merge_js__ = __webpack_require__(266);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_3__merge_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return __WEBPACK_IMPORTED_MODULE_3__merge_js__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__neighbors_js__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return __WEBPACK_IMPORTED_MODULE_4__neighbors_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__quantize_js__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_5__quantize_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transform_js__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return __WEBPACK_IMPORTED_MODULE_6__transform_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__untransform_js__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return __WEBPACK_IMPORTED_MODULE_7__untransform_js__["a"]; });










/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

/* globals AFRAME, THREE, SVGPathSegMovetoAbs, SVGPathSegLinetoRel, SVGPathSegLinetoVerticalRel, SVGPathSegLinetoHorizontalRel, SVGPathSegLinetoHorizontalAbs, SVGPathSegLinetoVerticalAbs, SVGPathSegClosePath, SVGPathSegLinetoAbs */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

__webpack_require__(95); // polyfill

const d3sel = __webpack_require__(94)
const d3geo = __webpack_require__(1)
const d3geoprojection = __webpack_require__(93)
const d3dsv = __webpack_require__(92)
const topojson = __webpack_require__(96);

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

    const projectionFunc = d3geo[data.projection] || d3geoprojection[data.projection];
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
      
      const projectionFunc = d3geo[data.projection] || d3geoprojection[data.projection];
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
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(51);


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
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(53);









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
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 103 */
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
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(14);


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
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(25);




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
/* 106 */
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
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);


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
/* 109 */
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
/* 110 */
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
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(25);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(48);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(55);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 114 */
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
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return csvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return csvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return csvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return csvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return csvFormatRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return csvFormatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return csvFormatValue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(26);


var csv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv_js__["a" /* default */])(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;
var csvFormat = csv.format;
var csvFormatBody = csv.formatBody;
var csvFormatRows = csv.formatRows;
var csvFormatRow = csv.formatRow;
var csvFormatValue = csv.formatValue;


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tsvParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tsvParseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tsvFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return tsvFormatBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tsvFormatRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return tsvFormatRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return tsvFormatValue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dsv_js__ = __webpack_require__(26);


var tsv = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dsv_js__["a" /* default */])("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;
var tsvFormat = tsv.format;
var tsvFormatBody = tsv.formatBody;
var tsvFormatRows = tsv.formatRows;
var tsvFormatRow = tsv.formatRow;
var tsvFormatValue = tsv.formatValue;


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = airyRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function airyRaw(beta) {
  var tanBeta_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(beta / 2),
      b = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(beta / 2)) / (tanBeta_2 * tanBeta_2);

  function forward(x, y) {
    var cosx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(x),
        cosy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y),
        siny = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(y),
        cosz = cosy * cosx,
        k = -((1 - cosz ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])((1 + cosz) / 2) / (1 - cosz) : -0.5) + b / (1 + cosz));
    return [k * cosy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(x), k * siny];
  }

  forward.invert = function(x, y) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(x * x + y * y),
        z = -beta / 2,
        i = 50, delta;
    if (!r) return [0, 0];
    do {
      var z_2 = z / 2,
          cosz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(z_2),
          sinz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(z_2),
          tanz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(z_2),
          lnsecz_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(1 / cosz_2);
      z -= delta = (2 / tanz_2 * lnsecz_2 - b * tanz_2 - r) / (-lnsecz_2 / (sinz_2 * sinz_2) + 1 - b / (2 * cosz_2 * cosz_2));
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
    var sinz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(z);
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(x * sinz, r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(z)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y * sinz / r)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var beta = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(airyRaw),
      p = m(beta);

  p.radius = function(_) {
    return arguments.length ? m(beta = _ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]) : beta * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
  };

  return p
      .scale(179.976)
      .clipAngle(147);
});


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = armadilloRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function armadilloRaw(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi0),
      cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi0),
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(sPhi0 * phi0),
      k = (1 + sinPhi0 - cosPhi0) / 2;

  function forward(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda /= 2);
    return [
      (1 + cosPhi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda),
      (sPhi0 * phi > -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(cosLambda, tanPhi0) - 1e-3 ? 0 : -sPhi0 * 10) + k + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) * cosPhi0 - (1 + cosPhi) * sinPhi0 * cosLambda // TODO D3 core should allow null or [NaN, NaN] to be returned.
    ];
  }

  forward.invert = function(x, y) {
    var lambda = 0,
        phi = 0,
        i = 50;
    do {
      var cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda),
          sinLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda),
          cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
          sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
          A = 1 + cosPhi,
          fx = A * sinLambda - x,
          fy = k + sinPhi * cosPhi0 - A * sinPhi0 * cosLambda - y,
          dxdLambda = A * cosLambda / 2,
          dxdPhi = -sinLambda * sinPhi,
          dydLambda = sinPhi0 * A * sinLambda / 2,
          dydPhi = cosPhi0 * cosPhi + sinPhi0 * cosLambda * sinPhi,
          denominator = dxdPhi * dydLambda - dydPhi * dxdLambda,
          dLambda = (fy * dxdPhi - fx * dydPhi) / denominator / 2,
          dPhi = (fx * dydLambda - fy * dxdLambda) / denominator;
      lambda -= dLambda, phi -= dPhi;
    } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dLambda) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dPhi) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) && --i > 0);
    return sPhi0 * phi > -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda), tanPhi0) - 1e-3 ? [lambda * 2, phi] : null;
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var phi0 = 20 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */],
      sPhi0 = phi0 >= 0 ? 1 : -1,
      tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(sPhi0 * phi0),
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(armadilloRaw),
      p = m(phi0),
      stream_ = p.stream;

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
    tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])((sPhi0 = (phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]) >= 0 ? 1 : -1) * phi0);
    return m(phi0);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream)),
        precision = p.precision();
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var lambda = sPhi0 * -180; sPhi0 * lambda < 180; lambda += sPhi0 * 90)
        sphereStream.point(lambda, sPhi0 * 90);
      if (phi0) while (sPhi0 * (lambda -= 3 * sPhi0 * precision) >= -180) {
        sphereStream.point(lambda, sPhi0 * -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */] / 2), tanPhi0) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(218.695)
      .center([0, 28.0974]);
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = bakerRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var sqrt8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(8),
    phi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */]);

function bakerRaw(lambda, phi) {
  var phi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi);
  return phi0 < __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */]
      ? [lambda, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */] + phi / 2))]
      : [lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi0) * (2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */] - 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi0)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi) * (2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */] * (phi0 - __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */]) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi0 / 2)))];
}

bakerRaw.invert = function(x, y) {
  if ((y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y)) < phi0) return [x, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]];
  var phi = __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */], i = 25, delta, y0;
  do {
    var cosPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi / 2), tanPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi / 2);
    phi -= delta = (sqrt8 * (phi - __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */]) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(tanPhi_2) - y0) / (sqrt8 - cosPhi_2 * cosPhi_2 / (2 * tanPhi_2));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* epsilon2 */] && --i > 0);
  return [x / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) * (sqrt8 - 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi))), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(bakerRaw)
      .scale(112.314);
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = berghausRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function berghausRaw(lobes) {
  var k = 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / lobes;

  function forward(lambda, phi) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEquidistantRaw"])(lambda, phi);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) { // back hemisphere
      var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(p[1], p[0]),
          r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(p[0] * p[0] + p[1] * p[1]),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["E" /* round */])((theta - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) / k) + __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
          alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta -= theta0), 2 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta)); // angle relative to lobe end
      theta = theta0 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(alpha)) - alpha;
      p[0] = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta);
      p[1] = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta);
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(x * x + y * y);
    if (r > __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) {
      var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(y, x),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["E" /* round */])((theta - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) / k) + __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
          s = theta > theta0 ? -1 : 1,
          A = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta0 - theta),
          cotAlpha = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(s * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])((A - __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] - 2 * A) + r * r)));
      theta = theta0 + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])((cotAlpha + s * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(cotAlpha * cotAlpha - 3)) / 3);
      x = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta), y = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta);
    }
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEquidistantRaw"].invert(x, y);
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lobes = 5,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(berghausRaw),
      p = m(lobes),
      projectionStream = p.stream,
      epsilon = 1e-2,
      cr = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]),
      sr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]);

  p.lobes = function(_) {
    return arguments.length ? m(lobes = +_) : lobes;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = projectionStream(stream),
        sphereStream = (p.rotate([0, 0]), projectionStream(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 360 / lobes, delta0 = 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / lobes, phi = 90 - 180 / lobes, phi0 = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]; i < lobes; ++i, phi -= delta, phi0 -= delta0) {
        sphereStream.point(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi0), cr) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi0)) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]);
        if (phi < -90) {
          sphereStream.point(-90, -180 - phi - epsilon);
          sphereStream.point(-90, -180 - phi + epsilon);
        } else {
          sphereStream.point(90, phi + epsilon);
          sphereStream.point(90, phi - epsilon);
        }
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .scale(87.8076)
      .center([0, 17.1875])
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = bertin1953Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hammer_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newton_js__ = __webpack_require__(10);





// Bertin 1953 as a modified Briesemeister
// https://bl.ocks.org/Fil/5b9ee9636dfb6ffa53443c9006beb642
function bertin1953Raw() {
  var hammer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hammer_js__["b" /* hammerRaw */])(1.68, 2),
      fu = 1.4, k = 12;

  function forward(lambda, phi) {

    if (lambda + phi < -fu) {
      var u = (lambda - phi + 1.6) * (lambda + phi + fu) / 8;
      lambda += u;
      phi -= 0.8 * u * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(phi + __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] / 2);
    }

    var r = hammer(lambda, phi);

    var d = (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(lambda * phi)) / k;

    if (r[1] < 0) {
      r[0] *= 1 + d;
    }
    if (r[1] > 0) {
      r[1] *= 1 + d / 1.5 * r[0] * r[0];
    }

    return r;
  }
  
  forward.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__newton_js__["b" /* solve2d */])(forward);
  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  // this projection should not be rotated
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(bertin1953Raw())
    .rotate([-16.5, -42])
    .scale(176.57)
    .center([7.93, 0.09]);
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = bonneRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parallel1_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sinusoidal_js__ = __webpack_require__(15);




function bonneRaw(phi0) {
  if (!phi0) return __WEBPACK_IMPORTED_MODULE_2__sinusoidal_js__["b" /* sinusoidalRaw */];
  var cotPhi0 = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi0);

  function forward(lambda, phi) {
    var rho = cotPhi0 + phi0 - phi,
        e = rho ? lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) / rho : rho;
    return [rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(e), cotPhi0 - rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(e)];
  }

  forward.invert = function(x, y) {
    var rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(x * x + (y = cotPhi0 - y) * y),
        phi = cotPhi0 + phi0 - rho;
    return [rho / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(x, y), phi];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parallel1_js__["a" /* default */])(bonneRaw)
      .scale(123.082)
      .center([0, 26.1441])
      .parallel(45);
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = bottomleyRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function bottomleyRaw(sinPsi) {

  function forward(lambda, phi) {
    var rho = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - phi,
        eta = rho ? lambda * sinPsi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(rho) / rho : rho;
    return [rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(eta) / sinPsi, __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(eta)];
  }

  forward.invert = function(x, y) {
    var x1 = x * sinPsi,
        y1 = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - y,
        rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(x1 * x1 + y1 * y1),
        eta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(x1, y1);
    return [(rho ? rho / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(rho) : 1) * eta / sinPsi, __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - rho];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var sinPsi = 0.5,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(bottomleyRaw),
      p = m(sinPsi);

  p.fraction = function(_) {
    return arguments.length ? m(sinPsi = +_) : sinPsi;
  };

  return p
      .scale(158.837);
});


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bromleyRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide_js__ = __webpack_require__(6);




var bromleyRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mollweide_js__["c" /* mollweideBromleyRaw */])(1, 4 / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */], __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(bromleyRaw)
      .scale(152.63);
});


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = chamberlinRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = chamberlinAfrica;
/* harmony export (immutable) */ __webpack_exports__["a"] = chamberlin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newton_js__ = __webpack_require__(10);




// Azimuthal distance.
function distance(dPhi, c1, s1, c2, s2, dLambda) {
  var cosdLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(dLambda), r;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dPhi) > 1 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dLambda) > 1) {
    r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(s1 * s2 + c1 * c2 * cosdLambda);
  } else {
    var sindPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(dPhi / 2), sindLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(dLambda / 2);
    r = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(sindPhi * sindPhi + c1 * c2 * sindLambda * sindLambda));
  }
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(r) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] ? [r, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(c2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(dLambda), c1 * s2 - s1 * c2 * cosdLambda)] : [0, 0];
}

// Angle opposite a, and contained between sides of lengths b and c.
function angle(b, c, a) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])((b * b + c * c - a * a) / (2 * b * c));
}

// Normalize longitude.
function longitude(lambda) {
  return lambda - 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["t" /* floor */])((lambda + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / (2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]));
}

function chamberlinRaw(p0, p1, p2) {
  var points = [
    [p0[0], p0[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(p0[1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(p0[1])],
    [p1[0], p1[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(p1[1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(p1[1])],
    [p2[0], p2[1], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(p2[1]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(p2[1])]
  ];

  for (var a = points[2], b, i = 0; i < 3; ++i, a = b) {
    b = points[i];
    a.v = distance(b[1] - a[1], a[3], a[2], b[3], b[2], b[0] - a[0]);
    a.point = [0, 0];
  }

  var beta0 = angle(points[0].v[0], points[2].v[0], points[1].v[0]),
      beta1 = angle(points[0].v[0], points[1].v[0], points[2].v[0]),
      beta2 = __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] - beta0;

  points[2].point[1] = 0;
  points[0].point[0] = -(points[1].point[0] = points[0].v[0] / 2);

  var mean = [
    points[2].point[0] = points[0].point[0] + points[2].v[0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(beta0),
    2 * (points[0].point[1] = points[1].point[1] = points[2].v[0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(beta0))
  ];

  function forward(lambda, phi) {
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
        cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        v = new Array(3), i;

    // Compute distance and azimuth from control points.
    for (i = 0; i < 3; ++i) {
      var p = points[i];
      v[i] = distance(phi - p[1], p[3], p[2], cosPhi, sinPhi, lambda - p[0]);
      if (!v[i][0]) return p.point;
      v[i][1] = longitude(v[i][1] - p.v[1]);
    }

    // Arithmetic mean of interception points.
    var point = mean.slice();
    for (i = 0; i < 3; ++i) {
      var j = i == 2 ? 0 : i + 1;
      var a = angle(points[i].v[0], v[i][0], v[j][0]);
      if (v[i][1] < 0) a = -a;

      if (!i) {
        point[0] += v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(a);
        point[1] -= v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(a);
      } else if (i == 1) {
        a = beta1 - a;
        point[0] -= v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(a);
        point[1] -= v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(a);
      } else {
        a = beta2 - a;
        point[0] += v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(a);
        point[1] += v[i][0] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(a);
      }
    }

    point[0] /= 3, point[1] /= 3;
    return point;
  }

  return forward;
}

function pointRadians(p) {
  return p[0] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */], p[1] *= __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */], p;
}

function chamberlinAfrica() {
  return chamberlin([0, 22], [45, 22], [22.5, -22])
      .scale(380)
      .center([22.5, 2]);
}

function chamberlin(p0, p1, p2) { // TODO order matters!
  var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoCentroid"])({type: "MultiPoint", coordinates: [p0, p1, p2]}),
      R = [-c[0], -c[1]],
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoRotation"])(R),
      f = chamberlinRaw(pointRadians(r(p0)), pointRadians(r(p1)), pointRadians(r(p2)));
  f.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__newton_js__["b" /* solve2d */])(f);
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(f).rotate(R),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p
      .clipAngle(90);
}


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = craigRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1_js__ = __webpack_require__(11);



function craigRaw(phi0) {
  var tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(phi0);

  function forward(lambda, phi) {
    return [lambda, (lambda ? lambda / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(lambda) : 1) * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(lambda) - tanPhi0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi))];
  }

  forward.invert = tanPhi0 ? function(x, y) {
    if (x) y *= __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(x) / x;
    var cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(x);
    return [x, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(cosLambda * cosLambda + tanPhi0 * tanPhi0 - y * y) - cosLambda, tanPhi0 - y)];
  } : function(x, y) {
    return [x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* asin */])(x ? y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(x) / x : y)];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1_js__["a" /* default */])(craigRaw)
      .scale(249.828)
      .clipAngle(90);
});


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = crasterRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var sqrt3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(3);

function crasterRaw(lambda, phi) {
  return [sqrt3 * lambda * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(2 * phi / 3) - 1) / __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */], sqrt3 * __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi / 3)];
}

crasterRaw.invert = function(x, y) {
  var phi = 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y / (sqrt3 * __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */]));
  return [__WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */] * x / (sqrt3 * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(2 * phi / 3) - 1)), phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(crasterRaw)
      .scale(156.19);
});


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = cylindricalStereographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1_js__ = __webpack_require__(11);



function cylindricalStereographicRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, (1 + cosPhi0) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(phi / 2)];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(y / (1 + cosPhi0)) * 2];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1_js__["a" /* default */])(cylindricalStereographicRaw)
      .scale(124.75);
});


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert1Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function eckert1Raw(lambda, phi) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(8 / (3 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]));
  return [
    alpha * lambda * (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]),
    alpha * phi
  ];
}

eckert1Raw.invert = function(x, y) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(8 / (3 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])),
      phi = y / alpha;
  return [
    x / (alpha * (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(eckert1Raw)
      .scale(165.664);
});


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert2Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function eckert2Raw(lambda, phi) {
  var alpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(4 - 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi)));
  return [
    2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(6 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) * lambda * alpha,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 3) * (2 - alpha)
  ];
}

eckert2Raw.invert = function(x, y) {
  var alpha = 2 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 3);
  return [
    x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(6 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / (2 * alpha),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((4 - alpha * alpha) / 3)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(eckert2Raw)
      .scale(165.664);
});


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert3Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function eckert3Raw(lambda, phi) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]));
  return [
    2 / k * lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - 4 * phi * phi / (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]))),
    4 / k * phi
  ];
}

eckert3Raw.invert = function(x, y) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])) / 2;
  return [
    x * k / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - y * y * (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / (4 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]))),
    y * k / 2
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(eckert3Raw)
      .scale(180.739);
});


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert4Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function eckert4Raw(lambda, phi) {
  var k = (2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi);
  phi /= 2;
  for (var i = 0, delta = Infinity; i < 10 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]; i++) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi);
    phi -= delta = (phi + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) * (cosPhi + 2) - k) / (2 * cosPhi * (1 + cosPhi));
  }
  return [
    2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])) * lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi)),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)
  ];
}

eckert4Raw.invert = function(x, y) {
  var A = y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])((4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / 2,
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(A),
      c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(k);
  return [
    x / (2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])) * (1 + c)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((k + A * (c + 2)) / (2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(eckert4Raw)
      .scale(180.739);
});


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert5Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function eckert5Raw(lambda, phi) {
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi)) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]),
    2 * phi / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])
  ];
}

eckert5Raw.invert = function(x, y) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]),
      phi = y * k / 2;
  return [
    k * x / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi)),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(eckert5Raw)
      .scale(173.044);
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eckert6Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function eckert6Raw(lambda, phi) {
  var k = (1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi);
  for (var i = 0, delta = Infinity; i < 10 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]; i++) {
    phi -= delta = (phi + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) - k) / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi));
  }
  k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]);
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi)) / k,
    2 * phi / k
  ];
}

eckert6Raw.invert = function(x, y) {
  var j = 1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(j / 2);
  return [
    x * 2 * k / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y *= k)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((y + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(y)) / j)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(eckert6Raw)
      .scale(173.044);
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = eisenlohrRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__august_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




var eisenlohrK = 3 + 2 * __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */];

function eisenlohrRaw(lambda, phi) {
  var s0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(lambda /= 2),
      c0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(lambda),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(phi)),
      c1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(phi /= 2),
      t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(phi) / (c1 + __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c0 * k),
      c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(2 / (1 + t * t)),
      v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])((__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c1 + (c0 + s0) * k) / (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c1 + (c0 - s0) * k));
  return [
    eisenlohrK * (c * (v - 1 / v) - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* log */])(v)),
    eisenlohrK * (c * t * (v + 1 / v) - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["r" /* atan */])(t))
  ];
}

eisenlohrRaw.invert = function(x, y) {
  if (!(p = __WEBPACK_IMPORTED_MODULE_1__august_js__["b" /* augustRaw */].invert(x / 1.2, y * 1.065))) return null;
  var lambda = p[0], phi = p[1], i = 20, p;
  x /= eisenlohrK, y /= eisenlohrK;
  do {
    var _0 = lambda / 2,
        _1 = phi / 2,
        s0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(_0),
        c0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(_0),
        s1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(_1),
        c1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(_1),
        cos1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(phi),
        k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(cos1),
        t = s1 / (c1 + __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c0 * k),
        t2 = t * t,
        c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(2 / (1 + t2)),
        v0 = (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c1 + (c0 + s0) * k),
        v1 = (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c1 + (c0 - s0) * k),
        v2 = v0 / v1,
        v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(v2),
        vm1v = v - 1 / v,
        vp1v = v + 1 / v,
        fx = c * vm1v - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["w" /* log */])(v) - x,
        fy = c * t * vp1v - 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["r" /* atan */])(t) - y,
        deltatDeltaLambda = s1 && __WEBPACK_IMPORTED_MODULE_2__math_js__["v" /* sqrt1_2 */] * k * s0 * t2 / s1,
        deltatDeltaPhi = (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c0 * c1 + k) / (2 * (c1 + __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c0 * k) * (c1 + __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c0 * k) * k),
        deltacDeltat = -0.5 * t * c * c * c,
        deltacDeltaLambda = deltacDeltat * deltatDeltaLambda,
        deltacDeltaPhi = deltacDeltat * deltatDeltaPhi,
        A = (A = 2 * c1 + __WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * k * (c0 - s0)) * A * v,
        deltavDeltaLambda = (__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * c0 * c1 * k + cos1) / A,
        deltavDeltaPhi = -(__WEBPACK_IMPORTED_MODULE_2__math_js__["k" /* sqrt2 */] * s0 * s1) / (k * A),
        deltaxDeltaLambda = vm1v * deltacDeltaLambda - 2 * deltavDeltaLambda / v + c * (deltavDeltaLambda + deltavDeltaLambda / v2),
        deltaxDeltaPhi = vm1v * deltacDeltaPhi - 2 * deltavDeltaPhi / v + c * (deltavDeltaPhi + deltavDeltaPhi / v2),
        deltayDeltaLambda = t * vp1v * deltacDeltaLambda - 2 * deltatDeltaLambda / (1 + t2) + c * vp1v * deltatDeltaLambda + c * t * (deltavDeltaLambda - deltavDeltaLambda / v2),
        deltayDeltaPhi = t * vp1v * deltacDeltaPhi - 2 * deltatDeltaPhi / (1 + t2) + c * vp1v * deltatDeltaPhi + c * t * (deltavDeltaPhi - deltavDeltaPhi / v2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda;
    if (!denominator) break;
    var deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda;
    phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["m" /* max */])(-__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["n" /* min */])(__WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */], phi - deltaPhi));
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]) && --i > 0);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */] ? [0, phi] : i && [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(eisenlohrRaw)
      .scale(62.5271);
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = ellipticJi;
/* unused harmony export ellipticJ */
/* harmony export (immutable) */ __webpack_exports__["b"] = ellipticFi;
/* harmony export (immutable) */ __webpack_exports__["a"] = ellipticF;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


// Returns [sn, cn, dn](u + iv|m).
function ellipticJi(u, v, m) {
  var a, b, c;
  if (!u) {
    b = ellipticJ(v, 1 - m);
    return [
      [0, b[0] / b[1]],
      [1 / b[1], 0],
      [b[2] / b[1], 0]
    ];
  }
  a = ellipticJ(u, m);
  if (!v) return [[a[0], 0], [a[1], 0], [a[2], 0]];
  b = ellipticJ(v, 1 - m);
  c = b[1] * b[1] + m * a[0] * a[0] * b[0] * b[0];
  return [
    [a[0] * b[2] / c, a[1] * a[2] * b[0] * b[1] / c],
    [a[1] * b[1] / c, -a[0] * a[2] * b[0] * b[2] / c],
    [a[2] * b[1] * b[2] / c, -m * a[0] * a[1] * b[0] / c]
  ];
}

// Returns [sn, cn, dn, ph](u|m).
function ellipticJ(u, m) {
  var ai, b, phi, t, twon;
  if (m < __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */]) {
    t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(u);
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(u);
    ai = m * (u - t * b) / 4;
    return [
      t - ai * b,
      b + ai * t,
      1 - m * t * t / 2,
      u - ai
    ];
  }
  if (m >= 1 - __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */]) {
    ai = (1 - m) / 4;
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["B" /* cosh */])(u);
    t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["C" /* tanh */])(u);
    phi = 1 / b;
    twon = b * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["D" /* sinh */])(u);
    return [
      t + ai * (twon - u) / (b * b),
      phi - ai * t * phi * (twon - u),
      phi + ai * t * phi * (twon + u),
      2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["x" /* exp */])(u)) - __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* halfPi */] + ai * (twon - u) / b
    ];
  }

  var a = [1, 0, 0, 0, 0, 0, 0, 0, 0],
      c = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(m), 0, 0, 0, 0, 0, 0, 0, 0],
      i = 0;
  b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(1 - m);
  twon = 1;

  while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(c[i] / a[i]) > __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */] && i < 8) {
    ai = a[i++];
    c[i] = (ai - b) / 2;
    a[i] = (ai + b) / 2;
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(ai * b);
    twon *= 2;
  }

  phi = twon * a[i] * u;
  do {
    t = c[i] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(b = phi) / a[i];
    phi = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* asin */])(t) + phi) / 2;
  } while (--i);

  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi), t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi), t / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi - b), phi];
}

// Calculate F(phi+iPsi|m).
// See Abramowitz and Stegun, 17.4.11.
function ellipticFi(phi, psi, m) {
  var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(phi),
      i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(psi),
      sinhPsi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["D" /* sinh */])(i);
  if (r) {
    var cscPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(r),
        cotPhi2 = 1 / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(r) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(r)),
        b = -(cotPhi2 + m * (sinhPsi * sinhPsi * cscPhi * cscPhi) - 1 + m),
        c = (m - 1) * cotPhi2,
        cotLambda2 = (-b + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(b * b - 4 * c)) / 2;
    return [
      ellipticF(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(cotLambda2)), m) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* sign */])(phi),
      ellipticF(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])((cotLambda2 / cotPhi2 - 1) / m)), 1 - m) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* sign */])(psi)
    ];
  }
  return [
    0,
    ellipticF(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(sinhPsi), 1 - m) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["q" /* sign */])(psi)
  ];
}

// Calculate F(phi|m) where m = k² = sin²α.
// See Abramowitz and Stegun, 17.6.7.
function ellipticF(phi, m) {
  if (!m) return phi;
  if (m === 1) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(phi / 2 + __WEBPACK_IMPORTED_MODULE_0__math_js__["s" /* quarterPi */]));
  var a = 1,
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(1 - m),
      c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(m);
  for (var i = 0; __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(c) > __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */]; i++) {
    if (phi % __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */]) {
      var dPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(b * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(phi) / a);
      if (dPhi < 0) dPhi += __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */];
      phi += dPhi + ~~(phi / __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */]) * __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */];
    } else phi += phi;
    c = (a + b) / 2;
    b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(a * b);
    c = ((a = c) - b) / 2;
  }
  return phi / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["y" /* pow */])(2, i) * a);
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = faheyRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var faheyK = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(35 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]);

function faheyRaw(lambda, phi) {
  var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi / 2);
  return [lambda * faheyK * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - t * t), (1 + faheyK) * t];
}

faheyRaw.invert = function(x, y) {
  var t = y / (1 + faheyK);
  return [x && x / (faheyK * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - t * t)), 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(t)];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(faheyRaw)
      .scale(137.152);
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = foucautRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function foucautRaw(lambda, phi) {
  var k = phi / 2, cosk = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(k);
  return [ 2 * lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) * cosk * cosk, __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(k)];
}

foucautRaw.invert = function(x, y) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */]), cosk = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(k), phi = 2 * k;
  return [x * __WEBPACK_IMPORTED_MODULE_1__math_js__["A" /* sqrtPi */] / 2 / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) * cosk * cosk), phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(foucautRaw)
      .scale(135.264);
});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = foucautSinusoidalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newton_js__ = __webpack_require__(10);




function foucautSinusoidalRaw(alpha) {
  var beta = 1 - alpha,
      equatorial = raw(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */], 0)[0] - raw(-__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */], 0)[0],
      polar = raw(0, __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */])[1] - raw(0, -__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */])[1],
      ratio = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 * polar / equatorial);

  function raw(lambda, phi) {
    var cosphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        sinphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi);
    return [
      cosphi / (beta + alpha * cosphi) * lambda,
      beta * phi + alpha * sinphi
    ];
  }

  function forward(lambda, phi) {
    var p = raw(lambda, phi);
    return [p[0] * ratio, p[1] / ratio];
  }

  function forwardMeridian(phi) {
    return forward(0, phi)[1];
  }

  forward.invert = function(x, y) {
    var phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__newton_js__["a" /* solve */])(forwardMeridian, y),
        lambda = x / ratio * (alpha + beta / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi));
    return [lambda, phi];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var alpha = 0.5,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(foucautSinusoidalRaw),
      p = m(alpha);

  p.alpha = function(_) {
    return arguments.length ? m(alpha = +_) : alpha;
  };

  return p
      .scale(168.725);
});


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function gilbertForward(point) {
  return [point[0] / 2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(point[1] / 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]];
}

function gilbertInvert(point) {
  return [point[0] * 2, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(point[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]];
}

/* harmony default export */ __webpack_exports__["a"] = (function(projectionType) {
  if (projectionType == null) projectionType = __WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoOrthographic"];
  var projection = projectionType(),
      equirectangular = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoEquirectangular"])().scale(__WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]).precision(0).clipAngle(null).translate([0, 0]); // antimeridian cutting

  function gilbert(point) {
    return projection(gilbertForward(point));
  }

  if (projection.invert) gilbert.invert = function(point) {
    return gilbertInvert(projection.invert(point));
  };

  gilbert.stream = function(stream) {
    var s1 = projection.stream(stream), s0 = equirectangular.stream({
      point: function(lambda, phi) { s1.point(lambda / 2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(-phi / 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */])) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]); },
      lineStart: function() { s1.lineStart(); },
      lineEnd: function() { s1.lineEnd(); },
      polygonStart: function() { s1.polygonStart(); },
      polygonEnd: function() { s1.polygonEnd(); }
    });
    s0.sphere = s1.sphere;
    return s0;
  };

  function property(name) {
    gilbert[name] = function() {
      return arguments.length ? (projection[name].apply(projection, arguments), gilbert) : projection[name]();
    };
  }

  gilbert.rotate = function(_) {
    return arguments.length ? (equirectangular.rotate(_), gilbert) : equirectangular.rotate();
  };

  gilbert.center = function(_) {
    return arguments.length ? (projection.center(gilbertForward(_)), gilbert) : gilbertInvert(projection.center());
  };

  property("angle");
  property("clipAngle");
  property("clipExtent");
  property("fitExtent");
  property("fitHeight");
  property("fitSize");
  property("fitWidth");
  property("scale");
  property("translate");
  property("precision");

  return gilbert
      .scale(249.5);
});


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gingeryRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function gingeryRaw(rho, n) {
  var k = 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / n,
      rho2 = rho * rho;

  function forward(lambda, phi) {
    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEquidistantRaw"])(lambda, phi),
        x = p[0],
        y = p[1],
        r2 = x * x + y * y;

    if (r2 > rho2) {
      var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(r2),
          theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(y, x),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["E" /* round */])(theta / k),
          alpha = theta - theta0,
          rhoCosAlpha = rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(alpha),
          k_ = (rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(alpha) - alpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(rhoCosAlpha)) / (__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - rhoCosAlpha),
          s_ = gingeryLength(alpha, k_),
          e = (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] - rho) / gingeryIntegrate(s_, rhoCosAlpha, __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]);

      x = r;
      var i = 50, delta;
      do {
        x -= delta = (rho + gingeryIntegrate(s_, rhoCosAlpha, x) * e - r) / (s_(x) * e);
      } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);

      y = alpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(x);
      if (x < __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) y -= k_ * (x - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]);

      var s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta0),
          c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta0);
      p[0] = x * c - y * s;
      p[1] = x * s + y * c;
    }
    return p;
  }

  forward.invert = function(x, y) {
    var r2 = x * x + y * y;
    if (r2 > rho2) {
      var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(r2),
          theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(y, x),
          theta0 = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["E" /* round */])(theta / k),
          dTheta = theta - theta0;

      x = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(dTheta);
      y = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(dTheta);

      var x_halfPi = x - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
          sinx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(x),
          alpha = y / sinx,
          delta = x < __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] ? Infinity : 0,
          i = 10;

      while (true) {
        var rhosinAlpha = rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(alpha),
            rhoCosAlpha = rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(alpha),
            sinRhoCosAlpha = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(rhoCosAlpha),
            halfPi_RhoCosAlpha = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - rhoCosAlpha,
            k_ = (rhosinAlpha - alpha * sinRhoCosAlpha) / halfPi_RhoCosAlpha,
            s_ = gingeryLength(alpha, k_);

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* epsilon2 */] || !--i) break;

        alpha -= delta = (alpha * sinx - k_ * x_halfPi - y) / (
          sinx - x_halfPi * 2 * (
            halfPi_RhoCosAlpha * (rhoCosAlpha + alpha * rhosinAlpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(rhoCosAlpha) - sinRhoCosAlpha) -
            rhosinAlpha * (rhosinAlpha - alpha * sinRhoCosAlpha)
          ) / (halfPi_RhoCosAlpha * halfPi_RhoCosAlpha));
      }
      r = rho + gingeryIntegrate(s_, rhoCosAlpha, x) * (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] - rho) / gingeryIntegrate(s_, rhoCosAlpha, __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]);
      theta = theta0 + alpha;
      x = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta);
      y = r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta);
    }
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEquidistantRaw"].invert(x, y);
  };

  return forward;
}

function gingeryLength(alpha, k) {
  return function(x) {
    var y_ = alpha * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(x);
    if (x < __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) y_ -= k;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 + y_ * y_);
  };
}

// Numerical integration: trapezoidal rule.
function gingeryIntegrate(f, a, b) {
  var n = 50,
      h = (b - a) / n,
      s = f(a) + f(b);
  for (var i = 1, x = a; i < n; ++i) s += 2 * f(x += h);
  return s * 0.5 * h;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var n = 6,
      rho = 30 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */],
      cRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(rho),
      sRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(rho),
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(gingeryRaw),
      p = m(rho, n),
      stream_ = p.stream,
      epsilon = 1e-2,
      cr = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]),
      sr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(epsilon * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]);

  p.radius = function(_) {
    if (!arguments.length) return rho * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
    cRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(rho = _ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]);
    sRho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(rho);
    return m(rho, n);
  };

  p.lobes = function(_) {
    if (!arguments.length) return n;
    return m(rho, n = +_);
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() {
      sphereStream.polygonStart(), sphereStream.lineStart();
      for (var i = 0, delta = 2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / n, phi = 0; i < n; ++i, phi -= delta) {
        sphereStream.point(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi), cr) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sr * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]);
        sphereStream.point(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(sRho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi - delta / 2), cRho) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sRho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi - delta / 2)) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]);
      }
      sphereStream.lineEnd(), sphereStream.polygonEnd();
    };
    return rotateStream;
  };

  return p
      .rotate([90, -40])
      .scale(91.7095)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg4Raw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__ = __webpack_require__(18);



var ginzburg4Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__["a" /* default */])(2.8284, -1.6988, 0.75432, -0.18071, 1.76003, -0.38914, 0.042555);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(ginzburg4Raw)
      .scale(149.995);
});


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg5Raw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__ = __webpack_require__(18);



var ginzburg5Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__["a" /* default */])(2.583819, -0.835827, 0.170354, -0.038094, 1.543313, -0.411435,0.082742);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(ginzburg5Raw)
      .scale(153.93);
});


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg6Raw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




var ginzburg6Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__["a" /* default */])(5 / 6 * __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */], -0.62636, -0.0344, 0, 1.3493, -0.05524, 0, 0.045);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(ginzburg6Raw)
      .scale(130.945);
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = ginzburg8Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function ginzburg8Raw(lambda, phi) {
  var lambda2 = lambda * lambda,
      phi2 = phi * phi;
  return [
    lambda * (1 - 0.162388 * phi2) * (0.87 - 0.000952426 * lambda2 * lambda2),
    phi * (1 + phi2 / 12)
  ];
}

ginzburg8Raw.invert = function(x, y) {
  var lambda = x,
      phi = y,
      i = 50, delta;
  do {
    var phi2 = phi * phi;
    phi -= delta = (phi * (1 + phi2 / 12) - y) / (1 + phi2 / 4);
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
  i = 50;
  x /= 1 -0.162388 * phi2;
  do {
    var lambda4 = (lambda4 = lambda * lambda) * lambda4;
    lambda -= delta = (lambda * (0.87 - 0.000952426 * lambda4) - x) / (0.87 - 0.00476213 * lambda4);
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
  return [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(ginzburg8Raw)
      .scale(131.747);
});


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ginzburg9Raw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__ = __webpack_require__(18);



var ginzburg9Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ginzburgPolyconic_js__["a" /* default */])(2.6516, -0.76534, 0.19123, -0.047094, 1.36289, -0.13965,0.031762);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(ginzburg9Raw)
      .scale(131.087);
});


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hammerRetroazimuthalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function hammerRetroazimuthalRaw(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi0),
      cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi0),
      rotate = hammerRetroazimuthalRotation(phi0);

  rotate.invert = hammerRetroazimuthalRotation(-phi0);

  function forward(lambda, phi) {
    var p = rotate(lambda, phi);
    lambda = p[0], phi = p[1];
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
        cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda),
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosLambda),
        sinz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(z),
        K = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(sinz) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] ? z / sinz : 1;
    return [
      K * cosPhi0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda),
      (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) > __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] ? K : -K) // rotate for back hemisphere
        * (sinPhi0 * cosPhi - cosPhi0 * sinPhi * cosLambda)
    ];
  }

  forward.invert = function(x, y) {
    var rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(x * x + y * y),
        sinz = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(rho),
        cosz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(rho),
        a = rho * cosz,
        b = -y * sinz,
        c = rho * sinPhi0,
        d = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a * a + b * b - c * c),
        phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(a * c + b * d, b * c - a * d),
        lambda = (rho > __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(x * sinz, rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) * cosz + y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) * sinz);
    return rotate.invert(lambda, phi);
  };

  return forward;
}

// Latitudinal rotation by phi0.
// Temporary hack until D3 supports arbitrary small-circle clipping origins.
function hammerRetroazimuthalRotation(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi0),
      cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi0);

  return function(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(y, x * cosPhi0 - z * sinPhi0),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(z * cosPhi0 + x * sinPhi0)
    ];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var phi0 = 0,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(hammerRetroazimuthalRaw),
      p = m(phi0),
      rotate_ = p.rotate,
      stream_ = p.stream,
      circle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoCircle"])();

  p.parallel = function(_) {
    if (!arguments.length) return phi0 * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
    var r = p.rotate();
    return m(phi0 = _ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]).rotate(r);
  };

  // Temporary hack; see hammerRetroazimuthalRotation.
  p.rotate = function(_) {
    if (!arguments.length) return (_ = rotate_.call(p), _[1] += phi0 * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */], _);
    rotate_.call(p, [_[0], _[1] - phi0 * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]]);
    circle.center([-_[0], -_[1]]);
    return p;
  };

  p.stream = function(stream) {
    stream = stream_(stream);
    stream.sphere = function() {
      stream.polygonStart();
      var epsilon = 1e-2,
          ring = circle.radius(90 - epsilon)().coordinates[0],
          n = ring.length - 1,
          i = -1,
          p;
      stream.lineStart();
      while (++i < n) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      ring = circle.radius(90 + epsilon)().coordinates[0];
      n = ring.length - 1;
      stream.lineStart();
      while (--i >= 0) stream.point((p = ring[i])[0], p[1]);
      stream.lineEnd();
      stream.polygonEnd();
    };
    return stream;
  };

  return p
      .scale(79.4187)
      .parallel(45)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = healpixRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collignon_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cylindricalEqualArea_js__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__math_js__ = __webpack_require__(0);






var K = 3,
    healpixParallel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["i" /* asin */])(1 - 1 / K) * __WEBPACK_IMPORTED_MODULE_4__math_js__["p" /* degrees */],
    healpixLambert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__cylindricalEqualArea_js__["b" /* cylindricalEqualAreaRaw */])(0);

function healpixRaw(H) {
  var phi0 = healpixParallel * __WEBPACK_IMPORTED_MODULE_4__math_js__["o" /* radians */],
      dx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon_js__["b" /* collignonRaw */])(__WEBPACK_IMPORTED_MODULE_4__math_js__["j" /* pi */], phi0)[0] - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon_js__["b" /* collignonRaw */])(-__WEBPACK_IMPORTED_MODULE_4__math_js__["j" /* pi */], phi0)[0],
      y0 = healpixLambert(0, phi0)[1],
      y1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon_js__["b" /* collignonRaw */])(0, phi0)[1],
      dy1 = __WEBPACK_IMPORTED_MODULE_4__math_js__["A" /* sqrtPi */] - y1,
      k = __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */] / H,
      w = 4 / __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */],
      h = y0 + (dy1 * dy1 * 4) / __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */];

  function forward(lambda, phi) {
    var point,
        phi2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["f" /* abs */])(phi);
    if (phi2 > phi0) {
      var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["n" /* min */])(H - 1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["m" /* max */])(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["t" /* floor */])((lambda + __WEBPACK_IMPORTED_MODULE_4__math_js__["j" /* pi */]) / k)));
      lambda += __WEBPACK_IMPORTED_MODULE_4__math_js__["j" /* pi */] * (H - 1) / H - i * k;
      point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__collignon_js__["b" /* collignonRaw */])(lambda, phi2);
      point[0] = point[0] * __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */] / dx - __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */] * (H - 1) / (2 * H) + i * __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */] / H;
      point[1] = y0 + (point[1] - y1) * 4 * dy1 / __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */];
      if (phi < 0) point[1] = -point[1];
    } else {
      point = healpixLambert(lambda, phi);
    }
    point[0] *= w, point[1] /= h;
    return point;
  }

  forward.invert = function(x, y) {
    x /= w, y *= h;
    var y2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["f" /* abs */])(y);
    if (y2 > y0) {
      var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["n" /* min */])(H - 1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["m" /* max */])(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__math_js__["t" /* floor */])((x + __WEBPACK_IMPORTED_MODULE_4__math_js__["j" /* pi */]) / k)));
      x = (x + __WEBPACK_IMPORTED_MODULE_4__math_js__["j" /* pi */] * (H - 1) / H - i * k) * dx / __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */];
      var point = __WEBPACK_IMPORTED_MODULE_2__collignon_js__["b" /* collignonRaw */].invert(x, 0.25 * (y2 - y0) * __WEBPACK_IMPORTED_MODULE_4__math_js__["z" /* tau */] / dy1 + y1);
      point[0] -= __WEBPACK_IMPORTED_MODULE_4__math_js__["j" /* pi */] * (H - 1) / H - i * k;
      if (y < 0) point[1] = -point[1];
      return point;
    }
    return healpixLambert.invert(x, y);
  };

  return forward;
}

function sphereTop(x, i) {
  return [x, i & 1 ? 90 - __WEBPACK_IMPORTED_MODULE_4__math_js__["g" /* epsilon */] : healpixParallel];
}

function sphereBottom(x, i) {
  return [x, i & 1 ? -90 + __WEBPACK_IMPORTED_MODULE_4__math_js__["g" /* epsilon */] : -healpixParallel];
}

function sphereNudge(d) {
  return [d[0] * (1 - __WEBPACK_IMPORTED_MODULE_4__math_js__["g" /* epsilon */]), d[1]];
}

function sphere(step) {
  var c = [].concat(
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(-180, 180 + step / 2, step).map(sphereTop),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(180, -180 - step / 2, -step).map(sphereBottom)
  );
  return {
    type: "Polygon",
    coordinates: [step === 180 ? c.map(sphereNudge) : c]
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var H = 4,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["geoProjectionMutator"])(healpixRaw),
      p = m(H),
      stream_ = p.stream;

  p.lobes = function(_) {
    return arguments.length ? m(H = +_) : H;
  };

  p.stream = function(stream) {
    var rotate = p.rotate(),
        rotateStream = stream_(stream),
        sphereStream = (p.rotate([0, 0]), stream_(stream));
    p.rotate(rotate);
    rotateStream.sphere = function() { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_geo__["geoStream"])(sphere(180 / H), sphereStream); };
    return rotateStream;
  };

  return p
      .scale(239.75);
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hillRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function hillRaw(K) {
  var L = 1 + K,
      sinBt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(1 / L),
      Bt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sinBt),
      A = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / (B = __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] + 4 * Bt * L)),
      B,
      rho0 = 0.5 * A * (L + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(K * (2 + K))),
      K2 = K * K,
      L2 = L * L;

  function forward(lambda, phi) {
    var t = 1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
        rho,
        omega;
    if (t && t < 2) {
      var theta = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] - phi, i = 25, delta;
      do {
        var sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta),
            cosTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta),
            Bt_Bt1 = Bt + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(sinTheta, L - cosTheta),
            C = 1 + L2 - 2 * L * cosTheta;
        theta -= delta = (theta - K2 * Bt - L * sinTheta + C * Bt_Bt1 -0.5 * t * B) / (2 * L * sinTheta * Bt_Bt1);
      } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* epsilon2 */] && --i > 0);
      rho = A * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(C);
      omega = lambda * Bt_Bt1 / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */];
    } else {
      rho = A * (K + t);
      omega = lambda * Bt / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */];
    }
    return [
      rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(omega),
      rho0 - rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(omega)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + (y -= rho0) * y,
        cosTheta = (1 + L2 - rho2 / (A * A)) / (2 * L),
        theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(cosTheta),
        sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta),
        Bt_Bt1 = Bt + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(sinTheta, L - cosTheta);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(rho2)) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / Bt_Bt1,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(1 - 2 * (theta - K2 * Bt - L * sinTheta + (1 + L2 - 2 * L * cosTheta) * Bt_Bt1) / B)
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var K = 1,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(hillRaw),
      p = m(K);

  p.ratio = function(_) {
    return arguments.length ? m(K = +_) : K;
  };

  return p
      .scale(167.774)
      .center([0, 18.67]);
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hufnagelRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newton_js__ = __webpack_require__(10);




function hufnagelRaw(a, b, psiMax, ratio) {
  var k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(
      (4 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) /
        (2 * psiMax +
          (1 + a - b / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * psiMax) +
          ((a + b) / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(4 * psiMax) +
          (b / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(6 * psiMax))
    ),
    c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(
      ratio *
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(psiMax) *
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])((1 + a * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(2 * psiMax) + b * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(4 * psiMax)) / (1 + a + b))
    ),
    M = psiMax * mapping(1);

  function radius(psi) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 + a * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(2 * psi) + b * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(4 * psi));
  }

  function mapping(t) {
    var psi = t * psiMax;
    return (
      (2 * psi +
        (1 + a - b / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * psi) +
        ((a + b) / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(4 * psi) +
        (b / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(6 * psi)) /
      psiMax
    );
  }

  function inversemapping(psi) {
    return radius(psi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(psi);
  }

  var forward = function(lambda, phi) {
    var psi = psiMax * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__newton_js__["a" /* solve */])(mapping, (M * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)) / psiMax, phi / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]);
    if (isNaN(psi)) psi = psiMax * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi);
    var kr = k * radius(psi);
    return [((kr * c * lambda) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(psi), (kr / c) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(psi)];
  };

  forward.invert = function(x, y) {
    var psi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__newton_js__["a" /* solve */])(inversemapping, (y * c) / k);
    return [
      (x * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(psi) * k * c * radius(psi)),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((psiMax * mapping(psi / psiMax)) / M)
    ];
  };

  if (psiMax === 0) {
    k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(ratio / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]);
    forward = function(lambda, phi) {
      return [lambda * k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) / k];
    };
    forward.invert = function(x, y) {
      return [x / k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y * k)];
    };
  }

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var a = 1,
    b = 0,
    psiMax = 45 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */],
    ratio = 2,
    mutate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(hufnagelRaw),
    projection = mutate(a, b, psiMax, ratio);

  projection.a = function(_) {
    return arguments.length ? mutate((a = +_), b, psiMax, ratio) : a;
  };
  projection.b = function(_) {
    return arguments.length ? mutate(a, (b = +_), psiMax, ratio) : b;
  };
  projection.psiMax = function(_) {
    return arguments.length
      ? mutate(a, b, (psiMax = +_ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]), ratio)
      : psiMax * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
  };
  projection.ratio = function(_) {
    return arguments.length ? mutate(a, b, psiMax, (ratio = +_)) : ratio;
  };

  return projection.scale(180.739);
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hyperellipticalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__integrate_js__ = __webpack_require__(152);




function hyperellipticalRaw(alpha, k, gamma) {

  function elliptic (f) {
    return alpha + (1 - alpha) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["y" /* pow */])(1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["y" /* pow */])(f, k), 1 / k);
  }

  function z(f) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__integrate_js__["a" /* integrate */])(elliptic, 0, f, 1e-4);
  }

  var G = 1 / z(1),
      n = 1000,
      m = (1 + 1e-8) * G,
      approx = [];
  for (var i = 0; i <= n; i++)
      approx.push(z(i / n) * m);

  function Y(sinphi) {
    var rmin = 0, rmax = n, r = n >> 1;
    do {
      if (approx[r] > sinphi) rmax = r; else rmin = r;
      r = (rmin + rmax) >> 1;
    } while (r > rmin);
    var u = approx[r + 1] - approx[r];
    if (u) u = (sinphi - approx[r + 1]) / u;
    return (r + 1 + u) / n;
  }

  var ratio = 2 * Y(1) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * G / gamma;

  var forward = function(lambda, phi) {
    var y = Y(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi))),
        x = elliptic(y) * lambda;
    y /= ratio;
    return [ x, (phi >= 0) ? y : -y ];
  };

  forward.invert = function(x, y) {
    var phi;
    y *= ratio;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) < 1) phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(z(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y)) * G);
    return [ x / elliptic(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y)), phi ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var alpha = 0,
      k = 2.5,
      gamma = 1.183136, // affine = sqrt(2 * gamma / pi) = 0.8679
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(hyperellipticalRaw),
      p = m(alpha, k, gamma);

  p.alpha = function(_) {
    return arguments.length ? m(alpha = +_, k, gamma) : alpha;
  };

  p.k = function(_) {
    return arguments.length ? m(alpha, k = +_, gamma) : k;
  };

  p.gamma = function(_) {
    return arguments.length ? m(alpha, k, gamma = +_) : gamma;
  };

  return p
      .scale(152.63);
});


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = integrate;
// https://github.com/scijs/integrate-adaptive-simpson

// This algorithm adapted from pseudocode in:
// http://www.math.utk.edu/~ccollins/refs/Handouts/rich.pdf
function adsimp (f, a, b, fa, fm, fb, V0, tol, maxdepth, depth, state) {
  if (state.nanEncountered) {
    return NaN;
  }

  var h, f1, f2, sl, sr, s2, m, V1, V2, err;

  h = b - a;
  f1 = f(a + h * 0.25);
  f2 = f(b - h * 0.25);

  // Simple check for NaN:
  if (isNaN(f1)) {
    state.nanEncountered = true;
    return;
  }

  // Simple check for NaN:
  if (isNaN(f2)) {
    state.nanEncountered = true;
    return;
  }

  sl = h * (fa + 4 * f1 + fm) / 12;
  sr = h * (fm + 4 * f2 + fb) / 12;
  s2 = sl + sr;
  err = (s2 - V0) / 15;

  if (depth > maxdepth) {
    state.maxDepthCount++;
    return s2 + err;
  } else if (Math.abs(err) < tol) {
    return s2 + err;
  } else {
    m = a + h * 0.5;

    V1 = adsimp(f, a, m, fa, f1, fm, sl, tol * 0.5, maxdepth, depth + 1, state);

    if (isNaN(V1)) {
      state.nanEncountered = true;
      return NaN;
    }

    V2 = adsimp(f, m, b, fm, f2, fb, sr, tol * 0.5, maxdepth, depth + 1, state);

    if (isNaN(V2)) {
      state.nanEncountered = true;
      return NaN;
    }

    return V1 + V2;
  }
}

function integrate (f, a, b, tol, maxdepth) {
  var state = {
    maxDepthCount: 0,
    nanEncountered: false
  };

  if (tol === undefined) {
    tol = 1e-8;
  }
  if (maxdepth === undefined) {
    maxdepth = 20;
  }

  var fa = f(a);
  var fm = f(0.5 * (a + b));
  var fb = f(b);

  var V0 = (fa + 4 * fm + fb) * (b - a) / 6;

  var result = adsimp(f, a, b, fa, fm, fb, V0, tol, maxdepth, 1, state);

/*
  if (state.maxDepthCount > 0 && console && console.warn) {
    console.warn('integrate-adaptive-simpson: Warning: maximum recursion depth (' + maxdepth + ') reached ' + state.maxDepthCount + ' times');
  }

  if (state.nanEncountered && console && console.warn) {
    console.warn('integrate-adaptive-simpson: Warning: NaN encountered. Halting early.');
  }
*/

  return result;
}

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boggs_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(5);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__boggs_js__["b" /* boggsRaw */], lobes)
      .scale(160.857);
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homolosine_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(5);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__homolosine_js__["b" /* homolosineRaw */], lobes)
      .scale(152.63);
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mollweide_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(5);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-100,  90], [ -40,   0]],
  [[ -40,   0], [  30,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-160, -90], [-100,   0]],
  [[-100,   0], [ -60, -90], [ -20,   0]],
  [[ -20,   0], [  20, -90], [  80,   0]],
  [[  80,   0], [ 140, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__mollweide_js__["b" /* mollweideRaw */], lobes)
      .scale(169.529);
});


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mollweide_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(5);



var lobes = [[ // northern hemisphere
  [[-180,   0], [ -90,  90], [   0,   0]],
  [[   0,   0], [  90,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [ -90, -90], [   0,   0]],
  [[   0,   0], [  90, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__mollweide_js__["b" /* mollweideRaw */], lobes)
      .scale(169.529)
      .rotate([20, 0]);
});


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hammer_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(5);



var lobes = [[ // northern hemisphere
  [[-180,  0],  [-90,  90], [   0,  0]],
  [[   0,  0], [  90,  90], [ 180, 0]]
], [ // southern hemisphere
  [[-180, 0], [-90, -90], [  0, 0]],
  [[   0, 0], [ 90, -90], [180, 0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__hammer_js__["b" /* hammerRaw */])(Infinity), lobes)
      .rotate([20, 0])
      .scale(152.63);
});


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sinuMollweide_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newton_js__ = __webpack_require__(10);




var lobes = [[ // northern hemisphere
  [[-180,  35], [ -30,  90], [   0,  35]],
  [[   0,  35], [  30,  90], [ 180,  35]]
], [ // southern hemisphere
  [[-180, -10], [-102, -90], [ -65, -10]],
  [[ -65, -10], [   5, -90], [  77, -10]],
  [[  77, -10], [ 103, -90], [ 180, -10]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__sinuMollweide_js__["b" /* sinuMollweideRaw */], lobes, __WEBPACK_IMPORTED_MODULE_2__newton_js__["b" /* solve2d */])
      .rotate([-20, -55])
      .scale(164.263)
      .center([0, -5.4036]);
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sinusoidal_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(5);



var lobes = [[ // northern hemisphere
  [[-180,   0], [-110,  90], [ -40,   0]],
  [[ -40,   0], [   0,  90], [  40,   0]],
  [[  40,   0], [ 110,  90], [ 180,   0]]
], [ // southern hemisphere
  [[-180,   0], [-110, -90], [ -40,   0]],
  [[ -40,   0], [   0, -90], [  40,   0]],
  [[  40,   0], [ 110, -90], [ 180,   0]]
]];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__sinusoidal_js__["b" /* sinusoidalRaw */], lobes)
      .scale(152.63)
      .rotate([-20, 0]);
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = kavrayskiy7Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function kavrayskiy7Raw(lambda, phi) {
  return [3 / __WEBPACK_IMPORTED_MODULE_1__math_js__["z" /* tau */] * lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 3 - phi * phi), phi];
}

kavrayskiy7Raw.invert = function(x, y) {
  return [__WEBPACK_IMPORTED_MODULE_1__math_js__["z" /* tau */] / 3 * x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 3 - y * y), y];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(kavrayskiy7Raw)
      .scale(158.837);
});


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lagrangeRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function lagrangeRaw(n) {

  function forward(lambda, phi) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [0, phi < 0 ? -2 : 2];
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
        v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["y" /* pow */])((1 + sinPhi) / (1 - sinPhi), n / 2),
        c = 0.5 * (v + 1 / v) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda *= n);
    return [
      2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda) / c,
      (v - 1 / v) / c
    ];
  }

  forward.invert = function(x, y) {
    var y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y0 - 2) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return x ? null : [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]];
    if (y0 > 2) return null;

    x /= 2, y /= 2;
    var x2 = x * x,
        y2 = y * y,
        t = 2 * y / (1 + x2 + y2); // tanh(nPhi)
    t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["y" /* pow */])((1 + t) / (1 - t), 1 / n);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(2 * x, 1 - x2 - y2) / n,
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((t - 1) / (t + 1))
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var n = 0.5,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(lagrangeRaw),
      p = m(n);

  p.spacing = function(_) {
    return arguments.length ? m(n = +_) : n;
  };

  return p
      .scale(124.75);
});


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = larriveeRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var pi_sqrt2 = __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */];

function larriveeRaw(lambda, phi) {
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi))) / 2,
    phi / (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi / 2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda / 6))
  ];
}

larriveeRaw.invert = function(x, y) {
  var x0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x),
      y0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y),
      lambda = __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */],
      phi = __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */];
  if (y0 < pi_sqrt2) phi *= y0 / pi_sqrt2;
  else lambda += 6 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(pi_sqrt2 / y0);
  for (var i = 0; i < 25; i++) {
    var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
        sqrtcosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi)),
        sinPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi / 2),
        cosPhi_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi / 2),
        sinLambda_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda / 6),
        cosLambda_6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda / 6),
        f0 = 0.5 * lambda * (1 + sqrtcosPhi) - x0,
        f1 = phi / (cosPhi_2 * cosLambda_6) - y0,
        df0dPhi = sqrtcosPhi ? -0.25 * lambda * sinPhi / sqrtcosPhi : 0,
        df0dLambda = 0.5 * (1 + sqrtcosPhi),
        df1dPhi = (1 +0.5 * phi * sinPhi_2 / cosPhi_2) / (cosPhi_2 * cosLambda_6),
        df1dLambda = (phi / cosPhi_2) * (sinLambda_6 / 6) / (cosLambda_6 * cosLambda_6),
        denom = df0dPhi * df1dLambda - df1dPhi * df0dLambda,
        dPhi = (f0 * df1dLambda - f1 * df0dLambda) / denom,
        dLambda = (f1 * df0dPhi - f0 * df1dPhi) / denom;
    phi -= dPhi;
    lambda -= dLambda;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dPhi) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(dLambda) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) break;
  }
  return [x < 0 ? -lambda : lambda, y < 0 ? -phi : phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(larriveeRaw)
      .scale(97.2672);
});


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = laskowskiRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function laskowskiRaw(lambda, phi) {
  var lambda2 = lambda * lambda, phi2 = phi * phi;
  return [
    lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)),
    phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032))
  ];
}

laskowskiRaw.invert = function(x, y) {
  var lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */],
      phi = y / 2,
      i = 50;
  do {
    var lambda2 = lambda * lambda,
        phi2 = phi * phi,
        lambdaPhi = lambda * phi,
        fx = lambda * (0.975534 + phi2 * (-0.119161 + lambda2 * -0.0143059 + phi2 * -0.0547009)) - x,
        fy = phi * (1.00384 + lambda2 * (0.0802894 + phi2 * -0.02855 + lambda2 * 0.000199025) + phi2 * (0.0998909 + phi2 * -0.0491032)) - y,
        deltaxDeltaLambda = 0.975534 - phi2 * (0.119161 + 3 * lambda2 * 0.0143059 + phi2 * 0.0547009),
        deltaxDeltaPhi = -lambdaPhi * (2 * 0.119161 + 4 * 0.0547009 * phi2 + 2 * 0.0143059 * lambda2),
        deltayDeltaLambda = lambdaPhi * (2 * 0.0802894 + 4 * 0.000199025 * lambda2 + 2 * -0.02855 * phi2),
        deltayDeltaPhi = 1.00384 + lambda2 * (0.0802894 + 0.000199025 * lambda2) + phi2 * (3 * (0.0998909 - 0.02855 * lambda2) - 5 * 0.0491032 * phi2),
        denominator = deltaxDeltaPhi * deltayDeltaLambda - deltayDeltaPhi * deltaxDeltaLambda,
        deltaLambda = (fy * deltaxDeltaPhi - fx * deltayDeltaPhi) / denominator,
        deltaPhi = (fx * deltayDeltaLambda - fy * deltaxDeltaLambda) / denominator;
    lambda -= deltaLambda, phi -= deltaPhi;
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(deltaLambda) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(deltaPhi) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) && --i > 0);
  return i && [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(laskowskiRaw)
      .scale(139.98);
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = littrowRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function littrowRaw(lambda, phi) {
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda)
  ];
}

littrowRaw.invert = function(x, y) {
  var x2 = x * x,
      y2 = y * y,
      y2_1 = y2 + 1,
      x2_y2_1 = x2 + y2_1,
      cosPhi = x
          ? __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])((x2_y2_1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(x2_y2_1 * x2_y2_1 - 4 * x2)) / x2)
          : 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(y2_1);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(x * cosPhi),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(cosPhi)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(littrowRaw)
      .scale(144.049)
      .clipAngle(90 - 1e-3);
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = loximuthalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parallel1_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function loximuthalRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi0),
      tanPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */] + phi0 / 2);

  function forward(lambda, phi) {
    var y = phi - phi0,
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] ? lambda * cosPhi0
            : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x = __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */] + phi / 2) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]
            ? 0 : lambda * y / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(x) / tanPhi0);
    return [x, y];
  }

  forward.invert = function(x, y) {
    var lambda,
        phi = y + phi0;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] ? x / cosPhi0
          : (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda = __WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */] + phi / 2) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) ? 0
          : x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(lambda) / tanPhi0) / y,
      phi
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__parallel1_js__["a" /* default */])(loximuthalRaw)
      .parallel(40)
      .scale(158.837);
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = millerRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function millerRaw(lambda, phi) {
  return [lambda, 1.25 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["w" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */] + 0.4 * phi))];
}

millerRaw.invert = function(x, y) {
  return [x, 2.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["x" /* exp */])(0.8 * y)) - 0.625 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(millerRaw)
      .scale(108.318);
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = modifiedStereographicRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = modifiedStereographicAlaska;
/* harmony export (immutable) */ __webpack_exports__["d"] = modifiedStereographicGs48;
/* harmony export (immutable) */ __webpack_exports__["e"] = modifiedStereographicGs50;
/* harmony export (immutable) */ __webpack_exports__["f"] = modifiedStereographicMiller;
/* harmony export (immutable) */ __webpack_exports__["g"] = modifiedStereographicLee;
/* harmony export (immutable) */ __webpack_exports__["a"] = modifiedStereographic;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function modifiedStereographicRaw(C) {
  var m = C.length - 1;

  function forward(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        k = 2 / (1 + cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda)),
        zr = k * cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda),
        zi = k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
        i = m,
        w = C[i],
        ar = w[0],
        ai = w[1],
        t;
    while (--i >= 0) {
      w = C[i];
      ar = w[0] + zr * (t = ar) - zi * ai;
      ai = w[1] + zr * ai + zi * t;
    }
    ar = zr * (t = ar) - zi * ai;
    ai = zr * ai + zi * t;
    return [ar, ai];
  }

  forward.invert = function(x, y) {
    var i = 20,
        zr = x,
        zi = y;
    do {
      var j = m,
          w = C[j],
          ar = w[0],
          ai = w[1],
          br = 0,
          bi = 0,
          t;

      while (--j >= 0) {
        w = C[j];
        br = ar + zr * (t = br) - zi * bi;
        bi = ai + zr * bi + zi * t;
        ar = w[0] + zr * (t = ar) - zi * ai;
        ai = w[1] + zr * ai + zi * t;
      }
      br = ar + zr * (t = br) - zi * bi;
      bi = ai + zr * bi + zi * t;
      ar = zr * (t = ar) - zi * ai - x;
      ai = zr * ai + zi * t - y;

      var denominator = br * br + bi * bi, deltar, deltai;
      zr -= deltar = (ar * br + ai * bi) / denominator;
      zi -= deltai = (ai * br - ar * bi) / denominator;
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(deltar) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(deltai) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);

    if (i) {
      var rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(zr * zr + zi * zi),
          c = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(rho * 0.5),
          sinc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(c);
      return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(zr * sinc, rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(c)), rho ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(zi * sinc / rho) : 0];
    }
  };

  return forward;
}

var alaska = [[0.9972523, 0], [0.0052513, -0.0041175], [0.0074606, 0.0048125], [-0.0153783, -0.1968253], [0.0636871, -0.1408027], [0.3660976, -0.2937382]],
    gs48 = [[0.98879, 0], [0, 0], [-0.050909, 0], [0, 0], [0.075528, 0]],
    gs50 = [[0.9842990, 0], [0.0211642, 0.0037608], [-0.1036018, -0.0575102], [-0.0329095, -0.0320119], [0.0499471, 0.1223335], [0.0260460, 0.0899805], [0.0007388, -0.1435792], [0.0075848, -0.1334108], [-0.0216473, 0.0776645], [-0.0225161, 0.0853673]],
    miller = [[0.9245, 0], [0, 0], [0.01943, 0]],
    lee = [[0.721316, 0], [0, 0], [-0.00881625, -0.00617325]];

function modifiedStereographicAlaska() {
  return modifiedStereographic(alaska, [152, -64])
      .scale(1400)
      .center([-160.908, 62.4864])
      .clipAngle(30)
      .angle(7.8);
}

function modifiedStereographicGs48() {
  return modifiedStereographic(gs48, [95, -38])
      .scale(1000)
      .clipAngle(55)
      .center([-96.5563, 38.8675]);
}

function modifiedStereographicGs50() {
  return modifiedStereographic(gs50, [120, -45])
      .scale(359.513)
      .clipAngle(55)
      .center([-117.474, 53.0628]);
}

function modifiedStereographicMiller() {
  return modifiedStereographic(miller, [-20, -18])
      .scale(209.091)
      .center([20, 16.7214])
      .clipAngle(82);
}

function modifiedStereographicLee() {
  return modifiedStereographic(lee, [165, 10])
      .scale(250)
      .clipAngle(130)
      .center([-165, -10]);
}

function modifiedStereographic(coefficients, rotate) {
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(modifiedStereographicRaw(coefficients)).rotate(rotate).clipAngle(90),
      r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoRotation"])(rotate),
      center = p.center;

  delete p.rotate;

  p.center = function(_) {
    return arguments.length ? center(r(_)) : r.invert(center());
  };

  return p;
}


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mtFlatPolarParabolicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var sqrt6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(6),
    sqrt7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(7);

function mtFlatPolarParabolicRaw(lambda, phi) {
  var theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(7 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) / (3 * sqrt6));
  return [
    sqrt6 * lambda * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(2 * theta / 3) - 1) / sqrt7,
    9 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta / 3) / sqrt7
  ];
}

mtFlatPolarParabolicRaw.invert = function(x, y) {
  var theta = 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y * sqrt7 / 9);
  return [
    x * sqrt7 / (sqrt6 * (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(2 * theta / 3) - 1)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta) * 3 * sqrt6 / 7)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(mtFlatPolarParabolicRaw)
      .scale(164.859);
});


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mtFlatPolarQuarticRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function mtFlatPolarQuarticRaw(lambda, phi) {
  var k = (1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
      theta = phi;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta / 2) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta) - k) / (0.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta / 2) + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta));
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) break;
  }
  return [
    lambda * (1 + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta / 2)) / (3 * __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */]),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(3) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta / 2) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */])
  ];
}

mtFlatPolarQuarticRaw.invert = function(x, y) {
  var sinTheta_2 = y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 + __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */]) / (2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(3)),
      theta = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sinTheta_2);
  return [
    3 * __WEBPACK_IMPORTED_MODULE_1__math_js__["k" /* sqrt2 */] * x / (1 + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta / 2)),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((sinTheta_2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta)) / (1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* sqrt1_2 */]))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(mtFlatPolarQuarticRaw)
      .scale(188.209);
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mtFlatPolarSinusoidalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function mtFlatPolarSinusoidalRaw(lambda, phi) {
  var A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(6 / (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])),
      k = (1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
      theta = phi / 2;
  for (var i = 0, delta; i < 25; i++) {
    theta -= delta = (theta / 2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta) - k) / (0.5 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta));
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) break;
  }
  return [
    A * (0.5 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta)) * lambda / 1.5,
    A * theta
  ];
}

mtFlatPolarSinusoidalRaw.invert = function(x, y) {
  var A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(6 / (4 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])),
      theta = y / A;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(theta) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) theta = theta < 0 ? -__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] : __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */];
  return [
    1.5 * x / (A * (0.5 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta))),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])((theta / 2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(theta)) / (1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(mtFlatPolarSinusoidalRaw)
      .scale(166.518);
});


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = naturalEarth2Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function naturalEarth2Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2, phi6 = phi2 * phi4;
  return [
    lambda * (0.84719 - 0.13063 * phi2 + phi6 * phi6 * (-0.04515 + 0.05494 * phi2 - 0.02326 * phi4 + 0.00331 * phi6)),
    phi * (1.01183 + phi4 * phi4 * (-0.02625 + 0.01926 * phi2 - 0.00396 * phi4))
  ];
}

naturalEarth2Raw.invert = function(x, y) {
  var phi = y, i = 25, delta, phi2, phi4, phi6;
  do {
    phi2 = phi * phi; phi4 = phi2 * phi2;
    phi -= delta = ((phi * (1.01183 + phi4 * phi4 * (-0.02625 + 0.01926 * phi2 - 0.00396 * phi4))) - y) /
      (1.01183 + phi4 * phi4 * ((9 * -0.02625) + (11 * 0.01926) * phi2 + (13 * -0.00396) * phi4));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* epsilon2 */] && --i > 0);
  phi2 = phi * phi; phi4 = phi2 * phi2; phi6 = phi2 * phi4;
  return [
    x / (0.84719 - 0.13063 * phi2 + phi6 * phi6 * (-0.04515 + 0.05494 * phi2 - 0.02326 * phi4 + 0.00331 * phi6)),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(naturalEarth2Raw)
      .scale(175.295);
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nellHammerRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function nellHammerRaw(lambda, phi) {
  return [
    lambda * (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi)) / 2,
    2 * (phi - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi / 2))
  ];
}

nellHammerRaw.invert = function(x, y) {
  var p = y / 2;
  for (var i = 0, delta = Infinity; i < 10 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]; ++i) {
    var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y / 2);
    y -= delta = (y - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(y / 2) - p) / (1 - 0.5 / (c * c));
  }
  return [
    2 * x / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(y)),
    y
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(nellHammerRaw)
      .scale(152.63);
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nicolosiRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newton_js__ = __webpack_require__(10);




// Based on Torben Jansen's implementation
// https://beta.observablehq.com/@toja/nicolosi-globular-projection
// https://beta.observablehq.com/@toja/nicolosi-globular-inverse

function nicolosiRaw(lambda, phi) {
  var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
    q = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
    s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(lambda);

  if (lambda === 0 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) === __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) return [0, phi];
  else if (phi === 0) return [lambda, 0];
  else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) === __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) return [lambda * q, __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * sinPhi];

  var b = __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / (2 * lambda) - (2 * lambda) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */],
    c = (2 * phi) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */],
    d = (1 - c * c) / (sinPhi - c);

  var b2 = b * b,
    d2 = d * d,
    b2d2 = 1 + b2 / d2,
    d2b2 = 1 + d2 / b2;

  var M = ((b * sinPhi) / d - b / 2) / b2d2,
    N = ((d2 * sinPhi) / b2 + d / 2) / d2b2,
    m = M * M + (q * q) / b2d2,
    n = N * N - ((d2 * sinPhi * sinPhi) / b2 + d * sinPhi - 1) / d2b2;

  return [
    __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * (M + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(m) * s),
    __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * (N + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(n < 0 ? 0 : n) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(-phi * b) * s)
  ];
}

nicolosiRaw.invert = function(x, y) {

  x /= __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */];
  y /= __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */];

  var x2 = x * x,
    y2 = y * y,
    x2y2 = x2 + y2,
    pi2 = __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */];

  return [
    x ? (x2y2 -1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])((1 - x2y2) * (1 - x2y2) + 4 * x2)) / (2 * x) * __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] : 0,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__newton_js__["a" /* solve */])(function(phi) {
      return (
        x2y2 * (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi) - 2 * phi) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] +
        4 * phi * phi * (y - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)) +
        2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * phi -
        pi2 * y
      );
    }, 0)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(nicolosiRaw)
    .scale(127.267);
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = pattersonRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



// Based on Java implementation by Bojan Savric.
// https://github.com/OSUCartography/JMapProjLib/blob/master/src/com/jhlabs/map/proj/PattersonProjection.java

var pattersonK1 = 1.0148,
    pattersonK2 = 0.23185,
    pattersonK3 = -0.14499,
    pattersonK4 = 0.02406,
    pattersonC1 = pattersonK1,
    pattersonC2 = 5 * pattersonK2,
    pattersonC3 = 7 * pattersonK3,
    pattersonC4 = 9 * pattersonK4,
    pattersonYmax = 1.790857183;

function pattersonRaw(lambda, phi) {
  var phi2 = phi * phi;
  return [
    lambda,
    phi * (pattersonK1 + phi2 * phi2 * (pattersonK2 + phi2 * (pattersonK3 + pattersonK4 * phi2)))
  ];
}

pattersonRaw.invert = function(x, y) {
  if (y > pattersonYmax) y = pattersonYmax;
  else if (y < -pattersonYmax) y = -pattersonYmax;
  var yc = y, delta;

  do { // Newton-Raphson
    var y2 = yc * yc;
    yc -= delta = ((yc * (pattersonK1 + y2 * y2 * (pattersonK2 + y2 * (pattersonK3 + pattersonK4 * y2)))) - y) / (pattersonC1 + y2 * y2 * (pattersonC2 + y2 * (pattersonC3 + pattersonC4 * y2)));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]);

  return [x, yc];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(pattersonRaw)
      .scale(139.319);
});


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = polyconicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function polyconicRaw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [lambda, 0];
  var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi),
      k = lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(k) / tanPhi,
    phi + (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(k)) / tanPhi
  ];
}

polyconicRaw.invert = function(x, y) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [x, 0];
  var k = x * x + y * y,
      phi = y * 0.5,
      i = 10, delta;
  do {
    var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi),
        secPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        j = k - 2 * y * phi + phi * phi;
    phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
  tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi);
  return [
    (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi + 1 / tanPhi) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(x * tanPhi) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x * tanPhi)) + __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */])) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(polyconicRaw)
      .scale(103.74);
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octahedron_js__ = __webpack_require__(29);





/* harmony default export */ __webpack_exports__["a"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoCentroid"])({type: "MultiPoint", coordinates: face});
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoGnomonic"])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var faces = __WEBPACK_IMPORTED_MODULE_3__octahedron_js__["a" /* default */].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(faces[0], function(lambda, phi) {
        return faces[lambda < -__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .angle(-30)
      .scale(101.858)
      .center([0, 45]);
});


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collignon_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__octahedron_js__ = __webpack_require__(29);






var kx = 2 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(3);

function collignonK(a, b) {
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__collignon_js__["b" /* collignonRaw */])(a, b);
  return [p[0] * kx, p[1]];
}

collignonK.invert = function(x,y) {
  return __WEBPACK_IMPORTED_MODULE_1__collignon_js__["b" /* collignonRaw */].invert(x / kx, y);
};

/* harmony default export */ __webpack_exports__["a"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoCentroid"])({type: "MultiPoint", coordinates: face});
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(collignonK).translate([0, 0]).scale(1).rotate(c[1] > 0 ? [-c[0], 0] : [180 - c[0], 180]);
  };

  var faces = __WEBPACK_IMPORTED_MODULE_4__octahedron_js__["a" /* default */].map(function(face) {
    return {face: face, project: faceProjection(face)};
  });

  [-1, 0, 0, 1, 0, 1, 4, 5].forEach(function(d, i) {
    var node = faces[d];
    node && (node.children || (node.children = [])).push(faces[i]);
  });

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__index_js__["a" /* default */])(faces[0], function(lambda, phi) {
        return faces[lambda < -__WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] / 2 ? phi < 0 ? 6 : 4
            : lambda < 0 ? phi < 0 ? 2 : 0
            : lambda < __WEBPACK_IMPORTED_MODULE_2__math_js__["j" /* pi */] / 2 ? phi < 0 ? 3 : 1
            : phi < 0 ? 7 : 5];
      })
      .angle(-30)
      .scale(121.906)
      .center([0, 48.5904]);
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = inverse;
/* harmony export (immutable) */ __webpack_exports__["b"] = multiply;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);


// Note: 6-element arrays are used to denote the 3x3 affine transform matrix:
// [a, b, c,
//  d, e, f,
//  0, 0, 1] - this redundant row is left out.

// Transform matrix for [a0, a1] -> [b0, b1].
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var u = subtract(a[1], a[0]),
      v = subtract(b[1], b[0]),
      phi = angle(u, v),
      s = length(u) / length(v);

  return multiply([
    1, 0, a[0][0],
    0, 1, a[0][1]
  ], multiply([
    s, 0, 0,
    0, s, 0
  ], multiply([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi), 0,
    -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi), 0
  ], [
    1, 0, -b[0][0],
    0, 1, -b[0][1]
  ])));
});

// Inverts a transform matrix.
function inverse(m) {
  var k = 1 / (m[0] * m[4] - m[1] * m[3]);
  return [
    k * m[4], -k * m[1], k * (m[1] * m[5] - m[2] * m[4]),
    -k * m[3], k * m[0], k * (m[2] * m[3] - m[0] * m[5])
  ];
}

// Multiplies two 3x2 matrices.
function multiply(a, b) {
  return [
    a[0] * b[0] + a[1] * b[3],
    a[0] * b[1] + a[1] * b[4],
    a[0] * b[2] + a[1] * b[5] + a[2],
    a[3] * b[0] + a[4] * b[3],
    a[3] * b[1] + a[4] * b[4],
    a[3] * b[2] + a[4] * b[5] + a[5]
  ];
}

// Subtracts 2D vectors.
function subtract(a, b) {
  return [a[0] - b[0], a[1] - b[1]];
}

// Magnitude of a 2D vector.
function length(v) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* sqrt */])(v[0] * v[0] + v[1] * v[1]);
}

// Angle between two 2D vectors.
function angle(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["h" /* atan2 */])(a[0] * b[1] - a[1] * b[0], a[0] * b[0] + a[1] * b[1]);
}


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__octahedron_js__ = __webpack_require__(29);





/* harmony default export */ __webpack_exports__["a"] = (function(faceProjection) {

  faceProjection = faceProjection || function(face) {
    var c = face.length === 6 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoCentroid"])({type: "MultiPoint", coordinates: face}) : face[0];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoGnomonic"])().scale(1).translate([0, 0]).rotate([-c[0], -c[1]]);
  };

  var w5 = __WEBPACK_IMPORTED_MODULE_3__octahedron_js__["a" /* default */].map(function(face) {
    var xyz = face.map(cartesian),
        n = xyz.length,
        a = xyz[n - 1],
        b,
        hexagon = [];
    for (var i = 0; i < n; ++i) {
      b = xyz[i];
      hexagon.push(spherical([
        a[0] * 0.9486832980505138 + b[0] * 0.31622776601683794,
        a[1] * 0.9486832980505138 + b[1] * 0.31622776601683794,
        a[2] * 0.9486832980505138 + b[2] * 0.31622776601683794
      ]), spherical([
        b[0] * 0.9486832980505138 + a[0] * 0.31622776601683794,
        b[1] * 0.9486832980505138 + a[1] * 0.31622776601683794,
        b[2] * 0.9486832980505138 + a[2] * 0.31622776601683794
      ]));
      a = b;
    }
    return hexagon;
  });

  var cornerNormals = [];

  var parents = [-1, 0, 0, 1, 0, 1, 4, 5];

  w5.forEach(function(hexagon, j) {
    var face = __WEBPACK_IMPORTED_MODULE_3__octahedron_js__["a" /* default */][j],
        n = face.length,
        normals = cornerNormals[j] = [];
    for (var i = 0; i < n; ++i) {
      w5.push([
        face[i],
        hexagon[(i * 2 + 2) % (2 * n)],
        hexagon[(i * 2 + 1) % (2 * n)]
      ]);
      parents.push(j);
      normals.push(cross(
        cartesian(hexagon[(i * 2 + 2) % (2 * n)]),
        cartesian(hexagon[(i * 2 + 1) % (2 * n)])
      ));
    }
  });

  var faces = w5.map(function(face) {
    return {
      project: faceProjection(face),
      face: face
    };
  });

  parents.forEach(function(d, i) {
    var parent = faces[d];
    parent && (parent.children || (parent.children = [])).push(faces[i]);
  });

  function face(lambda, phi) {
    var cosphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        p = [cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda), cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)];

    var hexagon = lambda < -__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 2 ? phi < 0 ? 6 : 4
        : lambda < 0 ? phi < 0 ? 2 : 0
        : lambda < __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 2 ? phi < 0 ? 3 : 1
        : phi < 0 ? 7 : 5;

    var n = cornerNormals[hexagon];

    return faces[dot(n[0], p) < 0 ? 8 + 3 * hexagon
        : dot(n[1], p) < 0 ? 8 + 3 * hexagon + 1
        : dot(n[2], p) < 0 ? 8 + 3 * hexagon + 2
        : hexagon];
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index_js__["a" /* default */])(faces[0], face)
      .angle(-30)
      .scale(110.625)
      .center([0,45]);
});

function dot(a, b) {
  for (var i = 0, n = a.length, s = 0; i < n; ++i) s += a[i] * b[i];
  return s;
}

function cross(a, b) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0]
  ];
}

// Converts 3D Cartesian to spherical coordinates (degrees).
function spherical(cartesian) {
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(cartesian[1], cartesian[0]) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */],
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["m" /* max */])(-1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(1, cartesian[2]))) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */]
  ];
}

// Converts spherical coordinates (degrees) to 3D Cartesian.
function cartesian(coordinates) {
  var lambda = coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */],
      phi = coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */],
      cosphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi);
  return [
    cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda),
    cosphi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)
  ];
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(ring) {
  if ((n = ring.length) < 4) return false;
  var i = 0,
      n,
      area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
  while (++i < n) area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
  return area <= 0;
});


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(ring, point) {
  var x = point[0],
      y = point[1],
      contains = false;
  for (var i = 0, n = ring.length, j = n - 1; i < n; j = i++) {
    var pi = ring[i], xi = pi[0], yi = pi[1],
        pj = ring[j], xj = pj[0], yj = pj[1];
    if (((yi > y) ^ (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) contains = !contains;
  }
  return contains;
});


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_js__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clockwise_js__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(182);





/* harmony default export */ __webpack_exports__["a"] = (function(object, projection) {
  var stream = projection.stream, project;
  if (!stream) throw new Error("invalid projection");
  switch (object && object.type) {
    case "Feature": project = projectFeature; break;
    case "FeatureCollection": project = projectFeatureCollection; break;
    default: project = projectGeometry; break;
  }
  return project(object, stream);
});

function projectFeatureCollection(o, stream) {
  return {
    type: "FeatureCollection",
    features: o.features.map(function(f) {
      return projectFeature(f, stream);
    })
  };
}

function projectFeature(o, stream) {
  return {
    type: "Feature",
    id: o.id,
    properties: o.properties,
    geometry: projectGeometry(o.geometry, stream)
  };
}

function projectGeometryCollection(o, stream) {
  return {
    type: "GeometryCollection",
    geometries: o.geometries.map(function(o) {
      return projectGeometry(o, stream);
    })
  };
}

function projectGeometry(o, stream) {
  if (!o) return null;
  if (o.type === "GeometryCollection") return projectGeometryCollection(o, stream);
  var sink;
  switch (o.type) {
    case "Point": sink = sinkPoint; break;
    case "MultiPoint": sink = sinkPoint; break;
    case "LineString": sink = sinkLine; break;
    case "MultiLineString": sink = sinkLine; break;
    case "Polygon": sink = sinkPolygon; break;
    case "MultiPolygon": sink = sinkPolygon; break;
    case "Sphere": sink = sinkPolygon; break;
    default: return null;
  }
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoStream"])(o, stream(sink));
  return sink.result();
}

var points = [],
    lines = [];

var sinkPoint = {
  point: function(x, y) {
    points.push([x, y]);
  },
  result: function() {
    var result = !points.length ? null
        : points.length < 2 ? {type: "Point", coordinates: points[0]}
        : {type: "MultiPoint", coordinates: points};
    points = [];
    return result;
  }
};

var sinkLine = {
  lineStart: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    if (points.length) lines.push(points), points = [];
  },
  result: function() {
    var result = !lines.length ? null
        : lines.length < 2 ? {type: "LineString", coordinates: lines[0]}
        : {type: "MultiLineString", coordinates: lines};
    lines = [];
    return result;
  }
};

var sinkPolygon = {
  polygonStart: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */],
  point: function(x, y) {
    points.push([x, y]);
  },
  lineEnd: function() {
    var n = points.length;
    if (n) {
      do points.push(points[0].slice()); while (++n < 4);
      lines.push(points), points = [];
    }
  },
  polygonEnd: __WEBPACK_IMPORTED_MODULE_1__noop_js__["a" /* default */],
  result: function() {
    if (!lines.length) return null;
    var polygons = [],
        holes = [];

    // https://github.com/d3/d3/issues/1558
    lines.forEach(function(ring) {
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__clockwise_js__["a" /* default */])(ring)) polygons.push([ring]);
      else holes.push(ring);
    });

    holes.forEach(function(hole) {
      var point = hole[0];
      polygons.some(function(polygon) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__contains_js__["a" /* default */])(polygon[0], point)) {
          polygon.push(hole);
          return true;
        }
      }) || polygons.push([hole]);
    });

    lines = [];

    return !polygons.length ? null
        : polygons.length > 1 ? {type: "MultiPolygon", coordinates: polygons}
        : {type: "Polygon", coordinates: polygons[0]};
  }
};


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(input, digits) {
  if (!(0 <= (digits = +digits) && digits <= 20)) throw new Error("invalid digits");

  function quantizePoint(input) {
    var n = input.length, i = 2, output = new Array(n);
    output[0] = +input[0].toFixed(digits);
    output[1] = +input[1].toFixed(digits);
    while (i < n) output[i] = input[i], ++i;
    return output;
  }

  function quantizePoints(input) {
    return input.map(quantizePoint);
  }

  function quantizePointsNoDuplicates(input) {
    var point0 = quantizePoint(input[0]);
    var output = [point0];
    for (var i = 1; i < input.length; i++) {
      var point = quantizePoint(input[i]);
      if (point.length > 2 || point[0] != point0[0] || point[1] != point0[1]) {
        output.push(point);
        point0 = point;
      }
    }
    if (output.length === 1 && input.length > 1) {
      output.push(quantizePoint(input[input.length - 1]));
    }
    return output;
  }

  function quantizePolygon(input) {
    return input.map(quantizePointsNoDuplicates);
  }

  function quantizeGeometry(input) {
    if (input == null) return input;
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": output = {type: input.type, coordinates: quantizePoints(input.coordinates)}; break;
      case "LineString": output = {type: input.type, coordinates: quantizePointsNoDuplicates(input.coordinates)}; break;
      case "MultiLineString": case "Polygon": output = {type: input.type, coordinates: quantizePolygon(input.coordinates)}; break;
      case "MultiPolygon": output = {type: "MultiPolygon", coordinates: input.coordinates.map(quantizePolygon)}; break;
      default: return input;
    }
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
  }

  function quantizeFeature(input) {
    var output = {type: "Feature", properties: input.properties, geometry: quantizeGeometry(input.geometry)};
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    return output;
  }

  if (input != null) switch (input.type) {
    case "Feature": return quantizeFeature(input);
    case "FeatureCollection": {
      var output = {type: "FeatureCollection", features: input.features.map(quantizeFeature)};
      if (input.bbox != null) output.bbox = input.bbox;
      return output;
    }
    default: return quantizeGeometry(input);
  }

  return input;
});


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gringorten_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(30);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__gringorten_js__["b" /* gringortenRaw */])
      .scale(176.423);
});


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rectangularPolyconicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parallel1_js__ = __webpack_require__(11);



function rectangularPolyconicRaw(phi0) {
  var sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi0);

  function forward(lambda, phi) {
    var A = sinPhi0 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(lambda * sinPhi0 / 2) / sinPhi0 : lambda / 2;
    if (!phi) return [2 * A, -phi0];
    var E = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(A * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi)),
        cotPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(phi);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(E) * cotPhi,
      phi + (1 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(E)) * cotPhi - phi0
    ];
  }

  // TODO return null for points outside outline.
  forward.invert = function(x, y) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(y += phi0) < __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */]) return [sinPhi0 ? 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(sinPhi0 * x / 2) / sinPhi0 : x, 0];
    var k = x * x + y * y,
        phi = 0,
        i = 10, delta;
    do {
      var tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(phi),
          secPhi = 1 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* cos */])(phi),
          j = k - 2 * y * phi + phi * phi;
      phi -= delta = (tanPhi * j + 2 * (phi - y)) / (2 + j * secPhi * secPhi + 2 * (phi - y) * tanPhi);
    } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_0__math_js__["g" /* epsilon */] && --i > 0);
    var E = x * (tanPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(phi)),
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["l" /* tan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(y) < __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* abs */])(phi + 1 / tanPhi) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["i" /* asin */])(E) * 0.5 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* acos */])(E) * 0.5 + __WEBPACK_IMPORTED_MODULE_0__math_js__["j" /* pi */] / 4) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* sin */])(phi);
    return [
      sinPhi0 ? 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["r" /* atan */])(sinPhi0 * A) / sinPhi0 : 2 * A,
      phi
    ];
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parallel1_js__["a" /* default */])(rectangularPolyconicRaw)
      .scale(131.215);
});


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = robinsonRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



var K = [
  [0.9986, -0.062],
  [1.0000, 0.0000],
  [0.9986, 0.0620],
  [0.9954, 0.1240],
  [0.9900, 0.1860],
  [0.9822, 0.2480],
  [0.9730, 0.3100],
  [0.9600, 0.3720],
  [0.9427, 0.4340],
  [0.9216, 0.4958],
  [0.8962, 0.5571],
  [0.8679, 0.6176],
  [0.8350, 0.6769],
  [0.7986, 0.7346],
  [0.7597, 0.7903],
  [0.7186, 0.8435],
  [0.6732, 0.8936],
  [0.6213, 0.9394],
  [0.5722, 0.9761],
  [0.5322, 1.0000]
];

K.forEach(function(d) {
  d[1] *= 1.0144;
});

function robinsonRaw(lambda, phi) {
  var i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(18, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) * 36 / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]),
      i0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["t" /* floor */])(i),
      di = i - i0,
      ax = (k = K[i0])[0],
      ay = k[1],
      bx = (k = K[++i0])[0],
      by = k[1],
      cx = (k = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(19, ++i0)])[0],
      cy = k[1],
      k;
  return [
    lambda * (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    (phi > 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2)
  ];
}

robinsonRaw.invert = function(x, y) {
  var yy = y / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
      phi = yy * 90,
      i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(18, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi / 5)),
      i0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["m" /* max */])(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["t" /* floor */])(i));
  do {
    var ay = K[i0][1],
        by = K[i0 + 1][1],
        cy = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(19, i0 + 2)][1],
        u = cy - ay,
        v = cy - 2 * by + ay,
        t = 2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(yy) - by) / u,
        c = v / u,
        di = t * (1 - c * t * (1 - 2 * c * t));
    if (di >= 0 || i0 === 1) {
      phi = (y >= 0 ? 5 : -5) * (di + i);
      var j = 50, delta;
      do {
        i = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(18, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) / 5);
        i0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["t" /* floor */])(i);
        di = i - i0;
        ay = K[i0][1];
        by = K[i0 + 1][1];
        cy = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(19, i0 + 2)][1];
        phi -= (delta = (y >= 0 ? __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) * (by + di * (cy - ay) / 2 + di * di * (cy - 2 * by + ay) / 2) - y) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
      } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math_js__["u" /* epsilon2 */] && --j > 0);
      break;
    }
  } while (--i0 >= 0);
  var ax = K[i0][0],
      bx = K[i0 + 1][0],
      cx = K[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(19, i0 + 2)][0];
  return [
    x / (bx + di * (cx - ax) / 2 + di * di * (cx - 2 * bx + ax) / 2),
    phi * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(robinsonRaw)
      .scale(152.63);
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = satelliteRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function satelliteVerticalRaw(P) {
  function forward(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
        k = (P - 1) / (P - cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda));
    return [
      k * cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda),
      k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi)
    ];
  }

  forward.invert = function(x, y) {
    var rho2 = x * x + y * y,
        rho = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(rho2),
        sinc = (P - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - rho2 * (P + 1) / (P - 1))) / ((P - 1) / rho + rho / (P - 1));
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(x * sinc, rho * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - sinc * sinc)),
      rho ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y * sinc / rho) : 0
    ];
  };

  return forward;
}

function satelliteRaw(P, omega) {
  var vertical = satelliteVerticalRaw(P);
  if (!omega) return vertical;
  var cosOmega = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(omega),
      sinOmega = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(omega);

  function forward(lambda, phi) {
    var coordinates = vertical(lambda, phi),
        y = coordinates[1],
        A = y * sinOmega / (P - 1) + cosOmega;
    return [
      coordinates[0] * cosOmega / A,
      y / A
    ];
  }

  forward.invert = function(x, y) {
    var k = (P - 1) / (P - 1 - y * sinOmega);
    return vertical.invert(k * x, k * y * cosOmega);
  };

  return forward;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var distance = 2,
      omega = 0,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(satelliteRaw),
      p = m(distance, omega);

  // As a multiple of radius.
  p.distance = function(_) {
    if (!arguments.length) return distance;
    return m(distance = +_, omega);
  };

  p.tilt = function(_) {
    if (!arguments.length) return omega * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
    return m(distance, omega = _ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */]);
  };

  return p
      .scale(432.147)
      .clipAngle(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(1 / distance) * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */] - 1e-6);
});


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var epsilon = 1e-4,
    epsilonInverse = 1e4,
    x0 = -180, x0e = x0 + epsilon,
    x1 = 180, x1e = x1 - epsilon,
    y0 = -90, y0e = y0 + epsilon,
    y1 = 90, y1e = y1 - epsilon;

function nonempty(coordinates) {
  return coordinates.length > 0;
}

function quantize(x) {
  return Math.floor(x * epsilonInverse) / epsilonInverse;
}

function normalizePoint(y) {
  return y === y0 || y === y1 ? [0, y] : [x0, quantize(y)]; // pole or antimeridian?
}

function clampPoint(p) {
  var x = p[0], y = p[1], clamped = false;
  if (x <= x0e) x = x0, clamped = true;
  else if (x >= x1e) x = x1, clamped = true;
  if (y <= y0e) y = y0, clamped = true;
  else if (y >= y1e) y = y1, clamped = true;
  return clamped ? [x, y] : p;
}

function clampPoints(points) {
  return points.map(clampPoint);
}

// For each ring, detect where it crosses the antimeridian or pole.
function extractFragments(rings, polygon, fragments) {
  for (var j = 0, m = rings.length; j < m; ++j) {
    var ring = rings[j].slice();

    // By default, assume that this ring doesn’t need any stitching.
    fragments.push({index: -1, polygon: polygon, ring: ring});

    for (var i = 0, n = ring.length; i < n; ++i) {
      var point = ring[i],
          x = point[0],
          y = point[1];

      // If this is an antimeridian or polar point…
      if (x <= x0e || x >= x1e || y <= y0e || y >= y1e) {
        ring[i] = clampPoint(point);

        // Advance through any antimeridian or polar points…
        for (var k = i + 1; k < n; ++k) {
          var pointk = ring[k],
              xk = pointk[0],
              yk = pointk[1];
          if (xk > x0e && xk < x1e && yk > y0e && yk < y1e) break;
        }

        // If this was just a single antimeridian or polar point,
        // we don’t need to cut this ring into a fragment;
        // we can just leave it as-is.
        if (k === i + 1) continue;

        // Otherwise, if this is not the first point in the ring,
        // cut the current fragment so that it ends at the current point.
        // The current point is also normalized for later joining.
        if (i) {
          var fragmentBefore = {index: -1, polygon: polygon, ring: ring.slice(0, i + 1)};
          fragmentBefore.ring[fragmentBefore.ring.length - 1] = normalizePoint(y);
          fragments[fragments.length - 1] = fragmentBefore;
        }

        // If the ring started with an antimeridian fragment,
        // we can ignore that fragment entirely.
        else fragments.pop();

        // If the remainder of the ring is an antimeridian fragment,
        // move on to the next ring.
        if (k >= n) break;

        // Otherwise, add the remaining ring fragment and continue.
        fragments.push({index: -1, polygon: polygon, ring: ring = ring.slice(k - 1)});
        ring[0] = normalizePoint(ring[0][1]);
        i = -1;
        n = ring.length;
      }
    }
  }
}

// Now stitch the fragments back together into rings.
function stitchFragments(fragments) {
  var i, n = fragments.length;

  // To connect the fragments start-to-end, create a simple index by end.
  var fragmentByStart = {},
      fragmentByEnd = {},
      fragment,
      start,
      startFragment,
      end,
      endFragment;

  // For each fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    start = fragment.ring[0];
    end = fragment.ring[fragment.ring.length - 1];

    // If this fragment is closed, add it as a standalone ring.
    if (start[0] === end[0] && start[1] === end[1]) {
      fragment.polygon.push(fragment.ring);
      fragments[i] = null;
      continue;
    }

    fragment.index = i;
    fragmentByStart[start] = fragmentByEnd[end] = fragment;
  }

  // For each open fragment…
  for (i = 0; i < n; ++i) {
    fragment = fragments[i];
    if (fragment) {
      start = fragment.ring[0];
      end = fragment.ring[fragment.ring.length - 1];
      startFragment = fragmentByEnd[start];
      endFragment = fragmentByStart[end];

      delete fragmentByStart[start];
      delete fragmentByEnd[end];

      // If this fragment is closed, add it as a standalone ring.
      if (start[0] === end[0] && start[1] === end[1]) {
        fragment.polygon.push(fragment.ring);
        continue;
      }

      if (startFragment) {
        delete fragmentByEnd[start];
        delete fragmentByStart[startFragment.ring[0]];
        startFragment.ring.pop(); // drop the shared coordinate
        fragments[startFragment.index] = null;
        fragment = {index: -1, polygon: startFragment.polygon, ring: startFragment.ring.concat(fragment.ring)};

        if (startFragment === endFragment) {
          // Connect both ends to this single fragment to create a ring.
          fragment.polygon.push(fragment.ring);
        } else {
          fragment.index = n++;
          fragments.push(fragmentByStart[fragment.ring[0]] = fragmentByEnd[fragment.ring[fragment.ring.length - 1]] = fragment);
        }
      } else if (endFragment) {
        delete fragmentByStart[end];
        delete fragmentByEnd[endFragment.ring[endFragment.ring.length - 1]];
        fragment.ring.pop(); // drop the shared coordinate
        fragment = {index: n++, polygon: endFragment.polygon, ring: fragment.ring.concat(endFragment.ring)};
        fragments[endFragment.index] = null;
        fragments.push(fragmentByStart[fragment.ring[0]] = fragmentByEnd[fragment.ring[fragment.ring.length - 1]] = fragment);
      } else {
        fragment.ring.push(fragment.ring[0]); // close ring
        fragment.polygon.push(fragment.ring);
      }
    }
  }
}

function stitchFeature(input) {
  var output = {type: "Feature", geometry: stitchGeometry(input.geometry)};
  if (input.id != null) output.id = input.id;
  if (input.bbox != null) output.bbox = input.bbox;
  if (input.properties != null) output.properties = input.properties;
  return output;
}

function stitchGeometry(input) {
  if (input == null) return input;
  var output, fragments, i, n;
  switch (input.type) {
    case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(stitchGeometry)}; break;
    case "Point": output = {type: "Point", coordinates: clampPoint(input.coordinates)}; break;
    case "MultiPoint": case "LineString": output = {type: input.type, coordinates: clampPoints(input.coordinates)}; break;
    case "MultiLineString": output = {type: "MultiLineString", coordinates: input.coordinates.map(clampPoints)}; break;
    case "Polygon": {
      var polygon = [];
      extractFragments(input.coordinates, polygon, fragments = []);
      stitchFragments(fragments);
      output = {type: "Polygon", coordinates: polygon};
      break;
    }
    case "MultiPolygon": {
      fragments = [], i = -1, n = input.coordinates.length;
      var polygons = new Array(n);
      while (++i < n) extractFragments(input.coordinates[i], polygons[i] = [], fragments);
      stitchFragments(fragments);
      output = {type: "MultiPolygon", coordinates: polygons.filter(nonempty)};
      break;
    }
    default: return input;
  }
  if (input.bbox != null) output.bbox = input.bbox;
  return output;
}

/* harmony default export */ __webpack_exports__["a"] = (function(input) {
  if (input == null) return input;
  switch (input.type) {
    case "Feature": return stitchFeature(input);
    case "FeatureCollection": {
      var output = {type: "FeatureCollection", features: input.features.map(stitchFeature)};
      if (input.bbox != null) output.bbox = input.bbox;
      return output;
    }
    default: return stitchGeometry(input);
  }
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = timesRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function timesRaw(lambda, phi) {
  var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(phi / 2),
      s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */] * t);
  return [
    lambda * (0.74482 - 0.34588 * s * s),
    1.70711 * t
  ];
}

timesRaw.invert = function(x, y) {
  var t = y / 1.70711,
      s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["s" /* quarterPi */] * t);
  return [
    x / (0.74482 - 0.34588 * s * s),
    2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(t)
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(timesRaw)
      .scale(146.153);
});


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = twoPointAzimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = twoPointAzimuthalUsa;
/* harmony export (immutable) */ __webpack_exports__["a"] = twoPointAzimuthal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twoPoint_js__ = __webpack_require__(66);




function twoPointAzimuthalRaw(d) {
  var cosd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(d);

  function forward(lambda, phi) {
    var coordinates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoGnomonicRaw"])(lambda, phi);
    coordinates[0] *= cosd;
    return coordinates;
  }

  forward.invert = function(x, y) {
    return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoGnomonicRaw"].invert(x / cosd, y);
  };

  return forward;
}

function twoPointAzimuthalUsa() {
  return twoPointAzimuthal([-158, 21.5], [-77, 39])
      .clipAngle(60)
      .scale(400);
}

function twoPointAzimuthal(p0, p1) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__twoPoint_js__["a" /* default */])(twoPointAzimuthalRaw, p0, p1);
}


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = twoPointEquidistantRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = twoPointEquidistantUsa;
/* harmony export (immutable) */ __webpack_exports__["a"] = twoPointEquidistant;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twoPoint_js__ = __webpack_require__(66);




// TODO clip to ellipse
function twoPointEquidistantRaw(z0) {
  if (!(z0 *= 2)) return __WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoAzimuthalEquidistantRaw"];
  var lambdaa = -z0 / 2,
      lambdab = -lambdaa,
      z02 = z0 * z0,
      tanLambda0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(lambdab),
      S = 0.5 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambdab);

  function forward(lambda, phi) {
    var za = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda - lambdaa)),
        zb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda - lambdab)),
        ys = phi < 0 ? -1 : 1;
    za *= za, zb *= zb;
    return [
      (za - zb) / (2 * z0),
      ys * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(4 * z02 * zb - (z02 - za + zb) * (z02 - za + zb)) / (2 * z0)
    ];
  }

  forward.invert = function(x, y) {
    var y2 = y * y,
        cosza = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(y2 + (t = x + lambdaa) * t)),
        coszb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(y2 + (t = x + lambdab) * t)),
        t,
        d;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(d = cosza - coszb, t = (cosza + coszb) * tanLambda0),
      (y < 0 ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(t * t + d * d) * S)
    ];
  };

  return forward;
}

function twoPointEquidistantUsa() {
  return twoPointEquidistant([-158, 21.5], [-77, 39])
      .clipAngle(130)
      .scale(122.571);
}

function twoPointEquidistant(p0, p1) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__twoPoint_js__["a" /* default */])(twoPointEquidistantRaw, p0, p1);
}


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrintenRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function vanDerGrintenRaw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [lambda, 0];
  var sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]),
      theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sinTheta);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(theta / 2)];
  var cosTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta),
      A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / 2,
      A2 = A * A,
      G = cosTheta / (sinTheta + cosTheta - 1),
      P = G * (2 / sinTheta - 1),
      P2 = P * P,
      P2_A2 = P2 + A2,
      G_P2 = G - P2,
      Q = A2 + G;
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (A * G_P2 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(A2 * G_P2 * G_P2 - P2_A2 * (G * G - P2))) / P2_A2,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (P * Q - A * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])((A2 + 1) * P2_A2 - Q * Q)) / P2_A2
  ];
}

vanDerGrintenRaw.invert = function(x, y) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [x, 0];
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [0, __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]))];
  var x2 = (x /= __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) * x,
      y2 = (y /= __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) * y,
      x2_y2 = x2 + y2,
      z = x2_y2 * x2_y2,
      c1 = -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(y) * (1 + x2_y2),
      c2 = c1 - 2 * y2 + x2,
      c3 = -2 * c1 + 1 + 2 * y2 + z,
      d = y2 / c3 + (2 * c2 * c2 * c2 / (c3 * c3 * c3) - 9 * c1 * c2 / (c3 * c3)) / 27,
      a1 = (c1 - c2 * c2 / (3 * c3)) / c3,
      m1 = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(-a1 / 3),
      theta1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(3 * d / (a1 * m1)) / 3;
  return [
    __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (x2_y2 - 1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 + 2 * (x2 - y2) + z)) / (2 * x),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (-m1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta1 + __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 3) - c2 / (3 * c3))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(vanDerGrintenRaw)
      .scale(79.4183);
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrinten2Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function vanDerGrinten2Raw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [lambda, 0];
  var sinTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]),
      theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sinTheta);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(theta / 2)];
  var cosTheta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta),
      A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / 2,
      A2 = A * A,
      x1 = cosTheta * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 + A2) - A * cosTheta) / (1 + A2 * sinTheta * sinTheta);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * x1,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - x1 * (2 * A + x1))
  ];
}

vanDerGrinten2Raw.invert = function(x, y) {
  if (!x) return [0, __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(y / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]))];
  var x1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]),
      A = (1 - x1 * x1 - (y /= __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) * y) / (2 * x1),
      A2 = A * A,
      B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(A2 + 1);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (B - A),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(y) * __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])((1 - 2 * A * x1) * (A + B) - x1), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(B + A + x1)))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(vanDerGrinten2Raw)
      .scale(79.4183);
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrinten3Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function vanDerGrinten3Raw(lambda, phi) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [lambda, 0];
  var sinTheta = phi / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
      theta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(sinTheta);
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) < __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]) return [0, __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(theta / 2)];
  var A = (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / lambda - lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */]) / 2,
      y1 = sinTheta / (1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(theta));
  return [
    __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(lambda) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(A * A + 1 - y1 * y1) - A),
    __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * y1
  ];
}

vanDerGrinten3Raw.invert = function(x, y) {
  if (!y) return [x, 0];
  var y1 = y / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */],
      A = (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (1 - y1 * y1) - x * x) / (2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * x);
  return [
    x ? __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(A * A + 1) - A) : 0,
    __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["r" /* atan */])(y1))
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(vanDerGrinten3Raw)
        .scale(79.4183);
});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = vanDerGrinten4Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function vanDerGrinten4Raw(lambda, phi) {
  if (!phi) return [lambda, 0];
  var phi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(phi);
  if (!lambda || phi0 === __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) return [0, phi];
  var B = phi0 / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
      B2 = B * B,
      C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
      C2 = C * C,
      BC = B * C,
      B_C2 = B2 + C2 + 2 * BC,
      B_3C = B + 3 * C,
      lambda0 = lambda / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
      lambda1 = lambda0 + 1 / lambda0,
      D = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(lambda) - __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(lambda1 * lambda1 - 4),
      D2 = D * D,
      F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + 12 * BC * C2 + 4 * C2 * C2),
      x1 = (D * (B_C2 + C2 - 1) + 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(F)) / (4 * B_C2 + D2);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(lambda) * __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * x1,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(phi) * __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 + D * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x1) - x1 * x1)
  ];
}

vanDerGrinten4Raw.invert = function(x, y) {
  var delta;
  if (!x || !y) return [x, y];
  y /= __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */];
  var x1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * x / __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */],
      D = (x1 * x1 - 1 + 4 * y * y) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["f" /* abs */])(x1),
      D2 = D * D,
      B = 2 * y,
      i = 50;
  do {
    var B2 = B * B,
        C = (8 * B - B2 * (B2 + 2) - 5) / (2 * B2 * (B - 1)),
        C_ = (3 * B - B2 * B - 10) / (2 * B2 * B),
        C2 = C * C,
        BC = B * C,
        B_C = B + C,
        B_C2 = B_C * B_C,
        B_3C = B + 3 * C,
        F = B_C2 * (B2 + C2 * D2 - 1) + (1 - B2) * (B2 * (B_3C * B_3C + 4 * C2) + C2 * (12 * BC + 4 * C2)),
        F_ = -2 * B_C * (4 * BC * C2 + (1 - 4 * B2 + 3 * B2 * B2) * (1 + C_) + C2 * (-6 + 14 * B2 - D2 + (-8 + 8 * B2 - 2 * D2) * C_) + BC * (-8 + 12 * B2 + (-10 + 10 * B2 - D2) * C_)),
        sqrtF = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(F),
        f = D * (B_C2 + C2 - 1) + 2 * sqrtF - x1 * (4 * B_C2 + D2),
        f_ = D * (2 * C * C_ + 2 * B_C * (1 + C_)) + F_ / sqrtF - 8 * B_C * (D * (-1 + C2 + B_C2) + 2 * sqrtF) * (1 + C_) / (D2 + 4 * B_C2);
    B -= delta = f / f_;
  } while (delta > __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */] && --i > 0);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["q" /* sign */])(x) * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(D * D + 4) + D) * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 4,
    __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */] * B
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(vanDerGrinten4Raw)
      .scale(127.16);
});


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = wagnerRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = wagner;
/* harmony export (immutable) */ __webpack_exports__["b"] = wagner7;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function wagnerFormula(cx, cy, m1, m2, n) {
  function forward(lambda, phi) {
    var s = m1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(m2 * phi),
        c0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - s * s),
        c1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 / (1 + c0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda *= n)));
    return [
      cx * c0 * c1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda),
      cy * s * c1
    ];
  }

  forward.invert = function(x, y) {
    var t1 = x / cx,
        t2 = y / cy,
        p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(t1 * t1 + t2 * t2),
        c = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(p / 2);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(x * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["l" /* tan */])(c), cx * p) / n,
      p && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(y * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(c) / (cy * m1 * p)) / m2
    ];
  };

  return forward;
}

function wagnerRaw(poleline, parallels, inflation, ratio) {
  // 60 is always used as reference parallel
  var phi1 = __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] / 3;

  // sanitizing the input values
  // poleline and parallels may approximate but never equal 0
  poleline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["m" /* max */])(poleline, __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]);
  parallels = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["m" /* max */])(parallels, __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]);
  // poleline must be <= 90; parallels may approximate but never equal 180
  poleline = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(poleline, __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]);
  parallels = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(parallels, __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] - __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]);
  // 0 <= inflation <= 99.999
  inflation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["m" /* max */])(inflation, 0);
  inflation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["n" /* min */])(inflation, 100 - __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]);
  // ratio > 0.
  // sensible values, i.e. something that renders a map which still can be
  // recognized as world map, are e.g. 20 <= ratio <= 1000.
  ratio = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["m" /* max */])(ratio, __WEBPACK_IMPORTED_MODULE_1__math_js__["g" /* epsilon */]);

  // convert values from boehm notation
  // areal inflation e.g. from 0 to 1 or 20 to 1.2:
  var vinflation = inflation/100 + 1;
  // axial ratio e.g. from 200 to 2:
  var vratio  = ratio / 100;
  // the other ones are a bit more complicated...
  var m2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["d" /* acos */])(vinflation * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi1)) / phi1,
      m1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(poleline) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(m2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* halfPi */]),
      n = parallels / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */],
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(vratio * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(poleline / 2) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(parallels / 2)),
      cx = k / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(n * m1 * m2),
      cy = 1 / (k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(n * m1 * m2));

  return wagnerFormula(cx, cy, m1, m2, n);
}

function wagner() {
  // default values generate wagner8
  var poleline = 65 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */],
      parallels = 60 * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */],
      inflation = 20,
      ratio = 200,
      mutate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjectionMutator"])(wagnerRaw),
      projection = mutate(poleline, parallels, inflation, ratio);

  projection.poleline = function(_) {
    return arguments.length ? mutate(poleline = +_ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */], parallels, inflation, ratio) : poleline * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
  };

  projection.parallels = function(_) {
    return arguments.length ? mutate(poleline, parallels = +_ * __WEBPACK_IMPORTED_MODULE_1__math_js__["o" /* radians */], inflation, ratio) : parallels * __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* degrees */];
  };
  projection.inflation = function(_) {
    return arguments.length ? mutate(poleline, parallels, inflation = +_, ratio) : inflation;
  };
  projection.ratio = function(_) {
    return arguments.length ? mutate(poleline, parallels, inflation, ratio = +_) : ratio;
  };

  return projection
    .scale(163.775);
}

function wagner7() {
  return wagner()
      .poleline(65)
      .parallels(60)
      .inflation(0)
      .ratio(200)
      .scale(172.633);
}


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return wagner4Raw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mollweide_js__ = __webpack_require__(6);




var A = 4 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] + 3 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(3),
    B = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(2 * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(3) / A);

var wagner4Raw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__mollweide_js__["c" /* mollweideBromleyRaw */])(B * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(3) / __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */], B, A / 6);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(wagner4Raw)
      .scale(176.84);
});


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = wagner6Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function wagner6Raw(lambda, phi) {
  return [lambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - 3 * phi * phi / (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])), phi];
}

wagner6Raw.invert = function(x, y) {
  return [x / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - 3 * y * y / (__WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */] * __WEBPACK_IMPORTED_MODULE_1__math_js__["j" /* pi */])), y];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(wagner6Raw)
      .scale(152.63);
});


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = wiechelRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(0);



function wiechelRaw(lambda, phi) {
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(phi),
      sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda) * cosPhi,
      sin1_Phi = 1 - sinPhi,
      cosLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["b" /* cos */])(lambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda) * cosPhi, -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(phi))),
      sinLambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["c" /* sin */])(lambda);
  cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(1 - sinPhi * sinPhi);
  return [
    sinLambda * cosPhi - cosLambda * sin1_Phi,
    -cosLambda * cosPhi - sinLambda * sin1_Phi
  ];
}

wiechelRaw.invert = function(x, y) {
  var w = (x * x + y * y) / -2,
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(-w * (2 + w)),
      b = y * w + x * k,
      a = x * w - y * k,
      D = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["e" /* sqrt */])(a * a + b * b);
  return [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["h" /* atan2 */])(k * b, D * (1 + w)),
    D ? -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["i" /* asin */])(k * a / D) : 0
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(wiechelRaw)
      .rotate([0, -90, 45])
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = winkel3Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_geo__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aitoff_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(0);




function winkel3Raw(lambda, phi) {
  var coordinates = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__aitoff_js__["b" /* aitoffRaw */])(lambda, phi);
  return [
    (coordinates[0] + lambda / __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */]) / 2,
    (coordinates[1] + phi) / 2
  ];
}

winkel3Raw.invert = function(x, y) {
  var lambda = x, phi = y, i = 25;
  do {
    var cosphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(phi),
        sinphi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(phi),
        sin_2phi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(2 * phi),
        sin2phi = sinphi * sinphi,
        cos2phi = cosphi * cosphi,
        sinlambda = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(lambda),
        coslambda_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["b" /* cos */])(lambda / 2),
        sinlambda_2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["c" /* sin */])(lambda / 2),
        sin2lambda_2 = sinlambda_2 * sinlambda_2,
        C = 1 - cos2phi * coslambda_2 * coslambda_2,
        E = C ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["d" /* acos */])(cosphi * coslambda_2) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["e" /* sqrt */])(F = 1 / C) : F = 0,
        F,
        fx = 0.5 * (2 * E * cosphi * sinlambda_2 + lambda / __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */]) - x,
        fy = 0.5 * (E * sinphi + phi) - y,
        dxdlambda = 0.5 * F * (cos2phi * sin2lambda_2 + E * cosphi * coslambda_2 * sin2phi) + 0.5 / __WEBPACK_IMPORTED_MODULE_2__math_js__["a" /* halfPi */],
        dxdphi = F * (sinlambda * sin_2phi / 4 - E * sinphi * sinlambda_2),
        dydlambda = 0.125 * F * (sin_2phi * sinlambda_2 - E * sinphi * cos2phi * sinlambda),
        dydphi = 0.5 * F * (sin2phi * coslambda_2 + E * sin2lambda_2 * cosphi) + 0.5,
        denominator = dxdphi * dydlambda - dydphi * dxdlambda,
        dlambda = (fy * dxdphi - fx * dydphi) / denominator,
        dphi = (fx * dydlambda - fy * dxdlambda) / denominator;
    lambda -= dlambda, phi -= dphi;
  } while ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(dlambda) > __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math_js__["f" /* abs */])(dphi) > __WEBPACK_IMPORTED_MODULE_2__math_js__["g" /* epsilon */]) && --i > 0);
  return [lambda, phi];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_geo__["geoProjection"])(winkel3Raw)
      .scale(158.837);
});


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream_js__ = __webpack_require__(8);






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
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream_js__ = __webpack_require__(8);




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
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle_js__ = __webpack_require__(20);


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
/* 205 */
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
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains_js__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_js__ = __webpack_require__(2);




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
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graticule;
/* harmony export (immutable) */ __webpack_exports__["b"] = graticule10;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);



function graticuleX(y0, y1, dy) {
  var y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */], dx).concat(x1);
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
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(X0 / DX) * DX, X1, DX).map(X)
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function(x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]; }).map(x))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["b" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["v" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function(y) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math_js__["a" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math_js__["p" /* epsilon */]; }).map(y));
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
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);


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
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(7);




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
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);


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
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop_js__ = __webpack_require__(7);



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
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area_js__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds_js__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid_js__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context_js__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure_js__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string_js__ = __webpack_require__(215);









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
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop_js__ = __webpack_require__(7);




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
/* 215 */
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
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit_js__ = __webpack_require__(35);





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
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(3);




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
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(3);




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
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicConformalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator_js__ = __webpack_require__(36);




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
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicEquidistantRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular_js__ = __webpack_require__(81);




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
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);


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
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equalEarthRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);



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
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gnomonicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(3);




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
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit_js__ = __webpack_require__(35);





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
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = naturalEarth1Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);



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
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = orthographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(3);




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
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform_js__ = __webpack_require__(22);




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
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = stereographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_js__ = __webpack_require__(3);




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
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transverseMercatorRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator_js__ = __webpack_require__(36);



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
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(83);



/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__select__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name).call(document.documentElement));
});


/***/ }),
/* 232 */
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
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(24);



/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  var event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(4);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(37);


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
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 238 */
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
/* 239 */
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
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(230);




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
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(42);


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
/* 243 */
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
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(4);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(82);



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
/* 247 */
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
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(40);



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
/* 249 */
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
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);


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
/* 252 */
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
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 254 */
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
/* 255 */
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
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 257 */
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
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(40);



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
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(87);



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
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);


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
/* 262 */
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
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(24);



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
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(24);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches) {
  if (touches == null) touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 265 */
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
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mergeArcs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stitch_js__ = __webpack_require__(90);



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
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = meshArcs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stitch_js__ = __webpack_require__(90);



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
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bisect_js__ = __webpack_require__(265);


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
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bbox_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__untransform_js__ = __webpack_require__(91);



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
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});


/***/ })
/******/ ]);