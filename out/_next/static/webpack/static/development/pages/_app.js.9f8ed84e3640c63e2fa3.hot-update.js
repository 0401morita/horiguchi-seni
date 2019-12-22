webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/actions/header.ts":
/*!*******************************!*\
  !*** ./src/actions/header.ts ***!
  \*******************************/
/*! exports provided: toggleMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "./node_modules/typescript-fsa/lib/index.js");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/actions/app.ts");

 //import { CommonState } from '../reducers/common';

var actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()(); //
// ToggleMenu
//

var toggleMenu = function toggleMenu() {
  return function (dispatch, getState) {
    dispatch(_app__WEBPACK_IMPORTED_MODULE_1__["actions"].setApp({
      open_menu: !getState().app.open_menu
    }));
    console.log(getState().app.open_menu);

    if (getState().app.open_menu) {
      document.body.classList.add('open-menu');
    } else {
      document.body.classList.remove('open-menu');
    }
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.9f8ed84e3640c63e2fa3.hot-update.js.map