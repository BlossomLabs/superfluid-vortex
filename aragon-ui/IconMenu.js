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

function IconMenu(_ref) {
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
    d: "M19.354 11.301H4.646c-.357 0-.646.313-.646.699 0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699zm0-5.301H4.646C4.29 6 4 6.313 4 6.699c0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.7 0-.385-.29-.698-.646-.698zm0 10.602H4.646c-.357 0-.646.313-.646.7 0 .385.29.698.646.698h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699z"
  }));
}

IconMenu.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconMenu;
//# sourceMappingURL=IconMenu.js.map
