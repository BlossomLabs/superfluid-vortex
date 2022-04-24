'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-6b8189f0.js');
var DataView = require('./DataView.js');
require('styled-components');
require('./Box.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./Layout.js');
require('./Viewport-0c0a0c23.js');
require('./defineProperty-754b29ce.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./Pagination.js');
require('./PaginationItem.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./PaginationSeparator.js');
require('./IconEllipsis.js');
require('./IconPropTypes-0ef380f7.js');
require('./TableView.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./Checkbox.js');
require('./springs.js');
require('./ToggleButton.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./IconUp.js');
require('./IconDown.js');
require('./OpenedSurfaceBorder.js');
require('./ListView.js');
require('./EmptyState.js');
require('./LoadingRing.js');
require('./Link.js');
require('./PublicUrl-37deb3e2.js');
require('./getDisplayName-fd5924a6.js');
require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Accordion = /*#__PURE__*/React__default["default"].memo(function Accordion(_ref) {
  let {
    items,
    className,
    style
  } = _ref;
  const fields = React.useMemo(() => [null], []);
  const renderEntry = React.useCallback(_ref2 => {
    let [row] = _ref2;
    return [row];
  }, []);
  const renderEntryExpansion = React.useCallback(_ref3 => {
    let [_, expansion] = _ref3;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, expansion);
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(DataView["default"], {
    className: className,
    entries: items,
    entriesPerPage: -1,
    fields: fields,
    renderEntry: renderEntry,
    renderEntryExpansion: renderEntryExpansion,
    style: style
  });
}); // className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.

Accordion.propTypes = {
  className: index.PropTypes.string,
  items: index.PropTypes.arrayOf(index.PropTypes.arrayOf(index.PropTypes.node)).isRequired,
  style: index.PropTypes.object
};

exports["default"] = Accordion;
//# sourceMappingURL=Accordion.js.map
