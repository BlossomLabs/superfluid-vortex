import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Inside } from '../../../node_modules/use-inside/dist/use-inside.esm.js';
import Card from './Card.js';
import illustrationDefault from './assets/empty-state-card-illustration-default.png.js';
import { useTheme } from '../../theme/Theme2.js';
import { usePublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import { warnOnce } from '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const EmptyStateCard = /*#__PURE__*/React__default.memo(function EmptyStateCard(_ref) {
  let {
    action,
    icon,
    illustration,
    text,
    ...props
  } = _ref;
  const theme = useTheme();
  const publicUrl = usePublicUrl();

  if (icon !== undefined) {
    warnOnce('EmptyStateCard:icon', 'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.');

    if (illustration === undefined) {
      illustration = icon;
    }
  } // default illustration


  if (!illustration) {
    illustration = /*#__PURE__*/React__default.createElement("img", {
      src: publicUrl + illustrationDefault,
      alt: "",
      height: 20 * GU
    });
  }

  return /*#__PURE__*/React__default.createElement(Inside, {
    name: "EmptyStateCard"
  }, /*#__PURE__*/React__default.createElement(_StyledCard, _extends({}, props, {
    $_css: 20 * GU,
    $_css2: 42 * GU,
    $_css3: 2 * GU
  }), /*#__PURE__*/React__default.createElement(_StyledDiv, null, illustration), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    $_css4: theme.surfaceContent,
    $_css5: textStyle('title4')
  }, text), /*#__PURE__*/React__default.createElement("div", null, action)));
});
EmptyStateCard.propTypes = {
  action: PropTypes.node,
  illustration: PropTypes.node,
  text: PropTypes.node.isRequired,
  // deprecated
  icon: PropTypes.node
};

var _StyledCard = _styled(Card).withConfig({
  displayName: "EmptyStateCard___StyledCard",
  componentId: "sc-1c9c9zj-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:", "px 1fr auto;height:", "px;padding:", "px;text-align:center;"], p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledDiv = _styled("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv",
  componentId: "sc-1c9c9zj-1"
})(["display:flex;justify-content:center;overflow:hidden;"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv2",
  componentId: "sc-1c9c9zj-2"
})(["color:", ";", ";"], p => p.$_css4, p => p.$_css5);

export { EmptyStateCard as default };
//# sourceMappingURL=EmptyStateCard.js.map
