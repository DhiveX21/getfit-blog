/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n// Add Apollo Client to this file\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    uri: ` ${\"http://getfit-blog\"}/graphql`,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEVBQWlDO0FBQzJCO0FBRXJELEtBQUssQ0FBQ0UsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Ysd0RBQVksQ0FBQyxDQUFDO0lBQ3RDRyxHQUFHLEdBQUcsQ0FBQyxFQUFFQyxvQkFBeUMsQ0FBQyxRQUFRO0lBQzNERyxLQUFLLEVBQUUsR0FBRyxDQUFDTix5REFBYTtBQUMxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2Fwb2xsby5qcz9iYTUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFkZCBBcG9sbG8gQ2xpZW50IHRvIHRoaXMgZmlsZVxyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICB1cmk6IGAgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19XT1JEUFJFU1NfQVBJX1VSTH0vZ3JhcGhxbGAsXHJcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNsaWVudCIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19XT1JEUFJFU1NfQVBJX1VSTCIsImNhY2hlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/apollo.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/apollo */ \"./lib/apollo.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ \"react-dom/client\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// import \"../styles/wordpress.css\";\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"apolloProvider\", {\n        client: _lib_apollo__WEBPACK_IMPORTED_MODULE_2__.client,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\project ardhi\\\\getfit-blog\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            \";\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\project ardhi\\\\getfit-blog\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QjtBQUM1QixFQUFvQztBQUNFO0FBQ0k7U0FFakNFLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hDLENBQWM7UUFBQ0wsTUFBTSxFQUFFQSwrQ0FBTTs7d0ZBQzNCRyxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7WUFBSSxDQUM5Qjs7Ozs7OztBQUVKLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbi8vIGltcG9ydCBcIi4uL3N0eWxlcy93b3JkcHJlc3MuY3NzXCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL2Fwb2xsb1wiO1xuaW1wb3J0IGh5ZHJhdGVSb290IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxhcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuICAgIDwvYXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbImNsaWVudCIsImh5ZHJhdGVSb290IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG9Qcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "react-dom/client":
/*!***********************************!*\
  !*** external "react-dom/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();