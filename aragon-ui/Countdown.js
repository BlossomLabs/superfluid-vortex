'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-6b8189f0.js');
var Timer = require('./Timer.js');
var environment = require('./environment.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./defineProperty-754b29ce.js');
require('styled-components');
require('./dayjs.min-6ce914f7.js');
require('./date.js');
require('./Redraw-78519803.js');
require('./getDisplayName-fd5924a6.js');
require('./IconClock.js');
require('./IconPropTypes-0ef380f7.js');
require('./use-inside.esm-3f28ebaf.js');
require('./constants.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./text-styles.js');
require('./font.js');
require('./css.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class Countdown extends React__default["default"].Component {
  deprecationWarning() {
    environment.warnOnce('Countdown', '"Countdown" has been deprecated. Please use "Timer" instead.');
  }

  render() {
    this.deprecationWarning();
    const {
      end,
      removeDaysAndHours
    } = this.props;
    const format = removeDaysAndHours ? 'ms' : 'dhms';
    return /*#__PURE__*/React__default["default"].createElement(Timer["default"], {
      end: end,
      format: format
    });
  }

}

Countdown.propTypes = {
  end: index.PropTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: index.PropTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

exports["default"] = Countdown;
//# sourceMappingURL=Countdown.js.map
