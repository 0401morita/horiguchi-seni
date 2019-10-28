webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/actions/app.ts":
/*!****************************!*\
  !*** ./src/actions/app.ts ***!
  \****************************/
/*! exports provided: actions, setScrollTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScrollTop", function() { return setScrollTop; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "./node_modules/typescript-fsa/lib/index.js");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);
 //import { State } from '../reducers';
//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';

var actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()();
var actions = {
  setApp: actionCreator('SET_COMMON')
}; //
// Set ScrollTop
//

var setScrollTop = function setScrollTop() {
  return function (dispatch) {
    var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    dispatch(actions.setApp({
      scrollTop: scrollTop
    }));
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.8efa27a6d587ede0657f.hot-update.js.map