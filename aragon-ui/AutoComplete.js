'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var ButtonBase = require('./ButtonBase.js');
var SearchInput = require('./SearchInput.js');
var useArrowKeysFocus = require('./useArrowKeysFocus.js');
var useClickOutside = require('./useClickOutside.js');
var useKeyDown = require('./useKeyDown.js');
var Theme = require('./Theme.js');
var miscellaneous = require('./miscellaneous.js');
var useFocusLeave = require('./useFocusLeave.js');
var keycodes = require('./keycodes.js');
var springs = require('./springs.js');
var css = require('./css.js');
require('./_commonjsHelpers-b3309d7b.js');
require('react-dom');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function AutoComplete(_ref) {
  let {
    forwardedRef,
    itemButtonStyles = '',
    items = [],
    onSelect = miscellaneous.noop,
    onChange = miscellaneous.noop,
    placeholder,
    renderItem = miscellaneous.identity,
    required,
    value,
    wide
  } = _ref;
  const ref = forwardedRef;
  const uniqueItems = new Set(items);
  const [opened, setOpened] = React.useState(true);
  const wrapRef = React.useRef();
  const refs = React.useRef([]);
  const handleClose = React.useCallback(() => setOpened(false), []);
  const handleFocus = React.useCallback(() => setOpened(true), []);
  const handleSelect = React.useCallback(item => {
    onSelect(item);
    setOpened(false);
  }, [onSelect]);
  const handleInputChange = React.useCallback(function () {
    setOpened(true);
    onChange(...arguments);
  }, [onChange]);
  const {
    handleFocusLeave
  } = useFocusLeave.useFocusLeave(handleClose, wrapRef);
  const {
    highlightedIndex,
    setHighlightedIndex
  } = useArrowKeysFocus.useArrowKeysFocus(refs);
  useClickOutside.useClickOutside(handleClose, wrapRef);
  useKeyDown.useKeyDown(keycodes.KEY_ESC, handleClose);
  React.useEffect(() => {
    setHighlightedIndex(-1);
  }, [opened, items, value, setHighlightedIndex]);
  /* eslint-disable react/prop-types */

  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    ref: wrapRef,
    onBlur: handleFocusLeave
  }, /*#__PURE__*/React__default["default"].createElement(SearchInput["default"], {
    ref: ref,
    wide: wide,
    placeholder: placeholder,
    required: required,
    onChange: handleInputChange,
    onFocus: handleFocus,
    value: value
  }), /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.Transition, {
    config: springs.springs.swift,
    items: opened && items.length > 0,
    from: {
      scale: 0.98,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: 1,
      opacity: 0
    },
    native: true
  }, (_ref2, show) => {
    let {
      scale,
      opacity
    } = _ref2;
    return show && /*#__PURE__*/React__default["default"].createElement(Items, {
      style: {
        opacity,
        transform: scale.to(t => `scale3d(${t},${t},1)`)
      }
    }, Array.from(uniqueItems).map((item, index) => /*#__PURE__*/React__default["default"].createElement(Item, {
      key: item.key || item,
      ref: node => refs.current[index] = node,
      index: index,
      item: item,
      itemButtonStyles: itemButtonStyles,
      onHighlight: setHighlightedIndex,
      onSelect: handleSelect,
      selected: index === highlightedIndex
    }, renderItem(item, value))));
  }));
  /* eslint-enable react/prop-types */
}

AutoComplete.propTypes = {
  forwardedRef: index.PropTypes.object,
  itemButtonStyles: index.PropTypes.string,
  items: index.PropTypes.array.isRequired,
  onSelect: index.PropTypes.func.isRequired,
  onChange: index.PropTypes.func.isRequired,
  placeholder: index.PropTypes.string,
  renderItem: index.PropTypes.func,
  required: index.PropTypes.bool,
  value: index.PropTypes.string,
  wide: index.PropTypes.bool
};
/* eslint-disable react/prop-types */

const Item = /*#__PURE__*/React__default["default"].forwardRef(function Item(_ref3, ref) {
  let {
    children,
    index,
    item,
    itemButtonStyles,
    onHighlight,
    onSelect,
    selected
  } = _ref3;
  const theme = Theme.useTheme();
  const handleClick = React.useCallback(event => {
    event.preventDefault();
    onSelect(item);
  }, [item, onSelect]);
  const handleFocusOrMouseOver = React.useCallback(() => {
    onHighlight(index);
  }, [index, onHighlight]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledLi, {
    role: "option",
    $_css: css.unselectable()
  }, /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, {
    ref: ref,
    onClick: handleClick,
    onFocus: handleFocusOrMouseOver,
    onMouseOver: handleFocusOrMouseOver,
    $_css2: selected ? `
                outline: 2px solid ${theme.accent};
                background: ${theme.surfaceHighlight};
                border-left: 3px solid ${theme.accent};
              ` : '',
    $_css3: itemButtonStyles
  }, children));
});
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */

const Items = function Items(props) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedUl, _extends._extends({
    role: "listbox"
  }, props, {
    $_css4: theme.surfaceContent,
    $_css5: theme.surface,
    $_css6: theme.border
  }));
};
/* eslint-enable react/prop-types */


const AutoCompleteMemo = /*#__PURE__*/React__default["default"].memo(AutoComplete);
var AutoComplete$1 = /*#__PURE__*/React__default["default"].forwardRef((props, ref) => /*#__PURE__*/React__default["default"].createElement(AutoCompleteMemo, _extends._extends({}, props, {
  forwardedRef: ref
})));

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "AutoComplete___StyledDiv",
  componentId: "sc-26kvp4-0"
})(["position:relative"]);

var _StyledLi = _styled__default["default"]("li").withConfig({
  displayName: "AutoComplete___StyledLi",
  componentId: "sc-26kvp4-1"
})(["overflow:hidden;cursor:pointer;", ";"], p => p.$_css);

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "AutoComplete___StyledButtonBase",
  componentId: "sc-26kvp4-2"
})(["text-align:left;padding:4px 8px;width:100%;border-radius:0;border-left:3px solid transparent;cursor:pointer;", ";", ";"], p => p.$_css2, p => p.$_css3);

var _StyledAnimatedUl = _styled__default["default"](reactSpringWeb_esm.animated.ul).withConfig({
  displayName: "AutoComplete___StyledAnimatedUl",
  componentId: "sc-26kvp4-3"
})(["position:absolute;z-index:2;top:100%;width:100%;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;padding:0;margin:0;list-style:none;& > li:first-child{border-top-left-radius:3px;border-top-right-radius:3px;}& > li:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;}"], p => p.$_css4, p => p.$_css5, p => p.$_css6);

exports["default"] = AutoComplete$1;
//# sourceMappingURL=AutoComplete.js.map