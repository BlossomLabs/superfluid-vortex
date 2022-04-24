import _styled from 'styled-components';
import React__default from 'react';
import IconEllipsis from '../../icons/components/IconEllipsis.js';
import { useTheme } from '../../theme/Theme2.js';

const PaginationSeparator = /*#__PURE__*/React__default.memo(function PaginationSeparator() {
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledDiv, null, /*#__PURE__*/React__default.createElement(_StyledIconEllipsis, {
    $_css: theme.surfaceContentSecondary.alpha(0.4)
  }));
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "PaginationSeparator___StyledDiv",
  componentId: "sc-8y27bx-0"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledIconEllipsis = _styled(IconEllipsis).withConfig({
  displayName: "PaginationSeparator___StyledIconEllipsis",
  componentId: "sc-8y27bx-1"
})(["color:", ";"], p => p.$_css);

export { PaginationSeparator };
//# sourceMappingURL=PaginationSeparator.js.map
