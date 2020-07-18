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
  withMetaForm,
} from '@bodiless/components';
import Header from './header';
import Footer from './footer';
import { asPageContainer } from '../Elements.token';

const metaTitle = {
  name: 'title',
  placeholder: 'Rec 30-65 char',
  type: 'text',
  label: 'Title',
  content: 'Rec < 160 char',
};

const metaDescription = {
  name: 'description',
  type: 'textarea',
  label: 'Description',
  placeholder: 'Rec < 160 char',
  content: 'Rec < 160 char',
};

const metaPageType = {
  name: 'pagetype',
  pagetype: '',
  type: 'text',
  label: 'Page type',
  attribute: 'content',
};

const useGetMenuOptions = () => () => [
  {
    name: 'seo',
    icon: 'category',
    label: 'SEO',
  },
];

const seoFormHeader = {
  title: 'SEO Data Management',
  description: `Enter the page level data used for SEO. 
  This is metadata needed for SEO that will go in the page header.`,
};

const ExampleHelmet = flowRight(
  withMetaForm(useGetMenuOptions, seoFormHeader),
  asBodilessHelmet('meta'),
  withMetaTitle('page-title'),
  withMeta(metaDescription)('description'),
  withMeta(metaPageType)('page-type'),
  withMeta(metaTitle)('page-title'),
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
        <Container>{children}</Container>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </>
    )}
  />
);

export default Layout;
