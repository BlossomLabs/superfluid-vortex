'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var ButtonIcon = require('./ButtonIcon.js');
var Theme = require('./Theme.js');
var IconUp = require('./IconUp.js');
var IconDown = require('./IconDown.js');
var constants = require('./constants.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./Button.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconPropTypes-0ef380f7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ToggleButton(_ref) {
  let {
    onClick,
    opened
  } = _ref;
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
    label: opened ? 'Close' : 'Open',
    focusRingRadius: constants.BIG_RADIUS,
    onClick: onClick,
    $_css: theme.surfaceContentSecondary
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css2: opened ? 1 : 0,
    $_css3: opened ? 1 : 0
  }, /*#__PURE__*/React__default["default"].createElement(IconUp["default"], {
    size: "small"
  })), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css4: opened ? -1 : 0,
    $_css5: opened ? -1 : 0
  }, /*#__PURE__*/React__default["default"].createElement(IconDown["default"], {
    size: "small"
  })));
}

ToggleButton.propTypes = {
  onClick: index.PropTypes.func.isRequired,
  opened: index.PropTypes.bool.isRequired
};

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "ToggleButton___StyledButtonIcon",
  componentId: "sc-1dx9ojh-0"
})(["display:flex;flex-direction:column;color:", ";& > div{display:flex;transform-origin:50% 50%;transition:transform 250ms ease-in-out;}"], p => p.$_css);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "ToggleButton___StyledDiv",
  componentId: "sc-1dx9ojh-1"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "ToggleButton___StyledDiv2",
  componentId: "sc-1dx9ojh-2"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css4, p => p.$_css5);

exports.ToggleButton = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map
