'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React$1 = require('react');
var index = require('./index-6b8189f0.js');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var ReactDOM$1 = require('react-dom');
var ButtonBase = require('./ButtonBase.js');
var IconEllipsis = require('./IconEllipsis.js');
var IconDown = require('./IconDown.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var springs = require('./springs.js');
require('./extends-214be52a.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./IconPropTypes-0ef380f7.js');
require('./use-inside.esm-3f28ebaf.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React$1);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM$1);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = React__default["default"];
var ReactDOM = ReactDOM__default["default"];

var ClickOutComponent = function (_React$Component) {
  _inherits(ClickOutComponent, _React$Component);

  function ClickOutComponent() {
    _classCallCheck(this, ClickOutComponent);

    return _possibleConstructorReturn(this, (ClickOutComponent.__proto__ || Object.getPrototypeOf(ClickOutComponent)).call(this));
  }

  _createClass(ClickOutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var elTouchIsClick = true;
      var documentTouchIsClick = true;
      var el = ReactDOM.findDOMNode(this);

      self.__documentTouchStarted = function (e) {
        el.removeEventListener('click', self.__elementClicked);
        document.removeEventListener('click', self.__documentClicked);
      };

      self.__documentTouchMoved = function (e) {
        documentTouchIsClick = false;
      };

      self.__documentTouchEnded = function (e) {
        if (documentTouchIsClick) self.__documentClicked(e);
        documentTouchIsClick = true;
      };

      self.__documentClicked = function (e) {
        if ((e.__clickedElements || []).indexOf(el) !== -1) return;

        var clickOutHandler = self.onClickOut || self.props.onClickOut;
        if (!clickOutHandler) {
          return console.warn('onClickOut is not defined.');
        }

        clickOutHandler.call(self, e);
      };

      self.__elementTouchMoved = function (e) {
        elTouchIsClick = false;
      };

      self.__elementTouchEnded = function (e) {
        if (elTouchIsClick) self.__elementClicked(e);
        elTouchIsClick = true;
      };

      self.__elementClicked = function (e) {
        e.__clickedElements = e.__clickedElements || [];
        e.__clickedElements.push(el);
      };

      setTimeout(function () {
        if (self.__unmounted) return;
        self.toggleListeners('addEventListener');
      }, 0);
    }
  }, {
    key: 'toggleListeners',
    value: function toggleListeners(listenerMethod) {
      var el = ReactDOM.findDOMNode(this);

      el[listenerMethod]('touchmove', this.__elementTouchMoved);
      el[listenerMethod]('touchend', this.__elementTouchEnded);
      el[listenerMethod]('click', this.__elementClicked);

      document[listenerMethod]('touchstart', this.__documentTouchStarted);
      document[listenerMethod]('touchmove', this.__documentTouchMoved);
      document[listenerMethod]('touchend', this.__documentTouchEnded);
      document[listenerMethod]('click', this.__documentClicked);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.toggleListeners('removeEventListener');
      this.__unmounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.children) ? React.createElement(
        'div',
        null,
        this.props.children
      ) : React.Children.only(this.props.children);
    }
  }]);

  return ClickOutComponent;
}(React.Component);

var reactOnclickout = ClickOutComponent;

var ClickOutHandler = reactOnclickout;

const BASE_WIDTH = 46;
const BASE_HEIGHT = 32;

