/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
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

import React, { useState, useCallback } from 'react';
import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import {
  withEditButton,
  getUI,
  withNodeKey,
  withNode,
  withNodeDataHandlers,
  withData,
  withLocalContextMenu,
  withContextActivator,
  ifReadOnly,
  withoutProps,
  ifEditable,
  EditButtonOptions,
} from '@bodiless/core';
import { Form } from 'informed';
import { flowRight } from 'lodash';

import Layout from '../../../components/Layout';
import { asHeader1 } from '../../../components/Elements.token';
import { MarkdownRenderer, MarkdownField } from './InformedMarkdown';

const H1 = asHeader1('h1');
const TestForm = () => {
  const [values, setValues] = useState({ values: { md: '' } });
  const onSubmit = useCallback(v => {
    setValues({ values: v });
  }, [setValues]);
  return (
    <>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          md: '# This is the initial value',
        }}
      >
        <label>Text: </label>
        <MarkdownField field="md" />
        <button type="submit">Submit</button>
      </Form>
      <div>
        Submitted values
        <pre>
          {JSON.stringify(values.values, null, 2)}
        </pre>
      </div>
      <Markdown text={values.values.md} />
    </>
  );
};

type Data = {
  text: string,
};

type Options<P, D> = EditButtonOptions<P, D> & {
  activateEvent?: string,
};

const asBodilessComponent = <P extends object, D extends object>(options: Options<P, D>) => {
  const { activateEvent, ...rest } = options;
  return (nodeKey?: string, defaultData?: D) => flowRight(
    withNodeKey(nodeKey),
    withNode,
    withNodeDataHandlers(defaultData || {}),
    ifReadOnly(
      withoutProps(['setComponentData']),
    ),
    ifEditable(
      withEditButton(rest),
      withContextActivator(activateEvent || 'onClick'),
      withLocalContextMenu,
    ),
    withData,
  );
};

const asBodilessMarkdown = asBodilessComponent({
  icon: 'edit',
  name: 'edit',
  renderForm: ({ ui }) => {
    const { ComponentFormLabel } = getUI(ui);
    return (
      <>
        <ComponentFormLabel>Content</ComponentFormLabel>
        <MarkdownField field="text" />
      </>
    );
  },
  global: false,
  local: true,
});

// const asBodilessMarkdown = (nodeKey?: string) => flowRight(
//   withNodeKey(nodeKey),
//   withNode,
//   withNodeDataHandlers({ text: 'Initial value Fpp' }),
//   ifReadOnly(
//     withoutProps(['setComponentData']),
//   ),
//   ifEditable(
//     withMarkdownEditor,
//     withContextActivator('onClick'),
//     withLocalContextMenu,
//   ),
//   withData,
// );

const Markdown = asBodilessMarkdown('foo', { text: 'Initial value' })(MarkdownRenderer);

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <H1>Forms</H1>
      <Markdown />
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
  }
`;
