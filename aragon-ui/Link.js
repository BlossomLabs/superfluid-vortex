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

function Link(_ref) {
  let {
    onClick = () => {},
    href = undefined,
    external = undefined,
    ...props
  } = _ref;
  const theme = Theme.useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, _extends._extends({
    href: href,
    onClick: onClick,
    external: external,
    focusRingSpacing: [6, 2],
    focusRingRadius: constants.RADIUS
  }, props, {
    $_css: theme.link,
    $_css2: external ? 'underline' : 'none'
  }));
}

Link.propTypes = { ...ButtonBase["default"].propTypes,
  href: index.PropTypes.string,
  onClick: index.PropTypes.func,
  external: index.PropTypes.bool
};

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "Link___StyledButtonBase",
  componentId: "sc-1eme5g-0"
})(["color:", ";text-decoration:", ";font-size:inherit;"], p => p.$_css, p => p.$_css2);

exports["default"] = Link;
//# sourceMappingURL=Link.js.map
