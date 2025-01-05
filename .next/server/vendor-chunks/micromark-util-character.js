"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-character";
exports.ids = ["vendor-chunks/micromark-util-character"];
exports.modules = {

/***/ "(ssr)/./node_modules/micromark-util-character/dev/index.js":
/*!************************************************************!*\
  !*** ./node_modules/micromark-util-character/dev/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asciiAlpha: () => (/* binding */ asciiAlpha),\n/* harmony export */   asciiAlphanumeric: () => (/* binding */ asciiAlphanumeric),\n/* harmony export */   asciiAtext: () => (/* binding */ asciiAtext),\n/* harmony export */   asciiControl: () => (/* binding */ asciiControl),\n/* harmony export */   asciiDigit: () => (/* binding */ asciiDigit),\n/* harmony export */   asciiHexDigit: () => (/* binding */ asciiHexDigit),\n/* harmony export */   asciiPunctuation: () => (/* binding */ asciiPunctuation),\n/* harmony export */   markdownLineEnding: () => (/* binding */ markdownLineEnding),\n/* harmony export */   markdownLineEndingOrSpace: () => (/* binding */ markdownLineEndingOrSpace),\n/* harmony export */   markdownSpace: () => (/* binding */ markdownSpace),\n/* harmony export */   unicodePunctuation: () => (/* binding */ unicodePunctuation),\n/* harmony export */   unicodeWhitespace: () => (/* binding */ unicodeWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(ssr)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/**\n * @import {Code} from 'micromark-util-types'\n */\n\n\n\n/**\n * Check whether the character code represents an ASCII alpha (`a` through `z`,\n * case insensitive).\n *\n * An **ASCII alpha** is an ASCII upper alpha or ASCII lower alpha.\n *\n * An **ASCII upper alpha** is a character in the inclusive range U+0041 (`A`)\n * to U+005A (`Z`).\n *\n * An **ASCII lower alpha** is a character in the inclusive range U+0061 (`a`)\n * to U+007A (`z`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiAlpha = regexCheck(/[A-Za-z]/)\n\n/**\n * Check whether the character code represents an ASCII alphanumeric (`a`\n * through `z`, case insensitive, or `0` through `9`).\n *\n * An **ASCII alphanumeric** is an ASCII digit (see `asciiDigit`) or ASCII alpha\n * (see `asciiAlpha`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiAlphanumeric = regexCheck(/[\\dA-Za-z]/)\n\n/**\n * Check whether the character code represents an ASCII atext.\n *\n * atext is an ASCII alphanumeric (see `asciiAlphanumeric`), or a character in\n * the inclusive ranges U+0023 NUMBER SIGN (`#`) to U+0027 APOSTROPHE (`'`),\n * U+002A ASTERISK (`*`), U+002B PLUS SIGN (`+`), U+002D DASH (`-`), U+002F\n * SLASH (`/`), U+003D EQUALS TO (`=`), U+003F QUESTION MARK (`?`), U+005E\n * CARET (`^`) to U+0060 GRAVE ACCENT (`` ` ``), or U+007B LEFT CURLY BRACE\n * (`{`) to U+007E TILDE (`~`).\n *\n * See:\n * **\\[RFC5322]**:\n * [Internet Message Format](https://tools.ietf.org/html/rfc5322).\n * P. Resnick.\n * IETF.\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiAtext = regexCheck(/[#-'*+\\--9=?A-Z^-~]/)\n\n/**\n * Check whether a character code is an ASCII control character.\n *\n * An **ASCII control** is a character in the inclusive range U+0000 NULL (NUL)\n * to U+001F (US), or U+007F (DEL).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction asciiControl(code) {\n  return (\n    // Special whitespace codes (which have negative values), C0 and Control\n    // character DEL\n    code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.del)\n  )\n}\n\n/**\n * Check whether the character code represents an ASCII digit (`0` through `9`).\n *\n * An **ASCII digit** is a character in the inclusive range U+0030 (`0`) to\n * U+0039 (`9`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiDigit = regexCheck(/\\d/)\n\n/**\n * Check whether the character code represents an ASCII hex digit (`a` through\n * `f`, case insensitive, or `0` through `9`).\n *\n * An **ASCII hex digit** is an ASCII digit (see `asciiDigit`), ASCII upper hex\n * digit, or an ASCII lower hex digit.\n *\n * An **ASCII upper hex digit** is a character in the inclusive range U+0041\n * (`A`) to U+0046 (`F`).\n *\n * An **ASCII lower hex digit** is a character in the inclusive range U+0061\n * (`a`) to U+0066 (`f`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiHexDigit = regexCheck(/[\\dA-Fa-f]/)\n\n/**\n * Check whether the character code represents ASCII punctuation.\n *\n * An **ASCII punctuation** is a character in the inclusive ranges U+0021\n * EXCLAMATION MARK (`!`) to U+002F SLASH (`/`), U+003A COLON (`:`) to U+0040 AT\n * SIGN (`@`), U+005B LEFT SQUARE BRACKET (`[`) to U+0060 GRAVE ACCENT\n * (`` ` ``), or U+007B LEFT CURLY BRACE (`{`) to U+007E TILDE (`~`).\n *\n * @param code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nconst asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/)\n\n/**\n * Check whether a character code is a markdown line ending.\n *\n * A **markdown line ending** is the virtual characters M-0003 CARRIAGE RETURN\n * LINE FEED (CRLF), M-0004 LINE FEED (LF) and M-0005 CARRIAGE RETURN (CR).\n *\n * In micromark, the actual character U+000A LINE FEED (LF) and U+000D CARRIAGE\n * RETURN (CR) are replaced by these virtual characters depending on whether\n * they occurred together.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownLineEnding(code) {\n  return code !== null && code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab\n}\n\n/**\n * Check whether a character code is a markdown line ending (see\n * `markdownLineEnding`) or markdown space (see `markdownSpace`).\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownLineEndingOrSpace(code) {\n  return code !== null && (code < micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.nul || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space)\n}\n\n/**\n * Check whether a character code is a markdown space.\n *\n * A **markdown space** is the concrete character U+0020 SPACE (SP) and the\n * virtual characters M-0001 VIRTUAL SPACE (VS) and M-0002 HORIZONTAL TAB (HT).\n *\n * In micromark, the actual character U+0009 CHARACTER TABULATION (HT) is\n * replaced by one M-0002 HORIZONTAL TAB (HT) and between 0 and 3 M-0001 VIRTUAL\n * SPACE (VS) characters, depending on the column at which the tab occurred.\n *\n * @param {Code} code\n *   Code.\n * @returns {boolean}\n *   Whether it matches.\n */\nfunction markdownSpace(code) {\n  return (\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.horizontalTab ||\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.virtualSpace ||\n    code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.space\n  )\n}\n\n// Size note: removing ASCII from the regex and using `asciiPunctuation` here\n// In fact adds to the bundle size.\n/**\n * Check whether the character code represents Unicode punctuation.\n *\n * A **Unicode punctuation** is a character in the Unicode `Pc` (Punctuation,\n * Connector), `Pd` (Punctuation, Dash), `Pe` (Punctuation, Close), `Pf`\n * (Punctuation, Final quote), `Pi` (Punctuation, Initial quote), `Po`\n * (Punctuation, Other), or `Ps` (Punctuation, Open) categories, or an ASCII\n * punctuation (see `asciiPunctuation`).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst unicodePunctuation = regexCheck(/\\p{P}|\\p{S}/u)\n\n/**\n * Check whether the character code represents Unicode whitespace.\n *\n * Note that this does handle micromark specific markdown whitespace characters.\n * See `markdownLineEndingOrSpace` to check that.\n *\n * A **Unicode whitespace** is a character in the Unicode `Zs` (Separator,\n * Space) category, or U+0009 CHARACTER TABULATION (HT), U+000A LINE FEED (LF),\n * U+000C (FF), or U+000D CARRIAGE RETURN (CR) (**\\[UNICODE]**).\n *\n * See:\n * **\\[UNICODE]**:\n * [The Unicode Standard](https://www.unicode.org/versions/).\n * Unicode Consortium.\n *\n * @param code\n *   Code.\n * @returns\n *   Whether it matches.\n */\nconst unicodeWhitespace = regexCheck(/\\s/)\n\n/**\n * Create a code check from a regex.\n *\n * @param {RegExp} regex\n *   Expression.\n * @returns {(code: Code) => boolean}\n *   Check.\n */\nfunction regexCheck(regex) {\n  return check\n\n  /**\n   * Check whether a code matches the bound regex.\n   *\n   * @param {Code} code\n   *   Character code.\n   * @returns {boolean}\n   *   Whether the character code matches the bound regex.\n   */\n  function check(code) {\n    return code !== null && code > -1 && regex.test(String.fromCharCode(code))\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLE1BQU07QUFDbEI7O0FBRTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFLLG1CQUFtQix3REFBSztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ08sZ0RBQWdEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsd0RBQUs7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1Asa0NBQWtDLHdEQUFLLGlCQUFpQix3REFBSztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsd0RBQUs7QUFDbEIsYUFBYSx3REFBSztBQUNsQixhQUFhLHdEQUFLO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sMENBQTBDLEVBQUUsSUFBSSxFQUFFOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS12MC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWNoYXJhY3Rlci9kZXYvaW5kZXguanM/NTE4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBpbXBvcnQge0NvZGV9IGZyb20gJ21pY3JvbWFyay11dGlsLXR5cGVzJ1xuICovXG5cbmltcG9ydCB7Y29kZXN9IGZyb20gJ21pY3JvbWFyay11dGlsLXN5bWJvbCdcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGFscGhhIChgYWAgdGhyb3VnaCBgemAsXG4gKiBjYXNlIGluc2Vuc2l0aXZlKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGFscGhhKiogaXMgYW4gQVNDSUkgdXBwZXIgYWxwaGEgb3IgQVNDSUkgbG93ZXIgYWxwaGEuXG4gKlxuICogQW4gKipBU0NJSSB1cHBlciBhbHBoYSoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDQxIChgQWApXG4gKiB0byBVKzAwNUEgKGBaYCkuXG4gKlxuICogQW4gKipBU0NJSSBsb3dlciBhbHBoYSoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDYxIChgYWApXG4gKiB0byBVKzAwN0EgKGB6YCkuXG4gKlxuICogQHBhcmFtIGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUFscGhhID0gcmVnZXhDaGVjaygvW0EtWmEtel0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgYW4gQVNDSUkgYWxwaGFudW1lcmljIChgYWBcbiAqIHRocm91Z2ggYHpgLCBjYXNlIGluc2Vuc2l0aXZlLCBvciBgMGAgdGhyb3VnaCBgOWApLlxuICpcbiAqIEFuICoqQVNDSUkgYWxwaGFudW1lcmljKiogaXMgYW4gQVNDSUkgZGlnaXQgKHNlZSBgYXNjaWlEaWdpdGApIG9yIEFTQ0lJIGFscGhhXG4gKiAoc2VlIGBhc2NpaUFscGhhYCkuXG4gKlxuICogQHBhcmFtIGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUFscGhhbnVtZXJpYyA9IHJlZ2V4Q2hlY2soL1tcXGRBLVphLXpdLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGF0ZXh0LlxuICpcbiAqIGF0ZXh0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyAoc2VlIGBhc2NpaUFscGhhbnVtZXJpY2ApLCBvciBhIGNoYXJhY3RlciBpblxuICogdGhlIGluY2x1c2l2ZSByYW5nZXMgVSswMDIzIE5VTUJFUiBTSUdOIChgI2ApIHRvIFUrMDAyNyBBUE9TVFJPUEhFIChgJ2ApLFxuICogVSswMDJBIEFTVEVSSVNLIChgKmApLCBVKzAwMkIgUExVUyBTSUdOIChgK2ApLCBVKzAwMkQgREFTSCAoYC1gKSwgVSswMDJGXG4gKiBTTEFTSCAoYC9gKSwgVSswMDNEIEVRVUFMUyBUTyAoYD1gKSwgVSswMDNGIFFVRVNUSU9OIE1BUksgKGA/YCksIFUrMDA1RVxuICogQ0FSRVQgKGBeYCkgdG8gVSswMDYwIEdSQVZFIEFDQ0VOVCAoYGAgYCBgYCksIG9yIFUrMDA3QiBMRUZUIENVUkxZIEJSQUNFXG4gKiAoYHtgKSB0byBVKzAwN0UgVElMREUgKGB+YCkuXG4gKlxuICogU2VlOlxuICogKipcXFtSRkM1MzIyXSoqOlxuICogW0ludGVybmV0IE1lc3NhZ2UgRm9ybWF0XShodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNTMyMikuXG4gKiBQLiBSZXNuaWNrLlxuICogSUVURi5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzY2lpQXRleHQgPSByZWdleENoZWNrKC9bIy0nKitcXC0tOT0/QS1aXi1+XS8pXG5cbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGNoYXJhY3RlciBjb2RlIGlzIGFuIEFTQ0lJIGNvbnRyb2wgY2hhcmFjdGVyLlxuICpcbiAqIEFuICoqQVNDSUkgY29udHJvbCoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDAwIE5VTEwgKE5VTClcbiAqIHRvIFUrMDAxRiAoVVMpLCBvciBVKzAwN0YgKERFTCkuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNjaWlDb250cm9sKGNvZGUpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBTcGVjaWFsIHdoaXRlc3BhY2UgY29kZXMgKHdoaWNoIGhhdmUgbmVnYXRpdmUgdmFsdWVzKSwgQzAgYW5kIENvbnRyb2xcbiAgICAvLyBjaGFyYWN0ZXIgREVMXG4gICAgY29kZSAhPT0gbnVsbCAmJiAoY29kZSA8IGNvZGVzLnNwYWNlIHx8IGNvZGUgPT09IGNvZGVzLmRlbClcbiAgKVxufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgYW4gQVNDSUkgZGlnaXQgKGAwYCB0aHJvdWdoIGA5YCkuXG4gKlxuICogQW4gKipBU0NJSSBkaWdpdCoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDMwIChgMGApIHRvXG4gKiBVKzAwMzkgKGA5YCkuXG4gKlxuICogQHBhcmFtIGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaURpZ2l0ID0gcmVnZXhDaGVjaygvXFxkLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIGFuIEFTQ0lJIGhleCBkaWdpdCAoYGFgIHRocm91Z2hcbiAqIGBmYCwgY2FzZSBpbnNlbnNpdGl2ZSwgb3IgYDBgIHRocm91Z2ggYDlgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGhleCBkaWdpdCoqIGlzIGFuIEFTQ0lJIGRpZ2l0IChzZWUgYGFzY2lpRGlnaXRgKSwgQVNDSUkgdXBwZXIgaGV4XG4gKiBkaWdpdCwgb3IgYW4gQVNDSUkgbG93ZXIgaGV4IGRpZ2l0LlxuICpcbiAqIEFuICoqQVNDSUkgdXBwZXIgaGV4IGRpZ2l0KiogaXMgYSBjaGFyYWN0ZXIgaW4gdGhlIGluY2x1c2l2ZSByYW5nZSBVKzAwNDFcbiAqIChgQWApIHRvIFUrMDA0NiAoYEZgKS5cbiAqXG4gKiBBbiAqKkFTQ0lJIGxvd2VyIGhleCBkaWdpdCoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2UgVSswMDYxXG4gKiAoYGFgKSB0byBVKzAwNjYgKGBmYCkuXG4gKlxuICogQHBhcmFtIGNvZGVcbiAqICAgQ29kZS5cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBhc2NpaUhleERpZ2l0ID0gcmVnZXhDaGVjaygvW1xcZEEtRmEtZl0vKVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgQVNDSUkgcHVuY3R1YXRpb24uXG4gKlxuICogQW4gKipBU0NJSSBwdW5jdHVhdGlvbioqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBpbmNsdXNpdmUgcmFuZ2VzIFUrMDAyMVxuICogRVhDTEFNQVRJT04gTUFSSyAoYCFgKSB0byBVKzAwMkYgU0xBU0ggKGAvYCksIFUrMDAzQSBDT0xPTiAoYDpgKSB0byBVKzAwNDAgQVRcbiAqIFNJR04gKGBAYCksIFUrMDA1QiBMRUZUIFNRVUFSRSBCUkFDS0VUIChgW2ApIHRvIFUrMDA2MCBHUkFWRSBBQ0NFTlRcbiAqIChgYCBgIGBgKSwgb3IgVSswMDdCIExFRlQgQ1VSTFkgQlJBQ0UgKGB7YCkgdG8gVSswMDdFIFRJTERFIChgfmApLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgYXNjaWlQdW5jdHVhdGlvbiA9IHJlZ2V4Q2hlY2soL1shLS86LUBbLWB7LX5dLylcblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgY2hhcmFjdGVyIGNvZGUgaXMgYSBtYXJrZG93biBsaW5lIGVuZGluZy5cbiAqXG4gKiBBICoqbWFya2Rvd24gbGluZSBlbmRpbmcqKiBpcyB0aGUgdmlydHVhbCBjaGFyYWN0ZXJzIE0tMDAwMyBDQVJSSUFHRSBSRVRVUk5cbiAqIExJTkUgRkVFRCAoQ1JMRiksIE0tMDAwNCBMSU5FIEZFRUQgKExGKSBhbmQgTS0wMDA1IENBUlJJQUdFIFJFVFVSTiAoQ1IpLlxuICpcbiAqIEluIG1pY3JvbWFyaywgdGhlIGFjdHVhbCBjaGFyYWN0ZXIgVSswMDBBIExJTkUgRkVFRCAoTEYpIGFuZCBVKzAwMEQgQ0FSUklBR0VcbiAqIFJFVFVSTiAoQ1IpIGFyZSByZXBsYWNlZCBieSB0aGVzZSB2aXJ0dWFsIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHdoZXRoZXJcbiAqIHRoZXkgb2NjdXJyZWQgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUgIT09IG51bGwgJiYgY29kZSA8IGNvZGVzLmhvcml6b250YWxUYWJcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgY2hhcmFjdGVyIGNvZGUgaXMgYSBtYXJrZG93biBsaW5lIGVuZGluZyAoc2VlXG4gKiBgbWFya2Rvd25MaW5lRW5kaW5nYCkgb3IgbWFya2Rvd24gc3BhY2UgKHNlZSBgbWFya2Rvd25TcGFjZWApLlxuICpcbiAqIEBwYXJhbSB7Q29kZX0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkge1xuICByZXR1cm4gY29kZSAhPT0gbnVsbCAmJiAoY29kZSA8IGNvZGVzLm51bCB8fCBjb2RlID09PSBjb2Rlcy5zcGFjZSlcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgY2hhcmFjdGVyIGNvZGUgaXMgYSBtYXJrZG93biBzcGFjZS5cbiAqXG4gKiBBICoqbWFya2Rvd24gc3BhY2UqKiBpcyB0aGUgY29uY3JldGUgY2hhcmFjdGVyIFUrMDAyMCBTUEFDRSAoU1ApIGFuZCB0aGVcbiAqIHZpcnR1YWwgY2hhcmFjdGVycyBNLTAwMDEgVklSVFVBTCBTUEFDRSAoVlMpIGFuZCBNLTAwMDIgSE9SSVpPTlRBTCBUQUIgKEhUKS5cbiAqXG4gKiBJbiBtaWNyb21hcmssIHRoZSBhY3R1YWwgY2hhcmFjdGVyIFUrMDAwOSBDSEFSQUNURVIgVEFCVUxBVElPTiAoSFQpIGlzXG4gKiByZXBsYWNlZCBieSBvbmUgTS0wMDAyIEhPUklaT05UQUwgVEFCIChIVCkgYW5kIGJldHdlZW4gMCBhbmQgMyBNLTAwMDEgVklSVFVBTFxuICogU1BBQ0UgKFZTKSBjaGFyYWN0ZXJzLCBkZXBlbmRpbmcgb24gdGhlIGNvbHVtbiBhdCB3aGljaCB0aGUgdGFiIG9jY3VycmVkLlxuICpcbiAqIEBwYXJhbSB7Q29kZX0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiAgIFdoZXRoZXIgaXQgbWF0Y2hlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcmtkb3duU3BhY2UoY29kZSkge1xuICByZXR1cm4gKFxuICAgIGNvZGUgPT09IGNvZGVzLmhvcml6b250YWxUYWIgfHxcbiAgICBjb2RlID09PSBjb2Rlcy52aXJ0dWFsU3BhY2UgfHxcbiAgICBjb2RlID09PSBjb2Rlcy5zcGFjZVxuICApXG59XG5cbi8vIFNpemUgbm90ZTogcmVtb3ZpbmcgQVNDSUkgZnJvbSB0aGUgcmVnZXggYW5kIHVzaW5nIGBhc2NpaVB1bmN0dWF0aW9uYCBoZXJlXG4vLyBJbiBmYWN0IGFkZHMgdG8gdGhlIGJ1bmRsZSBzaXplLlxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgY29kZSByZXByZXNlbnRzIFVuaWNvZGUgcHVuY3R1YXRpb24uXG4gKlxuICogQSAqKlVuaWNvZGUgcHVuY3R1YXRpb24qKiBpcyBhIGNoYXJhY3RlciBpbiB0aGUgVW5pY29kZSBgUGNgIChQdW5jdHVhdGlvbixcbiAqIENvbm5lY3RvciksIGBQZGAgKFB1bmN0dWF0aW9uLCBEYXNoKSwgYFBlYCAoUHVuY3R1YXRpb24sIENsb3NlKSwgYFBmYFxuICogKFB1bmN0dWF0aW9uLCBGaW5hbCBxdW90ZSksIGBQaWAgKFB1bmN0dWF0aW9uLCBJbml0aWFsIHF1b3RlKSwgYFBvYFxuICogKFB1bmN0dWF0aW9uLCBPdGhlciksIG9yIGBQc2AgKFB1bmN0dWF0aW9uLCBPcGVuKSBjYXRlZ29yaWVzLCBvciBhbiBBU0NJSVxuICogcHVuY3R1YXRpb24gKHNlZSBgYXNjaWlQdW5jdHVhdGlvbmApLlxuICpcbiAqIFNlZTpcbiAqICoqXFxbVU5JQ09ERV0qKjpcbiAqIFtUaGUgVW5pY29kZSBTdGFuZGFyZF0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvdmVyc2lvbnMvKS5cbiAqIFVuaWNvZGUgQ29uc29ydGl1bS5cbiAqXG4gKiBAcGFyYW0gY29kZVxuICogICBDb2RlLlxuICogQHJldHVybnNcbiAqICAgV2hldGhlciBpdCBtYXRjaGVzLlxuICovXG5leHBvcnQgY29uc3QgdW5pY29kZVB1bmN0dWF0aW9uID0gcmVnZXhDaGVjaygvXFxwe1B9fFxccHtTfS91KVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIHJlcHJlc2VudHMgVW5pY29kZSB3aGl0ZXNwYWNlLlxuICpcbiAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgaGFuZGxlIG1pY3JvbWFyayBzcGVjaWZpYyBtYXJrZG93biB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKiBTZWUgYG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2VgIHRvIGNoZWNrIHRoYXQuXG4gKlxuICogQSAqKlVuaWNvZGUgd2hpdGVzcGFjZSoqIGlzIGEgY2hhcmFjdGVyIGluIHRoZSBVbmljb2RlIGBac2AgKFNlcGFyYXRvcixcbiAqIFNwYWNlKSBjYXRlZ29yeSwgb3IgVSswMDA5IENIQVJBQ1RFUiBUQUJVTEFUSU9OIChIVCksIFUrMDAwQSBMSU5FIEZFRUQgKExGKSxcbiAqIFUrMDAwQyAoRkYpLCBvciBVKzAwMEQgQ0FSUklBR0UgUkVUVVJOIChDUikgKCoqXFxbVU5JQ09ERV0qKikuXG4gKlxuICogU2VlOlxuICogKipcXFtVTklDT0RFXSoqOlxuICogW1RoZSBVbmljb2RlIFN0YW5kYXJkXShodHRwczovL3d3dy51bmljb2RlLm9yZy92ZXJzaW9ucy8pLlxuICogVW5pY29kZSBDb25zb3J0aXVtLlxuICpcbiAqIEBwYXJhbSBjb2RlXG4gKiAgIENvZGUuXG4gKiBAcmV0dXJuc1xuICogICBXaGV0aGVyIGl0IG1hdGNoZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bmljb2RlV2hpdGVzcGFjZSA9IHJlZ2V4Q2hlY2soL1xccy8pXG5cbi8qKlxuICogQ3JlYXRlIGEgY29kZSBjaGVjayBmcm9tIGEgcmVnZXguXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlZ2V4XG4gKiAgIEV4cHJlc3Npb24uXG4gKiBAcmV0dXJucyB7KGNvZGU6IENvZGUpID0+IGJvb2xlYW59XG4gKiAgIENoZWNrLlxuICovXG5mdW5jdGlvbiByZWdleENoZWNrKHJlZ2V4KSB7XG4gIHJldHVybiBjaGVja1xuXG4gIC8qKlxuICAgKiBDaGVjayB3aGV0aGVyIGEgY29kZSBtYXRjaGVzIHRoZSBib3VuZCByZWdleC5cbiAgICpcbiAgICogQHBhcmFtIHtDb2RlfSBjb2RlXG4gICAqICAgQ2hhcmFjdGVyIGNvZGUuXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKiAgIFdoZXRoZXIgdGhlIGNoYXJhY3RlciBjb2RlIG1hdGNoZXMgdGhlIGJvdW5kIHJlZ2V4LlxuICAgKi9cbiAgZnVuY3Rpb24gY2hlY2soY29kZSkge1xuICAgIHJldHVybiBjb2RlICE9PSBudWxsICYmIGNvZGUgPiAtMSAmJiByZWdleC50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSkpXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/micromark-util-character/dev/index.js\n");

/***/ })

};
;