import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default, { useRef, useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Tag from '../Tag/Tag.js';
import AppBadgePopover from './AppBadgePopover.js';
import iconDefaultSvg from './assets/app-default.svg.js';
import { isAddress } from '../../utils/web3.js';
import { warn } from '../../utils/environment.js';
import { ImageExists } from '../../hooks/useImageExists.js';
import { GU, BIG_RADIUS } from '../../style/constants.js';

const AppBadge = /*#__PURE__*/React__default.memo(function AppBadge(_ref) {
  let {
    appAddress,
    badgeOnly,
    compact,
    explorerProvider,
    iconSrc,
    identifier,
    label,
    labelStyle,
    networkType,
    popoverAction,
    popoverTitle,
    ...props
  } = _ref;
  const badgeRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleOpen = useCallback(() => setOpened(true), []);
  const isValidAddress = isAddress(appAddress);

  if (!badgeOnly && !isValidAddress) {
    warn(`AppBadge: provided invalid app address (${appAddress})`);
  }

  popoverTitle = popoverTitle || /*#__PURE__*/React__default.createElement(_StyledDiv, null, /*#__PURE__*/React__default.createElement(_StyledSpan, null, label), identifier && /*#__PURE__*/React__default.createElement(_StyledTag, {
    mode: "identifier",
    $_css: 1 * GU
  }, identifier));
  return /*#__PURE__*/React__default.createElement(BadgeBase, {
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: /*#__PURE__*/React__default.createElement(ImageExists, {
      src: iconSrc
    }, _ref2 => {
      let {
        displayFallback,
        exists
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(Icon, {
        compact: compact,
        src: exists ? iconSrc : iconDefaultSvg
      });
    }),
    label: label,
    labelStyle: labelStyle,
    onClick: isValidAddress ? handleOpen : undefined,
    title: appAddress
  }, popoverDisabled => !popoverDisabled && appAddress && /*#__PURE__*/React__default.createElement(AppBadgePopover, {
    appAddress: appAddress,
    explorerProvider: explorerProvider,
    iconFallbackSrc: iconDefaultSvg,
    iconSrc: iconSrc,
    networkType: networkType,
    onClose: handleClose,
    opener: badgeRef.current,
    popoverAction: popoverAction,
    title: popoverTitle,
    visible: opened
  }));
});
AppBadge.propTypes = {
  appAddress: PropTypes.string,
  badgeOnly: PropTypes.bool,
  compact: PropTypes.bool,
  explorerProvider: PropTypes.string,
  iconSrc: PropTypes.string,
  identifier: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.string,
  networkType: PropTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: PropTypes.node
};

const Icon = _ref3 => {
  let {
    compact,
    src,
    ...props
  } = _ref3;
  const size = (compact ? 2.25 : 3) * GU;
  return /*#__PURE__*/React__default.createElement(_StyledSpan2, _extends({}, props, {
    $_css2: size,
    $_css3: size,
    $_css4: 1 * GU,
    $_css5: compact ? `${BIG_RADIUS}px` : 0,
    $_css6: src
  }));
};

Icon.propTypes = {
  compact: PropTypes.bool,
  src: PropTypes.string.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBadge___StyledDiv",
  componentId: "sc-sfxk71-0"
})(["display:grid;align-items:center;grid-template-columns:auto 1fr;"]);

var _StyledSpan = _styled("span").withConfig({
  displayName: "AppBadge___StyledSpan",
  componentId: "sc-sfxk71-1"
})(["display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

var _StyledTag = _styled(Tag).withConfig({
  displayName: "AppBadge___StyledTag",
  componentId: "sc-sfxk71-2"
})(["margin-left:", "px;"], p => p.$_css);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "AppBadge___StyledSpan2",
  componentId: "sc-sfxk71-3"
})(["flex-shrink:0;width:", "px;height:", "px;margin-right:", "px;border-radius:", ";background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

export { AppBadge as default };
//# sourceMappingURL=AppBadge.js.map
