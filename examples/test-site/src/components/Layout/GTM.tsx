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
  asBodilessHelmet,
  withEvent,
  withGTMForm,
} from '@bodiless/components';
import { useEditContext } from '@bodiless/core';

const SiteGTMHelmetEvent = flowRight(
  asBodilessHelmet('datalayer'),
  // @ts-ignore
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

const useGetMenuOptions = () => {
  const context = useEditContext();
  return () => ([
    {
      name: 'gtm',
      isHidden: () => !context.isEdit,
      icon: 'category',
      label: 'gtm',
    },
  ]);
};

const GTMFormHeader = {
  title: 'GTM Data Management',
  description: `Enter the page level data used for GTM. 
  This is data needed for GTM that will go in the page header.`,
};

export const GTMHelmetWithForm = flowRight(
  withGTMForm(useGetMenuOptions, GTMFormHeader),
  asBodilessHelmet('datalayer'),
)(Helmet);

export default SiteGTMHelmetEvent;
