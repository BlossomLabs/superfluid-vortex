'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-0ef380f7.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./use-inside.esm-3f28ebaf.js');
require('./constants.js');
require('./index-6b8189f0.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconLink(_ref) {
  let {
    size = undefined,
    ...props
  } = _ref;
  const sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default["default"].createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M18.882 5.163a3.564 3.564 0 00-5.084 0l-2.542 2.578a.566.566 0 000 .793.547.547 0 00.782 0l2.542-2.578a2.454 2.454 0 011.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 01-3.52 0 .547.547 0 00-.782 0 .566.566 0 000 .793 3.563 3.563 0 005.084 0l3.324-3.371a3.645 3.645 0 001.05-2.578 3.65 3.65 0 00-1.05-2.578z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.73 5.094a3.66 3.66 0 015.22 0 3.744 3.744 0 011.077 2.647 3.743 3.743 0 01-1.077 2.647l-3.324 3.37a3.654 3.654 0 01-2.61 1.095c-.945 0-1.89-.365-2.61-1.094a.665.665 0 010-.931.643.643 0 01.918 0c.933.945 2.45.945 3.384 0l3.323-3.372c.45-.455.698-1.064.698-1.715 0-.65-.248-1.26-.698-1.715a2.358 2.358 0 00-1.691-.707c-.642 0-1.242.25-1.692.706l-2.542 2.578a.643.643 0 01-.918 0 .665.665 0 010-.931l2.542-2.578zm.85.862a2.454 2.454 0 011.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 01-3.52 0 .548.548 0 00-.782 0 .566.566 0 000 .793 3.563 3.563 0 005.084 0l3.324-3.371a3.645 3.645 0 001.05-2.578 3.65 3.65 0 00-1.05-2.578 3.564 3.564 0 00-5.084 0l-2.542 2.578a.566.566 0 000 .793.547.547 0 00.782 0l2.542-2.578z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.95 10.388a3.743 3.743 0 001.077-2.647 3.744 3.744 0 00-1.077-2.647 3.66 3.66 0 00-5.22 0l-2.542 2.578a.665.665 0 000 .93.643.643 0 00.918 0l2.542-2.577a2.359 2.359 0 011.692-.706c.642 0 1.242.25 1.691.707.45.455.698 1.064.698 1.715 0 .65-.248 1.26-.698 1.715l-3.323 3.372s0 0 0 0a2.373 2.373 0 01-3.384 0 .643.643 0 00-.918 0 .665.665 0 000 .93 3.654 3.654 0 002.61 1.095c.945 0 1.89-.365 2.61-1.094l3.324-3.371zm0 0s0 0 0 0zm-4.37-4.432a2.454 2.454 0 011.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 01-3.52 0 .548.548 0 00-.782 0 .566.566 0 000 .793 3.563 3.563 0 005.084 0l3.324-3.371a3.645 3.645 0 001.05-2.578 3.65 3.65 0 00-1.05-2.578 3.564 3.564 0 00-5.084 0l-2.542 2.578a.566.566 0 000 .793.547.547 0 00.782 0l2.542-2.578z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    d: "M11.626 15.864l-2.151 2.181a2.453 2.453 0 01-1.76.736 2.454 2.454 0 01-1.76-.736 2.552 2.552 0 010-3.569l3.129-3.173a2.454 2.454 0 011.76-.735c.667 0 1.291.261 1.759.735a.548.548 0 00.782 0 .566.566 0 000-.793 3.564 3.564 0 00-5.084 0l-3.128 3.173a3.646 3.646 0 00-1.05 2.578c0 .976.373 1.891 1.05 2.577a3.544 3.544 0 002.542 1.064c.962 0 1.865-.378 2.541-1.064l2.151-2.18a.566.566 0 000-.794.547.547 0 00-.781 0z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M8.233 10.441h0a3.66 3.66 0 015.22 0 .665.665 0 010 .931.643.643 0 01-.918 0 2.359 2.359 0 00-1.691-.706c-.643 0-1.243.251-1.692.706 0 0 0 0 0 0l-3.129 3.173a2.453 2.453 0 000 3.431c.45.456 1.05.707 1.692.707.642 0 1.242-.251 1.692-.707l2.15-2.18a.642.642 0 01.918 0 .665.665 0 010 .93l-2.15 2.181s0 0 0 0A3.64 3.64 0 017.714 20a3.64 3.64 0 01-2.61-1.093 3.743 3.743 0 01-1.078-2.646c0-1.002.383-1.942 1.078-2.647 0 0 0 0 0 0l3.128-3.173zm-3.06 3.242L8.3 10.51a3.564 3.564 0 015.084 0 .566.566 0 010 .793.547.547 0 01-.782 0 2.454 2.454 0 00-1.76-.735c-.667 0-1.292.261-1.76.735l-3.128 3.173a2.552 2.552 0 000 3.57 2.454 2.454 0 001.76.735c.667 0 1.292-.262 1.76-.736l2.15-2.18a.547.547 0 01.782 0 .566.566 0 010 .792l-2.15 2.181a3.544 3.544 0 01-2.542 1.064 3.544 3.544 0 01-2.542-1.064 3.645 3.645 0 01-1.05-2.577c0-.976.373-1.892 1.05-2.578z",
    clipRule: "evenodd"
  }));
}

IconLink.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconLink;
//# sourceMappingURL=IconLink.js.map
