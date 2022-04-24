'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var FloatIndicator = require('./FloatIndicator.js');
var LoadingRing = require('./LoadingRing.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./use-inside.esm-3f28ebaf.js');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./ToastHub.js');
require('./components.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./text-styles.js');
require('./font.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SyncIndicator(_ref) {
  let {
    children,
    label,
    shift,
    visible,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(FloatIndicator["default"], _extends._extends({
    visible: visible,
    shift: shift
  }, props), /*#__PURE__*/React__default["default"].createElement(LoadingRing["default"], null), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: 1.5 * constants.GU
  }, children || /*#__PURE__*/React__default["default"].createElement(_StyledSpan, null, label, " \uD83D\uDE4F")));
}

SyncIndicator.propTypes = {
  children: index.PropTypes.node,
  label: index.PropTypes.node,
  shift: index.PropTypes.number,
  visible: index.PropTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "SyncIndicator___StyledDiv",
  componentId: "sc-rvvma9-0"
})(["margin-left:", "px;"], p => p.$_css);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-rvvma9-1"
})(["white-space:nowrap"]);

exports["default"] = SyncIndicator;
//# sourceMappingURL=SyncIndicator.js.map
