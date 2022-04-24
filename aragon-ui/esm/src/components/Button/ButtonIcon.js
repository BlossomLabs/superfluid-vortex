import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonWithRef from './Button.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { warnOnce } from '../../utils/environment.js';
import { GU } from '../../style/constants.js';

function ButtonIcon(_ref) {
  let {
    label,
    children,
    mode,
    ...props
  } = _ref;
  const theme = useTheme();

  if (mode !== undefined) {
    warnOnce('ButtonIcon:mode', 'ButtonIcon: the mode prop is deprecated. Please use Button with the icon prop instead.');
  }

  if (mode === 'button') {
    return /*#__PURE__*/React__default.createElement(ButtonWithRef, _extends({
      label: label,
      icon: children,
      display: "icon"
    }, props));
  }

  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends({
    title: label
  }, props, {
    $_css: 4 * GU,
    $_css2: 4 * GU,
    $_css3: theme.surfacePressed
  }), children);
}

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  // deprecated
  mode: PropTypes.oneOf(['button'])
};

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ButtonIcon___StyledButtonBase",
  componentId: "sc-14eq7o9-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:", "px;height:", "px;&:active{background:", ";}"], p => p.$_css, p => p.$_css2, p => p.$_css3);

export { ButtonIcon as default };
//# sourceMappingURL=ButtonIcon.js.map
