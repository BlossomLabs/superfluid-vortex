'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var Theme = require('./Theme.js');
var Layout = require('./Layout.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Box(_ref) {
  let {
    heading = undefined,
    children = undefined,
    padding = undefined,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const [insideSplitPrimary] = useInside_esm.useInside('Split:primary');
  const {
    layoutName
  } = Layout.useLayout();
  const fullWidth = layoutName === 'small';
  const defaultPadding = (fullWidth ? 2 : insideSplitPrimary ? 5 : 3) * constants.GU;

  if (padding === true) {
    environment.warnOnce('Box:padding:true', 'Box: setting true on the padding prop is deprecated. Omit it, or set it to undefined instead.');
    padding = defaultPadding;
  }

  if (padding === false) {
    environment.warnOnce('Box:padding:false', 'Box: setting false on the padding prop is deprecated. Use 0.');
    padding = 0;
  }

  const contentPadding = padding === undefined ? defaultPadding : padding;
  return /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Box"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({
    as: heading ? 'section' : 'div'
  }, props, {
    $_css: fullWidth ? 0 : constants.BIG_RADIUS,
    $_css2: theme.border,
    $_css3: fullWidth ? '1px 0' : '1px',
    $_css4: theme.surface,
    $_css5: theme.surfaceContent,
    $_css6: 2 * constants.GU
  }), heading && /*#__PURE__*/React__default["default"].createElement(_StyledH, {
    $_css7: 4 * constants.GU,
    $_css8: defaultPadding,
    $_css9: theme.border,
    $_css10: theme.surfaceContentSecondary,
    $_css11: textStyles.textStyle('label2')
  }, /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Box:heading"
  }, heading)), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css12: contentPadding
  }, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Box:content"
  }, children)))));
}

Box.propTypes = {
  heading: index.PropTypes.node,
  children: index.PropTypes.node,
  padding: index.PropTypes.oneOfType([index.PropTypes.number, // deprecated
  index.PropTypes.bool])
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Box___StyledDiv",
  componentId: "sc-t9tl4y-0"
})(["position:relative;border-radius:", "px;border-style:solid;border-color:", ";border-width:", ";background:", ";color:", ";& + &{margin-top:", "px;}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "Box___StyledH",
  componentId: "sc-t9tl4y-1"
})(["display:flex;align-items:center;height:", "px;padding:0 ", "px;border-bottom:1px solid ", ";color:", ";", ";"], p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Box___StyledDiv2",
  componentId: "sc-t9tl4y-2"
})(["padding:", "px;"], p => p.$_css12);

exports["default"] = Box;
//# sourceMappingURL=Box.js.map