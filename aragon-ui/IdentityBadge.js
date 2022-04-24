'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var BadgeBase = require('./BadgeBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var EthIdenticon = require('./EthIdenticon.js');
var IdentityBadgePopover = require('./IdentityBadgePopover.js');
var web3 = require('./web3.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./use-inside.esm-3f28ebaf.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./keycodes.js');
require('./css.js');
require('./components.js');
require('./proptypes-77f6d5c1.js');
require('./AddressField.js');
require('./TextCopy.js');
require('./TextInput.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./breakpoints.js');
require('./ToastHub.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./springs.js');
require('./IconCopy.js');
require('./IconPropTypes-0ef380f7.js');
require('./miscellaneous.js');
require('./font.js');
require('./provider-types.js');
require('./BadgePopoverBase.js');
require('./Popover.js');
require('./IconCross.js');
require('./Link.js');
require('./Tag.js');
require('./characters.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const IdentityBadge = /*#__PURE__*/React__default["default"].memo(function IdentityBadge(_ref) {
  let {
    badgeOnly,
    compact,
    connectedAccount,
    entity,
    explorerProvider,
    label,
    labelStyle,
    networkType,
    popoverAction,
    popoverTitle,
    shorten,
    // Deprecated
    customLabel,
    fontSize,
    ...props
  } = _ref;

  if (customLabel) {
    environment.warnOnce('IdentityBadge:customLabel', 'The “customLabel” prop is deprecated. Please use “label” instead.');
    label = label || customLabel;
  }

  if (fontSize) {
    environment.warnOnce('IdentityBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  const badgeRef = React.useRef(null);
  const [opened, setOpened] = React.useState(false);
  const handleClose = React.useCallback(() => setOpened(false), []);
  const handleOpen = React.useCallback(() => setOpened(true), []);
  const address = web3.isAddress(entity) ? entity : null;
  const displayLabel = label || (address && shorten ? web3.shortenAddress(address) : entity);
  return /*#__PURE__*/React__default["default"].createElement(BadgeBase["default"], _extends._extends({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
      $_css: 1 * constants.GU,
      $_css2: compact ? `
                  position: relative;
                  top: -1px;
                ` : ''
    }, /*#__PURE__*/React__default["default"].createElement(EthIdenticon["default"], {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: `
        ${!label && address ? textStyles.textStyle('address1') : ''}
        ${labelStyle}
      `,
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), popoverDisabled => !popoverDisabled && address && /*#__PURE__*/React__default["default"].createElement(IdentityBadgePopover["default"], {
    address: address,
    connectedAccount: connectedAccount,
    explorerProvider: explorerProvider,
    networkType: networkType,
    onClose: handleClose,
    opener: badgeRef.current,
    popoverAction: popoverAction,
    title: popoverTitle,
    visible: opened
  }));
});
IdentityBadge.propTypes = {
  badgeOnly: index.PropTypes.bool,
  compact: index.PropTypes.bool,
  connectedAccount: index.PropTypes.bool,
  entity: index.PropTypes.string,
  explorerProvider: index.PropTypes.string,
  label: index.PropTypes.string,
  labelStyle: index.PropTypes.string,
  networkType: index.PropTypes.string,
  popoverAction: BadgePopoverActionType["default"],
  popoverTitle: index.PropTypes.node,
  shorten: index.PropTypes.bool,
  // Deprecated
  customLabel: index.PropTypes.string,
  fontSize: index.PropTypes.string
};
IdentityBadge.defaultProps = {
  entity: '',
  labelStyle: '',
  networkType: 'main',
  shorten: true
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "sc-e0mkkt-0"
})(["display:block;margin-right:", "px;", ";"], p => p.$_css, p => p.$_css2);

exports["default"] = IdentityBadge;
//# sourceMappingURL=IdentityBadge.js.map
