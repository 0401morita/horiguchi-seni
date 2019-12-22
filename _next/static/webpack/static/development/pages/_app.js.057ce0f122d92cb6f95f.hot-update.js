webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/containers/header.ts":
/*!**********************************!*\
  !*** ./src/containers/header.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_shares_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shares/header */ "./src/components/shares/header.tsx");
/* harmony import */ var _actions_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/header */ "./src/actions/header.ts");




//
// Map State To Props
//
var mapStateToProps = function mapStateToProps(state) {
  return state.app;
}; //
// Map Dispatch To Props
//


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: function toggleMenu() {
      dispatch(Object(_actions_header__WEBPACK_IMPORTED_MODULE_2__["toggleMenu"])());
    }
  };
}; //
// Connect
//


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_components_shares_header__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

})
//# sourceMappingURL=_app.js.057ce0f122d92cb6f95f.hot-update.js.map