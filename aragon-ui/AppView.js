'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var AppBar = require('./AppBar.js');
var Main = require('./Main.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./defineProperty-754b29ce.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./use-inside.esm-3f28ebaf.js');
require('./Text.js');
require('./environment.js');
require('./miscellaneous.js');
require('./font.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./css.js');
require('./springs.js');
require('./PublicUrl-37deb3e2.js');
require('./getDisplayName-fd5924a6.js');
require('./url.js');
require('./BaseStyles.js');
require('./text-styles.js');
require('./ToastHub.js');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./Viewport-0c0a0c23.js');
require('./breakpoints.js');
require('./constants.js');
require('./components.js');
require('./Layout.js');
require('./ScrollView.js');
require('./contains-component.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AppView(_ref) {
  let {
    appBar,
    children,
    height,
    padding,
    tabs,
    title,
    ...props
  } = _ref;
  // Notify Main that it contains this AppView
  Main.useRegisterAppView();
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({
    height: height
  }, props), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, null, appBar || /*#__PURE__*/React__default["default"].createElement(AppBar["default"], {
    title: title,
    tabs: tabs
  })), /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, null, /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, {
    padding: padding
  }, children)));
}

AppView.defaultProps = {
  title: '',
  padding: 30,
  height: '100vh'
};
AppView.propTypes = {
  appBar: index.PropTypes.element,
  title: index.PropTypes.string,
  children: index.PropTypes.node,
  padding: index.PropTypes.number,
  height: index.PropTypes.string,
  tabs: index.PropTypes.element
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv",
  componentId: "sc-jnsnb0-0"
})(["display:flex;height:", ";flex-direction:column;align-items:stretch;justify-content:stretch;"], p => p.height);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv2",
  componentId: "sc-jnsnb0-1"
})(["position:relative;z-index:2;flex-shrink:0;"]);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv3",
  componentId: "sc-jnsnb0-2"
})(["position:relative;z-index:1;height:100%;overflow:auto;"]);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "AppView___StyledDiv4",
  componentId: "sc-jnsnb0-3"
})(["display:flex;flex-direction:column;min-height:100%;padding:", ";"], _ref2 => {
  let {
    padding
  } = _ref2;
  return `${padding}px`;
});

exports["default"] = AppView;
//# sourceMappingURL=AppView.js.map
