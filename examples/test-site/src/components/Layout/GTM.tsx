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
  withDataLayerItem,
  withDefaultDataLayer,
  asBodilessHelmet,
  withDataLayerScript,
  withMetaForm,
} from '@bodiless/components';
import { useEditContext } from '@bodiless/core';

export const defaultDataLayer = {
  dataLayerName: 'DigitalData',
  dataLayerData: [
    {
      foo: 'foo value',
      bar: {
        bat: 'baz value',
      },
    },
    {
      event: 'Page Loaded',
      page: {
        country: 'US',
        language: 'en',
        hostname: 'www.example.com',
      },
    },
  ],
};
// Add a page type editable field:
const withDataLayerPageType = withDataLayerItem({
  name: 'pagetype',
  label: 'Page Type',
  path: '1.page.pageType',
});

const useMenuOptions = () => {
  const context = useEditContext();
  return [
    {
      name: 'gtm',
      icon: 'local_offer',
      label: 'GTM',
      isHidden: () => !context.isEdit,
    },
  ];
};

export const gtmFormHeader = {
  title: 'GTM Data Management',
  description: 'Enter the page level data used for DataLayer.',
};

const GTMDataLayerHelmet = flowRight(
  withMetaForm(useMenuOptions, gtmFormHeader),
  asBodilessHelmet('datalayer'),
  withDefaultDataLayer(defaultDataLayer),
  withDataLayerPageType('page-type', 'foo'),
  withDataLayerScript,
)(Helmet);

export default GTMDataLayerHelmet;
