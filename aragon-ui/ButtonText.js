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

function ButtonText(_ref) {
  let {
    horizontalPadding,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const leftPadding = Number(horizontalPadding === 'left' || horizontalPadding === 'both') * constants.GU;
  const rightPadding = Number(horizontalPadding === 'right' || horizontalPadding === 'both') * constants.GU;
  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({}, props, {
    $_css: 1 * constants.GU,
    $_css2: rightPadding,
    $_css3: 1 * constants.GU,
    $_css4: leftPadding,
    $_css5: theme.link
  }));
}

ButtonText.propTypes = { ...ButtonBase["default"].propTypes,
  horizontalPadding: index.PropTypes.oneOf(['both', 'left', 'right', 'none'])
};
ButtonText.defaultProps = {
  horizontalPadding: 'both'
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "ButtonText___StyledButtonBase",
  componentId: "sc-ocpj67-0"
})(["padding:", "px ", "px ", "px ", "px;color:", ";font-size:inherit;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

exports["default"] = ButtonText;
//# sourceMappingURL=ButtonText.js.map
