'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var ButtonBase = require('./ButtonBase.js');
var AutoComplete = require('./AutoComplete.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./SearchInput.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./breakpoints.js');
require('./TextInput.js');
require('./IconSearch.js');
require('./IconPropTypes-0ef380f7.js');
require('./IconCross.js');
require('./useArrowKeysFocus.js');
require('./useClickOutside.js');
require('./useKeyDown.js');
require('./useFocusLeave.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AutoCompleteSelected(_ref) {
  let {
    forwardedRef,
    itemButtonStyles,
    items,
    onChange,
    onSelect,
    onSelectedClick = miscellaneous.noop,
    placeholder,
    renderItem,
    required,
    renderSelected = miscellaneous.identity,
    selected,
    selectedButtonStyles = '',
    value,
    wide
  } = _ref;
  const theme = Theme.useTheme();
  const ref = forwardedRef;
  const selectedRef = React.useRef();
  const handleSelect = React.useCallback(selected => {
    onSelect(selected);
    setTimeout(() => {
      selectedRef.current.focus();
    }, 0);
  }, [onSelect]);
  const handleSelectedClick = React.useCallback(() => {
    onSelectedClick();
    setTimeout(() => {
      if (ref && ref.current) {
        ref.current.select();
        ref.current.focus();
      }
    }, 0);
  }, [ref, onSelectedClick]);

  if (selected) {
    return /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, {
      onClick: handleSelectedClick,
      ref: selectedRef,
      focusRingRadius: constants.RADIUS,
      focusRingSpacing: 1,
      $_css: theme.surface,
      $_css2: theme.border,
      $_css3: selectedButtonStyles
    }, renderSelected(selected));
  }

  return /*#__PURE__*/React__default["default"].createElement(AutoComplete["default"], {
    itemButtonStyles: itemButtonStyles,
    items: items,
    onChange: onChange,
    onSelect: handleSelect,
    placeholder: placeholder,
    ref: ref,
    renderItem: renderItem,
    required: required,
    value: value,
    wide: wide
  });
}

AutoCompleteSelected.propTypes = {
  forwardedRef: index.PropTypes.object,
  itemButtonStyles: index.PropTypes.string,
  items: index.PropTypes.array.isRequired,
  onChange: index.PropTypes.func.isRequired,
  onSelect: index.PropTypes.func.isRequired,
  onSelectedClick: index.PropTypes.func,
  placeholder: index.PropTypes.string,
  renderItem: index.PropTypes.func,
  renderSelected: index.PropTypes.func,
  required: index.PropTypes.bool,
  selected: index.PropTypes.object,
  selectedButtonStyles: index.PropTypes.string,
  value: index.PropTypes.string,
  wide: index.PropTypes.bool
};
const AutoCompleteSelectedMemo = /*#__PURE__*/React__default["default"].memo(AutoCompleteSelected);
var AutoCompleteSelected$1 = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(AutoCompleteSelectedMemo, _extends._extends({}, props, {
  forwardedRef: ref
})));

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "AutoCompleteSelected___StyledButtonBase",
  componentId: "sc-1rqcp27-0"
})(["height:40px;width:100%;text-align:left;background:", ";cursor:pointer;border:1px solid ", ";padding:4px 8px;", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3);

exports["default"] = AutoCompleteSelected$1;
//# sourceMappingURL=AutoCompleteSelected.js.map
