'use strict';

var _extends = require('./extends-214be52a.js');
var defineProperty = require('./defineProperty-754b29ce.js');
var React = require('react');
var getDisplayName = require('./getDisplayName-fd5924a6.js');
var environment = require('./environment.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const observe = function (observe) {
  let initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Component => {
    var _class;

    return _class = class extends React__default["default"].Component {
      constructor() {
        super(...arguments);

        defineProperty._defineProperty(this, "state", initialState);

        defineProperty._defineProperty(this, "subscribe", observable => {
          if (observable) {
            this.setState({
              subscription: observe(observable).subscribe(state => {
                this.setState(state);
              })
            });
          }
        });

        defineProperty._defineProperty(this, "unsubscribe", () => {
          this.state.subscription && this.state.subscription.unsubscribe();
        });
      }

      componentDidMount() {
        this.subscribe(this.props.observable);
      }

      componentWillReceiveProps(_ref) {
        let {
          observable: nextObservable
        } = _ref;
        const {
          observable
        } = this.props; // If a new observable gets passed in, unsubscribe from the old and subscribe to the new

        if (nextObservable !== observable) {
          this.unsubscribe();
          this.subscribe(nextObservable);
        }
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        environment.warnOnce('observe()', 'observe() is deprecated. If you are using it with @aragon/api, using @aragon/api-react is now recommended instead.');
        const { ...props
        } = this.props; // Don't pass down the given observable

        delete props.observable;
        return /*#__PURE__*/React__default["default"].createElement(Component, _extends._extends({}, this.state, props));
      }

    }, defineProperty._defineProperty(_class, "displayName", `Observe(${getDisplayName._default(Component)})`), defineProperty._defineProperty(_class, "propTypes", {
      observable: (_ref2, _, componentName) => {
        let {
          observable
        } = _ref2;

        if (observable && typeof observable.subscribe !== 'function') {
          throw new Error(`Invalid prop \`observable\` supplied to \`${componentName}\` ` + '(wrapped by `observe()`). ' + '`observable` must be an RxJS Observable-like object. ' + `Given ${observable} instead.`);
        }
      }
    }), _class;
  };
};

var observe$1 = observe;

exports.observe = observe$1;
//# sourceMappingURL=observe-6c47d986.js.map
