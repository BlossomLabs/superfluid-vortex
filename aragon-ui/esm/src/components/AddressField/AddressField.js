import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import TextCopy from '../TextCopy/TextCopy.js';
import EthIdenticon from '../EthIdenticon/EthIdenticon.js';
import { GU } from '../../style/constants.js';

const HEIGHT = 5 * GU;
const IDENTICON_SIZE = 6 * GU;
const AddressField = /*#__PURE__*/React__default.forwardRef(function AddressField(_ref, ref) {
  let {
    address,
    autofocus,
    icon,
    onCopy,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default.createElement(TextCopy, {
    ref: ref,
    adornment: icon || /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(_StyledEthIdenticon, {
      address: address,
      onCopy: onCopy // FIXME: Should be in YextCopy
      ,
      scale: 2,
      $_css: (HEIGHT - 2) / IDENTICON_SIZE
    })),
    autofocus: autofocus,
    value: address
  });
});
AddressField.propTypes = {
  address: PropTypes.string.isRequired,
  autofocus: PropTypes.bool,
  icon: PropTypes.node,
  onCopy: PropTypes.func
};
AddressField.defaultProps = {
  autofocus: true
};

var _StyledEthIdenticon = _styled(EthIdenticon).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "sc-ez2u23-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], p => p.$_css);

export { AddressField as default };
//# sourceMappingURL=AddressField.js.map
