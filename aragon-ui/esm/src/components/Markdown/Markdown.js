import React__default from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import MarkdownToJsx from '../../../node_modules/markdown-to-jsx/dist/index.modern.js';
import CheckBoxWithTheme from '../Input/Checkbox.js';
import Link from '../Link/Link.js';
import NormalizedHtml from './NormalizedHtml.js';

function CustomInput(props) {
  props = { ...props
  };

  if (props.type === 'checkbox') {
    delete props.type;
    return /*#__PURE__*/React__default.createElement(CheckBoxWithTheme, props);
  }

  return /*#__PURE__*/React__default.createElement("input", props);
}

CustomInput.propTypes = {
  type: PropTypes.string
};

function Markdown(_ref) {
  let {
    allowHtml,
    className,
    content,
    markdownToJsxOptions,
    normalized,
    style,
    ...props
  } = _ref;
  const markdownToJsxOptionsBase = {
    disableParsingRawHTML: !allowHtml,
    overrides: {
      a: Link,
      input: CustomInput
    }
  };
  const markdown = /*#__PURE__*/React__default.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React__default.createElement(MarkdownToJsx, {
    options: markdownToJsxOptions ? markdownToJsxOptions(markdownToJsxOptionsBase) : markdownToJsxOptionsBase
  }, content));
  return normalized ? /*#__PURE__*/React__default.createElement(NormalizedHtml, null, markdown) : markdown;
}

Markdown.propTypes = {
  allowHtml: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  markdownToJsxOptions: PropTypes.func,
  normalized: PropTypes.bool,
  style: PropTypes.object
};
Markdown.defaultProps = {
  normalized: false
};

export { Markdown as default };
//# sourceMappingURL=Markdown.js.map
