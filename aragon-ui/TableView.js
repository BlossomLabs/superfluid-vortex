'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var Layout = require('./Layout.js');
var Checkbox = require('./Checkbox.js');
var ToggleButton = require('./ToggleButton.js');
var OpenedSurfaceBorder = require('./OpenedSurfaceBorder.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var springs = require('./springs.js');
require('react-dom');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./css.js');
require('./FocusVisible.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./use-inside.esm-3f28ebaf.js');
require('./ButtonBase.js');
require('./keycodes.js');
require('./font.js');
require('./IconUp.js');
require('./IconPropTypes-0ef380f7.js');
require('./IconDown.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function headingsFromFields(fields, _ref) {
  let {
    hasAnyActions,
    hasAnyExpansion,
    selectContent,
    selectable
  } = _ref;
  const cells = fields.map((field, index) => [field.label, field.align === 'end' ? 'right' : 'left']);

  if (hasAnyExpansion || selectable) {
    cells.unshift([selectable ? selectContent : null, 'left']);
  }

  if (hasAnyActions) {
    cells.push([null, 'left']);
  } // Return null if all the fields are empty


  if (cells.every(cell => !cell[0])) {
    return null;
  }

  return cells;
}

function cellsFromEntry(entry, _ref2) {
  let {
    fields,
    hasAnyActions,
    hasAnyExpansion,
    hasExpansion,
    selectContent,
    selectable,
    toggleChildContent
  } = _ref2;
  const cells = entry.entryNodes.map((content, index) => [content, fields[index].align, false]); // Checkbox

  if (selectable) {
    cells.unshift([selectContent, 'start', true]);
  } // Toggle child


  if (!selectable && hasAnyExpansion) {
    cells.unshift([hasExpansion && toggleChildContent, 'start', true]);
  } // Actions


  if (hasAnyActions) {
    cells.push([entry.actions, 'end', true]);
  }

  return cells;
}

function TableView(_ref3) {
  let {
    alignChildOnField,
    allSelected,
    entries,
    fields,
    hasAnyActions,
    hasAnyExpansion,
    onSelect,
    onSelectAll,
    renderSelectionCount,
    rowHeight,
    selectable,
    selectedCount
  } = _ref3;
  const [opened, setOpened] = React.useState(-1);
  const toggleEntry = React.useCallback(index => {
    setOpened(opened => opened === index ? -1 : index);
  }, []);
  const headCells = React.useMemo(() => headingsFromFields(fields, {
    hasAnyActions,
    hasAnyExpansion,
    selectContent: /*#__PURE__*/React__default["default"].createElement(Checkbox["default"], {
      indeterminate: allSelected === 0,
      checked: allSelected > -1,
      onChange: onSelectAll
    }),
    selectable
  }), [fields, hasAnyActions, hasAnyExpansion, allSelected, onSelectAll, selectable]);
  React.useEffect(() => {
    setOpened(-1);
  }, [entries, fields]);
  return /*#__PURE__*/React__default["default"].createElement(_StyledTable, null, headCells && /*#__PURE__*/React__default["default"].createElement("thead", null, /*#__PURE__*/React__default["default"].createElement(HeadRow, {
    cells: headCells,
    selectedCount: selectedCount,
    renderSelectionCount: renderSelectionCount
  })), /*#__PURE__*/React__default["default"].createElement("tbody", null, entries.map((entry, index) => /*#__PURE__*/React__default["default"].createElement(Entry, {
    key: entry.index,
    alignChildOnField: alignChildOnField,
    entry: entry,
    fields: fields,
    firstRow: index === 0,
    hasAnyActions: hasAnyActions,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: onSelect,
    onToggle: toggleEntry,
    opened: opened === entry.index,
    rowHeight: rowHeight,
    selectable: selectable
  }))));
}

TableView.propTypes = {
  alignChildOnField: index.PropTypes.number.isRequired,
  allSelected: index.PropTypes.oneOf([-1, 0, 1]).isRequired,
  entries: index.PropTypes.array.isRequired,
  fields: index.PropTypes.array.isRequired,
  hasAnyActions: index.PropTypes.bool.isRequired,
  hasAnyExpansion: index.PropTypes.bool.isRequired,
  onSelect: index.PropTypes.func.isRequired,
  onSelectAll: index.PropTypes.func.isRequired,
  renderSelectionCount: index.PropTypes.func.isRequired,
  rowHeight: index.PropTypes.number.isRequired,
  selectable: index.PropTypes.bool.isRequired,
  selectedCount: index.PropTypes.number.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

function useSidePadding() {
  const {
    layoutName
  } = Layout.useLayout();
  return layoutName === 'small' ? 2 * constants.GU : 3 * constants.GU;
}

function HeadRow(_ref4) {
  let {
    cells,
    selectedCount,
    renderSelectionCount
  } = _ref4;
  const theme = Theme.useTheme();
  const sidePadding = useSidePadding();
  return /*#__PURE__*/React__default["default"].createElement("tr", null, cells.map((cell, index) => {
    const hidden = selectedCount > 0 && index > 1;
    const content = selectedCount > 0 && index === 1 ? renderSelectionCount(selectedCount) : cell[0];
    return !hidden && /*#__PURE__*/React__default["default"].createElement(_StyledTh, {
      key: index,
      colSpan: selectedCount > 0 && index === 1 ? cells.length - 1 : 1,
      $_css: 4 * constants.GU,
      $_css2: index === 0 ? sidePadding : 0,
      $_css3: index === cells.length - 1 ? sidePadding : 0,
      $_css4: cell[1],
      $_css5: textStyles.textStyle('label2'),
      $_css6: theme.surfaceContentSecondary,
      $_css7: theme.border
    }, content);
  }));
}

const Entry = /*#__PURE__*/React__default["default"].memo(function Entry(_ref5) {
  let {
    alignChildOnField,
    entry,
    fields,
    firstRow,
    hasAnyActions,
    hasAnyExpansion,
    onSelect,
    onToggle,
    opened,
    rowHeight,
    selectable
  } = _ref5;
  const hasExpansion = entry.expansion.content.length > 0;
  const entryIndex = entry.index;
  const handleToggle = React.useCallback(() => {
    onToggle(entryIndex);
  }, [entryIndex, onToggle]);
  const handleSelectChange = React.useCallback(check => {
    onSelect(entryIndex, check);
  }, [entryIndex, onSelect]);
  const cells = cellsFromEntry(entry, {
    fields,
    hasAnyActions,
    hasAnyExpansion,
    hasExpansion,
    selectable,
    toggleChildContent: hasAnyExpansion ? /*#__PURE__*/React__default["default"].createElement(Toggle, {
      opened: opened,
      onToggle: handleToggle
    }) : null,
    selectContent: selectable ? /*#__PURE__*/React__default["default"].createElement(Checkbox["default"], {
      onChange: handleSelectChange,
      checked: entry.selected
    }) : null
  });
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(EntryRow, {
    cells: cells,
    firstRow: firstRow,
    rowHeight: rowHeight,
    selected: entry.selected
  }), hasExpansion && /*#__PURE__*/React__default["default"].createElement(EntryExpansion, {
    alignChildOnCell: alignChildOnField + 1,
    cellsCount: cells.length,
    expansion: entry.expansion,
    opened: opened,
    rowHeight: rowHeight
  }));
});

function EntryRow(_ref6) {
  let {
    firstRow,
    cells,
    selected,
    rowHeight,
    mode
  } = _ref6;
  const theme = Theme.useTheme();
  const sidePadding = useSidePadding();
  return /*#__PURE__*/React__default["default"].createElement(_StyledTr, {
    $_css8: selected ? theme.surfaceSelected : 'none'
  }, cells.map((_ref7, index, cells) => {
    let [content, align, compact] = _ref7;
    const first = index === 0;
    const last = index === cells.length - 1;
    return /*#__PURE__*/React__default["default"].createElement(_StyledTd, {
      key: index,
      $_css9: compact ? '1px' // For some reason Blink tends to make 0 grow but not 1px
      : 'auto',
      $_css10: rowHeight,
      $_css11: first || compact ? sidePadding : 0,
      $_css12: !first && (align !== 'end' || last) || compact ? sidePadding : 0,
      $_css13: firstRow ? '0' : `1px solid ${theme.border}`
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
      $_css14: `flex-${align}`
    }, content));
  }));
}

