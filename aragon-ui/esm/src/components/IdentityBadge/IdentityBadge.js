import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default, { useRef, useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import EthIdenticon from '../EthIdenticon/EthIdenticon.js';
import IdentityBadgePopover from './IdentityBadgePopover.js';
import { isAddress, shortenAddress } from '../../utils/web3.js';
import { warnOnce } from '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const IdentityBadge = /*#__PURE__*/React__default.memo(function IdentityBadge(_ref) {
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
    warnOnce('IdentityBadge:customLabel', 'The “customLabel” prop is deprecated. Please use “label” instead.');
    label = label || customLabel;
  }

  if (fontSize) {
    warnOnce('IdentityBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  const badgeRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleOpen = useCallback(() => setOpened(true), []);
  const address = isAddress(entity) ? entity : null;
  const displayLabel = label || (address && shorten ? shortenAddress(address) : entity);
  return /*#__PURE__*/React__default.createElement(BadgeBase, _extends({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && /*#__PURE__*/React__default.createElement(_StyledDiv, {
      $_css: 1 * GU,
      $_css2: compact ? `
                  position: relative;
                  top: -1px;
                ` : ''
    }, /*#__PURE__*/React__default.createElement(EthIdenticon, {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: `
        ${!label && address ? textStyle('address1') : ''}
        ${labelStyle}
      `,
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), popoverDisabled => !popoverDisabled && address && /*#__PURE__*/React__default.createElement(IdentityBadgePopover, {
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
  badgeOnly: PropTypes.bool,
  compact: PropTypes.bool,
  connectedAccount: PropTypes.bool,
  entity: PropTypes.string,
  explorerProvider: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: PropTypes.node,
  shorten: PropTypes.bool,
  // Deprecated
  customLabel: PropTypes.string,
  fontSize: PropTypes.string
};
IdentityBadge.defaultProps = {
  entity: '',
  labelStyle: '',
  networkType: 'main',
  shorten: true
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "sc-e0mkkt-0"
})(["display:block;margin-right:", "px;", ";"], p => p.$_css, p => p.$_css2);

export { IdentityBadge as default };
//# sourceMappingURL=IdentityBadge.js.map
