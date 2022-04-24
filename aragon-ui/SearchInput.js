'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var ButtonIcon = require('./ButtonIcon.js');
var TextInput = require('./TextInput.js');
var IconSearch = require('./IconSearch.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./index-6b8189f0.js');
require('./Button.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./IconPropTypes-0ef380f7.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const EMPTY = '';
const SearchInput = /*#__PURE__*/React__default["default"].forwardRef((_ref2, ref) => {
  let {
    onChange,
    ...props
  } = _ref2;
  const theme = Theme.useTheme();
  const fallbackRef = React.useRef();

  const _ref = ref || fallbackRef;

  const handleChange = React.useCallback(ev => {
    const {
      value
    } = ev.currentTarget;
    onChange(value, {
      inputChangeEvent: ev
    });
  }, [onChange]);
  const handleClearClick = React.useCallback(ev => {
    onChange(EMPTY, {
      clearClickEvent: ev
    });

    if (_ref.current) {
      _ref.current.focus();
    }
  }, [onChange, _ref]);
  return /*#__PURE__*/React__default["default"].createElement(TextInput["default"], _extends._extends({
    ref: _ref,
    adornment: (props.value || '') === EMPTY ? /*#__PURE__*/React__default["default"].createElement(_StyledIconSearch, {
      $_css: theme.surfaceIcon
    }) : /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
      onClick: handleClearClick,
      label: "Clear search input",
      $_css2: theme.surfaceIcon
    }, /*#__PURE__*/React__default["default"].createElement(IconCross["default"], null)),
    adornmentPosition: "end",
    onChange: handleChange
  }, props));
});
SearchInput.propTypes = { ...TextInput["default"].propTypes
};

var _StyledIconSearch = _styled__default["default"](IconSearch["default"]).withConfig({
  displayName: "SearchInput___StyledIconSearch",
  componentId: "sc-1iysd10-0"
})(["color:", ";"], p => p.$_css);

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "SearchInput___StyledButtonIcon",
  componentId: "sc-1iysd10-1"
})(["color:", ";"], p => p.$_css2);

exports["default"] = SearchInput;
//# sourceMappingURL=SearchInput.js.map
