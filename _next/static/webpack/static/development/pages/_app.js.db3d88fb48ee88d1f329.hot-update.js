webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/actions/header.ts":
/*!*******************************!*\
  !*** ./src/actions/header.ts ***!
  \*******************************/
/*! exports provided: actions, toggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "./node_modules/typescript-fsa/lib/index.js");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);

//import { CommonState } from '../reducers/common';
var actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()();
var actions = {
  setCommon: actionCreator('SET_COMMON')
}; //
// ToggleMenu
//

var toggleMenu = function toggleMenu() {
  return function (dispatch, getState) {
    dispatch(actions.setCommon({
      open_menu: !getState().app.open_menu
    }));

    if (getState().common.open_menu) {
      document.body.classList.add('open-menu');
    } else {
      document.body.classList.remove('open-menu');
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.db3d88fb48ee88d1f329.hot-update.js.map