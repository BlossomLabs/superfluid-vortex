import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React__default from 'react';
import _default from '../../../node_modules/react-display-name/lib/getDisplayName.js';
import { warnOnce } from '../../utils/environment.js';

const observe = function (observe) {
  let initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Component => {
    var _class;

    return _class = class extends React__default.Component {
      constructor() {
        super(...arguments);

        _defineProperty(this, "state", initialState);

        _defineProperty(this, "subscribe", observable => {
          if (observable) {
            this.setState({
              subscription: observe(observable).subscribe(state => {
                this.setState(state);
              })
            });
          }
        });

        _defineProperty(this, "unsubscribe", () => {
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
        warnOnce('observe()', 'observe() is deprecated. If you are using it with @aragon/api, using @aragon/api-react is now recommended instead.');
        const { ...props
        } = this.props; // Don't pass down the given observable

        delete props.observable;
        return /*#__PURE__*/React__default.createElement(Component, _extends({}, this.state, props));
      }

    }, _defineProperty(_class, "displayName", `Observe(${_default(Component)})`), _defineProperty(_class, "propTypes", {
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

export { observe$1 as default };
//# sourceMappingURL=observe2.js.map