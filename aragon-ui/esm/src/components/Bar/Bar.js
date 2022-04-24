import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Inside } from '../../../node_modules/use-inside/dist/use-inside.esm.js';
import { useTheme } from '../../theme/Theme2.js';
import { useLayout } from '../Layout/Layout.js';
import { GU, BIG_RADIUS } from '../../style/constants.js';

const BAR_PADDING = 2 * GU;

function Bar(_ref) {
  let {
    children,
    primary,
    secondary,
    ...props
  } = _ref;
  const theme = useTheme();
  const {
    layoutName
  } = useLayout();
  const fullScreen = layoutName === 'small';
  const content = children || /*#__PURE__*/React__default.createElement(_StyledDiv, null, /*#__PURE__*/React__default.createElement(_StyledDiv2, null, /*#__PURE__*/React__default.createElement(Inside, {
    name: "Bar:primary"
  }, primary)), /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(Inside, {
    name: "Bar:secondary"
  }, secondary)));
  return /*#__PURE__*/React__default.createElement(Inside, {
    name: "Bar"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv4, _extends({}, props, {
    $_css: fullScreen ? 0 : BIG_RADIUS,
    $_css2: theme.surface,
    $_css3: theme.border,
    $_css4: fullScreen ? '1px 0' : '1px',
    $_css5: 8 * GU,
    $_css6: 2 * GU
  }), content));
}

Bar.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.node,
  secondary: PropTypes.node
};
Bar.PADDING = BAR_PADDING;

var _StyledDiv = _styled("div").withConfig({
  displayName: "Bar___StyledDiv",
  componentId: "sc-1bhv6q6-0"
})(["display:flex;justify-content:space-between;width:100%;height:100%;"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Bar___StyledDiv2",
  componentId: "sc-1bhv6q6-1"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], BAR_PADDING);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Bar___StyledDiv3",
  componentId: "sc-1bhv6q6-2"
})(["display:flex;align-items:center;height:100%;padding-right:", "px;"], BAR_PADDING);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Bar___StyledDiv4",
  componentId: "sc-1bhv6q6-3"
})(["border-radius:", "px;background:", ";border-style:solid;border-color:", ";border-width:", ";height:", "px;margin-bottom:", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

export { Bar as default };
//# sourceMappingURL=Bar.js.map
