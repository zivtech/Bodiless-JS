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

import React, { HTMLProps } from 'react';
import {
  useFormUI,
  BodilessOptions,
  asBodilessComponent,
} from '@bodiless/core';

// Type of the data used by this component.
type Data = {
  href: string;
};

const options: BodilessOptions<HTMLProps<HTMLAnchorElement>, Data> = {
  icon: 'link',
  name: 'Link',
  label: 'Link',
  renderForm: ({ unwrap, closeForm }) => {
    const {
      ComponentFormTitle,
      ComponentFormLabel,
      ComponentFormText,
      ComponentFormUnwrapButton,
    } = useFormUI();
    const removeLinkHandler = (event: React.MouseEvent) => {
      event.preventDefault();
      if (unwrap) {
        unwrap();
      }
      closeForm();
    };
    return (
      <>
        <ComponentFormTitle>Link</ComponentFormTitle>
        <ComponentFormLabel htmlFor="link-href">URL</ComponentFormLabel>
        <ComponentFormText field="href" id="link-href" />
        {unwrap && (
        <ComponentFormUnwrapButton type="button" onClick={removeLinkHandler}>
          Remove Link
        </ComponentFormUnwrapButton>
        )}
      </>
    );
  },
  global: false,
  local: true,
  defaultData: {
    href: '#',
  },
};

export const asBodilessLink = asBodilessComponent<HTMLProps<HTMLAnchorElement>, Data>(options);
const Link = asBodilessLink()('a');
export default Link;
