'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var Layout = require('./Layout.js');
var Bar = require('./Bar.js');
var TabBarLegacy = require('./TabBarLegacy.js');
var TabsFullWidth = require('./TabsFullWidth.js');
var Tab = require('./Tab.js');
var environment = require('./environment.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./text-styles.js');
require('./useFocusLeave.js');
require('./IconDown.js');
require('./IconPropTypes-0ef380f7.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function TabBar(_ref) {
  let {
    items,
    selected,
    onChange
  } = _ref;
  return /*#__PURE__*/React__default["default"].createElement("nav", null, /*#__PURE__*/React__default["default"].createElement(_StyledUl, null, items.map((item, i) => /*#__PURE__*/React__default["default"].createElement(Tab["default"], {
    key: i,
    index: i,
    item: item,
    onChange: onChange,
    selected: i === selected
  }))));
}

TabBar.propTypes = {
  items: index.PropTypes.arrayOf(index.PropTypes.node).isRequired,
  selected: index.PropTypes.number,
  onChange: index.PropTypes.func
};
TabBar.defaultProps = {
  selected: 0,
  onChange: miscellaneous.noop
};

function Tabs(props) {
  const {
    layoutName
  } = Layout.useLayout();
  const [insideBar] = useInside_esm.useInside('Bar');
  const [insideSidePanel] = useInside_esm.useInside('SidePanel');

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  const selected = Math.min(props.items.length - 1, Math.max(0, props.selected));

  if (selected !== props.selected) {
    environment.warnOnce('Tabs:outOfRangeSelected', `Tabs: the selected item doesn’t exist (selected index: ${props.selected}, selection range: 0 to ${props.items.length - 1}). Selecting ${selected} instead.`);
  }

  if (layoutName === 'small') {
    return /*#__PURE__*/React__default["default"].createElement(TabsFullWidth.TabsFullWidth, _extends._extends({}, props, {
      selected: selected
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(_StyledBar, {
    $_css: insideSidePanel ? `
            border-width: 0 0 1px 0;
            border-radius: 0;
          ` : ''
  }, /*#__PURE__*/React__default["default"].createElement(TabBar, _extends._extends({}, props, {
    selected: selected
  })));
}

Tabs.propTypes = TabBar.propTypes; // TabBar legacy compatibility

function TabBarLegacyCompatibility(props) {
  const [insideAppBar] = useInside_esm.useInside('AppBar'); // Use a separate component for Tabs in AppBar, to prevent breaking anything.

  if (insideAppBar) {
    return /*#__PURE__*/React__default["default"].createElement(TabBarLegacy["default"], _extends._extends({}, props, {
      inAppBar: true
    }));
  }

  environment.warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return /*#__PURE__*/React__default["default"].createElement(Tabs, props);
}

var _StyledUl = _styled__default["default"]("ul").withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1e44opw-0"
})(["display:flex"]);

var _StyledBar = _styled__default["default"](Bar["default"]).withConfig({
  displayName: "Tabs___StyledBar",
  componentId: "sc-1e44opw-1"
})(["overflow:hidden;", ""], p => p.$_css);

exports.TabBarLegacyCompatibility = TabBarLegacyCompatibility;
exports["default"] = Tabs;
//# sourceMappingURL=Tabs.js.map
