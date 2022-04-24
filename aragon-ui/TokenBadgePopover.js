'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-77f6d5c1.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var Link = require('./Link.js');
var characters = require('./characters.js');
var web3 = require('./web3.js');
var useImageExists = require('./useImageExists.js');
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
require('./BadgePopoverActionType.js');
require('./IconCross.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TokenBadgePopover = /*#__PURE__*/React__default["default"].memo(function TokenBadgePopover(_ref) {
  let {
    address,
    explorerProvider,
    iconSrc,
    networkType,
    onClose,
    opener,
    title,
    visible
  } = _ref;
  const etherscanUrl = web3.blockExplorerUrl('token', address, {
    networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React__default["default"].createElement(BadgePopoverBase["default"], {
    addressField: iconSrc ? /*#__PURE__*/React__default["default"].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, _ref2 => {
      let {
        exists
      } = _ref2;
      return /*#__PURE__*/React__default["default"].createElement(AddressField["default"], {
        address: address,
        icon: exists ? /*#__PURE__*/React__default["default"].createElement(Icon, {
          src: iconSrc
        }) : null
      });
    }) : /*#__PURE__*/React__default["default"].createElement(AddressField["default"], {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default["default"].createElement(Link["default"], {
      href: etherscanUrl
    }, "See on ", characters.capitalize(explorerProvider)),
    onClose: onClose,
    opener: opener,
    title: title,
    visible: visible
  });
});
TokenBadgePopover.propTypes = {
  address: proptypes.PropTypes.string.isRequired,
  explorerProvider: proptypes.PropTypes.string,
  iconSrc: proptypes.PropTypes.string,
  networkType: proptypes.PropTypes.string,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  title: proptypes.PropTypes.string.isRequired,
  visible: proptypes.PropTypes.bool
};

function Icon(_ref3) {
  let {
    src
  } = _ref3;
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: 0.5 * constants.GU,
    $_css2: 0.5 * constants.GU,
    $_css3: src
  });
}

Icon.propTypes = {
  src: proptypes.PropTypes.string.isRequired
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TokenBadgePopover___StyledDiv",
  componentId: "sc-buhnsh-0"
})(["width:calc(100% - ", "px);height:calc(100% - ", "px);background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports["default"] = TokenBadgePopover;
//# sourceMappingURL=TokenBadgePopover.js.map
