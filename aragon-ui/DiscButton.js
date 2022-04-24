'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
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
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const DiscButton = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
  let {
    children,
    description,
    size,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({
    ref: ref,
    focusRingSpacing: 4,
    focusRingRadius: size,
    title: description
  }, props, {
    $_css: size,
    $_css2: size,
    $_css3: theme.helpIcon,
    $_css4: theme.helpContent
  }), children);
});
DiscButton.propTypes = {
  children: index.PropTypes.node.isRequired,
  description: index.PropTypes.string.isRequired,
  size: index.PropTypes.number
};
DiscButton.defaultProps = {
  size: 5 * constants.GU
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "DiscButton___StyledButtonBase",
  componentId: "sc-1ly86np-0"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;background:", ";color:", ";border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.25);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.125);}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4);

exports["default"] = DiscButton;
//# sourceMappingURL=DiscButton.js.map
