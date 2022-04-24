import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React__default from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconSquareMinus(_ref) {
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
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M17.72 4H6.28A2.283 2.283 0 004 6.28v11.44A2.283 2.283 0 006.28 20h11.44A2.283 2.283 0 0020 17.72V6.28A2.283 2.283 0 0017.72 4zm.987 13.72a.99.99 0 01-.988.987H6.28a.989.989 0 01-.987-.988V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M15.268 11.354H8.732a.646.646 0 100 1.292h6.536a.646.646 0 100-1.292z"
  }));
}

IconSquareMinus.propTypes = IconPropTypes;

export { IconSquareMinus as default };
//# sourceMappingURL=IconSquareMinus.js.map