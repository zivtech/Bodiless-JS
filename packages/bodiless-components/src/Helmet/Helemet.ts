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
import { withNode, withNodeKey } from '@bodiless/core';
import withMetaForm from '../Meta/withMetaForm';

const asBodilessHelmet = (nodeKey?: string) => {
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

  return flowRight(
    withNodeKey({ nodeKey, nodeCollection: 'site' }),
    withNode,
    withNodeKey({ nodeKey, nodeCollection: '_default' }),
    withNode,
    withMetaForm(useGetMenuOptions, seoFormHeader),
  );
};

export default asBodilessHelmet;
