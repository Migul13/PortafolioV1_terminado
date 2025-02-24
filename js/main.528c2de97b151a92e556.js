/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/styles/main.css":
/*!************************************!*\
  !*** ./src/assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://portafoliov2/./src/assets/styles/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/main.css */ \"./src/assets/styles/main.css\");\n\r\n/*\r\n\tEscape Velocity by HTML5 UP\r\n\thtml5up.net | @ajlkn\r\n\tFree for personal and commercial use under the CCA 3.0 license (html5up.net/license)\r\n*/\r\n\r\n(function($) {\r\n\r\n\tvar\t$window = $(window),\r\n\t\t$body = $('body');\r\n\r\n\t// Breakpoints.\r\n\t\tbreakpoints({\r\n\t\t\txlarge:  [ '1281px',  '1680px' ],\r\n\t\t\tlarge:   [ '981px',   '1280px' ],\r\n\t\t\tmedium:  [ '737px',   '980px'  ],\r\n\t\t\tsmall:   [ null,      '736px'  ]\r\n\t\t});\r\n\r\n\t// Play initial animations on page load.\r\n\t\t$window.on('load', function() {\r\n\t\t\twindow.setTimeout(function() {\r\n\t\t\t\t$body.removeClass('is-preload');\r\n\t\t\t}, 100);\r\n\t\t});\r\n\r\n\t// Dropdowns.\r\n\t\t$('#nav > ul').dropotron({\r\n\t\t\tmode: 'fade',\r\n\t\t\tnoOpenerFade: true,\r\n\t\t\talignment: 'center',\r\n\t\t\tdetach: false\r\n\t\t});\r\n\r\n\t// Nav.\r\n\r\n\t\t// Title Bar.\r\n\t\t\t$(\r\n\t\t\t\t'<div id=\"titleBar\">' +\r\n\t\t\t\t\t'<a href=\"#navPanel\" class=\"toggle\"></a>' +\r\n\t\t\t\t\t'<span class=\"title\">' + $('#logo h1').html() + '</span>' +\r\n\t\t\t\t'</div>'\r\n\t\t\t)\r\n\t\t\t\t.appendTo($body);\r\n\r\n\t\t// Panel.\r\n\t\t\t$(\r\n\t\t\t\t'<div id=\"navPanel\">' +\r\n\t\t\t\t\t'<nav>' +\r\n\t\t\t\t\t\t$('#nav').navList() +\r\n\t\t\t\t\t'</nav>' +\r\n\t\t\t\t'</div>'\r\n\t\t\t)\r\n\t\t\t\t.appendTo($body)\r\n\t\t\t\t.panel({\r\n\t\t\t\t\tdelay: 500,\r\n\t\t\t\t\thideOnClick: true,\r\n\t\t\t\t\thideOnSwipe: true,\r\n\t\t\t\t\tresetScroll: true,\r\n\t\t\t\t\tresetForms: true,\r\n\t\t\t\t\tside: 'left',\r\n\t\t\t\t\ttarget: $body,\r\n\t\t\t\t\tvisibleClass: 'navPanel-visible'\r\n\t\t\t\t});\r\n\r\n})(jQuery);\n\n//# sourceURL=webpack://portafoliov2/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;