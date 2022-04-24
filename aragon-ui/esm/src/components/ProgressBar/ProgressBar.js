import _styled, { keyframes } from 'styled-components';
import React__default from 'react';
import PropTypes from '../../proptypes.js';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import { warnOnce } from '../../utils/environment.js';
import { useTheme } from '../../theme/Theme2.js';
import { useSpring, to } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { springs } from '../../style/springs.js';

const RADIUS = 2;
const BAR_HEIGHT = 6;
const INDETERMINATE_WIDTH = 1 / 4;
const INDETERMINATE_DURATION = 1600;
const indeterminateAnim = keyframes(["0%{transform:translate3d(calc(-100% - 1px),0,0);}70%,100%{transform:translate3d(calc(", "% + 1px),0,0);}"], 100 / INDETERMINATE_WIDTH);
const ProgressBar = /*#__PURE__*/React__default.memo(_ref => {
  let {
    animate,
    color,
    progress,
    value
  } = _ref;

  // Support `progress` for a while but warn if being used.
  if (value === -1 && typeof progress === 'number') {
    value = progress;
    warnOnce('ProgressBar:progress', 'The `progress` prop of ProgressBar is deprecated: please use `value` instead.');
  } // The indeterminate state can be triggered either by not setting the value
  // (to mimic the <progress> element in HTML), or by setting the -1 value (for
  // convenience in React).


  const indeterminate = value === -1;
  const theme = useTheme();
  const currentColor = color === undefined ? theme.accent : color;
  const transition = useSpring({
    reset: false,
    config: { ...springs.smooth,
      precision: 0.001
    },
    from: {
      scale: 0,
      x: 0
    },
    to: {
      scale: value,
      x: 0
    },
    immediate: !animate
  });
  return /*#__PURE__*/React__default.createElement(_StyledDiv, {
    $_css: theme.surfaceUnder
  }, /*#__PURE__*/React__default.createElement(Bar, {
    style: {
      width: `${(indeterminate ? INDETERMINATE_WIDTH : 1) * 100}%`,
      background: currentColor,
      borderRadius: `${indeterminate ? RADIUS : 0}px`,
      animationName: `${indeterminate ? indeterminateAnim.name : 'none'}`,
      transform: to([transition.x, transition.scale], (x, s) => `translate3d(${x * 100}%, 0, 0) scale3d(${s}, 1, 1)`)
    }
  }));
});
const Bar = _styled(animated.div).withConfig({
  displayName: "ProgressBar__Bar",
  componentId: "sc-cwtxpx-0"
})(["width:100%;height:", "px;transform-origin:0 0;animation:", " ", "ms ease-in-out infinite;animation-name:none;"], BAR_HEIGHT, indeterminateAnim, INDETERMINATE_DURATION);
ProgressBar.defaultProps = {
  animate: true,
  value: -1
};
ProgressBar.propTypes = {
  animate: PropTypes.bool,
  color: PropTypes.string,
  progress: PropTypes._0to1,
  value: PropTypes.oneOfType([PropTypes._0to1, PropTypes.oneOf([-1])])
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "ProgressBar___StyledDiv",
  componentId: "sc-cwtxpx-1"
})(["width:100%;height:", "px;background:", ";border-radius:", "px;overflow:hidden;"], BAR_HEIGHT, p => p.$_css, RADIUS);

export { ProgressBar as default };
//# sourceMappingURL=ProgressBar.js.map
