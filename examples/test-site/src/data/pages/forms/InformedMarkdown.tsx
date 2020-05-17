import React, { useCallback } from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import { asField } from 'informed';

// Initialize a markdown parser
const mdParser = new MarkdownIt();
const renderHTML = (text: string) => mdParser.render(text);

const MarkdownRenderer = ({ text, ...rest }) => (
  // eslint-disable-next-line react/no-danger
  <div {...rest} dangerouslySetInnerHTML={{ __html: renderHTML(text) }} />
);

const MarkdownField = asField(({ fieldState, fieldApi, ...rest }) => {
  const { value } = fieldState;
  const textValue: string = !value && value !== 0 ? '' : value as string;
  const { setValue } = fieldApi;
  const onChange = useCallback(
    ({ text }) => setValue(text),
    [setValue],
  );
  return (
    <MdEditor
      {...rest}
      value={textValue}
      onChange={onChange}
      renderHTML={renderHTML}
    />
  );
});

export { MarkdownRenderer, MarkdownField };
