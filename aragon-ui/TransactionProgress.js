'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-77f6d5c1.js');
var ButtonIcon = require('./ButtonIcon.js');
var Info = require('./Info.js');
var Link = require('./Link.js');
var Popover = require('./Popover.js');
var ProgressBar = require('./ProgressBar.js');
var Timer = require('./Timer.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
var miscellaneous = require('./miscellaneous.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./index-6b8189f0.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./Button.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./components.js');
require('./springs.js');
require('./dayjs.min-6ce914f7.js');
require('./date.js');
require('./Redraw-78519803.js');
require('./getDisplayName-fd5924a6.js');
require('./IconClock.js');
require('./IconPropTypes-0ef380f7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TransactionProgress = /*#__PURE__*/React__default["default"].memo(function TransactionProgress(_ref) {
  let {
    visible,
    slow,
    progress,
    endTime,
    transactionHashUrl,
    onClose,
    opener
  } = _ref;
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Popover["default"], {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSection, {
    $_css: 2 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    $_css2: 1 * constants.GU,
    $_css3: 1 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(IconCross["default"], null)), /*#__PURE__*/React__default["default"].createElement(_StyledH, null, "Pending transaction"), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css4: 2 * constants.GU,
    $_css5: 1 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css6: textStyles.textStyle('label2'),
    $_css7: theme.contentSecondary
  }, "Estimated time:"), /*#__PURE__*/React__default["default"].createElement(Timer["default"], {
    format: "ms",
    end: endTime
  })), /*#__PURE__*/React__default["default"].createElement(_StyledProgressBar, {
    value: progress,
    $_css8: theme.accent
  }), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css9: slow ? 'space-between' : 'end',
    $_css10: 2 * constants.GU
  }, slow && /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css11: 2 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(Info["default"].Alert, null, "Slow transaction. Retry with more gas")), /*#__PURE__*/React__default["default"].createElement(_StyledLink, {
    href: transactionHashUrl
  }, "See on Etherscan"))));
});
TransactionProgress.propTypes = {
  endTime: proptypes.PropTypes.instanceOf(Date),
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  progress: proptypes.PropTypes.number,
  slow: proptypes.PropTypes.bool,
  transactionHashUrl: proptypes.PropTypes.string,
  visible: proptypes.PropTypes.bool
};
TransactionProgress.defaultProps = {
  onClose: miscellaneous.noop,
  visible: false
};

var _StyledSection = _styled__default["default"]("section").withConfig({
  displayName: "TransactionProgress___StyledSection",
  componentId: "sc-o70irh-0"
})(["padding:", "px;"], p => p.$_css);

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "TransactionProgress___StyledButtonIcon",
  componentId: "sc-o70irh-1"
})(["position:absolute;top:", "px;right:", "px;"], p => p.$_css2, p => p.$_css3);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "TransactionProgress___StyledH",
  componentId: "sc-o70irh-2"
})(["font-weight:600"]);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TransactionProgress___StyledDiv",
  componentId: "sc-o70irh-3"
})(["display:flex;justify-content:space-between;align-items:flex-end;margin:", "px 0 ", "px;"], p => p.$_css4, p => p.$_css5);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "TransactionProgress___StyledSpan",
  componentId: "sc-o70irh-4"
})(["", ";color:", ";"], p => p.$_css6, p => p.$_css7);

var _StyledProgressBar = _styled__default["default"](ProgressBar["default"]).withConfig({
  displayName: "TransactionProgress___StyledProgressBar",
  componentId: "sc-o70irh-5"
})(["color:", ";"], p => p.$_css8);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "TransactionProgress___StyledDiv2",
  componentId: "sc-o70irh-6"
})(["display:flex;justify-content:", ";align-items:center;padding-top:", "px;"], p => p.$_css9, p => p.$_css10);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "TransactionProgress___StyledDiv3",
  componentId: "sc-o70irh-7"
})(["margin-right:", "px;"], p => p.$_css11);

var _StyledLink = _styled__default["default"](Link["default"]).withConfig({
  displayName: "TransactionProgress___StyledLink",
  componentId: "sc-o70irh-8"
})(["text-decoration:none"]);

exports["default"] = TransactionProgress;
//# sourceMappingURL=TransactionProgress.js.map
