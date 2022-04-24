'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var SidePanel = require('./SidePanel.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./index-6b8189f0.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./use-inside.esm-3f28ebaf.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./IconCross.js');
require('./IconPropTypes-0ef380f7.js');
require('./springs.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SidePanelSeparator(props) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: SidePanel["default"].HORIZONTAL_PADDING * 2,
    $_css2: SidePanel["default"].HORIZONTAL_PADDING,
    $_css3: theme.border
  }));
}

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "SidePanelSeparator___StyledDiv",
  componentId: "sc-3hhvqi-0"
})(["width:calc(100% + ", "px);margin:0 -", "px;height:1px;background:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports["default"] = SidePanelSeparator;
//# sourceMappingURL=SidePanelSeparator.js.map
