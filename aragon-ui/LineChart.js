'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var reactSpringWeb_esm = require('./react-spring-web.esm-b5843e07.js');
var proptypes = require('./proptypes-77f6d5c1.js');
var css = require('./css.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-b3309d7b.js');
require('react-dom');
require('./index-6b8189f0.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const LABELS_HEIGHT = 30;
const WIDTH_DEFAULT = 300;

function useMeasuredWidth() {
  const ref = React.useRef();
  const [measuredWidth, setMeasuredWidth] = React.useState(WIDTH_DEFAULT);
  const onResize = React.useCallback(() => {
    if (ref.current) {
      setMeasuredWidth(ref.current.clientWidth);
    }
  }, []);
  const onRef = React.useCallback(element => {
    ref.current = element;
    onResize();
  }, [onResize]);
  React.useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [onResize]);
  return [measuredWidth, onRef];
}

function LineChart(_ref) {
  let {
    animDelay,
    borderColor,
    color,
    dotRadius,
    height,
    label,
    labelColor,
    lines: linesProps,
    reset,
    springConfig,
    total,
    width: widthProps,
    ...props
  } = _ref;
  const [progressVal, updateProgressVal] = React.useState(0);
  const [width, onSvgRef] = useMeasuredWidth();
  const lines = React.useMemo(() => {
    return linesProps.map(lineOrValues => Array.isArray(lineOrValues) ? {
      values: lineOrValues
    } : lineOrValues);
  }, [linesProps]); // the count of provided values

  const valuesCount = React.useMemo(() => {
    // All the values have the same length, so we can use the first one.
    return lines[0] ? lines[0].values.length : 0;
  }, [lines]); // the total amount of values

  const totalCount = React.useMemo(() => {
    // If no total is provided, the total is the number of provided values.
    return total > 0 && total > valuesCount ? total : valuesCount;
  }, [valuesCount, total]);
  const getX = React.useCallback(index => {
    return width / Math.max(1, totalCount - 1) * index;
  }, [width, totalCount]);
  const getY = React.useCallback((percentage, progress, height) => {
    const padding = dotRadius + 2;
    return height - padding - (height - padding * 2) * percentage * progress;
  }, [dotRadius]);
  const getLabelPosition = React.useCallback((index, length) => {
    if (index === 0) return 'start';
    if (index === length - 1) return 'end';
    return 'middle';
  }, []);
  const labels = label && totalCount > 0 ? [...Array(totalCount).keys()].map(label) : null;
  const chartHeight = height - (labels ? LABELS_HEIGHT : 0);
  const rectangle = /*#__PURE__*/React__default["default"].createElement("rect", {
    width: width,
    height: chartHeight,
    rx: "3",
    ry: "3",
    fill: "#ffffff",
    strokeWidth: "1",
    stroke: borderColor
  });
  reactSpringWeb_esm.useSpring({
    to: {
      progress: 1
    },
    from: {
      progress: 0
    },
    reset: false,
    onChange: e => {
      updateProgressVal(e.value.progress);
    }
  });
  return /*#__PURE__*/React__default["default"].createElement(_StyledSvg, _extends._extends({
    ref: onSvgRef,
    viewBox: `0 0 ${width} ${height}`,
    width: widthProps || 'auto',
    height: "auto"
  }, props), /*#__PURE__*/React__default["default"].createElement("mask", {
    id: "chart-mask"
  }, rectangle), rectangle, /*#__PURE__*/React__default["default"].createElement("g", {
    mask: "url(#chart-mask)"
  }, totalCount > 0 && /*#__PURE__*/React__default["default"].createElement("path", {
    strokeWidth: "1",
    stroke: borderColor,
    d: `${[...new Array(totalCount - 1)].reduce((path, _, index) => `${path} M ${getX(index)},${chartHeight} l 0,-8`, '')}`
  }), lines.map((line, lineIndex) => /*#__PURE__*/React__default["default"].createElement("g", {
    key: `line-plot-${line.id || lineIndex}`
  }, /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.animated.path, {
    strokeWidth: "2",
    fill: "transparent",
    stroke: line.color || color(lineIndex, {
      lines
    }),
    d: `
                    M
                    ${getX(0)},
                    ${getY(line.values[0], progressVal, chartHeight)}

                    ${line.values.slice(1).map((val, index) => `L
                           ${getX((index + 1) * progressVal)},
                           ${getY(val, progressVal, chartHeight)}
                          `).join('')}
                  `
  }), line.values.slice(1, -1).map((val, index) => /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.animated.circle, {
    key: index,
    fill: "white",
    r: dotRadius,
    strokeWidth: "1",
    cx: getX(index + 1) * progressVal,
    cy: getY(val, progressVal, chartHeight),
    stroke: line.color || color(lineIndex, {
      lines
    })
  })))), /*#__PURE__*/React__default["default"].createElement(reactSpringWeb_esm.animated.line, {
    x1: getX(valuesCount - 1) * progressVal,
    y1: "0",
    x2: getX(valuesCount - 1) * progressVal,
    y2: chartHeight,
    stroke: "#DAEAEF",
    strokeWidth: "3"
  })), labels && /*#__PURE__*/React__default["default"].createElement("g", {
    transform: `translate(0,${chartHeight})`
  }, labels.map((label, index) => /*#__PURE__*/React__default["default"].createElement(_StyledText, {
    key: index,
    x: getX(index),
    y: LABELS_HEIGHT / 2,
    textAnchor: getLabelPosition(index, labels.length),
    fill: labelColor
  }, label))));
}

