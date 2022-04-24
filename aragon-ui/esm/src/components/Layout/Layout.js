import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default, { useContext, useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import { cssPx } from '../../utils/css.js';
import { GU } from '../../style/constants.js';
import { BREAKPOINTS } from '../../style/breakpoints.js';

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(_ref => {
    let [name] = _ref;
    return name !== 'min';
  }).sort((a, b) => a[1] - b[1]);
} // Minimum margin around a layouts


const MIN_MARGIN = 3 * GU;

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

const LayoutContext = /*#__PURE__*/React__default.createContext({});
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
  } = useContext(LayoutContext);
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
    breakpoints,
    children,
    paddingBottom,
    parentWidth,
    ...props
  } = _ref2;
  const {
    width: viewportWidth
  } = useViewport();
  const mergedBreakpoints = useMemo(() => ({ ...BREAKPOINTS,
    ...breakpoints
  }), [breakpoints]); // If the parent width is not passed, use the viewport width.

  const [layoutName, layoutWidth] = useMemo(() => getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints), [viewportWidth, parentWidth, mergedBreakpoints]);
  return /*#__PURE__*/React__default.createElement(LayoutContext.Provider, {
    value: {
      layoutWidth,
      layoutName
    }
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends({}, props, {
    $_css: layoutName === 'small' ? 'auto' : `${layoutWidth}px`,
    $_css2: mergedBreakpoints.min,
    $_css3: cssPx(paddingBottom)
  }), children));
}

Layout.propTypes = {
  breakpoints: PropTypes.shape({
    min: PropTypes.number,
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number
  }),
  children: PropTypes.node,
  paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  parentWidth: PropTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * GU
}; // Can be used to build an alternative Layout component

Layout.__Context = LayoutContext;

var _StyledDiv = _styled("div").withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-ah1dp2-0"
})(["width:", ";min-width:", "px;margin:0 auto;padding-bottom:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3);

export { Layout as default, useLayout };
//# sourceMappingURL=Layout.js.map
