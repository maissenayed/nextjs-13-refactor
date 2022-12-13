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

/***/ "./app/SwrPage.tsx":
/*!*************************!*\
  !*** ./app/SwrPage.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_fetchHooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/fetchHooks */ \"./api/fetchHooks.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.ts\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header/Header */ \"./components/Header/Header.tsx\");\n/* harmony import */ var _components_Grid_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Grid/Grid */ \"./components/Grid/Grid.tsx\");\n/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card/Card */ \"./components/Card/Card.tsx\");\n/* harmony import */ var _components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Spinner/Spinner */ \"./components/Spinner/Spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n// Fetch hook\n\n// Config\n\n// Components\n\n\n\n\nconst HomePage = ()=>{\n    _s();\n    const [query, setQuery] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);\n    const { data , isLoading , error  } = (0,_api_fetchHooks__WEBPACK_IMPORTED_MODULE_3__.useFetchMoviesSwr)(query, page);\n    console.error(data);\n    const handleScroll = (e)=>{\n        const { scrollTop , clientHeight , scrollHeight  } = e.currentTarget;\n        if (scrollHeight - scrollTop === clientHeight) ()=>{};\n    };\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Oh noooooooo something went wrong!\"\n    }, void 0, false, {\n        fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n        lineNumber: 28,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main-element relative h-screen overflow-y-scroll\",\n        onScroll: handleScroll,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setQuery: setQuery\n            }, void 0, false, {\n                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Grid_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                className: \"p-4 max-w-7xl m-auto\",\n                title: query ? \"Search Results: \".concat(data === null || data === void 0 ? void 0 : data[0].total_results) : \"Popular Movies\",\n                children: data && (data === null || data === void 0 ? void 0 : data.length) > 0 ? data.map((page)=>page.results.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\".concat(movie.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cursor-pointer hover:opacity-80 duration-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    imgUrl: movie.poster_path ? _config__WEBPACK_IMPORTED_MODULE_4__.IMAGE_BASE_URL + _config__WEBPACK_IMPORTED_MODULE_4__.POSTER_SIZE + movie.poster_path : \"/no_image.jpg\",\n                                    title: movie.original_title\n                                }, void 0, false, {\n                                    fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 19\n                            }, undefined)\n                        }, movie.id, false, {\n                            fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined))) : null\n            }, void 0, false, {\n                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Spinner_Spinner__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n                lineNumber: 63,\n                columnNumber: 20\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maissenayed/Documents/nextjs-13-refactor/app/SwrPage.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"x6qdrZHm74Q2i9RZdNjyTXWI0rY=\", false, function() {\n    return [\n        _api_fetchHooks__WEBPACK_IMPORTED_MODULE_3__.useFetchMoviesSwr\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvU3dyUGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRTBCO0FBQ0c7QUFDN0IsYUFBYTtBQUN5RDtBQUN0RSxTQUFTO0FBQytDO0FBQ3hELGFBQWE7QUFDb0M7QUFFTjtBQUNBO0FBQ1M7QUFFcEQsTUFBTVMsV0FBVyxJQUFNOztJQUNyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1gscURBQWMsQ0FBQztJQUN6QyxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QscURBQWMsQ0FBQztJQUN2QyxNQUFNLEVBQUVlLEtBQUksRUFBRUMsVUFBUyxFQUFFQyxNQUFLLEVBQUUsR0FBR2Ysa0VBQWlCQSxDQUFDUSxPQUFPRztJQUM1REssUUFBUUQsS0FBSyxDQUFDRjtJQUVkLE1BQU1JLGVBQWUsQ0FBQ0MsSUFBa0M7UUFDdEQsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLGFBQVksRUFBRUMsYUFBWSxFQUFFLEdBQUdILEVBQUVJLGFBQWE7UUFFakUsSUFBSUQsZUFBZUYsY0FBY0MsY0FBYyxJQUFNLENBQUM7SUFDeEQ7SUFFQSxJQUFJTCxPQUFPLHFCQUFPLDhEQUFDUTtrQkFBSTs7Ozs7O0lBRXZCLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLFVBQVVUOzswQkFFViw4REFBQ2QsaUVBQU1BO2dCQUFDTSxVQUFVQTs7Ozs7OzBCQUNsQiw4REFBQ0wsNkRBQUlBO2dCQUNIcUIsV0FBVTtnQkFDVkUsT0FDRW5CLFFBQ0ksbUJBQTJDLE9BQXhCSyxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLElBQU0sQ0FBQyxFQUFFLENBQUNlLGFBQWEsSUFDMUMsZ0JBQWdCOzBCQUdyQmYsUUFBUUEsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNZ0IsTUFBTSxJQUFHLElBQ3BCaEIsS0FBS2lCLEdBQUcsQ0FBQyxDQUFDbkIsT0FDUkEsS0FBS29CLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLHNCQUNoQiw4REFBQ2pDLGtEQUFJQTs0QkFBZ0JrQyxNQUFNLElBQWEsT0FBVEQsTUFBTUUsRUFBRTtzQ0FDckMsNEVBQUNYO2dDQUFJRSxXQUFVOzBDQUNiLDRFQUFDcEIsNkRBQUlBO29DQUNIOEIsUUFDRUgsTUFBTUksV0FBVyxHQUNibkMsbURBQWNBLEdBQUdDLGdEQUFXQSxHQUFHOEIsTUFBTUksV0FBVyxHQUNoRCxlQUFlO29DQUVyQlQsT0FBT0ssTUFBTUssY0FBYzs7Ozs7Ozs7Ozs7MkJBUnRCTCxNQUFNRSxFQUFFOzs7OzBDQWN2QixJQUFJOzs7Ozs7WUFFVHBCLDBCQUFZLDhEQUFDUixtRUFBT0E7Ozs7NEJBQU0sSUFBSTs7Ozs7OztBQUdyQztHQWxETUM7O1FBRytCUCw4REFBaUJBOzs7S0FIaERPO0FBb0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Td3JQYWdlLnRzeD82OGE4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vLyBGZXRjaCBob29rXG5pbXBvcnQgeyB1c2VGZXRjaE1vdmllcywgdXNlRmV0Y2hNb3ZpZXNTd3IgfSBmcm9tICcuLi9hcGkvZmV0Y2hIb29rcyc7XG4vLyBDb25maWdcbmltcG9ydCB7IElNQUdFX0JBU0VfVVJMLCBQT1NURVJfU0laRSB9IGZyb20gJy4uL2NvbmZpZyc7XG4vLyBDb21wb25lbnRzXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcic7XG5cbmltcG9ydCBHcmlkIGZyb20gJy4uL2NvbXBvbmVudHMvR3JpZC9HcmlkJztcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC9DYXJkJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lci9TcGlubmVyJztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yIH0gPSB1c2VGZXRjaE1vdmllc1N3cihxdWVyeSwgcGFnZSk7XG4gIGNvbnNvbGUuZXJyb3IoZGF0YSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGU6IFJlYWN0LlVJRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBzY3JvbGxUb3AsIGNsaWVudEhlaWdodCwgc2Nyb2xsSGVpZ2h0IH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICBpZiAoc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsVG9wID09PSBjbGllbnRIZWlnaHQpICgpID0+IHt9O1xuICB9O1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+T2ggbm9vb29vb29vIHNvbWV0aGluZyB3ZW50IHdyb25nITwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBjbGFzc05hbWU9XCJtYWluLWVsZW1lbnQgcmVsYXRpdmUgaC1zY3JlZW4gb3ZlcmZsb3cteS1zY3JvbGxcIlxuICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cbiAgICA+XG4gICAgICA8SGVhZGVyIHNldFF1ZXJ5PXtzZXRRdWVyeX0gLz5cbiAgICAgIDxHcmlkXG4gICAgICAgIGNsYXNzTmFtZT1cInAtNCBtYXgtdy03eGwgbS1hdXRvXCJcbiAgICAgICAgdGl0bGU9e1xuICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICA/IGBTZWFyY2ggUmVzdWx0czogJHtkYXRhPy5bMF0udG90YWxfcmVzdWx0c31gXG4gICAgICAgICAgICA6ICdQb3B1bGFyIE1vdmllcydcbiAgICAgICAgfVxuICAgICAgPlxuICAgICAgICB7ZGF0YSAmJiBkYXRhPy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBkYXRhLm1hcCgocGFnZSkgPT5cbiAgICAgICAgICAgICAgcGFnZS5yZXN1bHRzLm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e21vdmllLmlkfSBocmVmPXtgLyR7bW92aWUuaWR9YH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyOm9wYWNpdHktODAgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgaW1nVXJsPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmllLnBvc3Rlcl9wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gSU1BR0VfQkFTRV9VUkwgKyBQT1NURVJfU0laRSArIG1vdmllLnBvc3Rlcl9wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJy9ub19pbWFnZS5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXttb3ZpZS5vcmlnaW5hbF90aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L0dyaWQ+XG4gICAgICB7aXNMb2FkaW5nID8gPFNwaW5uZXIgLz4gOiBudWxsfVxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZUZldGNoTW92aWVzU3dyIiwiSU1BR0VfQkFTRV9VUkwiLCJQT1NURVJfU0laRSIsIkhlYWRlciIsIkdyaWQiLCJDYXJkIiwiU3Bpbm5lciIsIkhvbWVQYWdlIiwicXVlcnkiLCJzZXRRdWVyeSIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJkYXRhIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU2Nyb2xsIiwiZSIsInNjcm9sbFRvcCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImN1cnJlbnRUYXJnZXQiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwib25TY3JvbGwiLCJ0aXRsZSIsInRvdGFsX3Jlc3VsdHMiLCJsZW5ndGgiLCJtYXAiLCJyZXN1bHRzIiwibW92aWUiLCJocmVmIiwiaWQiLCJpbWdVcmwiLCJwb3N0ZXJfcGF0aCIsIm9yaWdpbmFsX3RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/SwrPage.tsx\n"));

/***/ })

});