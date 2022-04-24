import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import _styled from 'styled-components';
import { a as animated } from '../../../node_modules/@react-spring/web/dist/react-spring-web.esm.js';
import LeftIcon from './LeftIcon.js';
import { Transition } from '../../../node_modules/@react-spring/core/dist/react-spring-core.esm.js';
import { springs } from '../../style/springs.js';

class NavigationBar extends React__default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      cachedItems: null,
      direction: -1
    });
  }

  static getDerivedStateFromProps(props, state) {
    const updatedState = {
      cachedItems: props.items
    };

    if (!state.cachedItems) {
      return updatedState;
    }

    return { ...updatedState,
      direction: state.cachedItems.length > props.items.length ? 1 : -1
    };
  }

  render() {
    const {
      onBack,
      items,
      compact
    } = this.props;
    const displayedItems = items.map((node, index) => ({
      node,
      index
    })).slice(-1);
    return /*#__PURE__*/React__default.createElement(Container, null, /*#__PURE__*/React__default.createElement(Transition, {
      items: displayedItems,
      key: displayedItems.map( // Use a different key than 0 when there is only one item, so that
      // the “leave” transition of the first item can be executed when a
      // second item is added.
      item => items.length === 1 ? -1 : item.index),
      config: springs.smooth,
      initial: null,
      from: {
        opacity: 0,
        position: this.state.direction * -1
      },
      enter: {
        opacity: 1,
        position: 0
      },
      leave: {
        opacity: 0,
        position: this.state.direction
      },
      native: true
    }, (styles, item) => item && /*#__PURE__*/React__default.createElement(Item, _extends({
      label: item.node,
      onBack: onBack,
      displayBack: item.index > 0,
      compact: compact
    }, styles))));
  }

}

_defineProperty(NavigationBar, "propTypes", {
  onBack: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.node),
  compact: PropTypes.bool
});

_defineProperty(NavigationBar, "defaultProps", {
  onBack: () => {},
  items: [],
  compact: false
});

const Item = _ref => {
  let {
    opacity,
    position,
    displayBack,
    onBack,
    label,
    compact
  } = _ref;
  return /*#__PURE__*/React__default.createElement(animated.span, {
    style: {
      display: 'flex',
      alignItems: 'center',
      opacity,
      transform: position.to(p => `translate(${p * 20}px, 0)`)
    }
  }, /*#__PURE__*/React__default.createElement(Title, null, displayBack && /*#__PURE__*/React__default.createElement(BackButton, {
    onClick: onBack,
    compact: compact
  }, /*#__PURE__*/React__default.createElement(LeftIcon, null)), /*#__PURE__*/React__default.createElement(Label, null, label)));
};

Item.propTypes = {
  compact: PropTypes.bool,
  displayBack: PropTypes.bool,
  label: PropTypes.node,
  onBack: PropTypes.func,
  opacity: PropTypes.object,
  position: PropTypes.object
};
const Container = _styled.span.withConfig({
  displayName: "NavigationBar__Container",
  componentId: "sc-1exguj5-0"
})(["display:flex;position:relative;height:100%;"]);
const Title = _styled.span.withConfig({
  displayName: "NavigationBar__Title",
  componentId: "sc-1exguj5-1"
})(["display:flex;align-items:center;position:absolute;left:0;top:0;bottom:0;"]);
const Label = _styled.span.withConfig({
  displayName: "NavigationBar__Label",
  componentId: "sc-1exguj5-2"
})(["display:flex;height:100%;align-items:center;padding-left:30px;white-space:nowrap;font-size:22px;"]);
const BackButton = _styled.span.withConfig({
  displayName: "NavigationBar__BackButton",
  componentId: "sc-1exguj5-3"
})(["display:flex;align-items:center;height:63px;padding:", ";cursor:pointer;svg{color:hsl(179,76%,48%);}:active svg{color:hsl(179,76%,63%);}& + ", "{padding-left:0;}"], p => p.compact ? '0 16px' : '0 20px 0 30px', Label);

export { NavigationBar as default };
//# sourceMappingURL=NavigationBar.js.map
