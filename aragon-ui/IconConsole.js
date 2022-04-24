'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-0ef380f7.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./use-inside.esm-3f28ebaf.js');
require('./constants.js');
require('./index-6b8189f0.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconConsole(_ref) {
  let {
    size = undefined,
    ...props
  } = _ref;
  const sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.8,
    d: "M4.884 4.819h0a.777.777 0 000 1.201L8.373 9l-3.489 2.98h0a.777.777 0 000 1.201.952.952 0 001.214 0l4.193-3.58s0 0 0 0A.79.79 0 0010.575 9a.79.79 0 00-.284-.6s0 0 0 0L6.098 4.818h0a.952.952 0 00-1.214 0zm13.801 8.887h-7.16a.676.676 0 00-.55.3.953.953 0 00-.165.547c0 .196.055.39.165.546a.675.675 0 00.55.301h7.16c.253 0 .44-.146.55-.3a.952.952 0 00.165-.547.953.953 0 00-.165-.546.676.676 0 00-.55-.301z"
  }));
}

IconConsole.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconConsole;
//# sourceMappingURL=IconConsole.js.map
