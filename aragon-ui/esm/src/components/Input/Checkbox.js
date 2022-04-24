import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import FocusVisible from '../FocusVisible/FocusVisible.js';
import { Spring } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { springs } from '../../style/springs.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU, RADIUS } from '../../style/constants.js';
import { noop } from '../../utils/miscellaneous.js';

const SIZE = 18;
const CHECKBOX_RADIUS = 2;
const RADIO_BULLET_SIZE = 10;

class Checkbox extends React__default.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "_element", /*#__PURE__*/React__default.createRef());

    _defineProperty(this, "handleClick", () => {
      const {
        onChange,
        checked,
        indeterminate
      } = this.props;
      onChange(indeterminate ? false : !checked);
    });

    _defineProperty(this, "focus", () => {
      this._element.current.focus();
    });
  }

  getAriaChecked() {
    const {
      checked,
      indeterminate
    } = this.props;
    if (indeterminate) return 'mixed';
    if (checked) return 'true';
    return 'false';
  }

  renderCheck(visible, Icon) {
    const {
      disabled,
      theme
    } = this.props;
    return /*#__PURE__*/React__default.createElement(Spring, {
      from: {
        progress: 0
      },
      to: {
        progress: Number(visible)
      },
      config: springs.instant,
      native: true
    }, _ref => {
      let {
        progress
      } = _ref;
      return /*#__PURE__*/React__default.createElement(_StyledAnimatedSpan, {
        style: {
          opacity: progress,
          transform: progress.to(v => `scale(${v})`)
        }
      }, /*#__PURE__*/React__default.createElement(Icon, {
        color: disabled ? theme.selectedDisabled : theme.selected
      }));
    });
  }

  render() {
    const {
      checked,
      disabled,
      indeterminate,
      tabIndex,
      theme,
      variant,
      ...props
    } = this.props;
    return /*#__PURE__*/React__default.createElement(FocusVisible, null, _ref2 => {
      let {
        focusVisible,
        onFocus
      } = _ref2;
      return /*#__PURE__*/React__default.createElement(_StyledButton, _extends({
        type: "button",
        ref: this._element,
        role: variant,
        tabIndex: tabIndex,
        "aria-checked": this.getAriaChecked(),
        onClick: this.handleClick,
        onFocus: onFocus,
        disabled: disabled
      }, props, {
        $_css: 0.5 * GU,
        $_css2: disabled ? theme.controlDisabled : theme.control,
        $_css3: theme.controlBorder,
        $_css4: variant === 'radio' ? '50%' : `${CHECKBOX_RADIUS}px`,
        $_css5: !disabled ? `
                    cursor: pointer;
                    &:active {
                      border-color: ${theme.controlBorderPressed};
                    }
                    &:focus .focus-ring {
                      display: ${focusVisible ? 'block' : 'none'};
                    }
                  ` : ''
      }), variant === 'checkbox' && this.renderCheck(checked && !indeterminate, Check), variant === 'checkbox' && this.renderCheck(indeterminate, Dash), variant === 'radio' && this.renderCheck(checked, Bullet), /*#__PURE__*/React__default.createElement(_StyledSpan, {
        className: "focus-ring",
        $_css6: theme.focus,
        $_css7: variant === 'radio' ? '50%' : `${RADIUS}px`
      }));
    });
  }

}
/* eslint-disable react/prop-types */


_defineProperty(Checkbox, "propTypes", {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  tabIndex: PropTypes.string,
  theme: PropTypes.object,
  variant: PropTypes.oneOf(['checkbox', 'radio'])
});

_defineProperty(Checkbox, "defaultProps", {
  checked: false,
  disabled: false,
  indeterminate: false,
  onChange: noop,
  tabIndex: '0',
  variant: 'checkbox'
});

const Dash = _ref3 => {
  let {
    color
  } = _ref3;
  return (
    /*#__PURE__*/

    /* Use SVG to have subpixels (strokeWidth="1.5") on Chrome */
    React__default.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, /*#__PURE__*/React__default.createElement("line", {
      x1: "3",
      y1: "7",
      x2: "11",
      y2: "7",
      stroke: color,
      strokeWidth: "1.5"
    }))
  );
};

const Check = _ref4 => {
  let {
    color
  } = _ref4;
  return /*#__PURE__*/React__default.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: `
        M11.059 1.393
        L4.335  7.395
        L0.944  3.260
        L2.104  2.309
        L4.503  5.234
        L10.060 0.274
        L11.059 1.393
        Z
      `,
    fill: color
  }));
};

const Bullet = _ref5 => {
  let {
    color
  } = _ref5;
  return /*#__PURE__*/React__default.createElement(_StyledSpan2, {
    $_css8: color
  });
};

const CheckBoxWithTheme = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(Checkbox, _extends({
    theme: theme,
    ref: ref
  }, props));
});

var _StyledAnimatedSpan = _styled(animated.span).withConfig({
  displayName: "Checkbox___StyledAnimatedSpan",
  componentId: "sc-1v41gs7-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transform-origin:50% 50%;"]);

var _StyledButton = _styled("button").withConfig({
  displayName: "Checkbox___StyledButton",
  componentId: "sc-1v41gs7-1"
})(["display:inline-flex;position:relative;width:", "px;height:", "px;margin:", "px;padding:0;background:", ";border:1px solid ", ";border-radius:", ";outline:0;&::-moz-focus-inner{border:0;}", ";"], SIZE, SIZE, p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledSpan = _styled("span").withConfig({
  displayName: "Checkbox___StyledSpan",
  componentId: "sc-1v41gs7-2"
})(["position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:2px solid ", ";border-radius:", ";display:none;"], p => p.$_css6, p => p.$_css7);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "Checkbox___StyledSpan2",
  componentId: "sc-1v41gs7-3"
})(["display:block;width:", "px;height:", "px;border-radius:50%;background:", ";"], RADIO_BULLET_SIZE, RADIO_BULLET_SIZE, p => p.$_css8);

export { CheckBoxWithTheme as default };
//# sourceMappingURL=Checkbox.js.map
