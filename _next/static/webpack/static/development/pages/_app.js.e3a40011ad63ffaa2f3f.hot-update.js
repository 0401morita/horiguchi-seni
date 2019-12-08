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
/* harmony import */ var _actions_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/header */ "./src/actions/header.ts");



var initialState = {
  open_menu: false,
  scrollTop: 0,
  window: {
    width: 0,
    height: 0
  }
};
var appReducer = Object(typescript_fsa_reducers__WEBPACK_IMPORTED_MODULE_1__["reducerWithInitialState"])(initialState).case(_actions_header__WEBPACK_IMPORTED_MODULE_2__["actions"].setCommon, function (state, data) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, data);
});

/***/ })

})
//# sourceMappingURL=_app.js.e3a40011ad63ffaa2f3f.hot-update.js.map