'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var Bar = require('./Bar.js');
var ButtonBase = require('./ButtonBase.js');
var Layout = require('./Layout.js');
var Theme = require('./Theme.js');
var IconArrowLeft = require('./IconArrowLeft.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./Viewport-0c0a0c23.js');
require('./breakpoints.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconPropTypes-0ef380f7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function BackButton(_ref) {
  let {
    label,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const [insideBarPrimary] = useInside_esm.useInside('Bar:primary');
  const {
    layoutName
  } = Layout.useLayout();
  const compact = layoutName === 'small';
  const horizontalPadding = (compact ? 2 : 3) * constants.GU;
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({
    focusRingRadius: constants.RADIUS,
    focusRingSpacing: 1
  }, props, {
    $_css: insideBarPrimary ? -Bar["default"].PADDING : 0,
    $_css2: horizontalPadding,
    $_css3: horizontalPadding - 4,
    $_css4: theme.border,
    $_css5: theme.surfaceContent,
    $_css6: theme.surfaceInteractive,
    $_css7: theme.surfaceHighlight
  }), /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css8: theme.accent
  }, /*#__PURE__*/React__default["default"].createElement(IconArrowLeft["default"], null)), /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
    $_css9: 1 * constants.GU
  }, label));
}

BackButton.propTypes = {
  label: index.PropTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "BackButton___StyledButtonBase",
  componentId: "sc-m5pxa9-0"
})(["display:inline-flex;align-items:center;border-radius:", "px 0 0 ", "px;height:100%;margin-left:", "px;padding:0 ", "px 0 ", "px;border-right:1px solid ", ";color:", ";background:", ";&:active{background:", ";}"], constants.BIG_RADIUS, constants.BIG_RADIUS, p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "sc-m5pxa9-1"
})(["position:relative;top:2px;color:", ";"], p => p.$_css8);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "sc-m5pxa9-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], p => p.$_css9);

exports["default"] = BackButton;
//# sourceMappingURL=BackButton.js.map
