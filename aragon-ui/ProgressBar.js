'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-77f6d5c1.js');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var environment = require('./environment.js');
var Theme = require('./Theme.js');
var springs = require('./springs.js');
require('./index-6b8189f0.js');
require('react-dom');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const RADIUS = 2;
const BAR_HEIGHT = 6;
const INDETERMINATE_WIDTH = 1 / 4;
const INDETERMINATE_DURATION = 1600;
const indeterminateAnim = _styled.keyframes(["0%{transform:translate3d(calc(-100% - 1px),0,0);}70%,100%{transform:translate3d(calc(", "% + 1px),0,0);}"], 100 / INDETERMINATE_WIDTH);
const ProgressBar = /*#__PURE__*/React__default["default"].memo(_ref => {
  let {
    animate,
    color,
    progress,
    value
  } = _ref;

  // Support `progress` for a while but warn if being used.
  if (value === -1 && typeof progress === 'number') {
    value = progress;
    environment.warnOnce('ProgressBar:progress', 'The `progress` prop of ProgressBar is deprecated: please use `value` instead.');
  } // The indeterminate state can be triggered either by not setting the value
  // (to mimic the <progress> element in HTML), or by setting the -1 value (for
  // convenience in React).


  const indeterminate = value === -1;
  const theme = Theme.useTheme();
  const currentColor = color === undefined ? theme.accent : color;
  const transition = reactSpringWeb_esm.useSpring({
    reset: false,
    config: { ...springs.springs.smooth,
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
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: theme.surfaceUnder
  }, /*#__PURE__*/React__default["default"].createElement(Bar, {
    style: {
      width: `${(indeterminate ? INDETERMINATE_WIDTH : 1) * 100}%`,
      background: currentColor,
      borderRadius: `${indeterminate ? RADIUS : 0}px`,
      animationName: `${indeterminate ? indeterminateAnim.name : 'none'}`,
      transform: reactSpringWeb_esm.to([transition.x, transition.scale], (x, s) => `translate3d(${x * 100}%, 0, 0) scale3d(${s}, 1, 1)`)
    }
  }));
});
const Bar = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "ProgressBar__Bar",
  componentId: "sc-cwtxpx-0"
})(["width:100%;height:", "px;transform-origin:0 0;animation:", " ", "ms ease-in-out infinite;animation-name:none;"], BAR_HEIGHT, indeterminateAnim, INDETERMINATE_DURATION);
ProgressBar.defaultProps = {
  animate: true,
  value: -1
};
ProgressBar.propTypes = {
  animate: proptypes.PropTypes.bool,
  color: proptypes.PropTypes.string,
  progress: proptypes.PropTypes._0to1,
  value: proptypes.PropTypes.oneOfType([proptypes.PropTypes._0to1, proptypes.PropTypes.oneOf([-1])])
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "ProgressBar___StyledDiv",
  componentId: "sc-cwtxpx-1"
})(["width:100%;height:", "px;background:", ";border-radius:", "px;overflow:hidden;"], BAR_HEIGHT, p => p.$_css, RADIUS);

exports["default"] = ProgressBar;
//# sourceMappingURL=ProgressBar.js.map
