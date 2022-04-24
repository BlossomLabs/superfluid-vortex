import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import Distribution from '../Distribution/Distribution.js';
import { warnOnce } from '../../utils/environment.js';

function PartitionBar(_ref) {
  let {
    data,
    caption,
    colors
  } = _ref;
  warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

  const renderFullLegendItem = caption ? _ref2 => {
    let {
      item,
      ...props
    } = _ref2;
    return caption({
      name: item,
      ...props
    });
  } : undefined; // name => item (items)

  const items = data.map(_ref3 => {
    let {
      name,
      percentage
    } = _ref3;
    return {
      item: name,
      percentage
    };
  });
  return /*#__PURE__*/React__default.createElement(Distribution, {
    items: items,
    renderFullLegendItem: renderFullLegendItem,
    colors: colors
  });
}

PartitionBar.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  caption: PropTypes.func
};

export { PartitionBar as default };
//# sourceMappingURL=PartitionBar.js.map
