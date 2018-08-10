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
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["glance-external-ITKReader"],{

/***/ "./externals/ITKReader/index.js":
/*!**************************************!*\
  !*** ./externals/ITKReader/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.extensions = undefined;\nexports.registerToGlance = registerToGlance;\n\nvar _ITKImageReader = __webpack_require__(/*! vtk.js/Sources/IO/Misc/ITKImageReader */ \"./node_modules/vtk.js/Sources/IO/Misc/ITKImageReader/index.js\");\n\nvar _ITKImageReader2 = _interopRequireDefault(_ITKImageReader);\n\nvar _extensionToImageIO = __webpack_require__(/*! itk/extensionToImageIO */ \"./node_modules/itk/extensionToImageIO.js\");\n\nvar _extensionToImageIO2 = _interopRequireDefault(_extensionToImageIO);\n\nvar _readImageArrayBuffer = __webpack_require__(/*! itk/readImageArrayBuffer */ \"./node_modules/itk/readImageArrayBuffer.js\");\n\nvar _readImageArrayBuffer2 = _interopRequireDefault(_readImageArrayBuffer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_ITKImageReader2.default.setReadImageArrayBufferFromITK(_readImageArrayBuffer2.default);\n\nvar extensions = exports.extensions = Array.from(new Set(Object.keys(_extensionToImageIO2.default).map(function (ext) {\n  return ext.toLowerCase();\n})));\n\nfunction registerToGlance(Glance) {\n  if (Glance) {\n    extensions.forEach(function (extension) {\n      return Glance.registerReader({\n        extension: extension,\n        name: extension.toUpperCase() + ' Reader',\n        vtkReader: _ITKImageReader2.default,\n        binary: true,\n        fileNameMethod: 'setFileName'\n      });\n    });\n  }\n}\n\nexports.default = {\n  extensions: extensions,\n  registerToGlance: registerToGlance\n};\n\n\nvar Glance = (typeof window === 'undefined' ? {} : window).Glance;\nregisterToGlance(Glance);\n\n//# sourceURL=webpack:///./externals/ITKReader/index.js?");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ })

},[["./externals/ITKReader/index.js","runtime","vendors"]]]);
});