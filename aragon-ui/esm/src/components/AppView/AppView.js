import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import AppBar from './AppBar.js';
import { useRegisterAppView } from '../Main/Main.js';

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
  useRegisterAppView();
  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends({
    height: height
  }, props), /*#__PURE__*/React__default.createElement(_StyledDiv2, null, appBar || /*#__PURE__*/React__default.createElement(AppBar, {
    title: title,
    tabs: tabs
  })), /*#__PURE__*/React__default.createElement(_StyledDiv3, null, /*#__PURE__*/React__default.createElement(_StyledDiv4, {
    padding: padding
  }, children)));
}

AppView.defaultProps = {
  title: '',
  padding: 30,
  height: '100vh'
};
AppView.propTypes = {
  appBar: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.node,
  padding: PropTypes.number,
  height: PropTypes.string,
  tabs: PropTypes.element
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppView___StyledDiv",
  componentId: "sc-jnsnb0-0"
})(["display:flex;height:", ";flex-direction:column;align-items:stretch;justify-content:stretch;"], p => p.height);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "AppView___StyledDiv2",
  componentId: "sc-jnsnb0-1"
})(["position:relative;z-index:2;flex-shrink:0;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "AppView___StyledDiv3",
  componentId: "sc-jnsnb0-2"
})(["position:relative;z-index:1;height:100%;overflow:auto;"]);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "AppView___StyledDiv4",
  componentId: "sc-jnsnb0-3"
})(["display:flex;flex-direction:column;min-height:100%;padding:", ";"], _ref2 => {
  let {
    padding
  } = _ref2;
  return `${padding}px`;
});

export { AppView as default };
//# sourceMappingURL=AppView.js.map
