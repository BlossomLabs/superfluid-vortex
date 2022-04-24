'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-77f6d5c1.js');
var characters = require('./characters.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Link = require('./Link.js');
var web3 = require('./web3.js');
var useImageExists = require('./useImageExists.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./index-6b8189f0.js');
require('./TextCopy.js');
require('./TextInput.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./constants.js');
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

const AppBadgePopover = /*#__PURE__*/React__default["default"].memo(function AppBadgePopover(_ref) {
  let {
    appAddress,
    iconFallbackSrc,
    iconSrc,
    explorerProvider,
    networkType,
    onClose,
    opener,
    popoverAction,
    title,
    visible
  } = _ref;
  const explorerUrl = web3.blockExplorerUrl('address', appAddress, {
    networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React__default["default"].createElement(BadgePopoverBase["default"], {
    addressField: /*#__PURE__*/React__default["default"].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, _ref2 => {
      let {
        exists,
        displayFallback
      } = _ref2;
      return /*#__PURE__*/React__default["default"].createElement(AddressField["default"], {
        address: appAddress,
        icon: /*#__PURE__*/React__default["default"].createElement(Icon, {
          src: exists ? iconSrc : iconFallbackSrc
        })
      });
    }),
    link: explorerUrl && /*#__PURE__*/React__default["default"].createElement(Link["default"], {
      href: explorerUrl
    }, "See on ", characters.capitalize(explorerProvider !== null && explorerProvider !== void 0 ? explorerProvider : 'blockscout')),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    visible: visible
  });
});
AppBadgePopover.propTypes = {
  appAddress: proptypes.PropTypes.string.isRequired,
  explorerProvider: proptypes.PropTypes.string,
  iconFallbackSrc: proptypes.PropTypes.string,
  iconSrc: proptypes.PropTypes.string,
  networkType: proptypes.PropTypes.string,
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  popoverAction: BadgePopoverActionType["default"],
  title: proptypes.PropTypes.node.isRequired,
  visible: proptypes.PropTypes.bool
};

function Icon(_ref3) {
  let {
    src,
    ...props
  } = _ref3;
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: src
  }));
}

Icon.propTypes = {
  src: proptypes.PropTypes.string.isRequired
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "AppBadgePopover___StyledDiv",
  componentId: "sc-czv39k-0"
})(["width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css);

exports["default"] = AppBadgePopover;
//# sourceMappingURL=AppBadgePopover.js.map
