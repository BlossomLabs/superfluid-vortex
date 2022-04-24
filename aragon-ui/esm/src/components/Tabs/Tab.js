import _styled from 'styled-components';
import React__default, { useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useInside } from '../../../node_modules/use-inside/dist/use-inside.esm.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { BIG_RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

function Tab(_ref) {
  let {
    index,
    item,
    selected,
    onChange
  } = _ref;
  const theme = useTheme();
  const [insideSidePanel] = useInside('SidePanel');
  const handleClick = useCallback(() => {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React__default.createElement(_StyledLi, null, /*#__PURE__*/React__default.createElement(_StyledButtonBase, {
    focusRingRadius: BIG_RADIUS,
    onClick: handleClick,
    $_css: textStyle('body2'),
    $_css2: theme.surfacePressed
  }, /*#__PURE__*/React__default.createElement(_StyledSpan, {
    $_css3: 8 * GU - (insideSidePanel ? 1 : 2),
    $_css4: 3 * GU,
    $_css5: selected ? theme.surfaceContent : theme.surfaceContentSecondary
  }, item, /*#__PURE__*/React__default.createElement(_StyledSpan2, {
    $_css6: theme.selected,
    $_css7: Number(selected),
    $_css8: Number(selected)
  }))));
}

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
};

var _StyledLi = _styled("li").withConfig({
  displayName: "Tab___StyledLi",
  componentId: "sc-wb6fdg-0"
})(["list-style:none"]);

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Tab___StyledButtonBase",
  componentId: "sc-wb6fdg-1"
})(["", ";border-radius:0;transition:background 50ms ease-in-out;&:active{background:", ";}"], p => p.$_css, p => p.$_css2);

var _StyledSpan = _styled("span").withConfig({
  displayName: "Tab___StyledSpan",
  componentId: "sc-wb6fdg-2"
})(["display:flex;position:relative;align-items:center;height:", "px;padding:0 ", "px;white-space:nowrap;color:", ";"], p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "Tab___StyledSpan2",
  componentId: "sc-wb6fdg-3"
})(["position:absolute;left:0;right:0;bottom:0;background:", ";height:2px;opacity:", ";transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:ease-in-out;transform:scale3d(1,", ",1);transform-origin:0 100%;"], p => p.$_css6, p => p.$_css7, p => p.$_css8);

export { Tab as default };
//# sourceMappingURL=Tab.js.map
