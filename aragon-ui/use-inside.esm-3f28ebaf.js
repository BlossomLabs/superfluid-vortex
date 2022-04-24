'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// This component + hook pair can be used to know that a component is in the

var insideContexts = /*#__PURE__*/new Map(); // Creates the required context if it doesn’t exist.

function getContext(name) {
  if (!insideContexts.has(name)) {
    insideContexts.set(name, React__default["default"].createContext({
      inside: false,
      data: null
    }));
  }

  return insideContexts.get(name);
} // Use this component to declare a new “inside context”, by name.


function Inside(_ref) {
  var children = _ref.children,
      data = _ref.data,
      name = _ref.name;
  var Context = getContext(name);
  return React__default["default"].createElement(Context.Provider, {
    value: {
      inside: true,
      data: data
    }
  }, children);
} // Use this hook to know if a given component is somewhere
// in the tree of an <Inside> declared with the same name.


function useInside(name) {
  var _useContext = React.useContext(getContext(name)),
      inside = _useContext.inside,
      data = _useContext.data;

  return [inside, data];
}

exports.Inside = Inside;
exports.useInside = useInside;
//# sourceMappingURL=use-inside.esm-3f28ebaf.js.map
