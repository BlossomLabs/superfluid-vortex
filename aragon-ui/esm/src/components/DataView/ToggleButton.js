import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import { useTheme } from '../../theme/Theme2.js';
import IconUp from '../../icons/components/IconUp.js';
import IconDown from '../../icons/components/IconDown.js';
import { BIG_RADIUS } from '../../style/constants.js';

function ToggleButton(_ref) {
  let {
    onClick,
    opened
  } = _ref;
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledButtonIcon, {
    label: opened ? 'Close' : 'Open',
    focusRingRadius: BIG_RADIUS,
    onClick: onClick,
    $_css: theme.surfaceContentSecondary
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, {
    $_css2: opened ? 1 : 0,
    $_css3: opened ? 1 : 0
  }, /*#__PURE__*/React__default.createElement(IconUp, {
    size: "small"
  })), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    $_css4: opened ? -1 : 0,
    $_css5: opened ? -1 : 0
  }, /*#__PURE__*/React__default.createElement(IconDown, {
    size: "small"
  })));
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  opened: PropTypes.bool.isRequired
};

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "ToggleButton___StyledButtonIcon",
  componentId: "sc-1dx9ojh-0"
})(["display:flex;flex-direction:column;color:", ";& > div{display:flex;transform-origin:50% 50%;transition:transform 250ms ease-in-out;}"], p => p.$_css);

var _StyledDiv = _styled("div").withConfig({
  displayName: "ToggleButton___StyledDiv",
  componentId: "sc-1dx9ojh-1"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "ToggleButton___StyledDiv2",
  componentId: "sc-1dx9ojh-2"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], p => p.$_css4, p => p.$_css5);

export { ToggleButton };
//# sourceMappingURL=ToggleButton.js.map
