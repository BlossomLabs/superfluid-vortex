import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default, { forwardRef } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { INPUT_BORDER, START_DATE, END_DATE } from './consts.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import IconCalendar from '../../icons/components/IconCalendar.js';
import { useTheme } from '../../theme/Theme2.js';
import { MEDIUM_RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const Labels = /*#__PURE__*/forwardRef(function Labels(_ref, ref) {
  let {
    enabled,
    startText,
    endText,
    hasSetDates,
    onClick,
    ...props
  } = _ref;
  const theme = useTheme();
  const hasNoStart = startText === START_DATE;
  const hasNoEnd = endText === END_DATE;
  return /*#__PURE__*/React__default.createElement(ButtonBaseWithFocus, {
    focusRingRadius: MEDIUM_RADIUS,
    ref: ref,
    onClick: onClick
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends({}, props, {
    $_css: 27.5 * GU,
    $_css2: hasSetDates ? theme.accent : theme.border,
    $_css3: theme.surface,
    $_css4: theme.controlBorderPressed
  }), /*#__PURE__*/React__default.createElement(_StyledDiv2, null, /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    $_css5: hasNoStart ? theme.hint : 'inherit',
    $_css6: textStyle(hasNoStart ? 'body2' : 'body3')
  }, startText), /*#__PURE__*/React__default.createElement(_StyledDiv4, {
    $_css7: theme.hint.alpha(0.3)
  }, "|"), /*#__PURE__*/React__default.createElement(_StyledDiv5, {
    $_css8: hasNoEnd ? theme.hint : 'inherit',
    $_css9: textStyle(hasNoEnd ? 'body2' : 'body3')
  }, endText)), /*#__PURE__*/React__default.createElement(_StyledDiv6, null, /*#__PURE__*/React__default.createElement(_StyledIconCalendar, {
    $_css10: enabled ? theme.accent : theme.surfaceIcon
  }))));
});
Labels.propTypes = {
  enabled: PropTypes.bool,
  hasSetDates: PropTypes.bool,
  onClick: PropTypes.func,
  startText: PropTypes.string.isRequired,
  endText: PropTypes.string.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "Labels___StyledDiv",
  componentId: "sc-v7leuj-0"
})(["position:relative;width:", "px;display:flex;justify-content:space-between;align-items:center;padding:7px 6px;border:", "px solid ", ";border-radius:", "px;background:", ";overflow:hidden;cursor:pointer;&:active{border-color:", ";}&:focus{outline:none;}"], p => p.$_css, INPUT_BORDER, p => p.$_css2, MEDIUM_RADIUS, p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv2",
  componentId: "sc-v7leuj-1"
})(["display:flex;flex:1;justify-content:space-around;align-items:center;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv3",
  componentId: "sc-v7leuj-2"
})(["color:", ";text-align:center;", ""], p => p.$_css5, p => p.$_css6);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv4",
  componentId: "sc-v7leuj-3"
})(["color:", ";font-size:13px;"], p => p.$_css7);

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv5",
  componentId: "sc-v7leuj-4"
})(["color:", ";text-align:center;", ""], p => p.$_css8, p => p.$_css9);

var _StyledDiv6 = _styled("div").withConfig({
  displayName: "Labels___StyledDiv6",
  componentId: "sc-v7leuj-5"
})(["display:flex;padding:0 4px 0 10px;"]);

var _StyledIconCalendar = _styled(IconCalendar).withConfig({
  displayName: "Labels___StyledIconCalendar",
  componentId: "sc-v7leuj-6"
})(["color:", ";"], p => p.$_css10);

export { Labels as default };
//# sourceMappingURL=Labels.js.map
