import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React__default from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconEllipsis(_ref) {
  let {
    size = undefined,
    ...props
  } = _ref;
  const sizeValue = useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("circle", {
    cx: 6,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }), /*#__PURE__*/React__default.createElement("circle", {
    cx: 18,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }));
}

IconEllipsis.propTypes = IconPropTypes;

export { IconEllipsis as default };
//# sourceMappingURL=IconEllipsis.js.map
