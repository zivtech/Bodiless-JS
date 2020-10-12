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
import { HOC } from '@bodiless/fclasses';
import {
  withDataLayerItem,
  withDefaultDataLayer,
  asBodilessHelmet,
  withDataLayerScript,
  withMetaForm,
} from '@bodiless/components';

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
  // @ts-ignore
  path: '1.page.pageType',
});

const useMenuOptions = () => [
  {
    name: 'gtm',
    icon: 'local_offer',
    label: 'GTM',
  },
];

export const gtmFormHeader = {
  title: 'GTM Data Management',
  description: 'Enter the page level data used for DataLayer.',
};
/**
 * An HOC to be used to define and re-use global GTM/DataLayer form and data.
 * @param hocs array
 *   An array of HOCs to act on the helmet component.
 */
const withGlobalGTMForm = (...hocs: HOC[]) => flowRight(
  withMetaForm(useMenuOptions, gtmFormHeader),
  asBodilessHelmet('datalayer'),
  withDefaultDataLayer(defaultDataLayer),
  withDataLayerPageType('page-type', 'foo'),
  ...hocs,
  withDataLayerScript,
);

export { withGlobalGTMForm };
