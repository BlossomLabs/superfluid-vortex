'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Tab(_ref) {
  let {
    index,
    item,
    selected,
    onChange
  } = _ref;
  const theme = Theme.useTheme();
  const [insideSidePanel] = useInside_esm.useInside('SidePanel');
  const handleClick = React.useCallback(() => {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledLi, null, /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, {
    focusRingRadius: constants.BIG_RADIUS,
    onClick: handleClick,
    $_css: textStyles.textStyle('body2'),
    $_css2: theme.surfacePressed
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css3: 8 * constants.GU - (insideSidePanel ? 1 : 2),
    $_css4: 3 * constants.GU,
    $_css5: selected ? theme.surfaceContent : theme.surfaceContentSecondary
  }, item, /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
    $_css6: theme.selected,
    $_css7: Number(selected),
    $_css8: Number(selected)
  }))));
}

Tab.propTypes = {
  index: index.PropTypes.number.isRequired,
  item: index.PropTypes.node.isRequired,
  onChange: index.PropTypes.func.isRequired,
  selected: index.PropTypes.bool.isRequired
};

var _StyledLi = _styled__default["default"]("li").withConfig({
  displayName: "Tab___StyledLi",
  componentId: "sc-wb6fdg-0"
})(["list-style:none"]);

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "Tab___StyledButtonBase",
  componentId: "sc-wb6fdg-1"
})(["", ";border-radius:0;transition:background 50ms ease-in-out;&:active{background:", ";}"], p => p.$_css, p => p.$_css2);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Tab___StyledSpan",
  componentId: "sc-wb6fdg-2"
})(["display:flex;position:relative;align-items:center;height:", "px;padding:0 ", "px;white-space:nowrap;color:", ";"], p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "Tab___StyledSpan2",
  componentId: "sc-wb6fdg-3"
})(["position:absolute;left:0;right:0;bottom:0;background:", ";height:2px;opacity:", ";transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:ease-in-out;transform:scale3d(1,", ",1);transform-origin:0 100%;"], p => p.$_css6, p => p.$_css7, p => p.$_css8);

exports["default"] = Tab;
//# sourceMappingURL=Tab.js.map