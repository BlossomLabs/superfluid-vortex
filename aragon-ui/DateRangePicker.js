'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-214be52a.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-6b8189f0.js');
var dayjs_min = require('./dayjs.min-6ce914f7.js');
var Button = require('./Button.js');
var Viewport = require('./Viewport-0c0a0c23.js');
var DatePicker = require('./DatePicker.js');
var Labels = require('./Labels.js');
var consts = require('./consts.js');
var utils = require('./utils.js');
var Popover = require('./Popover.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./use-inside.esm-3f28ebaf.js');
require('./Layout.js');
require('./css.js');
require('./breakpoints.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./defineProperty-754b29ce.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./MonthDay-e8316045.js');
require('./IconLeft.js');
require('./IconPropTypes-0ef380f7.js');
require('./IconRight.js');
require('./date.js');
require('./IconCalendar.js');
require('./proptypes-77f6d5c1.js');
require('./react-spring-web.esm-b5843e07.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-e3b39caa.js');
require('./components.js');
require('./springs.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function DateRangePicker(_ref) {
  let {
    format,
    endDate: endDateProp,
    onChange,
    startDate: startDateProp
  } = _ref;
  const theme = Theme.useTheme();
  const labelsRef = React.useRef();
  const [showPicker, setShowPicker] = React.useState(false);
  const [startDate, setStartDate] = React.useState(startDateProp);
  const [endDate, setEndDate] = React.useState(endDateProp); // on closing the picked, reset state

  React.useEffect(() => {
    if (!showPicker) {
      setStartDate(startDateProp);
      setEndDate(endDateProp);
    }
  }, [endDateProp, startDateProp, showPicker]);
  const handlePopoverClose = React.useCallback(() => setShowPicker(false), []);
  const handleLabelsClick = React.useCallback(() => {
    setShowPicker(show => !show);
  }, []);
  const handleDateClick = React.useCallback(date => {
    const result = utils.handleDateSelect({
      date,
      startDate,
      endDate
    });
    result.startDate !== undefined && setStartDate(result.startDate);
    result.endDate !== undefined && setEndDate(result.endDate);
  }, [startDate, endDate]);
  const handleApply = React.useCallback(() => {
    setShowPicker(false);

    if (startDate && endDate) {
      onChange({
        start: dayjs_min.dayjs(startDate).startOf('day').toDate(),
        end: dayjs_min.dayjs(endDate).endOf('day').toDate()
      });
    }
  }, [endDate, onChange, startDate]);
  const handleClear = React.useCallback(() => {
    setStartDate(null);
    setEndDate(null);
    setShowPicker(false);
    onChange({
      start: null,
      end: null
    });
  }, [onChange]);
  const labelProps = React.useMemo(() => {
    const _startDate = showPicker ? startDate : startDateProp;

    const _endDate = showPicker ? endDate : endDateProp;

    return {
      startText: _startDate ? dayjs_min.dayjs(_startDate).format(format) : consts.START_DATE,
      endText: _endDate ? dayjs_min.dayjs(_endDate).format(format) : consts.END_DATE
    };
  }, [endDate, endDateProp, format, showPicker, startDate, startDateProp]);
  const compactMode = Viewport.useViewport().below('medium');
  const displayMonthBeforeOnLeft = React.useMemo(() => {
    // If both dates are in the same month, use the right calendar
    // for it, and display month before on the left calendar.
    const propsDatesInSameMonth = startDateProp && endDateProp && dayjs_min.dayjs(startDateProp).isSame(dayjs_min.dayjs(endDateProp), 'month');
    return !compactMode && (propsDatesInSameMonth || !startDateProp);
  }, [compactMode, endDateProp, startDateProp]);
  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(Labels["default"], _extends._extends({
    ref: labelsRef,
    enabled: showPicker,
    hasSetDates: Boolean(startDateProp && endDateProp),
    onClick: handleLabelsClick
  }, labelProps)), /*#__PURE__*/React__default["default"].createElement(_StyledPopover, {
    closeOnOpenerFocus: true,
    onClose: handlePopoverClose,
    opener: labelsRef.current,
    placement: "bottom-start",
    visible: showPicker,
    $_css: 37.5 * constants.GU + 2
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css2: 2.5 * constants.GU,
    $_css3: 3 * constants.GU,
    $_css4: 3 * constants.GU,
    $_css5: theme.border,
    $_css6: theme.surface
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, null, /*#__PURE__*/React__default["default"].createElement(DatePicker["default"], {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min.dayjs(startDateProp || undefined).subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month').toDate(),
    onSelect: handleDateClick
  }), !compactMode && /*#__PURE__*/React__default["default"].createElement(_StyledDatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min.dayjs(endDateProp || undefined).toDate(),
    onSelect: handleDateClick,
    $_css7: 1 * constants.GU
  })), /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css8: constants.GU * 2.25,
    $_css9: compactMode ? '' : `
                    max-width: 247px;
                    margin-left: auto;
                  `
  }, /*#__PURE__*/React__default["default"].createElement(Button["default"], {
    onClick: handleClear,
    size: "small",
    wide: true
  }, "Reset"), /*#__PURE__*/React__default["default"].createElement(_StyledButton, {
    disabled: !startDate || !endDate,
    mode: "strong",
    onClick: handleApply,
    size: "small",
    wide: true,
    $_css10: 1.5 * constants.GU
  }, "Apply")))));
}

DateRangePicker.propTypes = {
  endDate: index.PropTypes.instanceOf(Date),
  format: index.PropTypes.string,
  onChange: index.PropTypes.func,
  startDate: index.PropTypes.instanceOf(Date)
};
DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {}
};

var _StyledPopover = _styled__default["default"](Popover["default"]).withConfig({
  displayName: "DateRangePicker___StyledPopover",
  componentId: "sc-nrv4sw-0"
})(["min-width:", "px;border:0;filter:none;background:none;margin:2px 0 0 0;"], p => p.$_css);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "DateRangePicker___StyledDiv",
  componentId: "sc-nrv4sw-1"
})(["padding:", "px ", "px ", "px;border:1px solid ", ";border-radius:", "px;background:", ";"], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, constants.BIG_RADIUS, p => p.$_css6);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "DateRangePicker___StyledDiv2",
  componentId: "sc-nrv4sw-2"
})(["display:flex;flex-direction:row;align-items:baseline;"]);

var _StyledDatePicker = _styled__default["default"](DatePicker["default"]).withConfig({
  displayName: "DateRangePicker___StyledDatePicker",
  componentId: "sc-nrv4sw-3"
})(["margin-left:", "px;"], p => p.$_css7);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "DateRangePicker___StyledDiv3",
  componentId: "sc-nrv4sw-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:", "px;", ";"], p => p.$_css8, p => p.$_css9);

var _StyledButton = _styled__default["default"](Button["default"]).withConfig({
  displayName: "DateRangePicker___StyledButton",
  componentId: "sc-nrv4sw-5"
})(["margin-left:", "px;"], p => p.$_css10);

exports["default"] = DateRangePicker;
//# sourceMappingURL=DateRangePicker.js.map
