'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var RootPortal = require('./RootPortal.js');
var Viewport = require('./Viewport-0c0a0c23.js');
var ToastHub = require('./ToastHub.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var springs = require('./springs.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-b3309d7b.js');
require('react-dom');
require('./Root-e3b39caa.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./components.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const FloatIndicator = /*#__PURE__*/React__default["default"].memo(function FloatIndicator(_ref) {
  let {
    children,
    visible,
    shift,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const {
    below
  } = Viewport.useViewport();
  const {
    itemsVisible: toastItemsVisible
  } = React.useContext(ToastHub.ToastContext);
  const wide = below('medium');
  const horizontalSpacing = wide ? 2 * constants.GU : 3 * constants.GU;
  const horizontalSpacingEnd = horizontalSpacing + (shift || 0);
  return /*#__PURE__*/React__default["default"].createElement(RootPortal["default"], null, /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.Transition, {
    native: true,
    items: toastItemsVisible ? false : visible,
    from: {
      progress: 0
    },
    enter: {
      progress: 1
    },
    leave: {
      progress: 0
    },
    config: springs.springs.smooth
  }, (_ref2, show) => {
    let {
      progress
    } = _ref2;
    return show && /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
      $_css: wide ? 2 * constants.GU : 3 * constants.GU,
      $_css2: horizontalSpacingEnd,
      $_css3: horizontalSpacing
    }, /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, _extends._extends({
      style: {
        pointerEvents: visible ? 'auto' : 'none',
        opacity: progress,
        transform: progress.to(v => `translate3d(0, calc(10px * ${1 - v}), 0)`)
      }
    }, props, {
      $_css4: Number(wide),
      $_css5: 6 * constants.GU,
      $_css6: 1 * constants.GU,
      $_css7: 2 * constants.GU,
      $_css8: textStyles.textStyle('body3'),
      $_css9: theme.floatingContent,
      $_css10: theme.floating,
      $_css11: theme.border
    }), /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
      name: "FloatIndicator"
    }, children)));
  }));
});
FloatIndicator.propTypes = {
  children: index.PropTypes.node.isRequired,
  shift: index.PropTypes.number,
  visible: index.PropTypes.bool
};
FloatIndicator.defaultProps = {
  shift: 0,
  visible: true
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "FloatIndicator___StyledDiv",
  componentId: "sc-tqht3z-0"
})(["position:absolute;z-index:1;bottom:", "px;display:flex;justify-content:flex-end;width:100%;padding:0 ", "px 0 ", "px;"], p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledAnimatedDiv = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "FloatIndicator___StyledAnimatedDiv",
  componentId: "sc-tqht3z-1"
})(["flex-grow:", ";display:flex;align-items:center;height:", "px;padding:", "px ", "px;", ";white-space:nowrap;color:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:default;justify-content:center;"], p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, constants.BIG_RADIUS);

exports["default"] = FloatIndicator;
//# sourceMappingURL=FloatIndicator.js.map
