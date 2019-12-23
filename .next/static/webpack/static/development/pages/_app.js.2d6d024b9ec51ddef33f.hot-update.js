webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/actions/app.ts":
/*!****************************!*\
  !*** ./src/actions/app.ts ***!
  \****************************/
/*! exports provided: actions, setScrollTop, closeMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollTop", function() { return setScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMenu", function() { return closeMenu; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "./node_modules/typescript-fsa/lib/index.js");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);

//import { State } from '../reducers';
//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';
var actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()();
var actions = {
  setApp: actionCreator('SET_APP')
}; //
// Set ScrollTop
//

var setScrollTop = function setScrollTop(scrollTop) {
  return function (dispatch) {
    dispatch(actions.setApp({
      scrollTop: scrollTop
    }));
  };
};
var closeMenu = function closeMenu() {
  return function (dispatch) {
    dispatch(actions.setApp({
      open_menu: false
    }));
    document.body.classList.remove('open-menu');
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.2d6d024b9ec51ddef33f.hot-update.js.map