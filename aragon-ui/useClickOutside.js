'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/* eslint-disable react-hooks/rules-of-hooks */

function useClickOutside(cb) {
  let ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : React.useRef();

  /* eslint-enable react-hooks/rules-of-hooks */
  const handleClick = React.useCallback(e => {
    if (!ref.current.contains(e.target)) {
      cb();
    }
  }, [cb, ref]);
  React.useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
  return {
    ref
  };
}

exports.useClickOutside = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map
