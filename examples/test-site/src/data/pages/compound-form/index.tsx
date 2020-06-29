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

import React, { ComponentType, useState } from 'react';
import { graphql } from 'gatsby';
import { flowRight, pick } from 'lodash';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import {
  useFormUI, useRegisterSnippet, withCompoundForm, withContextActivator, withLocalContextMenu,
} from '@bodiless/core';
import { Div, Pre } from '@bodiless/fclasses';
import { v1 } from 'uuid';
import Layout from '../../../components/Layout';

type CT = ComponentType<any>|string;

/**
 * Adds a test component which provides a form snippet and renders the
 * form values as JSON.
 *
 * @param initialData The initial values of the form fields.
 */
const withTestSnippet = (initialData: any) => (Component: CT) => {
  // Define the function which will render our snippet.
  const render = () => {
    const { ComponentFormText, ComponentFormLabel } = useFormUI();
    // Iterate over all values and create a field+label for each.
    const fields = Object.keys(initialData).map((key: string) => (
      <>
        <ComponentFormLabel>
          {key}
        </ComponentFormLabel>
        <ComponentFormText field={key} />
      </>
    ));
    return (
      <>
        {fields}
      </>
    );
  };
  // Give our snippet a unique id.
  const id = v1();
  // Define the enhanced component.
  const WithTestSnippet = (props: any) => {
    const [data, setData] = useState(initialData);
    const snippet = {
      id,
      render,
      initialValues: data,
      submitValues: (values: any) => {
        const newData = pick(values, Object.keys(initialData));
        setData(newData);
      },
    };
    // Register our snippet with the provider.
    useRegisterSnippet(snippet);
    // Render the submitted values.
    return (
      <Component {...props}>
        {JSON.stringify(data, null, 2)}
      </Component>
    );
  };
  return WithTestSnippet;
};

const S1 = withTestSnippet({ foo: 'Foo' })(Pre);
const S2 = withTestSnippet({ bar: 'Bar' })(Pre);
const option = {
  icon: 'anchor',
  label: 'Test',
  local: true,
  global: false,
  name: 'form-test',
};
const Test = flowRight(
  withCompoundForm(option),
  withLocalContextMenu,
  withContextActivator('onClick'),
)(Div);

export default (props: any) => (
  <Page {...props}>
    <Layout>
      <h1 className="text-3xl font-bold">Demo of compound forms</h1>
      <Test>
        Click here to show form button:
        <S1 />
        <S2 />
      </Test>
    </Layout>
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
  }
`;
