'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-6b8189f0.js');
var BadgeBase = require('./BadgeBase.js');
var web3 = require('./web3.js');
var environment = require('./environment.js');
require('styled-components');
require('./use-inside.esm-3f28ebaf.js');
require('./ButtonBase.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./constants.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./provider-types.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TransactionBadge = /*#__PURE__*/React__default["default"].memo(function TransactionBadge(_ref) {
  let {
    className,
    disabled,
    explorerProvider,
    labelStyle,
    networkType,
    shorten,
    style,
    transaction,
    // Deprecated
    background,
    fontSize
  } = _ref;

  if (fontSize) {
    environment.warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    environment.warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  const isTx = web3.isTransaction(transaction);
  const transactionUrl = isTx ? web3.blockExplorerUrl('transaction', transaction, {
    networkType,
    provider: explorerProvider
  }) : '';
  const label = !isTx ? 'Invalid transaction' : shorten ? web3.shortenTransaction(transaction) : transaction;
  return /*#__PURE__*/React__default["default"].createElement(BadgeBase["default"], {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: index.PropTypes.string,
  disabled: index.PropTypes.bool,
  explorerProvider: index.PropTypes.string,
  labelStyle: index.PropTypes.string,
  networkType: index.PropTypes.string,
  shorten: index.PropTypes.bool,
  style: index.PropTypes.object,
  transaction: index.PropTypes.string.isRequired,
  // Deprecated
  background: index.PropTypes.string,
  fontSize: index.PropTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

exports["default"] = TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
