!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var t=n();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(window,function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{293:function(e,n){},340:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.extensions=void 0,n.registerToGlance=d;var o=f(t(310)),r=f(t(339)),i=f(t(315));function f(e){return e&&e.__esModule?e:{default:e}}o.default.setReadImageArrayBufferFromITK(i.default);var a=n.extensions=Array.from(new Set(Object.keys(r.default).map(function(e){return e.toLowerCase()})));function d(e){e&&a.forEach(function(n){return e.registerReader({extension:n,name:n.toUpperCase()+" Reader",vtkReader:o.default,binary:!0,fileNameMethod:"setFileName"})})}n.default={extensions:a,registerToGlance:d},d(("undefined"==typeof window?{}:window).Glance)}},[[340,0,1]]])});