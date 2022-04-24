'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var ButtonBase = require('./ButtonBase.js');
var constants = require('./constants.js');
var Theme = require('./Theme.js');
require('./extends-214be52a.js');
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

function PaginationItem(_ref) {
  let {
    touchMode,
    selected,
    index,
    onChange
  } = _ref;
  const theme = Theme.useTheme();
  const handleClick = React.useCallback(() => {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, {
    onClick: handleClick,
    focusRingRadius: constants.RADIUS,
    disabled: selected,
    $_css: (touchMode ? 4 : 3) * constants.GU,
    $_css2: (touchMode ? 4 : 3) * constants.GU,
    $_css3: theme.surfaceContent,
    $_css4: theme.surfacePressed,
    $_css5: selected && _styled.css(["&&{background:", ";color:", ";}"], theme.accent, theme.accentContent)
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSpan, null, index + 1)));
}

PaginationItem.propTypes = {
  index: index.PropTypes.number.isRequired,
  onChange: index.PropTypes.func.isRequired,
  selected: index.PropTypes.bool.isRequired,
  touchMode: index.PropTypes.bool.isRequired
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "PaginationItem___StyledButtonBase",
  componentId: "sc-1hxxqsn-0"
})(["width:", "px;height:", "px;color:", ";border-radius:", "px;&:active{background:", ";}", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, constants.RADIUS, p => p.$_css4, p => p.$_css5);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "PaginationItem___StyledSpan",
  componentId: "sc-1hxxqsn-1"
})(["position:relative;top:1px;"]);

exports.PaginationItem = PaginationItem;
//# sourceMappingURL=PaginationItem.js.map
