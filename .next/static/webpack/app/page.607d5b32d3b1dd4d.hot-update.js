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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useFetchMovies\": function() { return /* binding */ useFetchMovies; },\n/* harmony export */   \"useFetchMoviesSwr\": function() { return /* binding */ useFetchMoviesSwr; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/useInfiniteQuery.mjs\");\n/* harmony import */ var swr_infinite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr/infinite */ \"./node_modules/swr/infinite/dist/index.mjs\");\n/* harmony import */ var _fetchFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchFunctions */ \"./api/fetchFunctions.ts\");\n\n\n// Fetch function\n\nconst useFetchMovies = (search)=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useInfiniteQuery)([\n        \"movies\",\n        search\n    ], (param)=>{\n        let { pageParam =1  } = param;\n        return (0,_fetchFunctions__WEBPACK_IMPORTED_MODULE_1__.fetchMovies)(search, pageParam);\n    }, {\n        /** if false, disable this query from automatically running. */ enabled: true,\n        /** if true, failed queries will retry infinitely. If set to a number,\n       *  failed queries will retry that number of times. By default,\n       *  queries are silently retried 3 times,\n       *  with exponential backoff delay before capturing and displaying an error to the UI.\n       */ retry: 2,\n        getNextPageParam: (lastPage)=>{\n            if (lastPage.page < lastPage.total_pages) {\n                return lastPage.page + 1;\n            }\n            return undefined;\n        },\n        refetchOnWindowFocus: false\n    });\n};\nconst useFetchMoviesSwr = (search, page)=>{\n    const getKey = (pageIndex, previousPageData)=>{\n        if (previousPageData && !previousPageData.length) return null; // reached the end\n        return \"/movies?page=\".concat(pageIndex); // SWR key\n    };\n    return (0,swr_infinite__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(()=>[\n            \"movies\",\n            search,\n            page\n        ], ()=>(0,_fetchFunctions__WEBPACK_IMPORTED_MODULE_1__.fetchMovieAxios)(search, page));\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvZmV0Y2hIb29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RDtBQUNmO0FBRzFDLGlCQUFpQjtBQUMrQztBQUl6RCxNQUFNSSxpQkFBaUIsQ0FBQ0MsU0FBbUI7SUFDaEQsT0FBT0wsdUVBQWdCQSxDQUNyQjtRQUFDO1FBQVVLO0tBQU8sRUFDbEIsU0FBdUJGO1lBQXRCLEVBQUVHLFdBQVksRUFBQyxFQUFFO2VBQUtILDREQUFXQSxDQUFDRSxRQUFRQztJQUFTLEdBQ3BEO1FBQ0UsNkRBQTZELEdBQzdEQyxTQUFTLElBQUk7UUFDYjs7OztPQUlDLEdBQ0RDLE9BQU87UUFFUEMsa0JBQWtCLENBQUNDLFdBQXFCO1lBQ3RDLElBQUlBLFNBQVNDLElBQUksR0FBR0QsU0FBU0UsV0FBVyxFQUFFO2dCQUN4QyxPQUFPRixTQUFTQyxJQUFJLEdBQUc7WUFDekIsQ0FBQztZQUVELE9BQU9FO1FBQ1Q7UUFDQUMsc0JBQXNCLEtBQUs7SUFDN0I7QUFFSixFQUFFO0FBQ0ssTUFBTUMsb0JBQW9CLENBQUNWLFFBQWdCTSxPQUFpQjtJQUNqRSxNQUFNSyxTQUErQixDQUFDQyxXQUFXQyxtQkFBcUI7UUFDcEUsSUFBSUEsb0JBQW9CLENBQUNBLGlCQUFpQkMsTUFBTSxFQUFFLE9BQU8sSUFBSSxFQUFFLGtCQUFrQjtRQUNqRixPQUFPLGdCQUEwQixPQUFWRixZQUFhLFVBQVU7SUFDaEQ7SUFDQSxPQUFPaEIsd0RBQWNBLENBQ25CLElBQU07WUFBQztZQUFVSTtZQUFRTTtTQUFLLEVBQzlCLElBQU1ULGdFQUFlQSxDQUFDRyxRQUFRTTtBQUVsQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwaS9mZXRjaEhvb2tzLnRzPzM5NzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlSW5maW5pdGVRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgdXNlU1dSSW5maW5pdGUgZnJvbSAnc3dyL2luZmluaXRlJztcbmltcG9ydCB7IFNXUkluZmluaXRlS2V5TG9hZGVyIH0gZnJvbSAnc3dyL2luZmluaXRlJztcblxuLy8gRmV0Y2ggZnVuY3Rpb25cbmltcG9ydCB7IGZldGNoTW92aWVBeGlvcywgZmV0Y2hNb3ZpZXMgfSBmcm9tICcuL2ZldGNoRnVuY3Rpb25zJztcbi8vIFR5cGVzXG5pbXBvcnQgeyBNb3ZpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZUZldGNoTW92aWVzID0gKHNlYXJjaDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB1c2VJbmZpbml0ZVF1ZXJ5PE1vdmllcywgRXJyb3I+KFxuICAgIFsnbW92aWVzJywgc2VhcmNoXSxcbiAgICAoeyBwYWdlUGFyYW0gPSAxIH0pID0+IGZldGNoTW92aWVzKHNlYXJjaCwgcGFnZVBhcmFtKSxcbiAgICB7XG4gICAgICAvKiogaWYgZmFsc2UsIGRpc2FibGUgdGhpcyBxdWVyeSBmcm9tIGF1dG9tYXRpY2FsbHkgcnVubmluZy4gKi9cbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAvKiogaWYgdHJ1ZSwgZmFpbGVkIHF1ZXJpZXMgd2lsbCByZXRyeSBpbmZpbml0ZWx5LiBJZiBzZXQgdG8gYSBudW1iZXIsXG4gICAgICAgKiAgZmFpbGVkIHF1ZXJpZXMgd2lsbCByZXRyeSB0aGF0IG51bWJlciBvZiB0aW1lcy4gQnkgZGVmYXVsdCxcbiAgICAgICAqICBxdWVyaWVzIGFyZSBzaWxlbnRseSByZXRyaWVkIDMgdGltZXMsXG4gICAgICAgKiAgd2l0aCBleHBvbmVudGlhbCBiYWNrb2ZmIGRlbGF5IGJlZm9yZSBjYXB0dXJpbmcgYW5kIGRpc3BsYXlpbmcgYW4gZXJyb3IgdG8gdGhlIFVJLlxuICAgICAgICovXG4gICAgICByZXRyeTogMixcblxuICAgICAgZ2V0TmV4dFBhZ2VQYXJhbTogKGxhc3RQYWdlOiBNb3ZpZXMpID0+IHtcbiAgICAgICAgaWYgKGxhc3RQYWdlLnBhZ2UgPCBsYXN0UGFnZS50b3RhbF9wYWdlcykge1xuICAgICAgICAgIHJldHVybiBsYXN0UGFnZS5wYWdlICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9LFxuICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgIH1cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgdXNlRmV0Y2hNb3ZpZXNTd3IgPSAoc2VhcmNoOiBzdHJpbmcsIHBhZ2U6IG51bWJlcikgPT4ge1xuICBjb25zdCBnZXRLZXk6IFNXUkluZmluaXRlS2V5TG9hZGVyID0gKHBhZ2VJbmRleCwgcHJldmlvdXNQYWdlRGF0YSkgPT4ge1xuICAgIGlmIChwcmV2aW91c1BhZ2VEYXRhICYmICFwcmV2aW91c1BhZ2VEYXRhLmxlbmd0aCkgcmV0dXJuIG51bGw7IC8vIHJlYWNoZWQgdGhlIGVuZFxuICAgIHJldHVybiBgL21vdmllcz9wYWdlPSR7cGFnZUluZGV4fWA7IC8vIFNXUiBrZXlcbiAgfTtcbiAgcmV0dXJuIHVzZVNXUkluZmluaXRlKFxuICAgICgpID0+IFsnbW92aWVzJywgc2VhcmNoLCBwYWdlXSxcbiAgICAoKSA9PiBmZXRjaE1vdmllQXhpb3Moc2VhcmNoLCBwYWdlKVxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VJbmZpbml0ZVF1ZXJ5IiwidXNlU1dSSW5maW5pdGUiLCJmZXRjaE1vdmllQXhpb3MiLCJmZXRjaE1vdmllcyIsInVzZUZldGNoTW92aWVzIiwic2VhcmNoIiwicGFnZVBhcmFtIiwiZW5hYmxlZCIsInJldHJ5IiwiZ2V0TmV4dFBhZ2VQYXJhbSIsImxhc3RQYWdlIiwicGFnZSIsInRvdGFsX3BhZ2VzIiwidW5kZWZpbmVkIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJ1c2VGZXRjaE1vdmllc1N3ciIsImdldEtleSIsInBhZ2VJbmRleCIsInByZXZpb3VzUGFnZURhdGEiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/fetchHooks.ts\n"));

/***/ })

});