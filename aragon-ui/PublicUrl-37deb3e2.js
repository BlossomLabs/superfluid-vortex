'use strict';

var _extends = require('./extends-214be52a.js');
var defineProperty = require('./defineProperty-754b29ce.js');
var React = require('react');
var index = require('./index-6b8189f0.js');
var getDisplayName = require('./getDisplayName-fd5924a6.js');
var url = require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const PublicUrlContext = /*#__PURE__*/React__default["default"].createContext('');
const {
  Provider,
  Consumer
} = PublicUrlContext;

class PublicUrlProvider extends React__default["default"].PureComponent {
  render() {
    const {
      url,
      children
    } = this.props;
    return /*#__PURE__*/React__default["default"].createElement(Provider, {
      value: url
    }, children);
  }

} // HOC wrapper


defineProperty._defineProperty(PublicUrlProvider, "propTypes", {
  url: index.PropTypes.string.isRequired,
  children: index.PropTypes.node
});

const hocWrap = Component => {
  const HOC = props => /*#__PURE__*/React__default["default"].createElement(Consumer, null, url => /*#__PURE__*/React__default["default"].createElement(Component, _extends._extends({}, props, {
    publicUrl: url
  })));

  HOC.displayName = `PublicUrlProvider(${getDisplayName._default(Component)})`;
  return HOC;
}; // styled-components utility for URLs


const styledUrl = url$1 => _ref => {
  let {
    publicUrl
  } = _ref;
  return url.prefixUrl(url$1, publicUrl);
};

const PublicUrl = props => /*#__PURE__*/React__default["default"].createElement(Consumer, props);

PublicUrl.Provider = PublicUrlProvider;
PublicUrl.hocWrap = hocWrap;
PublicUrl.styledUrl = styledUrl;

function usePublicUrl() {
  return React.useContext(PublicUrlContext);
}

exports.PublicUrl = PublicUrl;
exports.usePublicUrl = usePublicUrl;
//# sourceMappingURL=PublicUrl-37deb3e2.js.map
