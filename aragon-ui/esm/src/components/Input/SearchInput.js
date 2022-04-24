import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React__default, { useRef, useCallback } from 'react';
import ButtonIcon from '../Button/ButtonIcon.js';
import WrapperTextInput from './TextInput.js';
import IconSearch from '../../icons/components/IconSearch.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCross from '../../icons/components/IconCross.js';

const EMPTY = '';
const SearchInput = /*#__PURE__*/React__default.forwardRef((_ref2, ref) => {
  let {
    onChange,
    ...props
  } = _ref2;
  const theme = useTheme();
  const fallbackRef = useRef();

  const _ref = ref || fallbackRef;

  const handleChange = useCallback(ev => {
    const {
      value
    } = ev.currentTarget;
    onChange(value, {
      inputChangeEvent: ev
    });
  }, [onChange]);
  const handleClearClick = useCallback(ev => {
    onChange(EMPTY, {
      clearClickEvent: ev
    });

    if (_ref.current) {
      _ref.current.focus();
    }
  }, [onChange, _ref]);
  return /*#__PURE__*/React__default.createElement(WrapperTextInput, _extends({
    ref: _ref,
    adornment: (props.value || '') === EMPTY ? /*#__PURE__*/React__default.createElement(_StyledIconSearch, {
      $_css: theme.surfaceIcon
    }) : /*#__PURE__*/React__default.createElement(_StyledButtonIcon, {
      onClick: handleClearClick,
      label: "Clear search input",
      $_css2: theme.surfaceIcon
    }, /*#__PURE__*/React__default.createElement(IconCross, null)),
    adornmentPosition: "end",
    onChange: handleChange
  }, props));
});
SearchInput.propTypes = { ...WrapperTextInput.propTypes
};

var _StyledIconSearch = _styled(IconSearch).withConfig({
  displayName: "SearchInput___StyledIconSearch",
  componentId: "sc-1iysd10-0"
})(["color:", ";"], p => p.$_css);

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "SearchInput___StyledButtonIcon",
  componentId: "sc-1iysd10-1"
})(["color:", ";"], p => p.$_css2);

export { SearchInput as default };
//# sourceMappingURL=SearchInput.js.map