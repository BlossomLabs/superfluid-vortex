'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.

let fieldId = 1;

function Field(_ref) {
  let {
    children,
    label,
    required,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const isRequired = required || React__default["default"].Children.toArray(children).some(_ref2 => {
    let {
      props
    } = _ref2;
    return props && props.required;
  });
  const id = React.useMemo(() => typeof children === 'function' ? `Field_${fieldId++}` : null, [children]);
  const labelProps = id === null ? {} : {
    htmlFor: id
  };
  return /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Field"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: 3 * constants.GU
  }), /*#__PURE__*/React__default["default"].createElement("label", labelProps, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css2: 2 * constants.GU,
    $_css3: 0.5 * constants.GU,
    $_css4: theme.surfaceContentSecondary,
    $_css5: textStyles.textStyle('label2')
  }, /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Field:label"
  }, label, isRequired && /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    title: "Required",
    $_css6: theme.accent
  }, '\u00a0*'))), /*#__PURE__*/React__default["default"].createElement(useInside_esm.Inside, {
    name: "Field:content"
  }, typeof children === 'function' ? children({
    id
  }) : children))));
}

Field.propTypes = {
  children: index.PropTypes.oneOfType([index.PropTypes.node, index.PropTypes.func]),
  label: index.PropTypes.node,
  required: index.PropTypes.bool
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Field___StyledDiv",
  componentId: "sc-1x5pfab-0"
})(["margin-bottom:", "px;"], p => p.$_css);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Field___StyledDiv2",
  componentId: "sc-1x5pfab-1"
})(["display:flex;align-items:center;height:", "px;margin-bottom:", "px;color:", ";white-space:nowrap;", ";", ";"], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, css.unselectable);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Field___StyledSpan",
  componentId: "sc-1x5pfab-2"
})(["color:", ";"], p => p.$_css6);

exports["default"] = Field;
//# sourceMappingURL=Field.js.map
