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

function IconSearch(_ref) {
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
    d: "M15.565 5.984A6.73 6.73 0 0010.775 4a6.73 6.73 0 00-4.79 1.984A6.73 6.73 0 004 10.774a6.73 6.73 0 001.984 4.79 6.73 6.73 0 004.79 1.985 6.73 6.73 0 004.79-1.984 6.73 6.73 0 001.985-4.79 6.73 6.73 0 00-1.984-4.79zm-4.79 10.272a5.488 5.488 0 01-5.482-5.482 5.488 5.488 0 015.481-5.481 5.488 5.488 0 015.482 5.481 5.488 5.488 0 01-5.482 5.482z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M19.81 18.896l-4.248-4.248a.646.646 0 10-.914.914l4.249 4.249a.644.644 0 00.914 0 .646.646 0 000-.915z"
  }));
}

IconSearch.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconSearch;
//# sourceMappingURL=IconSearch.js.map