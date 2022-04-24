'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const unselectable = () => `
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`; // Transforms a number to be used as a CSS value, with the `px` suffix appended to it. If not a number, the value is returned directly.

function cssPx(value) {
  return typeof value === 'number' ? value + 'px' : value;
}

exports.cssPx = cssPx;
exports.unselectable = unselectable;
//# sourceMappingURL=css.js.map