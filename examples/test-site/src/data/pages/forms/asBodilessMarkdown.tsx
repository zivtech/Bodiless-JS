import React from 'react';
import { asBodilessComponent, useFormUI } from '@bodiless/core';
import MarkdownField from './InformedMarkdown';

const asBodilessMarkdown = asBodilessComponent({
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
