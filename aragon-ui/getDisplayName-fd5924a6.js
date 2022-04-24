'use strict';

var getDisplayName$1 = {};

Object.defineProperty(getDisplayName$1, "__esModule", {
  value: true
});
var _default = getDisplayName$1.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

exports._default = _default;
//# sourceMappingURL=getDisplayName-fd5924a6.js.map
