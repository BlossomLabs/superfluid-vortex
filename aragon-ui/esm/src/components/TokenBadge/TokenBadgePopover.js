import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import Link from '../Link/Link.js';
import { capitalize } from '../../utils/characters.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { ImageExists } from '../../hooks/useImageExists.js';
import { GU } from '../../style/constants.js';

const TokenBadgePopover = /*#__PURE__*/React__default.memo(function TokenBadgePopover(_ref) {
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
  const etherscanUrl = blockExplorerUrl('token', address, {
    networkType,
    provider: explorerProvider
  });
  return /*#__PURE__*/React__default.createElement(BadgePopoverBase, {
    addressField: iconSrc ? /*#__PURE__*/React__default.createElement(ImageExists, {
      src: iconSrc
    }, _ref2 => {
      let {
        exists
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(AddressField, {
        address: address,
        icon: exists ? /*#__PURE__*/React__default.createElement(Icon, {
          src: iconSrc
        }) : null
      });
    }) : /*#__PURE__*/React__default.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && /*#__PURE__*/React__default.createElement(Link, {
      href: etherscanUrl
    }, "See on ", capitalize(explorerProvider)),
    onClose: onClose,
    opener: opener,
    title: title,
    visible: visible
  });
});
TokenBadgePopover.propTypes = {
  address: PropTypes.string.isRequired,
  explorerProvider: PropTypes.string,
  iconSrc: PropTypes.string,
  networkType: PropTypes.string,
  onClose: PropTypes.func,
  opener: PropTypes._element,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool
};

function Icon(_ref3) {
  let {
    src
  } = _ref3;
  return /*#__PURE__*/React__default.createElement(_StyledDiv, {
    $_css: 0.5 * GU,
    $_css2: 0.5 * GU,
    $_css3: src
  });
}

Icon.propTypes = {
  src: PropTypes.string.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "TokenBadgePopover___StyledDiv",
  componentId: "sc-buhnsh-0"
})(["width:calc(100% - ", "px);height:calc(100% - ", "px);background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p.$_css, p => p.$_css2, p => p.$_css3);

export { TokenBadgePopover as default };
//# sourceMappingURL=TokenBadgePopover.js.map
