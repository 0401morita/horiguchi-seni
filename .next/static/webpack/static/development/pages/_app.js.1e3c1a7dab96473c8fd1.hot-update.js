webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/actions/wp.ts":
/*!***************************!*\
  !*** ./src/actions/wp.ts ***!
  \***************************/
/*! exports provided: actions, getWpPostBySlug, getWpPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWpPostBySlug", function() { return getWpPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWpPosts", function() { return getWpPosts; });
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typescript-fsa */ "./node_modules/typescript-fsa/lib/index.js");
/* harmony import */ var typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typescript_fsa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



//import { Dispatch } from 'redux';
//import { CommonState } from '../reducers/common';

/*
 * Action Setting
 */
var axios = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: 'https://wp.horiguchi-seni.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});
var actionCreator = typescript_fsa__WEBPACK_IMPORTED_MODULE_0___default()(); //
// Actions
//

var actions = {
  setWp: actionCreator('SET_WP'),
  setWpPost: actionCreator('SET_WP_POST'),
  setWpPosts: actionCreator('SET_WP_POSTS'),
  setWpPostsHeaders: actionCreator('SET_WP_POSTS_HEADERS')
}; //
// Get Post By Slug
//

var getWpPostBySlug = function getWpPostBySlug(slug) {
  return function (dispatch, getState) {
    axios.get("/wp-json/wp/v2/posts/?_embed&slug=".concat(slug)).then(function (_ref) {
      var status = _ref.status,
          data = _ref.data;

      if (status === 200 && data.length) {
        actions.setWpPost(data);
      }
    }).catch(function (_ref2) {
      var response = _ref2.response;
    });
  };
}; //
// Get Posts
//

var getWpPosts = function getWpPosts() {
  return function (dispatch, getState) {
    var url = '/wp-json/wp/v2/posts/?_embed';
    var search = location.search;
    var parseSearch = Object(query_string__WEBPACK_IMPORTED_MODULE_1__["parse"])(search);

    if (parseSearch.page) {
      url += '&' + Object(query_string__WEBPACK_IMPORTED_MODULE_1__["stringify"])(parseSearch);
    }

    dispatch(actions.setWp({
      isLoading: true,
      isError: false
    }));
    axios.get(url).then(function (res) {
      var status = res.status,
          data = res.data,
          headers = res.headers,
          config = res.config;

      if (status === 200 && data.length) {
        dispatch(actions.setWpPostsHeaders(headers));
        dispatch(actions.setWpPosts(data));
      }
    }).catch(function (res) {
      dispatch(actions.setWp({
        isError: true
      }));
    }).finally(function () {
      setTimeout(function () {
        dispatch(actions.setWp({
          isLoading: false
        }));
      }, 500);
    });
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.1e3c1a7dab96473c8fd1.hot-update.js.map