'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var Layout = require('./Layout.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function CardLayout(_ref) {
  let {
    children,
    columnWidthMin,
    rowHeight,
    ...props
  } = _ref;
  const {
    layoutName
  } = Layout.useLayout();
  const fullWidth = layoutName === 'small';
  const gridAutoRowValue = rowHeight === 'auto' ? rowHeight : `${rowHeight}px`;
  return /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "CardLayout"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: 2 * constants.GU,
    $_css2: fullWidth ? 'auto-fit' : 'auto-fill',
    $_css3: columnWidthMin,
    $_css4: gridAutoRowValue,
    $_css5: fullWidth ? 2 * constants.GU : 0,
    $_css6: 3 * constants.GU
  }), children));
}

CardLayout.propTypes = {
  children: index.PropTypes.node,
  columnWidthMin: index.PropTypes.number,
  rowHeight: index.PropTypes.oneOfType([index.PropTypes.oneOf(['auto']), index.PropTypes.number])
};
CardLayout.defaultProps = {
  columnWidthMin: 21 * constants.GU,
  rowHeight: 21 * constants.GU
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "CardLayout___StyledDiv",
  componentId: "sc-czuxpj-0"
})(["display:grid;grid-gap:", "px;grid-auto-flow:row;grid-template-columns:repeat( ", ",minmax(", "px,1fr) );grid-auto-rows:", ";align-items:start;padding:0 ", "px ", "px;margin:0 auto;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

exports.CardLayout = CardLayout;
exports["default"] = CardLayout;
//# sourceMappingURL=CardLayout.js.map