function ContextMenu(_ref) {
  let {
    children,
    zIndex,
    disabled
  } = _ref;
  const theme = Theme.useTheme();
  const [opened, setOpened] = React$1.useState(false);
  const handleClose = React$1.useCallback(() => {
    setOpened(false);
  }, []);
  const handleBaseButtonClick = React$1.useCallback(() => {
    setOpened(opened => !opened);
  }, []); // Increase the z-index on an opened menu, to make sure it's above any other
  // context menus below it using the same z-index (e.g. when used in a list)

  const appliedZIndex = opened ? zIndex + 1 : zIndex;
  return /*#__PURE__*/React__default["default"].createElement(ClickOutHandler, {
    onClickOut: handleClose
  }, /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.Spring, {
    config: springs.springs.smooth,
    to: {
      openProgress: Number(opened)
    },
    native: true
  }, _ref2 => {
    let {
      openProgress
    } = _ref2;
    return /*#__PURE__*/React__default["default"].createElement(_StyledMain, {
      style: {
        boxShadow: openProgress.to(t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`)
      },
      $_css: appliedZIndex
    }, /*#__PURE__*/React__default["default"].createElement(_StyledButton, {
      onClick: handleBaseButtonClick,
      opened: opened,
      disabled: disabled,
      focusRingRadius: constants.RADIUS,
      $_css2: disabled ? theme.disabledContent : opened ? theme.accent : theme.surfaceContent,
      $_css3: disabled ? theme.disabled : theme.surface,
      $_css4: disabled ? '0' : `1px solid ${theme.border}`,
      $_css5: opened ? theme.surface : theme.border,
      $_css6: disabled ? '' : `&:active {
                  background: ${theme.surfacePressed};
                  border-bottom-color: ${opened ? theme.surfacePressed : theme.border};
                }`
    }, /*#__PURE__*/React__default["default"].createElement(_StyledIconEllipsis, null), /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.animated.div, {
      style: {
        display: 'flex',
        alignItems: 'center',
        transformOrigin: '50% 50%',
        transform: openProgress.to(v => `rotate(${v * 180}deg)`)
      }
    }, /*#__PURE__*/React__default["default"].createElement(_StyledIconDown, {
      size: "tiny",
      $_css7: disabled ? theme.disabledIcon : theme.surfaceIcon
    }))), opened && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, {
      onClick: handleClose,
      style: {
        opacity: openProgress,
        boxShadow: openProgress.to(t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`)
      },
      $_css8: appliedZIndex + 1,
      $_css9: BASE_HEIGHT - 1,
      $_css10: theme.surface,
      $_css11: theme.border
    }, children), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
      $_css12: appliedZIndex + 1,
      $_css13: BASE_WIDTH - 2,
      $_css14: theme.surface
    })));
  }));
}

ContextMenu.propTypes = {
  children: index.PropTypes.node,
  zIndex: index.PropTypes.number,
  disabled: index.PropTypes.bool
};
ContextMenu.defaultProps = {
  zIndex: 0,
  disabled: false
};
const Main = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "ContextMenu__Main",
  componentId: "sc-fcw8i6-0"
})(["position:relative;width:", "px;height:", "px;"], BASE_WIDTH, BASE_HEIGHT);

var _StyledMain = _styled__default["default"](Main).withConfig({
  displayName: "ContextMenu___StyledMain",
  componentId: "sc-fcw8i6-1"
})(["z-index:", ";"], p => p.$_css);

const Button = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "ContextMenu__Button",
  componentId: "sc-fcw8i6-2"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:", "px;border-radius:", ";box-shadow:", ";"], BASE_HEIGHT, _ref3 => {
  let {
    opened
  } = _ref3;
  return opened ? `${constants.RADIUS}px ${constants.RADIUS}px 0 0` : `${constants.RADIUS}px`;
}, _ref4 => {
  let {
    disabled
  } = _ref4;
  return disabled ? 'none' : `0px 1px 3px rgba(0, 0, 0, 0.1)`;
});

var _StyledButton = _styled__default["default"](Button).withConfig({
  displayName: "ContextMenu___StyledButton",
  componentId: "sc-fcw8i6-3"
})(["color:", ";background:", ";border:", ";border-bottom-color:", ";", ""], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

var _StyledIconEllipsis = _styled__default["default"](IconEllipsis["default"]).withConfig({
  displayName: "ContextMenu___StyledIconEllipsis",
  componentId: "sc-fcw8i6-4"
})([""]);

var _StyledIconDown = _styled__default["default"](IconDown["default"]).withConfig({
  displayName: "ContextMenu___StyledIconDown",
  componentId: "sc-fcw8i6-5"
})(["color:", ";"], p => p.$_css7);

var _StyledAnimatedDiv = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "ContextMenu___StyledAnimatedDiv",
  componentId: "sc-fcw8i6-6"
})(["z-index:", ";overflow:hidden;position:absolute;top:", "px;right:0;background:", ";border:1px solid ", ";border-radius:3px 0 3px 3px;"], p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "ContextMenu___StyledDiv",
  componentId: "sc-fcw8i6-7"
})(["z-index:", ";position:absolute;bottom:0;right:1px;height:1px;width:", "px;background:", ";"], p => p.$_css12, p => p.$_css13, p => p.$_css14);

exports["default"] = ContextMenu;
//# sourceMappingURL=ContextMenu.js.map
