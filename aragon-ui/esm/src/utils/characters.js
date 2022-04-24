const NO_BREAK_SPACE = '\u00a0';
const capitalize = function () {
  let s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (!s) return '';
  return s[0].toUpperCase() + s.slice(1);
};

export { NO_BREAK_SPACE, capitalize };
//# sourceMappingURL=characters.js.map
