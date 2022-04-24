'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var TextCopy = require('./TextCopy.js');
var EthIdenticon = require('./EthIdenticon.js');
var constants = require('./constants.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./TextInput.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./text-styles.js');
require('./font.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./ToastHub.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./components.js');
require('./springs.js');
require('./IconCopy.js');
require('./IconPropTypes-0ef380f7.js');
require('./web3.js');
require('./provider-types.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const HEIGHT = 5 * constants.GU;
const IDENTICON_SIZE = 6 * constants.GU;
const AddressField = /*#__PURE__*/React__default["default"].forwardRef(function AddressField(_ref, ref) {
  let {
    address,
    autofocus,
    icon,
    onCopy,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement(TextCopy["default"], {
    ref: ref,
    adornment: icon || /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(_StyledEthIdenticon, {
      address: address,
      onCopy: onCopy // FIXME: Should be in YextCopy
      ,
      scale: 2,
      $_css: (HEIGHT - 2) / IDENTICON_SIZE
    })),
    autofocus: autofocus,
    value: address
  });
});
AddressField.propTypes = {
  address: index.PropTypes.string.isRequired,
  autofocus: index.PropTypes.bool,
  icon: index.PropTypes.node,
  onCopy: index.PropTypes.func
};
AddressField.defaultProps = {
  autofocus: true
};

var _StyledEthIdenticon = _styled__default["default"](EthIdenticon["default"]).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "sc-ez2u23-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], p => p.$_css);

exports["default"] = AddressField;
//# sourceMappingURL=AddressField.js.map
