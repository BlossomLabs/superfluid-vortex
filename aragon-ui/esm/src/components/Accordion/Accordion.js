import React__default, { useMemo, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import DataView from '../DataView/DataView.js';

const Accordion = /*#__PURE__*/React__default.memo(function Accordion(_ref) {
  let {
    items,
    className,
    style
  } = _ref;
  const fields = useMemo(() => [null], []);
  const renderEntry = useCallback(_ref2 => {
    let [row] = _ref2;
    return [row];
  }, []);
  const renderEntryExpansion = useCallback(_ref3 => {
    let [_, expansion] = _ref3;
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, expansion);
  }, []);
  return /*#__PURE__*/React__default.createElement(DataView, {
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
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.node)).isRequired,
  style: PropTypes.object
};

export { Accordion as default };
//# sourceMappingURL=Accordion.js.map
