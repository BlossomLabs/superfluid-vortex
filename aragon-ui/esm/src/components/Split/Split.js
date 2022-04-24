import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Inside } from '../../../node_modules/use-inside/dist/use-inside.esm.js';
import { useLayout } from '../Layout/Layout.js';
import { GU } from '../../style/constants.js';

function Split(_ref) {
  let {
    primary,
    secondary,
    invert
  } = _ref;
  const {
    name: layout
  } = useLayout();
  const oneColumn = layout === 'small' || layout === 'medium';
  const inverted = !oneColumn && invert === 'horizontal' || oneColumn && invert === 'vertical';
  const primaryContent = /*#__PURE__*/React__default.createElement(Inside, {
    name: "Split:primary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, {
    $_css: !oneColumn && inverted ? 2 * GU : 0,
    $_css2: oneColumn && inverted ? 2 * GU : 0
  }, primary));
  const secondaryContent = /*#__PURE__*/React__default.createElement(Inside, {
    name: "Split:secondary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    $_css3: oneColumn ? '100%' : `${33 * GU}px`,
    $_css4: !oneColumn && !inverted ? 2 * GU : 0,
    $_css5: oneColumn && !inverted ? 2 * GU : 0
  }, secondary));
  return /*#__PURE__*/React__default.createElement(Inside, {
    name: "Split"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    $_css6: oneColumn ? 'block' : 'flex',
    $_css7: 3 * GU
  }, inverted ? secondaryContent : primaryContent, inverted ? primaryContent : secondaryContent));
}

Split.propTypes = {
  invert: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: PropTypes.node,
  secondary: PropTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "Split___StyledDiv",
  componentId: "sc-1uh1fgt-0"
})(["flex-grow:1;margin-left:", "px;padding-top:", "px;"], p => p.$_css, p => p.$_css2);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Split___StyledDiv2",
  componentId: "sc-1uh1fgt-1"
})(["flex-shrink:0;flex-grow:0;width:", ";margin-left:", "px;padding-top:", "px;"], p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Split___StyledDiv3",
  componentId: "sc-1uh1fgt-2"
})(["display:", ";padding-bottom:", "px;width:100%;"], p => p.$_css6, p => p.$_css7);

export { Split, Split as default };
//# sourceMappingURL=Split.js.map