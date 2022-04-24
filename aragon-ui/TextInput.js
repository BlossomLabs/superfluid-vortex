'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TextInput = /*#__PURE__*/React__default["default"].forwardRef((_ref, ref) => {
  let {
    autofocus,
    multiline,
    type,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const handleRef = React.useCallback(element => {
    if (ref) {
      ref.current = element;
    }

    if (autofocus && element) {
      element.focus();
    }
  }, [autofocus, ref]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledInput, _extends._extends({
    ref: handleRef,
    as: multiline ? 'textarea' : 'input',
    type: multiline ? undefined : type
  }, props, {
    $_css: 5 * constants.GU,
    $_css2: 1.5 * constants.GU,
    $_css3: theme.surface,
    $_css4: theme.border,
    $_css5: theme.surfaceContent,
    $_css6: textStyles.textStyle('body3'),
    $_css7: multiline ? `
              height: auto;
              padding: ${1 * constants.GU}px ${1.5 * constants.GU}px;
              resize: vertical;
            ` : '',
    $_css8: theme.selected,
    $_css9: theme.hint,
    $_css10: theme.border,
    $_css11: theme.hint
  }));
});

var _StyledTextInput = _styled__default["default"](TextInput).withConfig({
  displayName: "TextInput___StyledTextInput",
  componentId: "sc-kab4be-0"
})(["", ":", "px;"], p => p.$_css13, p => p.$_css14);

TextInput.propTypes = {
  autofocus: index.PropTypes.bool,
  multiline: index.PropTypes.bool,
  required: index.PropTypes.bool,
  type: index.PropTypes.string
};
TextInput.defaultProps = {
  autofocus: false,
  multiline: false,
  required: false,
  type: 'text'
}; // Text input wrapped to allow adornments

const WrapperTextInput = /*#__PURE__*/React__default["default"].forwardRef((_ref2, ref) => {
  let {
    adornment,
    adornmentPosition,
    adornmentSettings: {
      width: adornmentWidth = 36,
      padding: adornmentPadding = 4
    },
    ...props
  } = _ref2;
  const theme = Theme.useTheme();

  if (!adornment) {
    return /*#__PURE__*/React__default["default"].createElement(TextInput, _extends._extends({
      ref: ref
    }, props));
  }

  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css12: props.wide ? '100%' : 'max-content'
  }, /*#__PURE__*/React__default["default"].createElement(_StyledTextInput, _extends._extends({
    ref: ref
  }, props, {
    $_css13: adornmentPosition === 'end' ? 'padding-right' : 'padding-left',
    $_css14: adornmentWidth - adornmentPadding * 2
  })), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css15: adornmentPosition === 'end' ? 'right' : 'left',
    $_css16: adornmentPadding,
    $_css17: theme.surfaceContentSecondary
  }, adornment));
});
WrapperTextInput.propTypes = { ...TextInput.propTypes,
  adornment: index.PropTypes.node,
  adornmentPosition: index.PropTypes.oneOf(['start', 'end']),
  adornmentSettings: index.PropTypes.shape({
    width: index.PropTypes.number,
    padding: index.PropTypes.number
  })
};
WrapperTextInput.defaultProps = { ...TextInput.defaultProps,
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {}
}; // <input type=number> (only for compat)

function TextInputNumber(props) {
  environment.warnOnce('TextInputNumber', 'TextInputNumber is deprecated. Please use TextInput instead.');
  return /*#__PURE__*/React__default["default"].createElement(TextInput, _extends._extends({
    type: "number"
  }, props));
} // Multiline input (textarea element)


function TextInputMultiline(props) {
  return /*#__PURE__*/React__default["default"].createElement(TextInput, _extends._extends({
    multiline: true
  }, props));
}

TextInputMultiline.propTypes = {
  required: index.PropTypes.bool
};
TextInputMultiline.defaultProps = {
  required: false
};
WrapperTextInput.Number = TextInputNumber;
WrapperTextInput.Multiline = TextInputMultiline;

var _StyledInput = _styled__default["default"]("input").withConfig({
  displayName: "TextInput___StyledInput",
  componentId: "sc-kab4be-1"
})(["width:", ";height:", "px;padding:0 ", "px;background:", ";border:1px solid ", ";color:", ";border-radius:", "px;appearance:none;", ";", " &:focus{outline:none;border-color:", ";}&:read-only{color:", ";border-color:", ";}&::placeholder{color:", ";opacity:1;}&:invalid{box-shadow:none;}"], _ref3 => {
  let {
    wide
  } = _ref3;
  return wide ? '100%' : 'auto';
}, p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, constants.MEDIUM_RADIUS, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TextInput___StyledDiv",
  componentId: "sc-kab4be-2"
})(["display:inline-flex;position:relative;width:", ";"], p => p.$_css12);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "TextInput___StyledDiv2",
  componentId: "sc-kab4be-3"
})(["position:absolute;top:0;bottom:0;height:100%;", ":", "px;display:flex;align-items:center;justify-content:center;color:", ";"], p => p.$_css15, p => p.$_css16, p => p.$_css17);

exports["default"] = WrapperTextInput;
//# sourceMappingURL=TextInput.js.map
