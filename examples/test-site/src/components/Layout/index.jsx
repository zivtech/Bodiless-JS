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

import React from 'react';
import Helmet from 'react-helmet';
import { flowRight } from 'lodash';
import { v1 } from 'uuid';
import { StaticQuery, graphql } from 'gatsby';
import { Div, Meta } from '@bodiless/fclasses';
import {
  useFormUI,
  withCompoundForm,
  withNodeKey,
  withNode,
  withNodeDataHandlers,
  withEditFormSnippet,
  withoutProps,
  withData,
  useRegisterSnippet,
} from '@bodiless/core';
import {
  withMeta,
  withMetaTitle,
  withMetaHtml,
  asBodilessHelmet,
  withEvent,
} from '@bodiless/components';
import Header from './header';
import Footer from './footer';
import { asPageContainer } from '../Elements.token';

const useGetMenuOptions = () => () => [
  {
    name: 'seo',
    icon: 'category',
    label: 'SEO',
  },
];

const withSeoFormHeader = headerProps => Component => {
  const SeoHeaderSnippet = {
    id: v1(),
    render: () => {
      const { ComponentFormTitle, ComponentFormDescription } = useFormUI();
      return (
        <>
          <ComponentFormTitle>{headerProps.title}</ComponentFormTitle>
          <ComponentFormDescription>{headerProps.description}</ComponentFormDescription>
        </>
      );
    },
  };

  const WithSeoFormHeader = (props) => {
    useRegisterSnippet(SeoHeaderSnippet);
    return <Component {...props} />;
  };
  return WithSeoFormHeader;
};

const seoFormHeader = {
  title: 'SEO Data Management',
  description: `Enter the page level data used for SEO. 
  This is metadata needed for SEO that will go in the page header.`,
};

const Seo = flowRight(
  withCompoundForm({
    useGetMenuOptions, name: 'Seo', peer: true, id: 'seo',
  }),
  withSeoFormHeader(seoFormHeader),
)(React.Fragment);

const withMetaSnippet = (data) => withEditFormSnippet({
  render: () => {
    const { name, label, type } = data;
    const { ComponentFormLabel, ComponentFormText, ComponentFormTextArea } = useFormUI();
    const Field = type === 'text' ? ComponentFormText : ComponentFormTextArea;
    return (
      <>
        <ComponentFormLabel>{label}</ComponentFormLabel>
        <Field field={name} />
      </>
    );
  },
  submitValueHandler: (values) => {
    const { name, attribute } = data;
    return {
      [attribute]: values[name],
    };
  },
  initialValueHandler: (values) => {
    const { name, attribute } = data;
    return values[attribute] ? {
      ...values,
      [name]: values[attribute],
    } : { ...values };
  },
});

const asSeoFormSnippet = (nodeKey, defaultData) => flowRight(
  withNodeKey(nodeKey),
  withNode,
  withNodeDataHandlers(defaultData),
  withMetaSnippet(defaultData),
  withoutProps('setComponentData'),
  withData,
);

const MetaTitle = flowRight(
  asBodilessHelmet('meta'),
  asSeoFormSnippet('page-title', {
    name: 'title',
    title: 'Rec 30-65 char',
    type: 'text',
    label: 'Title',
    attribute: 'content',
  }),
)(Meta);

const MetaPageType = flowRight(
  asBodilessHelmet('meta'),
  asSeoFormSnippet('page-type', {
    name: 'pagetype',
    pagetype: '',
    type: 'text',
    label: 'Page type',
    attribute: 'content',
  }),
)(Meta);

const MetaDescription = flowRight(
  asBodilessHelmet('meta'),
  asSeoFormSnippet('description', {
    name: 'description',
    type: 'textarea',
    label: 'Description',
    description: 'Rec < 160 char',
    attribute: 'content',
  }),
)(Meta);

const ExampleHelmet = flowRight(
  asBodilessHelmet('meta'),
  withMeta('pagetype', 'page-type'),
  withMeta('description', 'description'),
  withMeta('bl-brand', 'brand', 'site'),
  withMeta('bl-country', 'country', 'site'),
  withMetaTitle('page-title'),
  withMetaHtml('en'),
)(Helmet);

const ExampleGTMHelmetEvent = flowRight(
  asBodilessHelmet('datalayer'),
  withEvent(
    'digitalData',
    {
      event: 'Page Loaded',
      page: {
        country: 'US',
        language: 'EN',
        hostname: 'bodilessjs.com',
      },
    },
    'page-loaded',
  ),
)(Helmet);

const Container = asPageContainer(Div);
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            logo
          }
        }
      }
    `}
    render={data => (
      <>
        <ExampleHelmet />
        <ExampleGTMHelmetEvent />
        <Header siteLogo={data.site.siteMetadata.logo} />
        <Seo>
          <MetaTitle />
          <MetaDescription />
          <MetaPageType />
        </Seo>
        <Container>{children}</Container>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
);

export default Layout;
