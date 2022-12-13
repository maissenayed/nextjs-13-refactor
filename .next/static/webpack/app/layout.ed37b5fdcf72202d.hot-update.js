"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "./wrappers/ReduxWrapper/store.ts":
/*!****************************************!*\
  !*** ./wrappers/ReduxWrapper/store.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"moviesApi\": function() { return /* binding */ moviesApi; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ \"./config.ts\");\n\n\nconst moviesApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({\n    reducerPath: \"Movies api\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_2__.fetchBaseQuery)({\n        baseUrl: \"https://api.themoviedb.org/3/\"\n    }),\n    tagTypes: [\n        \"Movies\"\n    ],\n    endpoints: (builder)=>({\n            search: builder.query({\n                query (param) {\n                    let { query =\" \" , page =1  } = param;\n                    return {\n                        url: \"search/movie?api_key=\".concat(_config__WEBPACK_IMPORTED_MODULE_0__.API_KEY, '&query=\"').concat(query, '\"&page=').concat(page, \"}\"),\n                        method: \"GET\"\n                    };\n                },\n                providesTags: [\n                    {\n                        type: \"Movies\",\n                        id: \"LIST\"\n                    }\n                ]\n            })\n        })\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93cmFwcGVycy9SZWR1eFdyYXBwZXIvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5RTtBQUNsQztBQUVoQyxNQUFNRyxZQUFZSCx1RUFBU0EsQ0FBQztJQUNqQ0ksYUFBYTtJQUNiQyxXQUFXSiw0RUFBY0EsQ0FBQztRQUFFSyxTQUFTO0lBQWdDO0lBQ3JFQyxVQUFVO1FBQUM7S0FBUztJQUNwQkMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyxRQUFRRCxRQUFRRSxLQUFLLENBQTBDO2dCQUM3REEsT0FBTSxLQUF5QixFQUFFO3dCQUEzQixFQUFFQSxPQUFRLElBQUcsRUFBRUMsTUFBTyxFQUFDLEVBQUUsR0FBekI7b0JBQ0osT0FBTzt3QkFDTEMsS0FBSyx3QkFBMENGLE9BQWxCVCw0Q0FBT0EsRUFBQyxZQUF5QlUsT0FBZkQsT0FBTSxXQUFjLE9BQUxDLE1BQUs7d0JBQ25FRSxRQUFRO29CQUNWO2dCQUNGO2dCQUNBQyxjQUFjO29CQUFDO3dCQUFFQyxNQUFNO3dCQUFVQyxJQUFJO29CQUFPO2lCQUFFO1lBQ2hEO1FBQ0Y7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3dyYXBwZXJzL1JlZHV4V3JhcHBlci9zdG9yZS50cz8yMTkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vdmllLCBNb3ZpZXMgfSBmcm9tICcuLi8uLi9hcGkvdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlQXBpLCBmZXRjaEJhc2VRdWVyeSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnkvcmVhY3QnO1xuaW1wb3J0IHsgQVBJX0tFWSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBtb3ZpZXNBcGkgPSBjcmVhdGVBcGkoe1xuICByZWR1Y2VyUGF0aDogJ01vdmllcyBhcGknLFxuICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDogJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvJyB9KSxcbiAgdGFnVHlwZXM6IFsnTW92aWVzJ10sXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgc2VhcmNoOiBidWlsZGVyLnF1ZXJ5PE1vdmllcywgeyBxdWVyeTogc3RyaW5nOyBwYWdlOiBudW1iZXIgfT4oe1xuICAgICAgcXVlcnkoeyBxdWVyeSA9ICcgJywgcGFnZSA9IDEgfSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybDogYHNlYXJjaC9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0mcXVlcnk9XCIke3F1ZXJ5fVwiJnBhZ2U9JHtwYWdlfX1gLFxuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgcHJvdmlkZXNUYWdzOiBbeyB0eXBlOiAnTW92aWVzJywgaWQ6ICdMSVNUJyB9XSxcbiAgICB9KSxcbiAgfSksXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIkFQSV9LRVkiLCJtb3ZpZXNBcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJ0YWdUeXBlcyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJzZWFyY2giLCJxdWVyeSIsInBhZ2UiLCJ1cmwiLCJtZXRob2QiLCJwcm92aWRlc1RhZ3MiLCJ0eXBlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./wrappers/ReduxWrapper/store.ts\n"));

/***/ })

});