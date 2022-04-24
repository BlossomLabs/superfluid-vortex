import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { font } from '../../utils/font.js';
import { noop } from '../../utils/miscellaneous.js';
import { unselectable } from '../../utils/css.js';

class TabBar extends React__default.Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      displayFocusRing: false
    });

    _defineProperty(this, "_barRef", /*#__PURE__*/React__default.createRef());

    _defineProperty(this, "handleMouseDown", () => {
      this.disableFocusRing();
    });

    _defineProperty(this, "handleKeydown", _ref => {
      let {
        key
      } = _ref;

      if (key === 'Enter') {
        this.selectElement(document.activeElement);
        this.enableFocusRing();
      }

      if (key === 'Tab') {
        this.enableFocusRing();
      }
    });

    _defineProperty(this, "handleTabMouseDown", _ref2 => {
      let {
        currentTarget
      } = _ref2;
      // We would usually avoid using the DOM when possible, and prefer using a
      // separate component (`Tab`) to keep the `index` in a prop, then pass it
      // using an event prop. But since `this.selectElement()` is needed (so we
      // can pass `document.activeElement` to it for the keyboard), and we have
      // `e.currentTarget` in the event object, we might as well use it for the
      // pointer device too.
      this.selectElement(currentTarget);
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  enableFocusRing() {
    this.setState({
      displayFocusRing: true
    });
  }

  disableFocusRing() {
    this.setState({
      displayFocusRing: false
    });
  }

  selectElement(element) {
    const {
      onChange
    } = this.props;

    if (!element || !this._barRef.current) {
      return;
    }

    const index = [...this._barRef.current.childNodes].indexOf(element);

    if (index === -1) {
      return;
    }

    onChange(index);
  }

  render() {
    const {
      displayFocusRing
    } = this.state;
    const {
      items,
      selected,
      inAppBar
    } = this.props;
    return /*#__PURE__*/React__default.createElement("nav", {
      onMouseDown: this.handleMouseDown
    }, /*#__PURE__*/React__default.createElement(Bar, {
      ref: this._barRef,
      border: !inAppBar
    }, items.map((item, i) => /*#__PURE__*/React__default.createElement(Tab, {
      key: i,
      tabIndex: "0",
      selected: i === selected,
      focusRing: displayFocusRing,
      onMouseDown: this.handleTabMouseDown
    }, /*#__PURE__*/React__default.createElement(Label, {
      selected: i === selected
    }, item), displayFocusRing && /*#__PURE__*/React__default.createElement(FocusRing, null)))));
  }

}
/* eslint-disable react/prop-types */


_defineProperty(TabBar, "propTypes", {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  selected: PropTypes.number,
  onChange: PropTypes.func,
  inAppBar: PropTypes.bool
});

_defineProperty(TabBar, "defaultProps", {
  selected: 0,
  onChange: noop
});

function Bar(_ref3) {
  let {
    children,
    border
  } = _ref3;
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledUl, {
    $_css: border ? `1px solid ${theme.border}` : '0'
  }, children);
}

function FocusRing(_ref4) {
  let {
    children
  } = _ref4;
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledSpan, {
    className: "TabBarLegacy-FocusRing",
    $_css2: theme.accent
  }, children);
}

function Tab(_ref5) {
  let {
    children,
    selected
  } = _ref5;
  return /*#__PURE__*/React__default.createElement(_StyledLi, {
    $_css3: font({
      weight: selected ? 'bold' : 'normal',
      deprecationNotice: false
    }),
    $_css4: unselectable()
  }, children);
}

function Label(_ref6) {
  let {
    children,
    selected
  } = _ref6;
  const theme = useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledSpan2, {
    $_css5: selected ? theme.accent : 'transparent'
  }, children);
}

var _StyledUl = _styled("ul").withConfig({
  displayName: "TabBarLegacy___StyledUl",
  componentId: "sc-17ah8td-0"
})(["display:flex;border-bottom:", ";"], p => p.$_css);

var _StyledSpan = _styled("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan",
  componentId: "sc-17ah8td-1"
})(["display:none;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:2px solid ", ";border-radius:2px;"], p => p.$_css2);

var _StyledLi = _styled("li").withConfig({
  displayName: "TabBarLegacy___StyledLi",
  componentId: "sc-17ah8td-2"
})(["position:relative;list-style:none;padding:0 30px;cursor:pointer;", ";", ";&:focus{outline:0;.TabBarLegacy-FocusRing{display:block;}}"], p => p.$_css3, p => p.$_css4);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "TabBarLegacy___StyledSpan2",
  componentId: "sc-17ah8td-3"
})(["display:flex;margin-bottom:-1px;padding:5px 0 3px;border-bottom:4px solid ", ";"], p => p.$_css5);

export { TabBar as default };
//# sourceMappingURL=TabBarLegacy.js.map
