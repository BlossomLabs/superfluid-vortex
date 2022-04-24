import { noop } from './miscellaneous.js';

function devOnly(cb) {
  return process.env.NODE_ENV === 'development' ? cb : noop;
} // Log in dev mode only

const log = devOnly(function () {
  console.log(...arguments);
}); // Warn in dev mode only

const warn = devOnly(function () {
  console.warn(...arguments);
}); // Like warn(), but only once

const Warned = new Map();
const warnOnce = devOnly(function (domain) {
  if (!Warned.get(domain)) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    console.warn(...params);
    Warned.set(domain, true);
  }
});

export { devOnly, log, warn, warnOnce };
//# sourceMappingURL=environment.js.map
