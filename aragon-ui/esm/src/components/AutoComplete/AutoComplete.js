import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import SearchInput from '../Input/SearchInput.js';
import { useArrowKeysFocus } from '../../hooks/useArrowKeysFocus.js';
import { useClickOutside } from '../../hooks/useClickOutside.js';
import { useKeyDown } from '../../hooks/useKeyDown.js';
import { useTheme } from '../../theme/Theme2.js';
import { noop, identity } from '../../utils/miscellaneous.js';
import { useFocusLeave } from '../../hooks/useFocusLeave.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { Transition } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { springs } from '../../style/springs.js';
import { unselectable } from '../../utils/css.js';

function AutoComplete(_ref) {
  let {
    forwardedRef,
    itemButtonStyles = '',
    items = [],
    onSelect = noop,
    onChange = noop,
    placeholder,
    renderItem = identity,
    required,
    value,
    wide
  } = _ref;
  const ref = forwardedRef;
  const uniqueItems = new Set(items);
  const [opened, setOpened] = useState(true);
  const wrapRef = useRef();
  const refs = useRef([]);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleFocus = useCallback(() => setOpened(true), []);
  const handleSelect = useCallback(item => {
    onSelect(item);
    setOpened(false);
  }, [onSelect]);
  const handleInputChange = useCallback(function () {
    setOpened(true);
    onChange(...arguments);
  }, [onChange]);
  const {
    handleFocusLeave
  } = useFocusLeave(handleClose, wrapRef);
  const {
    highlightedIndex,
    setHighlightedIndex
  } = useArrowKeysFocus(refs);
  useClickOutside(handleClose, wrapRef);
  useKeyDown(KEY_ESC, handleClose);
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [opened, items, value, setHighlightedIndex]);
  /* eslint-disable react/prop-types */

  return /*#__PURE__*/React__default.createElement(_StyledDiv, {
    ref: wrapRef,
    onBlur: handleFocusLeave
  }, /*#__PURE__*/React__default.createElement(SearchInput, {
    ref: ref,
    wide: wide,
    placeholder: placeholder,
    required: required,
    onChange: handleInputChange,
    onFocus: handleFocus,
    value: value
  }), /*#__PURE__*/React__default.createElement(Transition, {
    config: springs.swift,
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
    return show && /*#__PURE__*/React__default.createElement(Items, {
      style: {
        opacity,
        transform: scale.to(t => `scale3d(${t},${t},1)`)
      }
    }, Array.from(uniqueItems).map((item, index) => /*#__PURE__*/React__default.createElement(Item, {
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
  forwardedRef: PropTypes.object,
  itemButtonStyles: PropTypes.string,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string,
  wide: PropTypes.bool
};
/* eslint-disable react/prop-types */

const Item = /*#__PURE__*/React__default.forwardRef(function Item(_ref3, ref) {
  let {
    children,
    index,
    item,
    itemButtonStyles,
    onHighlight,
    onSelect,
    selected
  } = _ref3;
  const theme = useTheme();
  const handleClick = useCallback(event => {
    event.preventDefault();
    onSelect(item);
  }, [item, onSelect]);
  const handleFocusOrMouseOver = useCallback(() => {
    onHighlight(index);
  }, [index, onHighlight]);
  return /*#__PURE__*/React__default.createElement(_StyledLi, {
    role: "option",
    $_css: unselectable()
  }, /*#__PURE__*/React__default.createElement(_StyledButtonBase, {
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
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledAnimatedUl, _extends({
    role: "listbox"
  }, props, {
    $_css4: theme.surfaceContent,
    $_css5: theme.surface,
    $_css6: theme.border
  }));
};
/* eslint-enable react/prop-types */


const AutoCompleteMemo = /*#__PURE__*/React__default.memo(AutoComplete);
var AutoComplete$1 = /*#__PURE__*/React__default.forwardRef((props, ref) => /*#__PURE__*/React__default.createElement(AutoCompleteMemo, _extends({}, props, {
  forwardedRef: ref
})));

var _StyledDiv = _styled("div").withConfig({
  displayName: "AutoComplete___StyledDiv",
  componentId: "sc-26kvp4-0"
})(["position:relative"]);

var _StyledLi = _styled("li").withConfig({
  displayName: "AutoComplete___StyledLi",
  componentId: "sc-26kvp4-1"
})(["overflow:hidden;cursor:pointer;", ";"], p => p.$_css);

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "AutoComplete___StyledButtonBase",
  componentId: "sc-26kvp4-2"
})(["text-align:left;padding:4px 8px;width:100%;border-radius:0;border-left:3px solid transparent;cursor:pointer;", ";", ";"], p => p.$_css2, p => p.$_css3);

var _StyledAnimatedUl = _styled(animated.ul).withConfig({
  displayName: "AutoComplete___StyledAnimatedUl",
  componentId: "sc-26kvp4-3"
})(["position:absolute;z-index:2;top:100%;width:100%;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;padding:0;margin:0;list-style:none;& > li:first-child{border-top-left-radius:3px;border-top-right-radius:3px;}& > li:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;}"], p => p.$_css4, p => p.$_css5, p => p.$_css6);

export { AutoComplete$1 as default };
//# sourceMappingURL=AutoComplete.js.map
