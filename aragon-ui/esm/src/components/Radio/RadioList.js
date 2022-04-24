import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import RadioGroup from './RadioGroup.js';
import RadioListItem from './RadioListItem.js';
import { GU } from '../../style/constants.js';
import { noop } from '../../utils/miscellaneous.js';

function RadioList(_ref) {
  let {
    description,
    items,
    onChange,
    selected,
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/React__default.createElement("div", props, title && /*#__PURE__*/React__default.createElement(_StyledH, {
    $_css: 0.5 * GU
  }, title), description && /*#__PURE__*/React__default.createElement(_StyledDiv, {
    $_css2: 2.5 * GU
  }, description), /*#__PURE__*/React__default.createElement(_StyledRadioGroup, {
    onChange: onChange,
    selected: selected
  }, items.map((_ref2, i) => {
    let {
      description,
      title
    } = _ref2;
    return /*#__PURE__*/React__default.createElement(RadioListItem, {
      key: i,
      description: description,
      index: i,
      title: title
    });
  })));
}

RadioList.propTypes = {
  description: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired
  })),
  onChange: PropTypes.func,
  selected: (_ref3, _, componentName) => {
    let {
      items,
      selected
    } = _ref3;

    if (!Number.isInteger(selected) || selected >= items.length) {
      throw new Error(`Invalid prop \`selected\` supplied to \`${componentName}\`. ` + '`selected` must be an integer less than the length of `items`. ' + `Given ${selected} instead.`);
    }
  },
  title: PropTypes.node
};
RadioList.defaultProps = {
  items: [],
  onChange: noop,
  selected: 0
};

var _StyledH = _styled("h2").withConfig({
  displayName: "RadioList___StyledH",
  componentId: "sc-ozvahq-0"
})(["margin-bottom:", "px;font-weight:600;"], p => p.$_css);

var _StyledDiv = _styled("div").withConfig({
  displayName: "RadioList___StyledDiv",
  componentId: "sc-ozvahq-1"
})(["margin-bottom:", "px;"], p => p.$_css2);

var _StyledRadioGroup = _styled(RadioGroup).withConfig({
  displayName: "RadioList___StyledRadioGroup",
  componentId: "sc-ozvahq-2"
})(["display:flex;flex-direction:column;"]);

export { RadioList as default };
//# sourceMappingURL=RadioList.js.map
