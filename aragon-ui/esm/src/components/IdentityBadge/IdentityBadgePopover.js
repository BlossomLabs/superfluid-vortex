import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Link from '../Link/Link.js';
import Tag from '../Tag/Tag.js';
import { capitalize } from '../../utils/characters.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';

const IdentityBadgePopover = /*#__PURE__*/React__default.memo(function IdentityBadgePopover(_ref) {
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
  const etherscanUrl = blockExplorerUrl('address', address, {
    networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React__default.createElement(BadgePopoverBase, {
    addressField: /*#__PURE__*/React__default.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default.createElement(Link, {
      href: etherscanUrl
    }, "See on ", capitalize(explorerProvider !== null && explorerProvider !== void 0 ? explorerProvider : 'blockscout')),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && /*#__PURE__*/React__default.createElement(_StyledTag, {
      title: "This is your Ethereum address",
      $_css: 1 * GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: PropTypes.string,
  connectedAccount: PropTypes.bool,
  explorerProvider: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node,
  visible: PropTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

var _StyledTag = _styled(Tag).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-ewaz9y-0"
})(["margin-left:", "px;"], p => p.$_css);

export { IdentityBadgePopover as default };
//# sourceMappingURL=IdentityBadgePopover.js.map
