'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-6b8189f0.js');
var ReactDOM = require('react-dom');
var Root = require('./Root-e3b39caa.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

const RootPortal = props => /*#__PURE__*/React__default["default"].createElement(Root.Root, null, rootElement => {
  if (!rootElement) {
    throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
  }

  return /*#__PURE__*/ReactDOM__default["default"].createPortal(props.children, rootElement);
});

RootPortal.propTypes = {
  children: index.PropTypes.node.isRequired
};

exports["default"] = RootPortal;
//# sourceMappingURL=RootPortal.js.map
