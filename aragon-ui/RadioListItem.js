'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var Radio = require('./Radio.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var constants = require('./constants.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./defineProperty-754b29ce.js');
require('./Checkbox.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./FocusVisible.js');
require('./springs.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./RadioGroup.js');
require('./components.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const RadioListItem = /*#__PURE__*/React__default["default"].memo(function RadioListItem(_ref) {
  let {
    description,
    index,
    title
  } = _ref;
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledLabel, {
    $_css: css.unselectable(),
    $_css2: 1 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(_StyledRadio, {
    id: index
  }), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css3: theme.border,
    $_css4: theme.accent.alpha(0.35)
  }, /*#__PURE__*/React__default["default"].createElement("strong", null, title), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css5: 0.5 * constants.GU
  }, description)));
});
RadioListItem.propTypes = {
  description: index.PropTypes.node.isRequired,
  index: index.PropTypes.number.isRequired,
  title: index.PropTypes.node.isRequired
};

var _StyledLabel = _styled__default["default"]("label").withConfig({
  displayName: "RadioListItem___StyledLabel",
  componentId: "sc-znrfgj-0"
})(["display:flex;", ";& + &{margin-top:", "px;}"], p => p.$_css, p => p.$_css2);

var _StyledRadio = _styled__default["default"](Radio["default"]).withConfig({
  displayName: "RadioListItem___StyledRadio",
  componentId: "sc-znrfgj-1"
})(["flex-shrink:0;"]);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "RadioListItem___StyledDiv",
  componentId: "sc-znrfgj-2"
})(["flex-grow:1;margin-left:12px;padding:12px 12px;border-radius:3px;transition:border 100ms ease-in-out;cursor:pointer;border:1px ", " solid;&:hover{border-color:", ";}"], p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "RadioListItem___StyledDiv2",
  componentId: "sc-znrfgj-3"
})(["margin-top:", "px;"], p => p.$_css5);

exports["default"] = RadioListItem;
//# sourceMappingURL=RadioListItem.js.map
