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

function IconGraph2(_ref) {
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
    d: "M18.377 5H16.96c-.734 0-1.331.597-1.331 1.331V17.67c0 .734.597 1.331 1.331 1.331h1.417c.734 0 1.332-.597 1.332-1.331V6.33c0-.734-.598-1.331-1.332-1.331zm.086 12.669a.086.086 0 01-.086.085H16.96a.086.086 0 01-.086-.085V6.33c0-.047.039-.085.086-.085h1.417c.048 0 .086.038.086.085v11.34zm-5.754-9.126h-1.417c-.735 0-1.332.597-1.332 1.331v7.795c0 .734.597 1.331 1.332 1.331h1.417c.734 0 1.331-.597 1.331-1.331V9.874c0-.734-.597-1.331-1.331-1.331zm.086 9.126a.086.086 0 01-.086.085h-1.417a.086.086 0 01-.086-.085V9.874c0-.047.038-.086.086-.086h1.417c.047 0 .086.039.086.086v7.795zM7.04 12.086H5.623c-.734 0-1.332.597-1.332 1.331v4.252c0 .734.598 1.331 1.332 1.331H7.04c.734 0 1.331-.597 1.331-1.331v-4.252c0-.734-.597-1.331-1.331-1.331zm.086 5.583a.086.086 0 01-.086.085H5.623a.086.086 0 01-.086-.085v-4.252c0-.047.038-.086.086-.086H7.04c.047 0 .086.039.086.086v4.252z"
  }));
}

IconGraph2.propTypes = IconPropTypes.IconPropTypes;

exports["default"] = IconGraph2;
//# sourceMappingURL=IconGraph2.js.map
