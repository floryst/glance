(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["glance-external-Workbox"],{

/***/ "./externals/Workbox/index.js":
/*!************************************!*\
  !*** ./externals/Workbox/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif ('serviceWorker' in navigator && document.location.protocol !== 'http:') {\n  window.addEventListener('load', function () {\n    navigator.serviceWorker.register('./serviceWorker.js').then(function (registration) {\n      console.log('Workbox service worker successful with scope:', registration.scope);\n    }).catch(function (error) {\n      console.error('Workbox service worker failed to register', error);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./externals/Workbox/index.js?");

/***/ })

},[["./externals/Workbox/index.js","runtime"]]]);
});