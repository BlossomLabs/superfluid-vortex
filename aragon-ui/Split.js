'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var Layout = require('./Layout.js');
var constants = require('./constants.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Split(_ref) {
  let {
    primary,
    secondary,
    invert
  } = _ref;
  const {
    name: layout
  } = Layout.useLayout();
  const oneColumn = layout === 'small' || layout === 'medium';
  const inverted = !oneColumn && invert === 'horizontal' || oneColumn && invert === 'vertical';
  const primaryContent = /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Split:primary"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: !oneColumn && inverted ? 2 * constants.GU : 0,
    $_css2: oneColumn && inverted ? 2 * constants.GU : 0
  }, primary));
  const secondaryContent = /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Split:secondary"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css3: oneColumn ? '100%' : `${33 * constants.GU}px`,
    $_css4: !oneColumn && !inverted ? 2 * constants.GU : 0,
    $_css5: oneColumn && !inverted ? 2 * constants.GU : 0
  }, secondary));
  return /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Split"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css6: oneColumn ? 'block' : 'flex',
    $_css7: 3 * constants.GU
  }, inverted ? secondaryContent : primaryContent, inverted ? primaryContent : secondaryContent));
}

Split.propTypes = {
  invert: index.PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: index.PropTypes.node,
  secondary: index.PropTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Split___StyledDiv",
  componentId: "sc-1uh1fgt-0"
})(["flex-grow:1;margin-left:", "px;padding-top:", "px;"], p => p.$_css, p => p.$_css2);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Split___StyledDiv2",
  componentId: "sc-1uh1fgt-1"
})(["flex-shrink:0;flex-grow:0;width:", ";margin-left:", "px;padding-top:", "px;"], p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "Split___StyledDiv3",
  componentId: "sc-1uh1fgt-2"
})(["display:", ";padding-bottom:", "px;width:100%;"], p => p.$_css6, p => p.$_css7);

exports.Split = Split;
exports["default"] = Split;
//# sourceMappingURL=Split.js.map
