'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-77f6d5c1.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Link = require('./Link.js');
var Tag = require('./Tag.js');
var characters = require('./characters.js');
var web3 = require('./web3.js');
var constants = require('./constants.js');
require('./index-6b8189f0.js');
require('./TextCopy.js');
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
require('./EthIdenticon.js');
require('./provider-types.js');
require('./Popover.js');
require('./IconCross.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const IdentityBadgePopover = /*#__PURE__*/React__default["default"].memo(function IdentityBadgePopover(_ref) {
  let {
    address,
    connectedAccount,
    explorerProvider,
    networkType,
    onClose,
    opener,
    popoverAction,
    title,
    visible
  } = _ref;
  const etherscanUrl = web3.blockExplorerUrl('address', address, {
    networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React__default["default"].createElement(BadgePopoverBase["default"], {
    addressField: /*#__PURE__*/React__default["default"].createElement(AddressField["default"], {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default["default"].createElement(Link["default"], {
      href: etherscanUrl
    }, "See on ", characters.capitalize(explorerProvider !== null && explorerProvider !== void 0 ? explorerProvider : 'blockscout')),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React__default["default"].createElement(_StyledTag, {
      title: "This is your Ethereum address",
      $_css: 1 * constants.GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: proptypes.PropTypes.string,
  connectedAccount: proptypes.PropTypes.bool,
  explorerProvider: proptypes.PropTypes.string,
  networkType: proptypes.PropTypes.string,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  popoverAction: BadgePopoverActionType["default"],
  title: proptypes.PropTypes.node,
  visible: proptypes.PropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

var _StyledTag = _styled__default["default"](Tag["default"]).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-ewaz9y-0"
})(["margin-left:", "px;"], p => p.$_css);

exports["default"] = IdentityBadgePopover;
//# sourceMappingURL=IdentityBadgePopover.js.map
