'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var RadioGroup = require('./RadioGroup.js');
var RadioListItem = require('./RadioListItem.js');
var constants = require('./constants.js');
var miscellaneous = require('./miscellaneous.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./defineProperty-754b29ce.js');
require('./components.js');
require('./Radio.js');
require('./Checkbox.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./FocusVisible.js');
require('./springs.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function RadioList(_ref) {
  let {
    description,
    items,
    onChange,
    selected,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("div", props, title && /*#__PURE__*/React__default["default"].createElement(_StyledH, {
    $_css: 0.5 * constants.GU
  }, title), description && /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css2: 2.5 * constants.GU
  }, description), /*#__PURE__*/React__default["default"].createElement(_StyledRadioGroup, {
    onChange: onChange,
    selected: selected
  }, items.map((_ref2, i) => {
    let {
      description,
      title
    } = _ref2;
    return /*#__PURE__*/React__default["default"].createElement(RadioListItem["default"], {
      key: i,
      description: description,
      index: i,
      title: title
    });
  })));
}

RadioList.propTypes = {
  description: index.PropTypes.node,
  items: index.PropTypes.arrayOf(index.PropTypes.shape({
    description: index.PropTypes.node.isRequired,
    title: index.PropTypes.node.isRequired
  })),
  onChange: index.PropTypes.func,
  selected: (_ref3, _, componentName) => {
    let {
      items,
      selected
    } = _ref3;

    if (!Number.isInteger(selected) || selected >= items.length) {
      throw new Error(`Invalid prop \`selected\` supplied to \`${componentName}\`. ` + '`selected` must be an integer less than the length of `items`. ' + `Given ${selected} instead.`);
    }
  },
  title: index.PropTypes.node
};
RadioList.defaultProps = {
  items: [],
  onChange: miscellaneous.noop,
  selected: 0
};

var _StyledH = _styled__default["default"]("h2").withConfig({
  displayName: "RadioList___StyledH",
  componentId: "sc-ozvahq-0"
})(["margin-bottom:", "px;font-weight:600;"], p => p.$_css);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "RadioList___StyledDiv",
  componentId: "sc-ozvahq-1"
})(["margin-bottom:", "px;"], p => p.$_css2);

var _StyledRadioGroup = _styled__default["default"](RadioGroup["default"]).withConfig({
  displayName: "RadioList___StyledRadioGroup",
  componentId: "sc-ozvahq-2"
})(["display:flex;flex-direction:column;"]);

exports["default"] = RadioList;
//# sourceMappingURL=RadioList.js.map
