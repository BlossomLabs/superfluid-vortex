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

function IconStarFilled(_ref) {
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
    d: "M19.968 10.066a.656.656 0 00-.52-.46l-4.746-.727-2.122-4.502A.644.644 0 0012 4a.644.644 0 00-.58.377L9.299 8.88l-4.745.726a.655.655 0 00-.521.461.7.7 0 00.163.694l3.434 3.502-.81 4.947a.692.692 0 00.257.662.622.622 0 00.68.051L12 17.585l4.244 2.337a.622.622 0 00.68-.051.692.692 0 00.258-.662l-.81-4.947 3.433-3.502a.7.7 0 00.163-.694z"
  }));
}

IconStarFilled.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconStarFilled;
//# sourceMappingURL=IconStarFilled.js.map