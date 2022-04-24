'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var Viewport = require('./Viewport-0c0a0c23.js');
var css = require('./css.js');
var constants = require('./constants.js');
var breakpoints = require('./breakpoints.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./defineProperty-754b29ce.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(_ref => {
    let [name] = _ref;
    return name !== 'min';
  }).sort((a, b) => a[1] - b[1]);
} // Minimum margin around a layouts


const MIN_MARGIN = 3 * constants.GU;

function getLayoutSize(parentWidth, breakpoints) {
  const sizes = getSizes(breakpoints);
  let index = sizes.length;

  while (index--) {
    if (parentWidth >= sizes[index][1]) {
      return [sizes[index][0], sizes[index][1] - (index === 0 ? 0 : MIN_MARGIN * 2)];
    }
  }

  return sizes[0];
}

const LayoutContext = /*#__PURE__*/React__default["default"].createContext({});
/**
 * Some layout method
 *
 * @typedef {object} layoutType
 * @property {("small" | "medium" | "large" | "max")} layoutName
 * @property {string} layoutWidth
 *
 * @returns {layoutType}
 */

function useLayout() {
  const {
    layoutWidth,
    layoutName
  } = React.useContext(LayoutContext);
  return {
    layoutName,
    layoutWidth,
    // deprecated
    name: layoutName,
    width: layoutWidth
  };
}

function Layout(_ref2) {
  let {
    breakpoints: breakpoints$1,
    children,
    paddingBottom,
    parentWidth,
    ...props
  } = _ref2;
  const {
    width: viewportWidth
  } = Viewport.useViewport();
  const mergedBreakpoints = React.useMemo(() => ({ ...breakpoints.BREAKPOINTS,
    ...breakpoints$1
  }), [breakpoints$1]); // If the parent width is not passed, use the viewport width.

  const [layoutName, layoutWidth] = React.useMemo(() => getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints), [viewportWidth, parentWidth, mergedBreakpoints]);
  return /*#__PURE__*/React__default["default"].createElement(LayoutContext.Provider, {
    value: {
      layoutWidth,
      layoutName
    }
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: layoutName === 'small' ? 'auto' : `${layoutWidth}px`,
    $_css2: mergedBreakpoints.min,
    $_css3: css.cssPx(paddingBottom)
  }), children));
}

Layout.propTypes = {
  breakpoints: index.PropTypes.shape({
    min: index.PropTypes.number,
    small: index.PropTypes.number,
    medium: index.PropTypes.number,
    large: index.PropTypes.number
  }),
  children: index.PropTypes.node,
  paddingBottom: index.PropTypes.oneOfType([index.PropTypes.number, index.PropTypes.string]),
  parentWidth: index.PropTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * constants.GU
}; // Can be used to build an alternative Layout component

Layout.__Context = LayoutContext;

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-ah1dp2-0"
})(["width:", ";min-width:", "px;margin:0 auto;padding-bottom:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports["default"] = Layout;
exports.useLayout = useLayout;
//# sourceMappingURL=Layout.js.map
