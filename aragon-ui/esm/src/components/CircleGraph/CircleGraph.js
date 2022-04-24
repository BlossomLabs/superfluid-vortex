import _styled from 'styled-components';
import React__default, { useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import { useTheme } from '../../theme/Theme2.js';
import { clamp } from '../../utils/math.js';
import { Spring } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { warnOnce } from '../../utils/environment.js';

const STROKE_WIDTH = 4;
const SIZE_DEFAULT = 80;

function labelDefault(animValue, value) {
  const parts = {
    suffix: '%',
    value: String(Math.floor(animValue * 100))
  };
  const animPercentage = animValue * 100;
  const percentage = value * 100;
  const lessThanOne = percentage > 0 && percentage < 1 && animPercentage > 0 && // We know that the actual percentage is less than 1,
  // so this is to avoid a jump with “1%” without prefix.
  animPercentage < 2;
  return lessThanOne ? { ...parts,
    prefix: '<',
    value: '1'
  } : parts;
}

function labelCompat(parts) {
  if (typeof parts === 'string' || typeof parts === 'number' || /*#__PURE__*/React__default.isValidElement(parts)) {
    warnOnce('CircleGraph:label:string', 'CircleGraph: the function passed to the label should not ' + 'return a React node anymore: please check the CircleGraph documentation.');
    return {
      value: String(parts)
    };
  }

  return parts;
}

function CircleGraph(_ref) {
  let {
    color,
    label,
    size,
    strokeWidth,
    value
  } = _ref;
  const theme = useTheme();
  const length = Math.PI * 2 * (size - strokeWidth);
  const radius = (size - strokeWidth) / 2;

  if (label === undefined) {
    label = labelDefault;
  }

  const labelPart = useCallback(name => animValue => {
    if (typeof label !== 'function') {
      return null;
    }

    const cValue = clamp(animValue);
    const parts = labelCompat(label(cValue, value));
    return (parts[name] === undefined ? labelDefault(cValue, value)[name] : parts[name]) || '';
  }, [label, value]);
  const colorFn = typeof color === 'function' ? color : () => color || theme.accent;
  return /*#__PURE__*/React__default.createElement(Spring, {
    to: {
      progressValue: value
    },
    native: true
  }, _ref2 => {
    let {
      progressValue
    } = _ref2;
    return /*#__PURE__*/React__default.createElement(_StyledDiv, {
      $_css: size,
      $_css2: size
    }, /*#__PURE__*/React__default.createElement(_StyledSvg, {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`
    }, /*#__PURE__*/React__default.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: radius,
      style: {
        strokeWidth
      },
      fill: "none",
      stroke: theme.border
    }), /*#__PURE__*/React__default.createElement(_StyledAnimatedCircle, {
      cx: size / 2,
      cy: size / 2,
      r: radius,
      fill: "none",
      strokeLinecap: "round",
      strokeDasharray: length,
      strokeWidth: strokeWidth,
      style: {
        stroke: progressValue.to(colorFn),
        strokeDashoffset: progressValue.to(t => length - length * t / 2)
      }
    })), /*#__PURE__*/React__default.createElement(_StyledDiv2, null, typeof label !== 'function' ? label : label && /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(_StyledDiv4, null, /*#__PURE__*/React__default.createElement(animated.div, {
      style: {
        fontSize: `${size * 0.2}px`
      }
    }, progressValue.to(labelPart('prefix'))), /*#__PURE__*/React__default.createElement(animated.div, {
      style: {
        fontSize: `${size * 0.25}px`
      }
    }, progressValue.to(labelPart('value'))), /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv, {
      style: {
        fontSize: `${size * 0.13}px`
      },
      $_css3: theme.surfaceContentSecondary
    }, progressValue.to(labelPart('suffix')))), /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv2, {
      style: {
        fontSize: `${size * 0.1}px`
      },
      $_css4: theme.surfaceContentSecondary
    }, progressValue.to(labelPart('secondary'))))));
  });
}

CircleGraph.propTypes = {
  color: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  value: PropTypes.number.isRequired
};
CircleGraph.defaultProps = {
  size: SIZE_DEFAULT,
  strokeWidth: STROKE_WIDTH
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "CircleGraph___StyledDiv",
  componentId: "sc-4qk1n0-0"
})(["position:relative;display:flex;align-items:center;justify-content center;width:", "px;height:", "px;"], p => p.$_css, p => p.$_css2);

var _StyledSvg = _styled("svg").withConfig({
  displayName: "CircleGraph___StyledSvg",
  componentId: "sc-4qk1n0-1"
})(["position:absolute;top:0;left:0;"]);

var _StyledAnimatedCircle = _styled(animated.circle).withConfig({
  displayName: "CircleGraph___StyledAnimatedCircle",
  componentId: "sc-4qk1n0-2"
})(["transform:rotate(270deg);transform-origin:50% 50%;"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "CircleGraph___StyledDiv2",
  componentId: "sc-4qk1n0-3"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;line-height:1.2;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "CircleGraph___StyledDiv3",
  componentId: "sc-4qk1n0-4"
})(["position:absolute;top:50%;left:0;right:0;transform:translateY(-50%);"]);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "CircleGraph___StyledDiv4",
  componentId: "sc-4qk1n0-5"
})(["display:flex;align-items:baseline;justify-content:center;"]);

var _StyledAnimatedDiv = _styled(animated.div).withConfig({
  displayName: "CircleGraph___StyledAnimatedDiv",
  componentId: "sc-4qk1n0-6"
})(["display:flex;color:", ";"], p => p.$_css3);

var _StyledAnimatedDiv2 = _styled(animated.div).withConfig({
  displayName: "CircleGraph___StyledAnimatedDiv2",
  componentId: "sc-4qk1n0-7"
})(["position:absolute;top:100%;left:0;right:0;display:flex;justify-content:center;color:", ";"], p => p.$_css4);

export { CircleGraph as default };
//# sourceMappingURL=CircleGraph.js.map
