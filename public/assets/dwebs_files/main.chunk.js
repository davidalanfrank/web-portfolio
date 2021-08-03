(this["webpackJsonpportfolio"] = this["webpackJsonpportfolio"] || []).push([
  ["main"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app.scss":
      /*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/app.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          true
        );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".app {\n  height: 100vh;\n}\n.app .sections {\n  width: 100%;\n  height: calc(100vh - 70px);\n  background-color: lightsalmon;\n  position: relative;\n  top: 70px;\n  scroll-behavior: smooth;\n  scroll-snap-type: y mandatory;\n  scrollbar-width: none;\n}\n.app .sections::-webkit-scrollbar {\n  display: none;\n}\n.app .sections > * {\n  width: 100%;\n  height: calc(100vh - 70px);\n  scroll-snap-align: start;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://src/app.scss"],
            names: [],
            mappings:
              "AAAA;EACE,aAAA;AACF;AACE;EACE,WAAA;EACA,0BAAA;EACA,6BAAA;EACA,kBAAA;EACA,SAAA;EACA,uBAAA;EACA,6BAAA;EACA,qBAAA;AACJ;AACI;EACE,aAAA;AACN;AACI;EACE,WAAA;EACA,0BAAA;EACA,wBAAA;AACN",
            sourcesContent: [
              ".app {\n  height: 100vh;\n\n  .sections {\n    width: 100%;\n    height: calc(100vh - 70px);\n    background-color: lightsalmon;\n    position: relative;\n    top: 70px;\n    scroll-behavior: smooth;\n    scroll-snap-type: y mandatory;\n    scrollbar-width: none; // Remove for firefox only\n    // Remove for other browsers\n    &::-webkit-scrollbar {\n      display: none;\n    }\n    > * {\n      width: 100%;\n      height: calc(100vh - 70px);\n      scroll-snap-align: start;\n    }\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/intro/intro.scss":
      /*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/intro/intro.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          true
        );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".intro {\n  background-color: white;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .intro {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.intro .left {\n  flex: 0.5 1;\n  overflow: hidden;\n}\n.intro .left .imgContainer {\n  width: 655px;\n  height: 655px;\n  background-color: crimson;\n  border-radius: 50%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  float: right;\n}\n@media (max-width: 768px) {\n  .intro .left .imgContainer {\n    align-items: flex-start;\n  }\n}\n.intro .left .imgContainer img {\n  height: 140%;\n  object-fit: cover;\n}\n@media (max-width: 768px) {\n  .intro .left .imgContainer img {\n    height: 70%;\n  }\n}\n.intro .right {\n  flex: 0.5 1;\n  position: relative;\n}\n.intro .right .wrapper {\n  width: 100%;\n  height: 100%;\n  padding-left: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .intro .right .wrapper {\n    padding-left: 0;\n    align-items: center;\n  }\n}\n.intro .right .wrapper h1 {\n  font-size: 60px;\n  margin: 10px 0;\n}\n@media (max-width: 768px) {\n  .intro .right .wrapper h1 {\n    font-size: 40px;\n  }\n}\n.intro .right .wrapper h2 {\n  font-size: 35px;\n}\n.intro .right .wrapper h3 {\n  font-size: 30px;\n}\n@media (max-width: 768px) {\n  .intro .right .wrapper h3 {\n    font-size: 20px;\n  }\n}\n.intro .right .wrapper h3 span {\n  font-size: inherit;\n  color: crimson;\n}\n.intro .right .wrapper h3 .ityped-cursor {\n  animation: blink 1s infinite;\n}\n@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.intro .right a {\n  position: absolute;\n  bottom: 10px;\n  left: 40%;\n}\n.intro .right a img {\n  width: 100px;\n  animation: arrowBlink 2s infinite;\n}\n@keyframes arrowBlink {\n  100% {\n    opacity: 0;\n  }\n}",
          "",
          {
            version: 3,
            sources: [
              "webpack://src/components/intro/intro.scss",
              "webpack://src/global.scss",
            ],
            names: [],
            mappings:
              "AAEA;EACE,uBAAA;EACA,aAAA;AADF;ACEE;EDHF;IAKI,sBAAA;IACA,mBAAA;EAAF;AACF;AAEE;EACE,WAAA;EACA,gBAAA;AAAJ;AAEI;EACE,YAAA;EACA,aAAA;EAEA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,YAAA;AADN;AClBE;EDUE;IAYI,uBAAA;EAAN;AACF;AAEM;EACE,YAAA;EACA,iBAAA;AAAR;AC3BE;EDyBI;IAKI,WAAA;EACR;AACF;AAGE;EACE,WAAA;EACA,kBAAA;AADJ;AAGI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AADN;AC5CE;EDuCE;IASI,eAAA;IACA,mBAAA;EAAN;AACF;AAEM;EACE,eAAA;EACA,cAAA;AAAR;ACtDE;EDoDI;IAKI,eAAA;EACR;AACF;AACM;EACE,eAAA;AACR;AACM;EACE,eAAA;AACR;ACjEE;ED+DI;IAII,eAAA;EAER;AACF;AAAQ;EACE,kBAAA;EACA,cAAA;AAEV;AACQ;EACE,4BAAA;AACV;AAEQ;EACE;IACE,UAAA;EAAV;EAEQ;IACE,UAAA;EAAV;AACF;AAII;EACE,kBAAA;EACA,YAAA;EACA,SAAA;AAFN;AAIM;EACE,YAAA;EACA,iCAAA;AAFR;AAKM;EACE;IACE,UAAA;EAHR;AACF",
            sourcesContent: [
              '@import "../../global.scss";\n\n.intro {\n  background-color: white;\n  display: flex;\n\n  @include mobile {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .left {\n    flex: 0.5;\n    overflow: hidden;\n\n    .imgContainer {\n      width: 655px;\n      height: 655px;\n\n      background-color: crimson;\n      border-radius: 50%;\n      display: flex;\n      align-items: flex-end;\n      justify-content: center;\n      float: right;\n\n      @include mobile {\n        align-items: flex-start;\n      }\n\n      img {\n        height: 140%;\n        object-fit: cover;\n\n        @include mobile {\n          height: 70%;\n        }\n      }\n    }\n  }\n  .right {\n    flex: 0.5;\n    position: relative;\n\n    .wrapper {\n      width: 100%;\n      height: 100%;\n      padding-left: 50px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n\n      @include mobile {\n        padding-left: 0;\n        align-items: center;\n      }\n\n      h1 {\n        font-size: 60px;\n        margin: 10px 0;\n\n        @include mobile {\n          font-size: 40px;\n        }\n      }\n      h2 {\n        font-size: 35px;\n      }\n      h3 {\n        font-size: 30px;\n\n        @include mobile {\n          font-size: 20px;\n        }\n\n        span {\n          font-size: inherit;\n          color: crimson;\n        }\n\n        .ityped-cursor {\n          animation: blink 1s infinite;\n        }\n\n        @keyframes blink {\n          50% {\n            opacity: 1;\n          }\n          100% {\n            opacity: 0;\n          }\n        }\n      }\n    }\n    a {\n      position: absolute;\n      bottom: 10px;\n      left: 40%;\n\n      img {\n        width: 100px;\n        animation: arrowBlink 2s infinite;\n      }\n\n      @keyframes arrowBlink {\n        100% {\n          opacity: 0;\n        }\n      }\n    }\n  }\n}\n',
              "$mainColor: purple;\n\n$width: 768px;\n\n@mixin mobile {\n  @media (max-width: #{$width}) {\n    @content;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/menu/menu.scss":
      /*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/menu/menu.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          true
        );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".menu {\n  width: 300px;\n  height: 100vh;\n  background-color: purple;\n  position: fixed;\n  top: 0;\n  right: -300px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all 1s ease;\n}\n.menu.active {\n  right: 0;\n}\n.menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 30px;\n  font-weight: 300;\n  color: white;\n  width: 60%;\n}\n.menu li {\n  margin-bottom: 25px;\n}\n.menu li a {\n  font-size: inherit;\n  color: inherit;\n  text-decoration: none;\n}\n.menu li:hover {\n  font-weight: 400;\n}",
          "",
          {
            version: 3,
            sources: [
              "webpack://src/components/menu/menu.scss",
              "webpack://src/global.scss",
            ],
            names: [],
            mappings:
              "AAEA;EACE,YAAA;EACA,aAAA;EACA,wBCLU;EDMV,eAAA;EACA,MAAA;EACA,aAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,uBAAA;AADF;AAGE;EACE,QAAA;AADJ;AAIE;EACE,SAAA;EACA,UAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,YAAA;EACA,UAAA;AAFJ;AAKE;EACE,mBAAA;AAHJ;AAII;EACE,kBAAA;EACA,cAAA;EACA,qBAAA;AAFN;AAKI;EACE,gBAAA;AAHN",
            sourcesContent: [
              '@import "../../global.scss";\n\n.menu {\n  width: 300px;\n  height: 100vh;\n  background-color: $mainColor;\n  position: fixed;\n  top: 0;\n  right: -300px;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: all 1s ease;\n\n  &.active {\n    right: 0;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    font-size: 30px;\n    font-weight: 300;\n    color: white;\n    width: 60%;\n  }\n\n  li {\n    margin-bottom: 25px;\n    a {\n      font-size: inherit;\n      color: inherit;\n      text-decoration: none;\n    }\n\n    &:hover {\n      font-weight: 400;\n    }\n  }\n}\n',
              "$mainColor: purple;\n\n$width: 768px;\n\n@mixin mobile {\n  @media (max-width: #{$width}) {\n    @content;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolio/portfolio.scss":
      /*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/portfolio/portfolio.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          true
        );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          '.portfolio {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.portfolio h1 {\n  font-size: 50px;\n}\n@media (max-width: 768px) {\n  .portfolio h1 {\n    font-size: 20px;\n  }\n}\n.portfolio ul {\n  margin: 10px;\n  padding: 0;\n  list-style: none;\n  display: flex;\n}\n@media (max-width: 768px) {\n  .portfolio ul {\n    margin: 10px 0;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n.portfolio ul li {\n  font-size: 14px;\n  margin-right: 50px;\n  padding: 7px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.portfolio ul li.active {\n  background-color: purple;\n  color: white;\n}\n.portfolio .container {\n  display: flex;\n  width: 100%;\n  height: 70%;\n}\n.portfolio .container .left {\n  flex: 1 1;\n  overflow: hidden;\n  text-align: left;\n  padding-top: 20px;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.portfolio .container .left .buttonContainer {\n  padding-top: 100px;\n}\n.portfolio .container .left .buttonContainer button {\n  width: 100px;\n  height: 28px;\n  color: white;\n  align-content: flex-end;\n  font-weight: bold;\n  background-color: crimson;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.portfolio .container .left .buttonContainer .divider {\n  width: 5px;\n  height: auto;\n  display: inline-block;\n}\n.portfolio .container .left h2 {\n  padding-bottom: 10px;\n}\n.portfolio .container .left h3 {\n  font-weight: 20;\n  color: lightgrey;\n  font-family: "Roboto Mono", monospace;\n  padding-bottom: 10px;\n}\n.portfolio .container .left img {\n  height: 100%;\n}\n.portfolio .container .left body {\n  line-height: 1.6;\n}\n.portfolio .container .right {\n  flex: 1 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-left: 3px solid #f8f8f8;\n}\n@media (max-width: 768px) {\n  .portfolio .container .right {\n    display: none;\n  }\n}\n.portfolio .container .right .imgContainer img {\n  width: 90%;\n  border-radius: 10%;\n}\n.portfolio .container .right h2 {\n  font-size: 30px;\n}',
          "",
          {
            version: 3,
            sources: [
              "webpack://src/components/portfolio/portfolio.scss",
              "webpack://src/global.scss",
            ],
            names: [],
            mappings:
              "AAEA;EACE,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AADF;AAEE;EACE,eAAA;AAAJ;ACHE;EDEA;IAII,eAAA;EACJ;AACF;AAEE;EACE,YAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;AAAJ;ACdE;EDUA;IAOI,cAAA;IACA,eAAA;IACA,uBAAA;EACJ;AACF;AACI;EACE,eAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;AACN;AACM;EACE,wBCnCI;EDoCJ,YAAA;AACR;AAGE;EACE,aAAA;EACA,WAAA;EACA,WAAA;AADJ;AAGI;EACE,SAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBAAA;AADN;AAGM;EAkBE,kBAAA;AAlBR;AACQ;EACE,YAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,iBAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EAEA,eAAA;AAAV;AAEQ;EACE,UAAA;EACA,YAAA;EACA,qBAAA;AAAV;AAKM;EACE,oBAAA;AAHR;AAKM;EACE,eAAA;EACA,gBAAA;EACA,qCAAA;EACA,oBAAA;AAHR;AAKM;EACE,YAAA;AAHR;AAKM;EACE,gBAAA;AAHR;AAMI;EACE,SAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,8BAAA;AAJN;ACvFE;EDqFE;IASI,aAAA;EAHN;AACF;AAMQ;EACE,UAAA;EACA,kBAAA;AAJV;AAQM;EACE,eAAA;AANR",
            sourcesContent: [
              '@import "../../global.scss";\n\n.portfolio {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  h1 {\n    font-size: 50px;\n\n    @include mobile {\n      font-size: 20px;\n    }\n  }\n\n  ul {\n    margin: 10px;\n    padding: 0;\n    list-style: none;\n    display: flex;\n\n    @include mobile {\n      margin: 10px 0;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n\n    li {\n      font-size: 14px;\n      margin-right: 50px;\n      padding: 7px;\n      border-radius: 10px;\n      cursor: pointer;\n\n      &.active {\n        background-color: $mainColor;\n        color: white;\n      }\n    }\n  }\n  .container {\n    display: flex;\n    width: 100%;\n    height: 70%;\n\n    .left {\n      flex: 1;\n      overflow: hidden;\n      text-align: left;\n      padding-top: 20px;\n      padding-left: 5%;\n      padding-right: 5%;\n\n      .buttonContainer {\n        button {\n          width: 100px;\n          height: 28px;\n          color: white;\n          align-content: flex-end;\n          font-weight: bold;\n          background-color: crimson;\n          border: none;\n          border-radius: 5px;\n\n          cursor: pointer;\n        }\n        .divider {\n          width: 5px;\n          height: auto;\n          display: inline-block;\n        }\n        padding-top: 100px;\n      }\n\n      h2 {\n        padding-bottom: 10px;\n      }\n      h3 {\n        font-weight: 20;\n        color: lightgrey;\n        font-family: "Roboto Mono", monospace;\n        padding-bottom: 10px;\n      }\n      img {\n        height: 100%;\n      }\n      body {\n        line-height: 1.6;\n      }\n    }\n    .right {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      border-left: 3px solid #f8f8f8;\n\n      @include mobile {\n        display: none;\n      }\n\n      .imgContainer {\n        img {\n          width: 90%;\n          border-radius: 10%;\n        }\n      }\n\n      h2 {\n        font-size: 30px;\n      }\n    }\n  }\n}\n',
              "$mainColor: purple;\n\n$width: 768px;\n\n@mixin mobile {\n  @media (max-width: #{$width}) {\n    @content;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolioList/portfolioList.scss":
      /*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/portfolioList/portfolioList.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          true
        );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".portfolioList {\n  font-size: 14px;\n  margin-right: 50px;\n  padding: 7px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.portfolioList.active {\n  background-color: purple;\n  color: white;\n}",
          "",
          {
            version: 3,
            sources: [
              "webpack://src/components/portfolioList/portfolioList.scss",
              "webpack://src/global.scss",
            ],
            names: [],
            mappings:
              "AACA;EACE,eAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;AAAF;AAEE;EACE,wBCTQ;EDUR,YAAA;AAAJ",
            sourcesContent: [
              '@import "../../global.scss";\n.portfolioList {\n  font-size: 14px;\n  margin-right: 50px;\n  padding: 7px;\n  border-radius: 10px;\n  cursor: pointer;\n\n  &.active {\n    background-color: $mainColor;\n    color: white;\n  }\n}\n',
              "$mainColor: purple;\n\n$width: 768px;\n\n@mixin mobile {\n  @media (max-width: #{$width}) {\n    @content;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/topbar/topbar.scss":
      /*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/components/topbar/topbar.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
        );
        // Imports

        var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
          true
        );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          ".topbar {\n  width: 100%;\n  height: 70px;\n  background-color: white;\n  color: purple;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  transition: all 1s ease;\n}\n.topbar .wrapper {\n  padding: 10px 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.topbar .wrapper a {\n  color: inherit;\n  text-decoration: none;\n}\n.topbar .wrapper .left {\n  display: flex;\n  align-items: center;\n}\n.topbar .wrapper .left .logo {\n  font-size: 40px;\n  font-weight: 1000;\n  text-decoration: none;\n  color: inherit;\n  margin-right: 40px;\n}\n.topbar .wrapper .left .itemContainer {\n  display: flex;\n  align-items: center;\n  color: inherit;\n  margin-left: 30px;\n}\n@media (max-width: 768px) {\n  .topbar .wrapper .left .itemContainer {\n    display: none;\n  }\n}\n.topbar .wrapper .left .itemContainer .icon {\n  font-size: 25px;\n  margin-right: 4px;\n}\n.topbar .wrapper .left .itemContainer span {\n  font-size: 15px;\n  font-weight: 500;\n}\n.topbar .wrapper .right .hamburger {\n  width: 32px;\n  height: 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  cursor: pointer;\n}\n.topbar .wrapper .right .hamburger span {\n  width: 100%;\n  height: 3px;\n  background-color: purple;\n  transform-origin: left;\n  transition: all 2s ease;\n}\n.topbar.active {\n  background-color: purple;\n  color: white;\n}\n.topbar.active .hamburger span:first-child {\n  background-color: white;\n  transform: rotate(45deg);\n}\n.topbar.active .hamburger span:nth-child(2) {\n  opacity: 0;\n}\n.topbar.active .hamburger span:last-child {\n  background-color: white;\n  transform: rotate(-45deg);\n}",
          "",
          {
            version: 3,
            sources: [
              "webpack://src/components/topbar/topbar.scss",
              "webpack://src/global.scss",
            ],
            names: [],
            mappings:
              "AAEA;EACE,WAAA;EACA,YAAA;EACA,uBAAA;EACA,aCNU;EDOV,eAAA;EACA,MAAA;EACA,UAAA;EACA,uBAAA;AADF;AAEE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;AAAJ;AACI;EACE,cAAA;EACA,qBAAA;AACN;AACI;EACE,aAAA;EACA,mBAAA;AACN;AACM;EACE,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AACR;AACM;EACE,aAAA;EACA,mBAAA;EACA,cAAA;EACA,iBAAA;AACR;AC/BE;ED0BI;IAOI,aAAA;EAER;AACF;AAAQ;EACE,eAAA;EACA,iBAAA;AAEV;AAAQ;EACE,eAAA;EACA,gBAAA;AAEV;AAGM;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,eAAA;AADR;AAGQ;EACE,WAAA;EACA,WAAA;EACA,wBC/DE;EDgEF,sBAAA;EACA,uBAAA;AADV;AAOE;EACE,wBCxEQ;EDyER,YAAA;AALJ;AAQQ;EACE,uBAAA;EACA,wBAAA;AANV;AAQQ;EACE,UAAA;AANV;AASQ;EACE,uBAAA;EACA,yBAAA;AAPV",
            sourcesContent: [
              '@import "../../global.scss";\n\n.topbar {\n  width: 100%;\n  height: 70px;\n  background-color: white;\n  color: $mainColor;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  transition: all 1s ease;\n  .wrapper {\n    padding: 10px 30px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    a {\n      color: inherit;\n      text-decoration: none;\n    }\n    .left {\n      display: flex;\n      align-items: center;\n\n      .logo {\n        font-size: 40px;\n        font-weight: 1000;\n        text-decoration: none;\n        color: inherit;\n        margin-right: 40px;\n      }\n      .itemContainer {\n        display: flex;\n        align-items: center;\n        color: inherit;\n        margin-left: 30px;\n\n        @include mobile {\n          display: none;\n        }\n\n        .icon {\n          font-size: 25px;\n          margin-right: 4px;\n        }\n        span {\n          font-size: 15px;\n          font-weight: 500;\n        }\n      }\n    }\n    .right {\n      .hamburger {\n        width: 32px;\n        height: 25px;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        cursor: pointer;\n\n        span {\n          width: 100%;\n          height: 3px;\n          background-color: $mainColor;\n          transform-origin: left;\n          transition: all 2s ease;\n        }\n      }\n    }\n  }\n\n  &.active {\n    background-color: $mainColor;\n    color: white;\n    .hamburger {\n      span {\n        &:first-child {\n          background-color: white;\n          transform: rotate(45deg);\n        }\n        &:nth-child(2) {\n          opacity: 0;\n        }\n\n        &:last-child {\n          background-color: white;\n          transform: rotate(-45deg);\n        }\n      }\n    }\n  }\n}\n',
              "$mainColor: purple;\n\n$width: 768px;\n\n@mixin mobile {\n  @media (max-width: #{$width}) {\n    @content;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./src/App.jsx":
      /*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ "./node_modules/react/index.js"
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _components_topbar_Topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./components/topbar/Topbar */ "./src/components/topbar/Topbar.jsx"
          );
          /* harmony import */ var _components_intro_Intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./components/intro/Intro */ "./src/components/intro/Intro.jsx"
          );
          /* harmony import */ var _components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./components/portfolio/Portfolio */ "./src/components/portfolio/Portfolio.jsx"
          );
          /* harmony import */ var _components_menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./components/menu/Menu */ "./src/components/menu/Menu.jsx"
          );
          /* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./app.scss */ "./src/app.scss"
          );
          /* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            _app_scss__WEBPACK_IMPORTED_MODULE_5__
          );
          /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/davidwebster/portfolio/portfolio/src/App.jsx",
            _s = __webpack_require__.$Refresh$.signature();

          function App() {
            _s();

            const [menuOpen, setMenuOpen] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )(false);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
            )(
              "div",
              {
                className: "app",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                  )(
                    _components_topbar_Topbar__WEBPACK_IMPORTED_MODULE_1__[
                      "default"
                    ],
                    {
                      menuOpen: menuOpen,
                      setMenuOpen: setMenuOpen,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 15,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                  )(
                    _components_menu_Menu__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ],
                    {
                      menuOpen: menuOpen,
                      setMenuOpen: setMenuOpen,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 16,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "sections",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                            "jsxDEV"
                          ]
                        )(
                          _components_intro_Intro__WEBPACK_IMPORTED_MODULE_2__[
                            "default"
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 18,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                            "jsxDEV"
                          ]
                        )(
                          _components_portfolio_Portfolio__WEBPACK_IMPORTED_MODULE_3__[
                            "default"
                          ],
                          {},
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 19,
                            columnNumber: 9,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                  )(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_6__[
                      "BrowserRouter"
                    ],
                    {
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                          "jsxDEV"
                        ]
                      )(
                        react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"],
                        {
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                "jsxDEV"
                              ]
                            )(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_6__[
                                "Route"
                              ],
                              {
                                path: "/login",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 24,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                "jsxDEV"
                              ]
                            )(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_6__[
                                "Route"
                              ],
                              {
                                path: "/result",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 25,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                                "jsxDEV"
                              ]
                            )(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_6__[
                                "Route"
                              ],
                              {
                                path: "/register",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 26,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 23,
                          columnNumber: 9,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 22,
                      columnNumber: 7,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 5,
              },
              this
            );
          }

          _s(App, "K77eQVFAaxZgbvGoNWFAiCE7OTY=");

          _c = App;
          /* harmony default export */ __webpack_exports__["default"] = App;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "App");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/app.scss":
      /*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app.scss"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app.scss",
              function () {
                content = __webpack_require__(
                  /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./app.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app.scss"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/components/intro/Intro.jsx":
      /*!****************************************!*\
  !*** ./src/components/intro/Intro.jsx ***!
  \****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return Intro;
            }
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ "./node_modules/react/index.js"
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _intro_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./intro.scss */ "./src/components/intro/intro.scss"
          );
          /* harmony import */ var _intro_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            _intro_scss__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var ityped__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ityped */ "./node_modules/ityped/src/index.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/davidwebster/portfolio/portfolio/src/components/intro/Intro.jsx",
            _s = __webpack_require__.$Refresh$.signature();

          function Intro() {
            _s();

            const textRef = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useRef"]
            )(); // useE ffect will work only once due to the empty array

            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              Object(ityped__WEBPACK_IMPORTED_MODULE_2__["init"])(
                textRef.current,
                {
                  showCursor: true,
                  backDelay: 1500,
                  backSpeed: 80,
                  strings: [
                    "Software Developer",
                    "Machine learning enthusiast",
                  ],
                }
              );
              console.log(textRef);
            }, []);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: "intro",
                id: "intro",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "left",
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "imgContainer",
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                              "jsxDEV"
                            ]
                          )(
                            "img",
                            {
                              src: "assets/david_bgrm.png",
                              alt: "dwebs",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 20,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                          columnNumber: 9,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: "right",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: "wrapper",
                            children: [
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                  "jsxDEV"
                                ]
                              )(
                                "h2",
                                {
                                  children: "Hi there, i'm",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 25,
                                  columnNumber: 11,
                                },
                                this
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                  "jsxDEV"
                                ]
                              )(
                                "h1",
                                {
                                  children: "David Webster",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 26,
                                  columnNumber: 11,
                                },
                                this
                              ),
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                  "jsxDEV"
                                ]
                              )(
                                "h3",
                                {
                                  children: /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "span",
                                    {
                                      ref: textRef,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 28,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 27,
                                  columnNumber: 11,
                                },
                                this
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 24,
                            columnNumber: 9,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                            "jsxDEV"
                          ]
                        )(
                          "a",
                          {
                            href: "#portfolio",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                                "jsxDEV"
                              ]
                            )(
                              "img",
                              {
                                src: "assets/down.png",
                                alt: "",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 32,
                                columnNumber: 11,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 31,
                            columnNumber: 9,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 7,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 5,
              },
              this
            );
          }

          _s(Intro, "03a/W9zemG2g1Vmhz2i1tulxw6U=");

          _c = Intro;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Intro");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/intro/intro.scss":
      /*!*****************************************!*\
  !*** ./src/components/intro/intro.scss ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./intro.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/intro/intro.scss"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./intro.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/intro/intro.scss",
              function () {
                content = __webpack_require__(
                  /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./intro.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/intro/intro.scss"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/components/menu/Menu.jsx":
      /*!**************************************!*\
  !*** ./src/components/menu/Menu.jsx ***!
  \**************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return Menu;
            }
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ "./node_modules/react/index.js"
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./menu.scss */ "./src/components/menu/menu.scss"
          );
          /* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            _menu_scss__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/davidwebster/portfolio/portfolio/src/components/menu/Menu.jsx";

          function Menu({ menuOpen, setMenuOpen }) {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                className: "menu " + (menuOpen && "active"),
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                )(
                  "ul",
                  {
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                          "jsxDEV"
                        ]
                      )(
                        "li",
                        {
                          onClick: () => setMenuOpen(false),
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "a",
                            {
                              href: "#intro",
                              children: " Home",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 9,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 8,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                          "jsxDEV"
                        ]
                      )(
                        "li",
                        {
                          onClick: () => setMenuOpen(false),
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "a",
                            {
                              href: "#portfolio",
                              children: "Projects",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 12,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 11,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                          "jsxDEV"
                        ]
                      )(
                        "li",
                        {
                          onClick: () => setMenuOpen(false),
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "a",
                            {
                              href: "#works",
                              children: " Works",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 15,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 14,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                          "jsxDEV"
                        ]
                      )(
                        "li",
                        {
                          onClick: () => setMenuOpen(false),
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "a",
                            {
                              href: "#testimonials",
                              children: " Testimonials",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 18,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 17,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                          "jsxDEV"
                        ]
                      )(
                        "li",
                        {
                          onClick: () => setMenuOpen(false),
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            "a",
                            {
                              href: "#contact",
                              children: " Contact",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 21,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 20,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 7,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 6,
                columnNumber: 5,
              },
              this
            );
          }
          _c = Menu;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Menu");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/menu/menu.scss":
      /*!***************************************!*\
  !*** ./src/components/menu/menu.scss ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./menu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/menu/menu.scss"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./menu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/menu/menu.scss",
              function () {
                content = __webpack_require__(
                  /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./menu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/menu/menu.scss"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/components/portfolio/Portfolio.jsx":
      /*!************************************************!*\
  !*** ./src/components/portfolio/Portfolio.jsx ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return Portfolio;
            }
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ "./node_modules/react/index.js"
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _portfolio_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./portfolio.scss */ "./src/components/portfolio/portfolio.scss"
          );
          /* harmony import */ var _portfolio_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            _portfolio_scss__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _portfolioList_PortfolioList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ../portfolioList/PortfolioList */ "./src/components/portfolioList/PortfolioList.jsx"
          );
          /* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ../../data */ "./src/data.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/davidwebster/portfolio/portfolio/src/components/portfolio/Portfolio.jsx",
            _s = __webpack_require__.$Refresh$.signature();

          function Portfolio() {
            _s();

            const [selected, setSelected] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )("capstone");
            const [data, setData] = Object(
              react__WEBPACK_IMPORTED_MODULE_0__["useState"]
            )([]);
            const list = [
              {
                id: "capstone",
                title: "Capstone",
              },
              {
                id: "bbsystem",
                title: "Billboard System",
              },
              {
                id: "stocks",
                title: "Stocks Client",
              },
              {
                id: "dustygarage",
                title: "dusty Garage",
              },
              {
                id: "videorentalsystem",
                title: "Video Rental System",
              },
            ];
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              switch (selected) {
                case "capstone":
                  setData(
                    _data__WEBPACK_IMPORTED_MODULE_3__["capstonePortfolio"]
                  );
                  break;

                case "bbsystem":
                  setData(
                    _data__WEBPACK_IMPORTED_MODULE_3__["bbsystemPortfolio"]
                  );
                  break;

                case "stocks":
                  setData(
                    _data__WEBPACK_IMPORTED_MODULE_3__["stocksPortfolio"]
                  );
                  break;

                case "dustygarage":
                  setData(
                    _data__WEBPACK_IMPORTED_MODULE_3__["dustygaragePortfolio"]
                  );
                  break;

                case "videorentalsystem":
                  setData(
                    _data__WEBPACK_IMPORTED_MODULE_3__[
                      "videorentalsystemPortfolio"
                    ]
                  );
                  break;

                default:
                  setData(
                    _data__WEBPACK_IMPORTED_MODULE_3__["capstonePortfolio"]
                  );
              }
            }, [selected]);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                className: "portfolio",
                id: "portfolio",
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "h1",
                    {
                      children: "Projects",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 61,
                      columnNumber: 7,
                    },
                    this
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "ul",
                    {
                      children: list.map((item) =>
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                            "jsxDEV"
                          ]
                        )(
                          _portfolioList_PortfolioList__WEBPACK_IMPORTED_MODULE_2__[
                            "default"
                          ],
                          {
                            title: item.title,
                            active: selected === item.id,
                            setSelected: setSelected,
                            id: item.id,
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 64,
                            columnNumber: 11,
                          },
                          this
                        )
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 7,
                    },
                    this
                  ),
                  data.map((d) =>
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: "container",
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "left",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "h2",
                                  {
                                    children: d.title,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 75,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "h3",
                                  {
                                    children: d.tech,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 76,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "body",
                                  {
                                    children: d.desc,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 77,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "buttonContainer",
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "a",
                                        {
                                          href: d.see_more,
                                          children: /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                              "jsxDEV"
                                            ]
                                          )(
                                            "button",
                                            {
                                              className: "button",
                                              children: "More details",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 81,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 80,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "div",
                                        {
                                          className: "divider",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 83,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "a",
                                        {
                                          href: d.code,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                              "jsxDEV"
                                            ]
                                          )(
                                            "button",
                                            {
                                              className: "button",
                                              children: "View Code",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 85,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 84,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "div",
                                        {
                                          className: "divider",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 88,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "a",
                                        {
                                          href: d.demo,
                                          target: "_blank",
                                          rel: "noopener noreferrer",
                                          children: /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                              "jsxDEV"
                                            ]
                                          )(
                                            "button",
                                            {
                                              className: "button",
                                              children: "See Demo",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 90,
                                              columnNumber: 17,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 89,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 79,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 74,
                              columnNumber: 11,
                            },
                            this
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "right",
                              children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                  "jsxDEV"
                                ]
                              )(
                                "div",
                                {
                                  className: "imgContainer",
                                  children: /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "img",
                                    {
                                      src: d.img,
                                      alt: "relating to the selected project",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 97,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 96,
                                  columnNumber: 13,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 95,
                              columnNumber: 11,
                            },
                            this
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 73,
                        columnNumber: 9,
                      },
                      this
                    )
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 5,
              },
              this
            );
          }

          _s(Portfolio, "v0syozw63Y40Cz1O7Vnm9mcWx/0=");

          _c = Portfolio;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Portfolio");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/portfolio/portfolio.scss":
      /*!*************************************************!*\
  !*** ./src/components/portfolio/portfolio.scss ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./portfolio.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolio/portfolio.scss"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./portfolio.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolio/portfolio.scss",
              function () {
                content = __webpack_require__(
                  /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./portfolio.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolio/portfolio.scss"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/components/portfolioList/PortfolioList.jsx":
      /*!********************************************************!*\
  !*** ./src/components/portfolioList/PortfolioList.jsx ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return PortfolioList;
            }
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ "./node_modules/react/index.js"
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _portfolioList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./portfolioList.scss */ "./src/components/portfolioList/portfolioList.scss"
          );
          /* harmony import */ var _portfolioList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            _portfolioList_scss__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/davidwebster/portfolio/portfolio/src/components/portfolioList/PortfolioList.jsx";

          function PortfolioList({ id, title, active, setSelected }) {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "li",
              {
                className: active ? "portfolioList active" : "portfolioList",
                onClick: () => setSelected(id),
                children: title,
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 6,
                columnNumber: 5,
              },
              this
            );
          }
          _c = PortfolioList;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "PortfolioList");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/portfolioList/portfolioList.scss":
      /*!*********************************************************!*\
  !*** ./src/components/portfolioList/portfolioList.scss ***!
  \*********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./portfolioList.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolioList/portfolioList.scss"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./portfolioList.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolioList/portfolioList.scss",
              function () {
                content = __webpack_require__(
                  /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./portfolioList.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/portfolioList/portfolioList.scss"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/components/topbar/Topbar.jsx":
      /*!******************************************!*\
  !*** ./src/components/topbar/Topbar.jsx ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return Topbar;
            }
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ "./node_modules/react/index.js"
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var _topbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./topbar.scss */ "./src/components/topbar/topbar.scss"
          );
          /* harmony import */ var _topbar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            _topbar_scss__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js"
          );
          /* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js"
          );
          /* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/davidwebster/portfolio/portfolio/src/components/topbar/Topbar.jsx";

          function Topbar({ menuOpen, setMenuOpen }) {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                className: "topbar " + (menuOpen && "active"),
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "wrapper",
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "left",
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                "jsxDEV"
                              ]
                            )(
                              "a",
                              {
                                href: "#intro",
                                className: "logo",
                                children: "dwebs.",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 11,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                "jsxDEV"
                              ]
                            )(
                              "a",
                              {
                                href: "https://github.com/davidalanfrank/",
                                className: "icon",
                                children: /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: "itemContainer",
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a,
                                        {
                                          className: "icon",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 16,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        "span",
                                        {
                                          children: "Github",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 18,
                                          columnNumber: 15,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 15,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 14,
                                columnNumber: 11,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: "itemContainer",
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__[
                                      "Mail"
                                    ],
                                    {
                                      className: "icon",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 23,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "span",
                                    {
                                      children: "davidfrankwebster@gmail.com",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 24,
                                      columnNumber: 13,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 22,
                                columnNumber: 11,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 10,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: "right",
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: "hamburger",
                              onClick: () => setMenuOpen(!menuOpen),
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "span",
                                  {
                                    className: "line1",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 29,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "span",
                                  {
                                    className: "line2",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 30,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "span",
                                  {
                                    className: "line3",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 31,
                                    columnNumber: 13,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 28,
                              columnNumber: 11,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 27,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 9,
                    columnNumber: 7,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 8,
                columnNumber: 5,
              },
              this
            );
          }
          _c = Topbar;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Topbar");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/topbar/topbar.scss":
      /*!*******************************************!*\
  !*** ./src/components/topbar/topbar.scss ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./topbar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/topbar/topbar.scss"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./topbar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/topbar/topbar.scss",
              function () {
                content = __webpack_require__(
                  /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./topbar.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/topbar/topbar.scss"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/data.js":
      /*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
      /*! exports provided: capstonePortfolio, bbsystemPortfolio, stocksPortfolio, dustygaragePortfolio, videorentalsystemPortfolio */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "capstonePortfolio",
            function () {
              return capstonePortfolio;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "bbsystemPortfolio",
            function () {
              return bbsystemPortfolio;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "stocksPortfolio",
            function () {
              return stocksPortfolio;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "dustygaragePortfolio",
            function () {
              return dustygaragePortfolio;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "videorentalsystemPortfolio",
            function () {
              return videorentalsystemPortfolio;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const capstonePortfolio = [
            {
              id: 1,
              title: "Anti-Fraud system for Queensland Police",
              tech: "React, Azure, Node.js, NGNIX, Python, MariaDB",
              desc:
                "The lives of tens of thousands of Australians each year are destroyed by online fraudsters using text-based communication to manipulate them into sending money. This takes place across many forms of frauds and exploits the vulnerabilities of people communicating in an online environment where their life learnt skills of assessing a person’s body language is not available. ",
              img: "../assets/rfsa_green.png",
              code: "https://github.com/davidalanfrank/",
              demo: "https://github.com/davidalanfrank/",
              see_more: "https://github.com/davidalanfrank/",
            },
          ];
          const bbsystemPortfolio = [
            {
              id: 2,
              title: "Electronic Billboard Management System",
              tech: "Java, MariaDB",
              desc:
                "The setup this corporation wants is three software applications, all connected via a network. One application, henceforth referred to as the Billboard Viewer, is a GUI application that will actually display the contents, filling the screen. It will connect to the Billboard Server, which acts as the central control hub for all billboard viewers connected to it. The server will not be a GUI application and users will not interact with it directly. Instead, users will run a second client program, the Billboard Control Panel. This will be a GUI application that will connect to the server and allow the user to carry out various management tasks, such as changing which billboards are shown at which times. The server will store its information in a MariaDB database.",
              img: "../assets/billboard_image.png",
              code: "https://github.com/davidalanfrank/",
              demo: "#intro",
              see_more: "https://github.com/davidalanfrank/",
            },
          ];
          const stocksPortfolio = [
            {
              id: 3,
              title: "Stock Market Client",
              tech: "React, Nodejs",
              desc:
                "The dataset consists stock market data drawn from an American exchange from November 2019 through to March 2020. The more precise dates are given below in the format that you will use in subsequent queries: from2019-11-06 to 2020-03-2 We will all work with the same data, but we reserve the right to update our database with additional records prior to marking your assignments, so please don’t be tempted to hard code your responses.",
              img: "../assets/stocks-client.png",
              code: "https://github.com/davidalanfrank/",
              demo: "#intro",
              see_more: "https://github.com/davidalanfrank/",
            },
          ];
          const dustygaragePortfolio = [
            {
              id: 4,
              title: "The dusty Garage",
              tech: "Python, Flask, Heroku, SQLite",
              desc:
                "Develop the front-end pages. The HTML you develop are not functional pages: they are pages with static content wired together. ii. Use HTML and Bootstrap components to give structure and style to the content of the marketplace. You do not need to use any programming language to implement the prototype.",
              img: "../assets/dgm.png",
              code: "https://github.com/davidalanfrank/",
              demo: "https://dustygarage1.herokuapp.com/",
              see_more: "https://github.com/davidalanfrank/",
            },
          ];
          const videorentalsystemPortfolio = [
            {
              id: 5,
              title: "Video Rental System",
              tech: "Java",
              desc:
                "TThe community library lends movie DVDs to its members. The information about a movie includes title, starring, director, duration, genre, classification, and release date. The genre of a movie may be Drama, Adventure, Family, Action, Sci-Fi, Comedy, Animated, Thriller, or Other. A movie is classified as General (G), Parental Guidance (PG), Mature (M15+), or Mature Accompanied (MA15+). The community library may have multiple DVDs of the same movie.",
              img: "../assets/video_rental_system.png",
              code: "https://github.com/davidalanfrank/",
              demo: "#intro",
              see_more: "https://github.com/davidalanfrank/",
            },
          ];

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! react */ "./node_modules/react/index.js"
          );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! react-dom */ "./node_modules/react-dom/index.js"
          );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            react_dom__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./App */ "./src/App.jsx"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
          );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/davidwebster/portfolio/portfolio/src/index.js";

          react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
            /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode,
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                )(
                  _App__WEBPACK_IMPORTED_MODULE_2__["default"],
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 7,
                    columnNumber: 5,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 6,
                columnNumber: 3,
              },
              undefined
            ),
            document.getElementById("root")
          );

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ 1:
      /*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/davidwebster/portfolio/portfolio/node_modules/webpack/hot/dev-server.js */ "./node_modules/webpack/hot/dev-server.js"
        );
        __webpack_require__(
          /*! /Users/davidwebster/portfolio/portfolio/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"
        );
        __webpack_require__(
          /*! /Users/davidwebster/portfolio/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */ "./node_modules/react-dev-utils/webpackHotDevClient.js"
        );
        module.exports = __webpack_require__(
          /*! /Users/davidwebster/portfolio/portfolio/src/index.js */ "./src/index.js"
        );

        /***/
      },
  },
  [[1, "runtime-main", "vendors~main"]],
]);
//# sourceMappingURL=main.chunk.js.map
