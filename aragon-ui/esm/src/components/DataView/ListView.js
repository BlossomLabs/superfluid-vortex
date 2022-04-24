import _styled from 'styled-components';
import React__default, { useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import CheckBoxWithTheme from '../Input/Checkbox.js';
import { ToggleButton } from './ToggleButton.js';
import { OpenedSurfaceBorder } from './OpenedSurfaceBorder.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { Transition } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { springs } from '../../style/springs.js';

function ListView(_ref) {
  let {
    allSelected,
    entries,
    fields,
    hasAnyExpansion,
    onSelect,
    onSelectAll,
    renderSelectionCount,
    selectable,
    rowHeight
  } = _ref;
  const theme = useTheme();
  const [opened, setOpened] = useState(-1);
  const toggleEntry = useCallback(index => {
    setOpened(opened => opened === index ? -1 : index);
  }, []);
  const sideSpace = selectable || hasAnyExpansion;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, entries.map((entry, index) => {
    const hasExpansion = entry.expansion.content.length > 0;
    return /*#__PURE__*/React__default.createElement(_StyledDiv, {
      key: index,
      $_css: 3 * GU,
      $_css2: (sideSpace ? 6.5 : 3) * GU,
      $_css3: Number(index !== entries.length - 1),
      $_css4: theme.border,
      $_css5: entry.selected ? theme.surfaceSelected : 'none'
    }, /*#__PURE__*/React__default.createElement(OpenedSurfaceBorder, {
      opened: entry.index === opened
    }), sideSpace && /*#__PURE__*/React__default.createElement(_StyledDiv2, {
      $_css6: 1.5 * GU,
      $_css7: 6.5 * GU
    }, selectable && /*#__PURE__*/React__default.createElement(Select, {
      index: entry.index,
      selected: entry.selected,
      onSelect: onSelect
    }), !selectable && hasExpansion && /*#__PURE__*/React__default.createElement(ToggleButton, {
      opened: entry.index === opened,
      onClick: () => toggleEntry(entry.index)
    })), entry.actions && /*#__PURE__*/React__default.createElement(_StyledDiv3, {
      $_css8: 2 * GU,
      $_css9: 3 * GU
    }, entry.actions), /*#__PURE__*/React__default.createElement("div", null, entry.entryNodes.map((content, index) => [// field content
    content, // field label
    fields[index].label, // priority number
    fields[index].priority && fields[index].priority || 0]) // sort by priority
    .sort((a, b) => b[2] - a[2]).map((_ref2, index, entryNodes) => {
      let [content, label] = _ref2;
      return /*#__PURE__*/React__default.createElement(_StyledDiv4, {
        key: index,
        $_css10: index === entryNodes.length - 1 ? 2 * GU : 0
      }, /*#__PURE__*/React__default.createElement(_StyledDiv5, {
        $_css11: 2 * GU,
        $_css12: 1 * GU,
        $_css13: theme.surfaceContentSecondary,
        $_css14: textStyle('label2')
      }, label), /*#__PURE__*/React__default.createElement("div", null, content));
    })), hasExpansion && /*#__PURE__*/React__default.createElement(EntryExpansion, {
      expansion: entry.expansion,
      opened: opened === entry.index,
      rowHeight: rowHeight
    }));
  }));
}

ListView.propTypes = {
  allSelected: PropTypes.oneOf([-1, 0, 1]).isRequired,
  entries: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  hasAnyExpansion: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  renderSelectionCount: PropTypes.func.isRequired,
  rowHeight: PropTypes.number.isRequired,
  selectable: PropTypes.bool.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

function EntryExpansion(_ref3) {
  let {
    expansion,
    opened,
    rowHeight
  } = _ref3;
  const theme = useTheme(); // Handles the height of the expansion in free layout mode

  const [freeLayoutContentHeight, setFreeLayoutContentHeight] = useState(0);
  const handleFreeLayoutContentRef = useCallback(element => {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  }, []);
  const height = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return /*#__PURE__*/React__default.createElement(Transition, {
    native: true,
    items: opened,
    from: {
      height: 0
    },
    enter: {
      height
    },
    update: {
      height
    },
    leave: {
      height: 0
    },
    config: { ...springs.smooth,
      precision: 0.1
    }
  }, (_ref4, show) => {
    let {
      height
    } = _ref4;
    return show && /*#__PURE__*/React__default.createElement(_StyledAnimatedDiv, {
      style: {
        height: height.interpolate(v => `${v}px`)
      },
      $_css15: theme.surfaceUnder,
      $_css16: -6.5 * GU,
      $_css17: -3 * GU,
      $_css18: 6.5 * GU
    }, expansion.content.map((child, i) => /*#__PURE__*/React__default.createElement(_StyledDiv6, {
      key: i,
      ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
      $_css19: expansion.freeLayout ? 'auto' : `${rowHeight}px`,
      $_css20: 3 * GU
    }, child)));
  });
}

function Select(_ref5) {
  let {
    index,
    selected,
    onSelect
  } = _ref5;
  const change = useCallback(check => {
    onSelect(index, check);
  }, [index, onSelect]);
  return /*#__PURE__*/React__default.createElement(CheckBoxWithTheme, {
    onChange: change,
    checked: selected
  });
}

var _StyledDiv = _styled("div").withConfig({
  displayName: "ListView___StyledDiv",
  componentId: "sc-128s2ul-0"
})(["position:relative;padding:0;padding-right:", "px;padding-left:", "px;border-bottom:", "px solid ", ";transition:background 150ms ease-in-out;background:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv2",
  componentId: "sc-128s2ul-1"
})(["position:absolute;top:", "px;left:0;display:flex;justify-content:center;width:", "px;"], p => p.$_css6, p => p.$_css7);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv3",
  componentId: "sc-128s2ul-2"
})(["position:absolute;top:", "px;right:", "px;"], p => p.$_css8, p => p.$_css9);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv4",
  componentId: "sc-128s2ul-3"
})(["display:flex;flex-direction:column;padding-bottom:", "px;"], p => p.$_css10);

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv5",
  componentId: "sc-128s2ul-4"
})(["display:flex;align-items:center;margin:", "px 0 ", "px;color:", ";", ";"], p => p.$_css11, p => p.$_css12, p => p.$_css13, p => p.$_css14);

var _StyledAnimatedDiv = _styled(animated.div).withConfig({
  displayName: "ListView___StyledAnimatedDiv",
  componentId: "sc-128s2ul-5"
})(["overflow:hidden;background:", ";margin-left:", "px;margin-right:", "px;padding-left:", "px;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);"], p => p.$_css15, p => p.$_css16, p => p.$_css17, p => p.$_css18);

var _StyledDiv6 = _styled("div").withConfig({
  displayName: "ListView___StyledDiv6",
  componentId: "sc-128s2ul-6"
})(["display:flex;align-items:center;height:", ";padding-right:", "px;"], p => p.$_css19, p => p.$_css20);

export { ListView };
//# sourceMappingURL=ListView.js.map
