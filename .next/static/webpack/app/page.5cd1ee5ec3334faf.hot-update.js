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

/***/ "./api/fetchHooks.ts":
/*!***************************!*\
  !*** ./api/fetchHooks.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useFetchMovies\": function() { return /* binding */ useFetchMovies; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs\");\n/* harmony import */ var _fetchFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchFunctions */ \"./api/fetchFunctions.ts\");\n\n// Fetch function\n\nconst useFetchMovies = (search)=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery)([\n        \"movies\",\n        search\n    ], (param)=>{\n        let { pageParam =1  } = param;\n        return (0,_fetchFunctions__WEBPACK_IMPORTED_MODULE_0__.fetchMovieAxios)(search, pageParam);\n    }, {\n        /** if false, disable this query from automatically running. */ enabled: false,\n        /** if true, failed queries will retry infinitely. If set to a number, failed queries will retry that number of times. By default, queries are silently retried 3 times, with exponential backoff delay before capturing and displaying an error to the UI. */ retry: 2,\n        getNextPageParam: (lastPage)=>{\n            if (lastPage.page < lastPage.total_pages) {\n                return lastPage.page + 1;\n            }\n            return undefined;\n        },\n        refetchOnWindowFocus: false\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZmV0Y2hIb29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUQ7QUFDekQsaUJBQWlCO0FBQytDO0FBSXpELE1BQU1FLGlCQUFpQixDQUFDQyxTQUFtQjtJQUNoRCxPQUFPSCx1RUFBZ0JBLENBQ3JCO1FBQUM7UUFBVUc7S0FBTyxFQUNsQixTQUF1QkY7WUFBdEIsRUFBRUcsV0FBWSxFQUFDLEVBQUU7ZUFBS0gsZ0VBQWVBLENBQUNFLFFBQVFDO0lBQVMsR0FDeEQ7UUFDRSw2REFBNkQsR0FDN0RDLFNBQVMsS0FBSztRQUNkLDRQQUE0UCxHQUM1UEMsT0FBTztRQUVQQyxrQkFBa0IsQ0FBQ0MsV0FBcUI7WUFDdEMsSUFBSUEsU0FBU0MsSUFBSSxHQUFHRCxTQUFTRSxXQUFXLEVBQUU7Z0JBQ3hDLE9BQU9GLFNBQVNDLElBQUksR0FBRztZQUN6QixDQUFDO1lBRUQsT0FBT0U7UUFDVDtRQUNBQyxzQkFBc0IsS0FBSztJQUM3QjtBQUVKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL2ZldGNoSG9va3MudHM/Mzk3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VJbmZpbml0ZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5Jztcbi8vIEZldGNoIGZ1bmN0aW9uXG5pbXBvcnQgeyBmZXRjaE1vdmllQXhpb3MsIGZldGNoTW92aWVzIH0gZnJvbSAnLi9mZXRjaEZ1bmN0aW9ucyc7XG4vLyBUeXBlc1xuaW1wb3J0IHsgTW92aWVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VGZXRjaE1vdmllcyA9IChzZWFyY2g6IHN0cmluZykgPT4ge1xuICByZXR1cm4gdXNlSW5maW5pdGVRdWVyeTxNb3ZpZXMsIEVycm9yPihcbiAgICBbJ21vdmllcycsIHNlYXJjaF0sXG4gICAgKHsgcGFnZVBhcmFtID0gMSB9KSA9PiBmZXRjaE1vdmllQXhpb3Moc2VhcmNoLCBwYWdlUGFyYW0pLFxuICAgIHtcbiAgICAgIC8qKiBpZiBmYWxzZSwgZGlzYWJsZSB0aGlzIHF1ZXJ5IGZyb20gYXV0b21hdGljYWxseSBydW5uaW5nLiAqL1xuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICAvKiogaWYgdHJ1ZSwgZmFpbGVkIHF1ZXJpZXMgd2lsbCByZXRyeSBpbmZpbml0ZWx5LiBJZiBzZXQgdG8gYSBudW1iZXIsIGZhaWxlZCBxdWVyaWVzIHdpbGwgcmV0cnkgdGhhdCBudW1iZXIgb2YgdGltZXMuIEJ5IGRlZmF1bHQsIHF1ZXJpZXMgYXJlIHNpbGVudGx5IHJldHJpZWQgMyB0aW1lcywgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmIGRlbGF5IGJlZm9yZSBjYXB0dXJpbmcgYW5kIGRpc3BsYXlpbmcgYW4gZXJyb3IgdG8gdGhlIFVJLiAqL1xuICAgICAgcmV0cnk6IDIsXG5cbiAgICAgIGdldE5leHRQYWdlUGFyYW06IChsYXN0UGFnZTogTW92aWVzKSA9PiB7XG4gICAgICAgIGlmIChsYXN0UGFnZS5wYWdlIDwgbGFzdFBhZ2UudG90YWxfcGFnZXMpIHtcbiAgICAgICAgICByZXR1cm4gbGFzdFBhZ2UucGFnZSArIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSxcbiAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICB9XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUluZmluaXRlUXVlcnkiLCJmZXRjaE1vdmllQXhpb3MiLCJ1c2VGZXRjaE1vdmllcyIsInNlYXJjaCIsInBhZ2VQYXJhbSIsImVuYWJsZWQiLCJyZXRyeSIsImdldE5leHRQYWdlUGFyYW0iLCJsYXN0UGFnZSIsInBhZ2UiLCJ0b3RhbF9wYWdlcyIsInVuZGVmaW5lZCIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./api/fetchHooks.ts\n"));

/***/ })

});