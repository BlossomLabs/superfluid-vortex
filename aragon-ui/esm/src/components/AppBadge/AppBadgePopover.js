import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../proptypes.js';
import { capitalize } from '../../utils/characters.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Link from '../Link/Link.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { ImageExists } from '../../hooks/useImageExists.js';

const AppBadgePopover = /*#__PURE__*/React__default.memo(function AppBadgePopover(_ref) {
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
  const explorerUrl = blockExplorerUrl('address', appAddress, {
    networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React__default.createElement(BadgePopoverBase, {
    addressField: /*#__PURE__*/React__default.createElement(ImageExists, {
      src: iconSrc
    }, _ref2 => {
      let {
        exists,
        displayFallback
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(AddressField, {
        address: appAddress,
        icon: /*#__PURE__*/React__default.createElement(Icon, {
          src: exists ? iconSrc : iconFallbackSrc
        })
      });
    }),
    link: explorerUrl && /*#__PURE__*/React__default.createElement(Link, {
      href: explorerUrl
    }, "See on ", capitalize(explorerProvider !== null && explorerProvider !== void 0 ? explorerProvider : 'blockscout')),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    visible: visible
  });
});
AppBadgePopover.propTypes = {
  appAddress: PropTypes.string.isRequired,
  explorerProvider: PropTypes.string,
  iconFallbackSrc: PropTypes.string,
  iconSrc: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: PropTypes.node.isRequired,
  visible: PropTypes.bool
};

function Icon(_ref3) {
  let {
    src,
    ...props
  } = _ref3;
  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends({}, props, {
    $_css: src
  }));
}

Icon.propTypes = {
  src: PropTypes.string.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBadgePopover___StyledDiv",
  componentId: "sc-czv39k-0"
})(["width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css);

export { AppBadgePopover as default };
//# sourceMappingURL=AppBadgePopover.js.map
