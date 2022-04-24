'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var Button = require('./Button.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ButtonIcon(_ref) {
  let {
    label,
    children,
    mode,
    ...props
  } = _ref;
  const theme = Theme.useTheme();

  if (mode !== undefined) {
    environment.warnOnce('ButtonIcon:mode', 'ButtonIcon: the mode prop is deprecated. Please use Button with the icon prop instead.');
  }

  if (mode === 'button') {
    return /*#__PURE__*/React__default["default"].createElement(Button["default"], _extends._extends({
      label: label,
      icon: children,
      display: "icon"
    }, props));
  }

  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({
    title: label
  }, props, {
    $_css: 4 * constants.GU,
    $_css2: 4 * constants.GU,
    $_css3: theme.surfacePressed
  }), children);
}

ButtonIcon.propTypes = {
  label: index.PropTypes.string.isRequired,
  children: index.PropTypes.node.isRequired,
  // deprecated
  mode: index.PropTypes.oneOf(['button'])
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "ButtonIcon___StyledButtonBase",
  componentId: "sc-14eq7o9-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:", "px;height:", "px;&:active{background:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports["default"] = ButtonIcon;
//# sourceMappingURL=ButtonIcon.js.map
