"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./api/fetchFunctions.ts":
/*!*******************************!*\
  !*** ./api/fetchFunctions.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"basicFetch\": function() { return /* binding */ basicFetch; },\n/* harmony export */   \"fetchMovieAxios\": function() { return /* binding */ fetchMovieAxios; },\n/* harmony export */   \"fetchMovies\": function() { return /* binding */ fetchMovies; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./config.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\nconst basicFetch = async (endpoint)=>{\n    const response = await fetch(endpoint);\n    if (!response.ok) throw new Error(\"Error!\");\n    const data = await response.json();\n    return data;\n};\n// Fetch functions\nconst fetchMovies = async function() {\n    let query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\", page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;\n    return await basicFetch(\"https://api.themoviedb.org/3/search/movie?api_key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.API_KEY, '&query=\"').concat(query, '\"&page=').concat(page, \"}\"));\n};\n// Fetch functions\nconst fetchMovieAxios = async function() {\n    let query = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\", page = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;\n    const res = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"search/movie?api_key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.API_KEY, '&query=\"').concat(query, '\"&page=').concat(page, \"}\"));\n    const data = res.data;\n    return data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZmV0Y2hGdW5jdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFFVjtBQUVuQixNQUFNRSxhQUFhLE9BQ3hCQyxXQUN3QjtJQUN4QixNQUFNQyxXQUFXLE1BQU1DLE1BQU1GO0lBRTdCLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFLE1BQU0sSUFBSUMsTUFBTSxVQUFVO0lBRTVDLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtJQUVoQyxPQUFPRDtBQUNULEVBQUU7QUFFRixrQkFBa0I7QUFDWCxNQUFNRSxjQUFjLGlCQUFpRDtRQUExQ0MseUVBQVEsSUFBSUMsd0VBQU87SUFDbkQsT0FBTyxNQUFNVixXQUNYLHFEQUF1RVMsT0FBbEJYLDRDQUFPQSxFQUFDLFlBQXlCWSxPQUFmRCxPQUFNLFdBQWMsT0FBTEMsTUFBSztBQUUvRixFQUFFO0FBRUYsa0JBQWtCO0FBQ1gsTUFBTUMsa0JBQWtCLGlCQUFnQztRQUF6QkYseUVBQVEsSUFBSUMsd0VBQU87SUFDdkQsTUFBTUUsTUFBTSxNQUFNYixpREFBUyxDQUN6Qix3QkFBMENVLE9BQWxCWCw0Q0FBT0EsRUFBQyxZQUF5QlksT0FBZkQsT0FBTSxXQUFjLE9BQUxDLE1BQUs7SUFFaEUsTUFBTUosT0FBT00sSUFBSU4sSUFBSTtJQUNyQixPQUFPQTtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2ZldGNoRnVuY3Rpb25zLnRzPzVmMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX0tFWSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBNb3ZpZXMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBiYXNpY0ZldGNoID0gYXN5bmMgPHJldHVyblR5cGU+KFxuICBlbmRwb2ludDogc3RyaW5nXG4pOiBQcm9taXNlPHJldHVyblR5cGU+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCdFcnJvciEnKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuLy8gRmV0Y2ggZnVuY3Rpb25zXG5leHBvcnQgY29uc3QgZmV0Y2hNb3ZpZXMgPSBhc3luYyAocXVlcnkgPSAnJywgcGFnZSA9IDEpOiBQcm9taXNlPE1vdmllcz4gPT4ge1xuICByZXR1cm4gYXdhaXQgYmFzaWNGZXRjaDxNb3ZpZXM+KFxuICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL3NlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0mcXVlcnk9XCIke3F1ZXJ5fVwiJnBhZ2U9JHtwYWdlfX1gXG4gICk7XG59O1xuXG4vLyBGZXRjaCBmdW5jdGlvbnNcbmV4cG9ydCBjb25zdCBmZXRjaE1vdmllQXhpb3MgPSBhc3luYyAocXVlcnkgPSAnJywgcGFnZSA9IDEpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0PE1vdmllcz4oXG4gICAgYHNlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0mcXVlcnk9XCIke3F1ZXJ5fVwiJnBhZ2U9JHtwYWdlfX1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuIl0sIm5hbWVzIjpbIkFQSV9LRVkiLCJheGlvcyIsImJhc2ljRmV0Y2giLCJlbmRwb2ludCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJmZXRjaE1vdmllcyIsInF1ZXJ5IiwicGFnZSIsImZldGNoTW92aWVBeGlvcyIsInJlcyIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/fetchFunctions.ts\n"));

/***/ })

});