/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { HTMLProps } from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import { asBodilessComponent, useFormUI } from '@bodiless/core';
import { asEditable } from '@bodiless/components';
import ReactMarkdown, { ReactMarkdownProps as Props } from 'react-markdown';

import Layout from '../../../components/Layout';
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


const Markdown = asBodilessMarkdown('body')(ReactMarkdown);
const H1 = asEditable('title')<HTMLProps<HTMLHeadingElement>>('h1');

const PageBody = ({ title, markdownContent }) => (
  <main>
    <H1>{title}</H1>
    <Markdown source={markdownContent} />
  </main>
);

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <PageBody
        title="Forms"
        markdownContent="Foo"
      />
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
  }
`;
