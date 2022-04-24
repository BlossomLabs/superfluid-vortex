import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React__default from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconUp(_ref) {
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
    d: "M5.215 15.219a.725.725 0 001.039 0L12 9.367l5.747 5.851a.725.725 0 001.038 0 .757.757 0 000-1.057l-6.266-6.38a.725.725 0 00-1.038 0l-6.266 6.38a.757.757 0 000 1.058z"
  }));
}

IconUp.propTypes = IconPropTypes;

export { IconUp as default };
//# sourceMappingURL=IconUp.js.map
