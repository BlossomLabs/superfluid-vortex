'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var Theme = require('./Theme.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-b3309d7b.js');
require('react-dom');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function OpenedSurfaceBorder(_ref) {
  let {
    opened,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.Spring, {
    native: true,
    from: {
      width: 0
    },
    to: {
      width: Number(opened)
    },
    config: { ...springs.springs.smooth
    }
  }, _ref2 => {
    let {
      width
    } = _ref2;
    return /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, _extends._extends({
      style: {
        transform: width.to(v => `scale3d(${v}, 1, 1)`)
      }
    }, props, {
      $_css: theme.surfaceOpened
    }));
  });
}

OpenedSurfaceBorder.propTypes = {
  opened: index.PropTypes.bool
};

var _StyledAnimatedDiv = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "OpenedSurfaceBorder___StyledAnimatedDiv",
  componentId: "sc-1h90vbm-0"
})(["position:absolute;top:0;left:0;height:100%;width:3px;background:", ";transform-origin:0 0;"], p => p.$_css);

exports.OpenedSurfaceBorder = OpenedSurfaceBorder;
//# sourceMappingURL=OpenedSurfaceBorder.js.map
