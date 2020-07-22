/**
 * Copyright © 2020 Johnson & Johnson
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

import { flowRight } from 'lodash';
import Helmet from 'react-helmet';
import {
  withMeta,
  withMetaStatic,
  withMetaHtml,
  asBodilessHelmet,
  withMetaForm,
} from '@bodiless/components';
import type { MetaFormFieldType } from '@bodiless/components';

const withMetaTitle = withMeta({
  name: 'title',
  type: 'text' as MetaFormFieldType.Text,
  label: 'Title',
  content: '',
});

const withMetaDescription = withMeta({
  name: 'description',
  type: 'textarea' as MetaFormFieldType.TextArea,
  label: 'Description',
  content: '',
});

const withMetaPageType = withMeta({
  name: 'pagetype',
  type: 'text' as MetaFormFieldType.Text,
  label: 'Page type',
  content: '',
});

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
  withMetaTitle('page-title', 'Rec 30-65 char'),
  withMetaDescription('description', 'Rec < 160 char'),
  withMetaPageType('page-type'),
  withMetaStatic('bl-brand', 'brand', 'site'),
  withMetaStatic('bl-country', 'country', 'site'),
  withMetaHtml('en', '', ''),
)(Helmet);

export default ExampleHelmet;
