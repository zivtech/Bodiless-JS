import React from 'react';
import { asBodilessComponent, useFormUI } from '@bodiless/core';
import { ReactMarkdownProps as Props } from 'react-markdown';

import MarkdownField from './InformedMarkdown';

type Data = Pick<Props, 'source'>;

const asBodilessMarkdown = asBodilessComponent<Props, Data>({
  icon: 'edit',
  name: 'edit',
  renderForm: () => {
    // const { ComponentFormLabel, ComponentFormTitle, ComponentFormTextArea } = useFormUI();
    const { ComponentFormLabel, ComponentFormTitle } = useFormUI();
    return (
      <>
        <ComponentFormTitle>Markdown</ComponentFormTitle>
        <ComponentFormLabel>Content</ComponentFormLabel>
        {/* <ComponentFormTextArea field="source" /> */}
        <MarkdownField field="source" />
      </>
    );
  },
  global: false,
  local: true,
  Wrapper: 'div',
  defaultData: { source: 'Initial Value' },
});

export default asBodilessMarkdown;
