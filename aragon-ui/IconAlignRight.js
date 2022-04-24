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

function IconAlignRight(_ref) {
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
    strokeWidth: 0.2,
    d: "M20.068 9.534H7.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398zM19.952 6H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm0 7.068H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm.116 3.534H7.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398z"
  }));
}

IconAlignRight.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconAlignRight;
//# sourceMappingURL=IconAlignRight.js.map