LineChart.propTypes = {
  springConfig: proptypes.PropTypes._spring,
  total: proptypes.PropTypes.number,
  width: proptypes.PropTypes.number,
  height: proptypes.PropTypes.number,
  dotRadius: proptypes.PropTypes.number,
  animDelay: proptypes.PropTypes.number,
  borderColor: proptypes.PropTypes.string,
  labelColor: proptypes.PropTypes.string,
  reset: proptypes.PropTypes.bool,
  lines: proptypes.PropTypes.arrayOf(proptypes.PropTypes.oneOfType([proptypes.PropTypes.shape({
    id: proptypes.PropTypes.number,
    values: proptypes.PropTypes.arrayOf(proptypes.PropTypes.number).isRequired,
    // numbers between 0 and 1
    color: proptypes.PropTypes.string // overrides the color() prop if set

  }), // values can also be passed directly
  proptypes.PropTypes.arrayOf(proptypes.PropTypes.number)])),
  label: proptypes.PropTypes.oneOfType([proptypes.PropTypes.func, proptypes.PropTypes._null]),
  color: proptypes.PropTypes.func
};
LineChart.defaultProps = {
  springConfig: springs.springs.lazy,
  total: -1,
  height: 200,
  dotRadius: 7 / 2,
  animDelay: 500,
  reset: false,
  borderColor: 'rgba(209, 209, 209, 0.5)',
  labelColor: '#6d777b',
  lines: [],
  label: index => index + 1,
  color: (index, _ref2) => {
    let {
      lines
    } = _ref2;
    return `hsl(${(index * (360 / lines.length) + 40) % 360}, 60%, 70%)`;
  }
};

var _StyledSvg = _styled__default["default"]("svg").withConfig({
  displayName: "LineChart___StyledSvg",
  componentId: "sc-1i2q3pf-0"
})(["display:block"]);

var _StyledText = _styled__default["default"]("text").withConfig({
  displayName: "LineChart___StyledText",
  componentId: "sc-1i2q3pf-1"
})(["alignment-baseline:middle;font-size:12px;font-weight:300;", ";"], css.unselectable);

exports["default"] = LineChart;
//# sourceMappingURL=LineChart.js.map
