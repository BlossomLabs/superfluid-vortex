'use strict';

var defineProperty = require('./defineProperty-754b29ce.js');
var React = require('react');
var index = require('./index-6b8189f0.js');
var getDisplayName = require('./getDisplayName-fd5924a6.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

class Redraw extends React__default["default"].PureComponent {
  constructor() {
    super(...arguments);

    defineProperty._defineProperty(this, "state", {
      lastDraw: -1
    });

    defineProperty._defineProperty(this, "draw", () => {
      this.raf = requestAnimationFrame(this.draw);
      const {
        interval
      } = this.props;
      const {
        lastDraw
      } = this.state;
      const now = Date.now();
      const delta = now - lastDraw;

      if (lastDraw === -1 || delta > interval) {
        this.setState({
          lastDraw: Math.round(now / interval) * interval
        });
      }
    });
  }

  componentDidMount() {
    this.raf = null;
    this.draw();
  }

  componentWillUnmount() {
    this.raf && cancelAnimationFrame(this.raf);
  }

  render() {
    return this.props.children();
  }

}

defineProperty._defineProperty(Redraw, "propTypes", {
  interval: index.PropTypes.number,
  children: index.PropTypes.func.isRequired
});

defineProperty._defineProperty(Redraw, "defaultProps", {
  interval: 1000
});

const hocWrap = (Component, interval) => {
  const HOC = props => /*#__PURE__*/React__default["default"].createElement(Redraw, {
    interval: interval
  }, () => /*#__PURE__*/React__default["default"].createElement(Component, props));

  HOC.displayName = `Redraw(${getDisplayName._default(Component)})`;
  return HOC;
};

Redraw.hocWrap = hocWrap;

exports.Redraw = Redraw;
//# sourceMappingURL=Redraw-78519803.js.map