function EntryExpansion(_ref8) {
  let {
    alignChildOnCell,
    cellsCount,
    expansion,
    opened,
    rowHeight
  } = _ref8;
  const theme = Theme.useTheme(); // Handles the height of the expansion in free layout mode

  const [freeLayoutContentHeight, setFreeLayoutContentHeight] = React.useState(0);
  const handleFreeLayoutContentRef = React.useCallback(element => {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  }, []);
  const height = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.Transition, {
    native: true,
    unique: true,
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
    config: { ...springs.springs.smooth,
      precision: 0.1
    }
  }, (_ref9, show) => {
    let {
      height
    } = _ref9;
    return show && /*#__PURE__*/React__default["default"].createElement(_StyledTr2, {
      $_css15: theme.surfaceUnder
    }, alignChildOnCell > 0 && /*#__PURE__*/React__default["default"].createElement("td", {
      colSpan: alignChildOnCell
    }, /*#__PURE__*/React__default["default"].createElement(OpenedSurfaceBorder.OpenedSurfaceBorder, {
      opened: opened
    }), /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, {
      style: {
        height
      }
    }, expansion.content.map((child, i) => /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
      key: i,
      $_css16: expansion.freeLayout ? 'auto' : `${rowHeight}px`,
      $_css17: theme.border
    })))), /*#__PURE__*/React__default["default"].createElement("td", {
      colSpan: alignChildOnCell === -1 ? cellsCount : cellsCount - alignChildOnCell
    }, alignChildOnCell === 0 && /*#__PURE__*/React__default["default"].createElement(OpenedSurfaceBorder.OpenedSurfaceBorder, {
      opened: opened
    }), /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv2, {
      style: {
        height
      }
    }, expansion.content.map((child, i) => /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
      key: i,
      ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
      $_css18: expansion.freeLayout ? 'auto' : `${rowHeight}px`,
      $_css19: alignChildOnCell < 1 ? 3 * constants.GU : 0,
      $_css20: 3 * constants.GU,
      $_css21: theme.border
    }, child)))));
  });
}

