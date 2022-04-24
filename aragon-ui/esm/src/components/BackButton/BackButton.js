import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useInside } from '../../../node_modules/use-inside/dist/use-inside.esm.js';
import Bar from '../Bar/Bar.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useLayout } from '../Layout/Layout.js';
import { useTheme } from '../../theme/Theme2.js';
import IconArrowLeft from '../../icons/components/IconArrowLeft.js';
import { BIG_RADIUS, RADIUS, GU } from '../../style/constants.js';

function BackButton(_ref) {
  let {
    label,
    ...props
  } = _ref;
  const theme = useTheme();
  const [insideBarPrimary] = useInside('Bar:primary');
  const {
    layoutName
  } = useLayout();
  const compact = layoutName === 'small';
  const horizontalPadding = (compact ? 2 : 3) * GU;
  return /*#__PURE__*/React__default.createElement(_StyledButtonBase, _extends({
    focusRingRadius: RADIUS,
    focusRingSpacing: 1
  }, props, {
    $_css: insideBarPrimary ? -Bar.PADDING : 0,
    $_css2: horizontalPadding,
    $_css3: horizontalPadding - 4,
    $_css4: theme.border,
    $_css5: theme.surfaceContent,
    $_css6: theme.surfaceInteractive,
    $_css7: theme.surfaceHighlight
  }), /*#__PURE__*/React__default.createElement(_StyledSpan, {
    $_css8: theme.accent
  }, /*#__PURE__*/React__default.createElement(IconArrowLeft, null)), /*#__PURE__*/React__default.createElement(_StyledSpan2, {
    $_css9: 1 * GU
  }, label));
}

BackButton.propTypes = {
  label: PropTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "BackButton___StyledButtonBase",
  componentId: "sc-m5pxa9-0"
})(["display:inline-flex;align-items:center;border-radius:", "px 0 0 ", "px;height:100%;margin-left:", "px;padding:0 ", "px 0 ", "px;border-right:1px solid ", ";color:", ";background:", ";&:active{background:", ";}"], BIG_RADIUS, BIG_RADIUS, p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7);

var _StyledSpan = _styled("span").withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "sc-m5pxa9-1"
})(["position:relative;top:2px;color:", ";"], p => p.$_css8);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "sc-m5pxa9-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], p => p.$_css9);

export { BackButton as default };
//# sourceMappingURL=BackButton.js.map
