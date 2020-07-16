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
import { StaticQuery, graphql } from 'gatsby';
import { Div } from '@bodiless/fclasses';
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

// Moved to Helemet.ts
// const MetaForm = withMetaForm(useGetMenuOptions, seoFormHeader)((React.Fragment));

// Moved to withMeta.tsx
// const asSeoFormSnippet = (nodeKey, defaultData) => flowRight(
//   withNodeKey(nodeKey),
//   withNode,
//   withNodeDataHandlers(defaultData),
//   withMetaSnippet(defaultData),
//   withoutProps('setComponentData'),
//   withData,
// );

// 'page-title'
// const metaTitle = {
//   name: 'title',
//   placeholder: 'Rec 30-65 char',
//   type: 'text',
//   label: 'Title',
//   content: '',
// };

// const MetaPageType = flowRight(
//   asBodilessHelmet('meta'),
//   asSeoFormSnippet('page-type', {
//     name: 'pagetype',
//     pagetype: '',
//     type: 'text',
//     label: 'Page type',
//     attribute: 'content',
//   }),
// )(Meta);

// const MetaDescription = flowRight(
//   asBodilessHelmet('meta'),
//   asSeoFormSnippet('description', {
//     name: 'description',
//     type: 'textarea',
//     label: 'Description',
//     description: 'Rec < 160 char',
//     attribute: 'content',
//   }),
// )(Meta);

const metaDescription = {
  name: 'description',
  type: 'textarea',
  label: 'Description',
  value: 'Rec < 160 char',
  content: 'Rec < 160 char',
};

const ExampleHelmet = flowRight(
  asBodilessHelmet('meta'),
  withMeta(metaDescription)('description'),
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
        {/* <MetaForm>
          <MetaTitle />
          <MetaDescription />
          <MetaPageType />
        </MetaForm> */}
        <Container>{children}</Container>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
);

export default Layout;
