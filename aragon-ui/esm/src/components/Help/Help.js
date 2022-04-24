import _styled from 'styled-components';
import React__default, { useRef, useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useInside } from '../../../node_modules/use-inside/dist/use-inside.esm.js';
import DiscButton from '../DiscButton/DiscButton.js';
import Popover from '../Popover/Popover.js';
import { useTheme } from '../../theme/Theme2.js';
import IconQuestion from '../../icons/components/IconQuestion.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

function Help(_ref) {
  let {
    hint,
    children
  } = _ref;
  const theme = useTheme();
  const buttonElement = useRef();
  const [visible, setVisible] = useState(false);
  const open = useCallback(() => setVisible(true), []);
  const close = useCallback(() => setVisible(false), []);
  const [insideBoxHeading] = useInside('Box:heading');
  const [insideFieldLabel] = useInside('Field:label');
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(_StyledDiscButton, {
    ref: buttonElement,
    description: hint,
    onClick: open,
    size: 2 * GU,
    $_css: insideFieldLabel ? -3 : 0,
    $_css2: insideBoxHeading || insideFieldLabel ? 1 * GU : 0
  }, /*#__PURE__*/React__default.createElement(IconQuestion, {
    size: "tiny"
  })), /*#__PURE__*/React__default.createElement(_StyledPopover, {
    opener: buttonElement.current,
    visible: visible,
    onClose: close,
    $_css3: textStyle('body3')
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, {
    $_css4: 48 * GU,
    $_css5: 20 * GU,
    $_css6: 3 * GU,
    $_css7: theme.helpSurface,
    $_css8: 0.5 * GU,
    $_css9: theme.help
  }, children)));
}

Help.propTypes = {
  hint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

var _StyledDiscButton = _styled(DiscButton).withConfig({
  displayName: "Help___StyledDiscButton",
  componentId: "sc-1rc2q3j-0"
})(["margin-top:", "px;margin-left:", "px;"], p => p.$_css, p => p.$_css2);

var _StyledPopover = _styled(Popover).withConfig({
  displayName: "Help___StyledPopover",
  componentId: "sc-1rc2q3j-1"
})(["border:0;overflow:hidden;", ";"], p => p.$_css3);

var _StyledDiv = _styled("div").withConfig({
  displayName: "Help___StyledDiv",
  componentId: "sc-1rc2q3j-2"
})(["position:relative;max-width:", "px;min-width:", "px;padding:", "px;background:", ";&:before{content:'';position:absolute;top:0;left:0;bottom:0;width:", "px;background:", ";}"], p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9);

export { Help as default };
//# sourceMappingURL=Help.js.map
