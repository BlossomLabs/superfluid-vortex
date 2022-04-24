'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var useInside_esm = require('./use-inside.esm-3f28ebaf.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var springs = require('./springs.js');
var textStyles = require('./text-styles.js');
var IconDown = require('./IconDown.js');
require('./_commonjsHelpers-b3309d7b.js');
require('react-dom');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./IconPropTypes-0ef380f7.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// In / out example: [0, 0.25, 0.5, 0.75, 1] => [0, 0.5, 1, 0.5, 0]

function interpolateToggleElevation(value, fn) {
  return value.to(v => fn(1 - Math.abs(v * 2 - 1)));
}

function Details(_ref) {
  let {
    children,
    label,
    onToggle,
    opened: openedProp,
    ...props
  } = _ref;
  const theme = Theme.useTheme();
  const [insideBox] = useInside_esm.useInside('Box');
  const [insideSidePanel] = useInside_esm.useInside('SidePanel');
  const contentRef = React.useRef(null);
  const contentHeight = React.useRef(0); // Details supports two modes: managed (internal state),
  // or controlled (external state).

  const [openedManaged, setOpenedManaged] = React.useState(false);
  const opened = openedProp === undefined ? openedManaged : openedProp;
  const updateHeight = React.useCallback(() => {
    if (contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight;
    }
  }, []);
  const handleContentRef = React.useCallback(element => {
    contentRef.current = element;
    updateHeight();
  }, [updateHeight]);
  const handleToggle = React.useCallback(() => {
    const newOpened = !opened; // Managed state

    if (openedProp === undefined) {
      setOpenedManaged(newOpened);
    } // Useful to notify even in managed mode


    if (onToggle) {
      onToggle(newOpened);
    }
  }, [onToggle, opened, openedProp]); // Animate after the initial render

  const animate = React.useRef(false);
  React.useEffect(() => {
    animate.current = true;
  }, []); // Use height: 'auto' when opened

  const [forceHeight, setForceHeight] = React.useState(false);
  const handleStart = React.useCallback(() => setForceHeight(true), []);
  const handleRest = React.useCallback(() => {
    // Note: we need to use the opened from the previous
    // render cycle here, which is why we don’t use a callback.
    setForceHeight(!opened);
  }, [opened]); // Update the height

  React.useEffect(updateHeight, [opened, updateHeight]);
  const spacingCss = React.useMemo(() => {
    if (insideSidePanel) {
      return {
        section: `
          margin: ${2 * constants.GU}px ${-3 * constants.GU}px 0;
          padding-bottom: ${3 * constants.GU}px;
        `,
        content: `
          padding: ${2 * constants.GU}px ${3 * constants.GU}px 0;
        `
      };
    }

    if (insideBox) {
      return {
        section: `
          margin: 0 ${-3 * constants.GU}px;
        `,
        content: `
          padding: ${1 * constants.GU}px ${3 * constants.GU}px 0;
        `
      };
    }

    return {
      section: `
        margin: 0;
        padding-bottom: ${3 * constants.GU}px;
      `,
      content: `
        padding: 0;
      `
    };
  }, [insideSidePanel, insideBox]);
  return /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.Spring, {
    config: springs.springs.smooth,
    from: {
      openProgress: 0
    },
    to: {
      openProgress: Number(opened)
    },
    immediate: !animate,
    onRest: handleRest,
    onStart: handleStart,
    native: true
  }, _ref2 => {
    let {
      openProgress
    } = _ref2;
    return /*#__PURE__*/React__default["default"].createElement(_StyledSection, _extends._extends({}, props, {
      $_css: spacingCss.section
    }), /*#__PURE__*/React__default["default"].createElement(_StyledButtonBase, {
      onClick: handleToggle,
      $_css2: theme.surfacePressed
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
      $_css3: 3 * constants.GU,
      $_css4: 3 * constants.GU
    }, /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.animated.div, {
      style: {
        transform: interpolateToggleElevation(openProgress, v => `scale3d(${v}, 1, 1)`),
        opacity: interpolateToggleElevation(openProgress, v => v)
      }
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, null))), /*#__PURE__*/React__default["default"].createElement(_StyledH, _extends._extends({}, props, {
      $_css5: 5 * constants.GU,
      $_css6: 3 * constants.GU,
      $_css7: theme.surfaceContentSecondary,
      $_css8: textStyles.textStyle('label2')
    }), /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, null, label), /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.animated.div, {
      style: {
        marginLeft: `${1 * constants.GU}px`,
        transform: openProgress.to(v => `rotate(${(1 - v) * 180}deg)`),
        transformOrigin: '50% calc(50% - 0.5px)'
      }
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, null, /*#__PURE__*/React__default["default"].createElement(IconDown["default"], {
      size: "tiny"
    })))))), /*#__PURE__*/React__default["default"].createElement(_StyledDiv5, null, /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, {
      style: {
        opacity: openProgress,
        height: forceHeight ? openProgress.to(v => `${v * contentHeight.current}px`) : 'auto'
      }
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv6, {
      ref: handleContentRef,
      $_css9: spacingCss.content
    }, /*#__PURE__*/React__default["default"].createElement("div", null, children)))));
  });
}

Details.propTypes = {
  children: index.PropTypes.node.isRequired,
  label: index.PropTypes.string.isRequired,
  onToggle: index.PropTypes.func,
  opened: index.PropTypes.bool
};

var _StyledSection = _styled__default["default"]("section").withConfig({
  displayName: "Details___StyledSection",
  componentId: "sc-1w5ebbf-0"
})(["", ""], p => p.$_css);

var _StyledButtonBase = _styled__default["default"](ButtonBase["default"]).withConfig({
  displayName: "Details___StyledButtonBase",
  componentId: "sc-1w5ebbf-1"
})(["position:relative;width:100%;&:active{background:", ";}"], p => p.$_css2);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Details___StyledDiv",
  componentId: "sc-1w5ebbf-2"
})(["position:absolute;left:", "px;right:", "px;bottom:0;"], p => p.$_css3, p => p.$_css4);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Details___StyledDiv2",
  componentId: "sc-1w5ebbf-3"
})(["height:1px;box-shadow:0 1px 1px rgba(0,0,0,0.1);"]);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "Details___StyledH",
  componentId: "sc-1w5ebbf-4"
})(["display:flex;justify-content:flex-start;align-items:center;height:", "px;margin-left:", "px;color:", ";", " font-weight:400;"], p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "Details___StyledDiv3",
  componentId: "sc-1w5ebbf-5"
})(["margin-top:2px;"]);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "Details___StyledDiv4",
  componentId: "sc-1w5ebbf-6"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledDiv5 = _styled__default["default"]("div").withConfig({
  displayName: "Details___StyledDiv5",
  componentId: "sc-1w5ebbf-7"
})(["overflow:hidden"]);

var _StyledAnimatedDiv = _styled__default["default"](reactSpringWeb_esm.animated.div).withConfig({
  displayName: "Details___StyledAnimatedDiv",
  componentId: "sc-1w5ebbf-8"
})(["display:flex;flex-direction:column;justify-content:flex-end;"]);

var _StyledDiv6 = _styled__default["default"]("div").withConfig({
  displayName: "Details___StyledDiv6",
  componentId: "sc-1w5ebbf-9"
})(["", ""], p => p.$_css9);

exports["default"] = Details;
//# sourceMappingURL=Details.js.map
