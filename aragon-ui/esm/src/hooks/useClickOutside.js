import { useRef, useCallback, useEffect } from 'react';

/* eslint-disable react-hooks/rules-of-hooks */

function useClickOutside(cb) {
  let ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : useRef();

  /* eslint-enable react-hooks/rules-of-hooks */
  const handleClick = useCallback(e => {
    if (!ref.current.contains(e.target)) {
      cb();
    }
  }, [cb, ref]);
  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
  return {
    ref
  };
}

export { useClickOutside };
//# sourceMappingURL=useClickOutside.js.map
