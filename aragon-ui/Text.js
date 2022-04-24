'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var environment = require('./environment.js');
var font = require('./font.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Text(_ref) {
  let {
    children,
    color,
    deprecationNotice,
    monospace,
    size,
    smallcaps,
    weight,
    ...props
  } = _ref;

  if (deprecationNotice) {
    environment.warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return /*#__PURE__*/React__default["default"].createElement(_StyledSpan, _extends._extends({}, props, {
    $_css: font.font({
      deprecationNotice: false,
      monospace,
      size,
      smallcaps,
      weight
    }),
    $_css2: color ? `color: ${color}` : ''
  }), children);
}

const Block = props => /*#__PURE__*/React__default["default"].createElement(Text, _extends._extends({
  as: "div"
}, props));

const Paragraph = props => /*#__PURE__*/React__default["default"].createElement(Text, _extends._extends({
  as: "p"
}, props));

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: index.PropTypes.node,
  color: index.PropTypes.string,
  deprecationNotice: index.PropTypes.bool,
  monospace: index.PropTypes.bool,
  size: index.PropTypes.string,
  smallcaps: index.PropTypes.bool,
  weight: index.PropTypes.string
};
Text.defaultProps = {
  deprecationNotice: true
};
Text.Block = Block;
Text.Paragraph = Paragraph;

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Text___StyledSpan",
  componentId: "sc-1edjte1-0"
})(["", ";", ";"], p => p.$_css, p => p.$_css2);

exports["default"] = Text;
//# sourceMappingURL=Text.js.map
