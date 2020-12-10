import React, { ComponentType as CT } from 'react';
import { asBodilessComponent, useMenuOptionUI } from '@bodiless/core';
import type { ReactMarkdownProps } from 'react-markdown';
import MarkdownField from './InformedMarkdown';

type ReactMarkdownData = Pick<ReactMarkdownProps, 'source'>;

// @TODO importing this from react-markdown produces type error.  file a bug.
export type Renderers = { [nodetype: string]: React.ElementType<any> };

// @TODO We need to read the rendereers props and use it in the preview pane.
const asBodilessMarkdown = asBodilessComponent<ReactMarkdownProps, ReactMarkdownData>({
  icon: 'edit',
  label: 'Edit',
  groupLabel: 'Markdown',
  name: 'edit',
  renderForm: () => {
    const { ComponentFormLabel, ComponentFormTitle } = useMenuOptionUI();
    return (
      <>
        <ComponentFormTitle>Markdown</ComponentFormTitle>
        <ComponentFormLabel>Content</ComponentFormLabel>
        <MarkdownField field="source" />
      </>
    );
  },
  global: false,
  local: true,
  Wrapper: 'div',
  defaultData: { source: 'Initial Value' },
});

const withRenderers = (renderers: Renderers) => (Component: CT<ReactMarkdownProps>) => {
  const WithRenderers = (props: ReactMarkdownProps) => {
    const { renderers: renderersProp = {}, ...rest } = props;
    return <Component {...rest} renderers={{ ...renderers, ...renderersProp }} />;
  };
  return WithRenderers;
};

export default asBodilessMarkdown;

export { withRenderers };
