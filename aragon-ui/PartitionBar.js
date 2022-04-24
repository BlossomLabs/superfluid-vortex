'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-6b8189f0.js');
var Distribution = require('./Distribution.js');
var environment = require('./environment.js');
require('styled-components');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function PartitionBar(_ref) {
  let {
    data,
    caption,
    colors
  } = _ref;
  environment.warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

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
  return /*#__PURE__*/React__default["default"].createElement(Distribution["default"], {
    items: items,
    renderFullLegendItem: renderFullLegendItem,
    colors: colors
  });
}

PartitionBar.propTypes = {
  data: index.PropTypes.arrayOf(index.PropTypes.shape({
    name: index.PropTypes.string.isRequired,
    percentage: index.PropTypes.number.isRequired
  })).isRequired,
  colors: index.PropTypes.arrayOf(index.PropTypes.string),
  caption: index.PropTypes.func
};

exports["default"] = PartitionBar;
//# sourceMappingURL=PartitionBar.js.map
