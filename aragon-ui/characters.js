'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const NO_BREAK_SPACE = '\u00a0';
const capitalize = function () {
  let s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!s) return '';
  return s[0].toUpperCase() + s.slice(1);
};

exports.NO_BREAK_SPACE = NO_BREAK_SPACE;
exports.capitalize = capitalize;
//# sourceMappingURL=characters.js.map
