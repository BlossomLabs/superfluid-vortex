import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';

function ButtonText(_ref) {
  let {
    horizontalPadding,
    ...props
  } = _ref;
  const theme = useTheme();
  const leftPadding = Number(horizontalPadding === 'left' || horizontalPadding === 'both') * GU;
  const rightPadding = Number(horizontalPadding === 'right' || horizontalPadding === 'both') * GU;
  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends({}, props, {
    $_css: 1 * GU,
    $_css2: rightPadding,
    $_css3: 1 * GU,
    $_css4: leftPadding,
    $_css5: theme.link
  }));
}

ButtonText.propTypes = { ...ButtonBaseWithFocus.propTypes,
  horizontalPadding: PropTypes.oneOf(['both', 'left', 'right', 'none'])
};
ButtonText.defaultProps = {
  horizontalPadding: 'both'
};

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ButtonText___StyledButtonBase",
  componentId: "sc-ocpj67-0"
})(["padding:", "px ", "px ", "px ", "px;color:", ";font-size:inherit;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

export { ButtonText as default };
//# sourceMappingURL=ButtonText.js.map
