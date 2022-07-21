"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 14:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx



function MyApp({ Component , pageProps  }) {
    return [
        /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
            children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Little Park"
            })
        }, 1),
        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }, 2),
        /*#__PURE__*/ jsx_runtime_.jsx("script", {
            defer: true,
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            "data-cf-beacon": "{\"token\": \"2b7391fd755e4282a739d4f1226db49f\"}"
        }, 3)
    ];
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(14));
module.exports = __webpack_exports__;

})();