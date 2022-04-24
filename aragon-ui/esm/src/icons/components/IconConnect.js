import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React__default from 'react';
import useIconSize from '../icon-size.js';
import IconPropTypes from '../IconPropTypes.js';

function IconConnect(_ref) {
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
    d: "M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"
  }));
}

IconConnect.propTypes = IconPropTypes;

export { IconConnect as default };
//# sourceMappingURL=IconConnect.js.map
