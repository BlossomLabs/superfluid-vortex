import _styled from 'styled-components';
import React__default, { useState } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import FocusVisible from '../FocusVisible/FocusVisible.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';
import { Spring } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { springs } from '../../style/springs.js';
import { noop } from '../../utils/miscellaneous.js';

const BORDER = 1;
const WRAPPER_WIDTH = 5 * GU;
const WRAPPER_HEIGHT = 2.25 * GU;

function Switch(_ref) {
  let {
    checked,
    disabled,
    onChange
  } = _ref;
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = disabled ? noop : () => onChange(!checked);
  return /*#__PURE__*/React__default.createElement(FocusVisible, null, _ref2 => {
    let {
      focusVisible,
      onFocus
    } = _ref2;
    return /*#__PURE__*/React__default.createElement(_StyledSpan, {
      onClick: e => {
        e.preventDefault();
        handleChange();
      },
      $_css: theme.border,
      $_css2: disabled ? theme.controlBorder : checked ? theme.selected : theme.control,
      $_css3: disabled ? 'default' : 'pointer',
      $_css4: disabled ? '' : `
                  &:active {
                    border-color: ${theme.controlBorderPressed};
                  }
                `,
      $_css5: isFocused && focusVisible ? `
                  &:after {
                    content: '';
                    position: absolute;
                    left: ${-BORDER * 2}px;
                    top: ${-BORDER * 2}px;
                    width: ${WRAPPER_WIDTH + BORDER * 2}px;
                    height: ${WRAPPER_HEIGHT + BORDER * 2}px;
                    border-radius: ${WRAPPER_HEIGHT}px;
                    border: 2px solid ${theme.focus};
                  }
                ` : ''
    }, /*#__PURE__*/React__default.createElement(_StyledInput, {
      type: "checkbox",
      onFocus: () => {
        setIsFocused(true);
        onFocus();
      },
      onBlur: () => setIsFocused(false),
      checked: checked,
      disabled: disabled,
      onChange: handleChange
    }), /*#__PURE__*/React__default.createElement(Spring, {
      to: {
        progress: checked ? WRAPPER_WIDTH - WRAPPER_HEIGHT + BORDER : BORDER
      },
      config: springs.smooth,
      native: true
    }, _ref3 => {
      let {
        progress
      } = _ref3;
      return /*#__PURE__*/React__default.createElement(_StyledAnimatedSpan, {
        style: {
          transform: progress.to(v => `translate3d(${v}px, 0, 0)`)
        },
        $_css6: WRAPPER_HEIGHT - BORDER * 4,
        $_css7: WRAPPER_HEIGHT - BORDER * 4,
        $_css8: WRAPPER_HEIGHT - BORDER * 4,
        $_css9: theme.controlSurface,
        $_css10: disabled ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.15)'
      });
    }));
  });
}

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: noop
};

var _StyledSpan = _styled("span").withConfig({
  displayName: "Switch___StyledSpan",
  componentId: "sc-1t21muv-0"
})(["position:relative;display:inline-block;width:", "px;height:", "px;border:", "px solid ", ";border-radius:", "px;background-color:", ";cursor:", ";", " ", ";"], WRAPPER_WIDTH, WRAPPER_HEIGHT, BORDER, p => p.$_css, WRAPPER_HEIGHT, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledInput = _styled("input").withConfig({
  displayName: "Switch___StyledInput",
  componentId: "sc-1t21muv-1"
})(["opacity:0;pointer-events:none;"]);

var _StyledAnimatedSpan = _styled(animated.span).withConfig({
  displayName: "Switch___StyledAnimatedSpan",
  componentId: "sc-1t21muv-2"
})(["position:absolute;left:0;z-index:1;top:", "px;width:", "px;height:", "px;border-radius:", "px;background-color:", ";box-shadow:", ";"], BORDER, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10);

export { Switch as default };
//# sourceMappingURL=Switch.js.map