'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var IconEllipsis = require('./IconEllipsis.js');
var Theme = require('./Theme.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./IconPropTypes-0ef380f7.js');
require('./use-inside.esm-3f28ebaf.js');
require('./constants.js');
require('./index-6b8189f0.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PaginationSeparator = /*#__PURE__*/React__default["default"].memo(function PaginationSeparator() {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, null, /*#__PURE__*/React__default["default"].createElement(_StyledIconEllipsis, {
    $_css: theme.surfaceContentSecondary.alpha(0.4)
  }));
});

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "PaginationSeparator___StyledDiv",
  componentId: "sc-8y27bx-0"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledIconEllipsis = _styled__default["default"](IconEllipsis["default"]).withConfig({
  displayName: "PaginationSeparator___StyledIconEllipsis",
  componentId: "sc-8y27bx-1"
})(["color:", ";"], p => p.$_css);

exports.PaginationSeparator = PaginationSeparator;
//# sourceMappingURL=PaginationSeparator.js.map
