import PropTypes$1 from '../node_modules/prop-types/index.js';

function isEmpty(value) {
  return value === undefined || value === null;
} // Require a prop to not be empty


function requireProp(props, propName, componentName) {
  return isEmpty(props[propName]) ? new Error(`The prop \`${propName}\` is required for \`${componentName}\`.`) : null;
} // Create the `isRequired` version of a prop type


function createIsRequired(propTypeFn) {
  return function () {
    return requireProp(...arguments) || propTypeFn(...arguments);
  };
} // Accept any number in the 0 => 1 range


function _0to1(props, propName, componentName) {
  if (isEmpty(props[propName])) {
    return null;
  }

  if (typeof props[propName] === 'number' && props[propName] >= 0 && props[propName] <= 1) {
    return null;
  }

  return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Please provide a number in the 0-1 range.`);
}

_0to1.isRequired = createIsRequired(_0to1); // Accept DOM Element, in DOM environments

function _element(props, propName, componentName) {
  if (!props[propName]) {
    return null;
  }

  if (typeof Element !== 'undefined') {
    return props[propName] instanceof Element ? null : new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Please provide a DOM Element.`);
  }

  return null;
}

_element.isRequired = createIsRequired(_element);
const ExtendedPropTypes = { ...PropTypes$1,
  _component: PropTypes$1.oneOfType([PropTypes$1.func, PropTypes$1.string, PropTypes$1.shape({
    render: PropTypes$1.func.isRequired
  })]),
  _spring: PropTypes$1.shape({
    mass: PropTypes$1.number,
    tension: PropTypes$1.number,
    friction: PropTypes$1.number,
    precision: PropTypes$1.number
  }),
  _null: PropTypes$1.oneOf([null]),
  _0to1,
  _element
};
var PropTypes = ExtendedPropTypes;

export { PropTypes as default };
//# sourceMappingURL=proptypes.js.map