const Toggle = /*#__PURE__*/React__default["default"].memo(function Toggle(_ref10) {
  let {
    opened,
    onToggle
  } = _ref10;
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, null, /*#__PURE__*/React__default["default"].createElement(OpenedSurfaceBorder.OpenedSurfaceBorder, {
    opened: opened
  }), /*#__PURE__*/React__default["default"].createElement(ToggleButton.ToggleButton, {
    opened: opened,
    onClick: onToggle
  }));
});

var _StyledTable = _styled__default["default"]("table").withConfig({
  displayName: "TableView___StyledTable",
  componentId: "sc-1t132wa-0"
})(["width:100%;border-spacing:0;border-collapse:separate;"]);

var _StyledTh = _styled__default["default"]("th").withConfig({
  displayName: "TableView___StyledTh",
  componentId: "sc-1t132wa-1"
})(["height:", "px;padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";", ";color:", ";border-bottom:1px solid ", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7);

var _StyledTr = _styled__default["default"]("tr").withConfig({
  displayName: "TableView___StyledTr",
  componentId: "sc-1t132wa-2"
})(["transition:background 150ms ease-in-out;background:", ";"], p => p.$_css8);

var _StyledTd = _styled__default["default"]("td").withConfig({
  displayName: "TableView___StyledTd",
  componentId: "sc-1t132wa-3"
})(["position:relative;width:", ";height:", "px;padding-top:0;padding-bottom:0;padding-left:", "px;padding-right:", "px;border-top:", ";"], p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12, p => p.$_css13);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TableView___StyledDiv",
  componentId: "sc-1t132wa-4"
})(["display:flex;width:100%;justify-content:", ";"], p => p.$_css14);

var _StyledTr2 = _styled__default["default"]("tr").withConfig({
  displayName: "TableView___StyledTr2",
  componentId: "sc-1t132wa-5"
})(["td{position:relative;padding:0;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);background:", ";}"], p => p.$_css15);

var _StyledAnimatedDiv = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv",
  componentId: "sc-1t132wa-6"
})(["overflow:hidden"]);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "TableView___StyledDiv2",
  componentId: "sc-1t132wa-7"
})(["height:", ";border-top:1px solid ", ";"], p => p.$_css16, p => p.$_css17);

var _StyledAnimatedDiv2 = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv2",
  componentId: "sc-1t132wa-8"
})(["overflow:hidden"]);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "TableView___StyledDiv3",
  componentId: "sc-1t132wa-9"
})(["display:flex;align-items:center;height:", ";padding-left:", "px;padding-right:", "px;border-top:1px solid ", ";"], p => p.$_css18, p => p.$_css19, p => p.$_css20, p => p.$_css21);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "TableView___StyledDiv4",
  componentId: "sc-1t132wa-10"
})(["width:100%;height:100%;"]);

exports.TableView = TableView;
//# sourceMappingURL=TableView.js.map
