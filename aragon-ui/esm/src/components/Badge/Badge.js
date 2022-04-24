import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React__default from 'react';
import Tag from '../Tag/Tag.js';
import { warnOnce } from '../../utils/environment.js';
import { useTheme } from '../../theme/Theme2.js';

function deprecationWarning() {
  warnOnce('Badge', '"Badge" and its variants have been deprecated. Please use "Tag" instead.');
}
/* eslint-disable react/prop-types */


function Badge(_ref) {
  let {
    background,
    foreground,
    shape,
    children,
    ...props
  } = _ref;
  deprecationWarning();
  return /*#__PURE__*/React__default.createElement(Tag, _extends({
    background: background,
    color: foreground,
    size: shape === 'smalldisc' || shape === 'compact' ? 'small' : 'normal'
  }, props), children);
}

function BadgeNumber(_ref2) {
  let {
    background,
    children,
    foreground,
    label,
    shape,
    small,
    ...props
  } = _ref2;
  deprecationWarning();

  if (!children && typeof label === 'number') {
    return /*#__PURE__*/React__default.createElement(Badge, _extends({
      limitDigits: true,
      background: background,
      color: foreground,
      label: label,
      size: small ? 'small' : 'normal'
    }, props));
  }

  return /*#__PURE__*/React__default.createElement(Tag, _extends({
    count: true,
    background: background,
    color: foreground
  }, props), children || label);
}

function BadgeInfo(props) {
  return /*#__PURE__*/React__default.createElement(BadgeNumber, props);
}

function BadgeIdentity(props) {
  return /*#__PURE__*/React__default.createElement(Badge, _extends({}, props, {
    uppercase: false
  }));
}

function BadgeApp(props) {
  return /*#__PURE__*/React__default.createElement(Badge, _extends({}, props, {
    mode: "identifier"
  }));
}

function BadgeNotification(props) {
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(BadgeNumber, _extends({
    background: String(theme.positive),
    foreground: String(theme.positiveContent)
  }, props));
}
/* eslint-enable react/prop-types */


Badge.Info = BadgeInfo;
Badge.Notification = BadgeNotification;
Badge.Identity = BadgeIdentity;
Badge.App = BadgeApp;

export { BadgeNumber, Badge as default };
//# sourceMappingURL=Badge.js.map
