'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var BadgeBase = require('./BadgeBase.js');
var TokenBadgePopover = require('./TokenBadgePopover.js');
var web3 = require('./web3.js');
var constants = require('./constants.js');
var environment = require('./environment.js');
var useImageExists = require('./useImageExists.js');
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
require('./text-styles.js');
require('./font.js');
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
require('./components.js');
require('./springs.js');
require('./miscellaneous.js');
require('./IconCopy.js');
require('./IconPropTypes-0ef380f7.js');
require('./EthIdenticon.js');
require('./provider-types.js');
require('./BadgePopoverBase.js');
require('./Popover.js');
require('./BadgePopoverActionType.js');
require('./IconCross.js');
require('./Link.js');
require('./characters.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TokenBadge = /*#__PURE__*/React__default["default"].memo(function TokenBadge(_ref) {
  let {
    address,
    badgeOnly,
    className,
    compact,
    explorerProvider,
    name,
    networkType,
    style,
    symbol
  } = _ref;
  const badgeRef = React.useRef(null);
  const [opened, setOpened] = React.useState(false);
  const handleClose = React.useCallback(() => setOpened(false), []);
  const handleOpen = React.useCallback(() => setOpened(true), []);
  const isValidAddress = web3.isAddress(address);
  const iconSrc = isValidAddress && networkType === 'main' ? web3.tokenIconUrl(address) : null;
  const title = name && symbol ? `${name} (${symbol})` : symbol;

  if (!isValidAddress) {
    environment.warn(`TokenBadge: provided invalid address (${address})`);
  }

  return /*#__PURE__*/React__default["default"].createElement(BadgeBase["default"], {
    badgeRef: badgeRef,
    className: className,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React__default["default"].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, _ref2 => {
      let {
        exists
      } = _ref2;
      return exists && /*#__PURE__*/React__default["default"].createElement(Icon, {
        compact: compact,
        src: iconSrc
      });
    }),
    label: /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
      $_css: compact ? 0 : `${1 * constants.GU}px`
    }, name && /*#__PURE__*/React__default["default"].createElement(Name, null, name), /*#__PURE__*/React__default["default"].createElement(Symbol, null, name ? `(${symbol})` : symbol)),
    onClick: isValidAddress ? handleOpen : undefined,
    style: style,
    title: `${title} − ${address || 'No address'}`
  }, popoverDisabled => !popoverDisabled && address && /*#__PURE__*/React__default["default"].createElement(TokenBadgePopover["default"], {
    address: address,
    explorerProvider: explorerProvider,
    iconSrc: iconSrc,
    networkType: networkType,
    onClose: handleClose,
    opener: badgeRef.current,
    title: title,
    visible: opened
  }));
});
TokenBadge.propTypes = {
  address: index.PropTypes.string,
  badgeOnly: index.PropTypes.bool,
  className: index.PropTypes.string,
  compact: index.PropTypes.bool,
  explorerProvider: index.PropTypes.string,
  name: index.PropTypes.string,
  networkType: index.PropTypes.string,
  style: index.PropTypes.object,
  symbol: index.PropTypes.string.isRequired
};
TokenBadge.defaultProps = {
  address: '',
  name: '',
  networkType: 'main'
};

function Icon(_ref3) {
  let {
    compact,
    src,
    ...props
  } = _ref3;
  const margin = 1 * constants.GU;
  return /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, _extends._extends({}, props, {
    $_css2: compact ? margin : 0,
    $_css3: compact ? 0 : margin,
    $_css4: src
  }));
}

Icon.propTypes = {
  compact: index.PropTypes.bool,
  src: index.PropTypes.string.isRequired
};
const Name = _styled__default["default"].span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-1m9boyq-0"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:", "px;"], 0.5 * constants.GU);
const Symbol = _styled__default["default"].span.withConfig({
  displayName: "TokenBadge__Symbol",
  componentId: "sc-1m9boyq-1"
})(["flex-shrink:0;"]);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-1m9boyq-2"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], p => p.$_css);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "TokenBadge___StyledSpan2",
  componentId: "sc-1m9boyq-3"
})(["flex-shrink:0;display:block;width:18px;height:18px;margin:0 ", "px 0 ", "px;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css2, p => p.$_css3, p => p.$_css4);

exports["default"] = TokenBadge;
//# sourceMappingURL=TokenBadge.js.map
