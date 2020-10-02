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
  withDataLayer,
  asBodilessHelmet,
  withMetaForm,
} from '@bodiless/components';
import {
  useEditContext,
} from '@bodiless/core';

const withDataLayerPageType = withDataLayer({
  name: 'pagetype',
  label: 'Page Type',
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

const seoFormHeader = {
  title: 'SEO Data Management',
  description: `Enter the page level data used for SEO. 
  This is metadata needed for SEO that will go in the page header.`,
};

//const withDefaultDataLayer = () => {};

const GTMDataLayerHelmet = flowRight(
  withMetaForm(useMenuOptions, seoFormHeader),
  asBodilessHelmet('datalayer'),
  withDataLayerPageType('page-type', 'foo'),
)(Helmet);

export default GTMDataLayerHelmet;
