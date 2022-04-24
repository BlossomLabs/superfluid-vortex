'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var TextInput = require('./TextInput.js');
var ButtonIcon = require('./ButtonIcon.js');
var ToastHub = require('./ToastHub.js');
var Theme = require('./Theme.js');
var IconCopy = require('./IconCopy.js');
var constants = require('./constants.js');
var environment = require('./environment.js');
var textStyles = require('./text-styles.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./Button.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./components.js');
require('./springs.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconPropTypes-0ef380f7.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const HEIGHT = 5 * constants.GU;
const TextCopy = /*#__PURE__*/React__default["default"].memo( /*#__PURE__*/React__default["default"].forwardRef(function TextCopy(_ref, ref) {
  let {
    adornment,
    autofocus,
    message,
    monospace,
    onCopy,
    value,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const toast = ToastHub.useToast();
  const inputRef = React.useRef(null); // Allows to focus the component from the outside

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  })); // Select the content on focus

  const handleFocus = React.useCallback(() => {
    inputRef.current && inputRef.current.select();
  }, []); // If onCopy is set (either to a function or null), Toast is not used.

  const onCopyOrToast = onCopy === undefined ? toast : onCopy || miscellaneous.noop;
  const handleCopy = React.useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();

      try {
        document.execCommand('copy');
        onCopyOrToast(message);
      } catch (err) {
        environment.warn(err);
      }
    }
  }, [message, onCopyOrToast]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: 52.5 * constants.GU,
    $_css2: adornment ? `${HEIGHT}px` : '0'
  }), adornment && /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css3: theme.surface,
    $_css4: theme.border
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css5: HEIGHT - 2,
    $_css6: HEIGHT - 2
  }, adornment)), /*#__PURE__*/React__default["default"].createElement(_StyledTextInput, {
    ref: inputRef,
    adornment: /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
      onClick: handleCopy,
      label: "Copy",
      $_css7: HEIGHT - 2,
      $_css8: HEIGHT - 2,
      $_css9: theme.surfaceIcon
    }, /*#__PURE__*/React__default["default"].createElement(IconCopy["default"], null)),
    adornmentPosition: "end",
    adornmentSettings: {
      // Keep the button square
      width: HEIGHT - 2,
      padding: 0
    },
    autofocus: autofocus,
    onFocus: handleFocus,
    readOnly: true,
    value: value,
    wide: true,
    $_css10: theme.border,
    $_css11: adornment ? `
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                  border-left: 0;
                ` : '',
    $_css12: textStyles.textStyle(monospace ? 'address2' : 'body3'),
    $_css13: theme.surfaceContent
  }));
}));
TextCopy.propTypes = {
  adornment: index.PropTypes.node,
  autofocus: index.PropTypes.bool,
  message: index.PropTypes.string,
  monospace: index.PropTypes.bool,
  onCopy: index.PropTypes.func,
  value: index.PropTypes.string
};
TextCopy.defaultProps = {
  autofocus: false,
  message: 'Copied',
  monospace: true
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TextCopy___StyledDiv",
  componentId: "sc-1ywq36f-0"
})(["position:relative;display:inline-flex;width:", "px;max-width:100%;height:", "px;padding-left:", ";"], p => p.$_css, HEIGHT, p => p.$_css2);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "TextCopy___StyledDiv2",
  componentId: "sc-1ywq36f-1"
})(["position:absolute;top:0;left:0;overflow:hidden;width:", "px;height:", "px;background:", ";border:1px solid ", ";border-right:0;border-radius:", "px 0.0001px 0.0001px ", "px;"], HEIGHT, HEIGHT, p => p.$_css3, p => p.$_css4, constants.RADIUS, constants.RADIUS);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "TextCopy___StyledDiv3",
  componentId: "sc-1ywq36f-2"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], p => p.$_css5, p => p.$_css6);

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "TextCopy___StyledButtonIcon",
  componentId: "sc-1ywq36f-3"
})(["width:", "px;height:", "px;border-radius:0;color:", ";"], p => p.$_css7, p => p.$_css8, p => p.$_css9);

var _StyledTextInput = _styled__default["default"](TextInput["default"]).withConfig({
  displayName: "TextCopy___StyledTextInput",
  componentId: "sc-1ywq36f-4"
})(["text-overflow:ellipsis;height:", "px;max-width:100%;border:1px solid ", ";border-radius:", "px;", ";", ";&:read-only{color:", ";text-shadow:none;}"], HEIGHT, p => p.$_css10, constants.RADIUS, p => p.$_css11, p => p.$_css12, p => p.$_css13);

exports["default"] = TextCopy;
//# sourceMappingURL=TextCopy.js.map
