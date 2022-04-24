import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import { useTheme } from '../../theme/Theme2.js';
import { Spring } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { springs } from '../../style/springs.js';

function OpenedSurfaceBorder(_ref) {
  let {
    opened,
    ...props
  } = _ref;
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(Spring, {
    native: true,
    from: {
      width: 0
    },
    to: {
      width: Number(opened)
    },
    config: { ...springs.smooth
    }
  }, _ref2 => {
    let {
      width
    } = _ref2;
    return /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv, _extends({
      style: {
        transform: width.to(v => `scale3d(${v}, 1, 1)`)
      }
    }, props, {
      $_css: theme.surfaceOpened
    }));
  });
}

OpenedSurfaceBorder.propTypes = {
  opened: PropTypes.bool
};

var _StyledAnimatedDiv = _styled(animated.div).withConfig({
  displayName: "OpenedSurfaceBorder___StyledAnimatedDiv",
  componentId: "sc-1h90vbm-0"
})(["position:absolute;top:0;left:0;height:100%;width:3px;background:", ";transform-origin:0 0;"], p => p.$_css);

export { OpenedSurfaceBorder };
//# sourceMappingURL=OpenedSurfaceBorder.js.map
