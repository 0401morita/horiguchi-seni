webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/reducers/app.ts":
/*!*****************************!*\
  !*** ./src/reducers/app.ts ***!
  \*****************************/
/*! exports provided: initialState, appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typescript-fsa-reducers */ "./node_modules/typescript-fsa-reducers/dist/index.js");
/* harmony import */ var typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/app */ "./src/actions/app.ts");



var initialState = {
  open_menu: false,
  scrollTop: 0,
  windows: {
    windowWidth: 0,
    windowHeight: 0
  }
};
var appReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__["reducerWithInitialState"])(initialState).case(_actions_app__WEBPACK_IMPORTED_MODULE_2__["actions"].setApp, function (state, data) {
  console.log('redicer', data);
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, data);
});

/***/ })

})
//# sourceMappingURL=_app.js.1b1fbba90dcaf5d37c82.hot-update.js.map