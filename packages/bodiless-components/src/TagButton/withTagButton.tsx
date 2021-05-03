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

import React, { ComponentType } from 'react';
import { flow, isEmpty } from 'lodash';
import {
  EditButtonOptions,
  useEditContext,
  TagType,
  useNodeDataHandlers,
  withMenuOptions,
  useMenuOptionUI,
  useContextMenuForm,
} from '@bodiless/core';
import type { TMenuOption } from '@bodiless/core';
import { TagsNodeType, WithRegisterSuggestionsType } from './types';

type UseTagButtonOverrides<P = any> = (props: P) => Partial<EditButtonOptions<P, any>>;

const useMenuOptions = (useOverrides: UseTagButtonOverrides = () => ({})) => (props: any) => {
  const {
    label = 'Groups',
    global = false,
    local = true,
    groupMerge = 'none',
    group = undefined,
  } = useOverrides(props);
  const {
    getSuggestions = () => [],
    placeholder = 'Select Tags',
    noSuggestionsText = 'No matching tags found.',
    minQueryLength = 1,
    allowNew = true,
    allowMultipleTags = true,
    inputAttributes = { name: 'react-tags-input' },
    formTitle = 'Tags',
    formBodyText = 'Select from available tags:',
    seeAllText = 'See all tags',
    autofocus = false,
  } = props;
  const renderForm = () => {
    const {
      ComponentFormTitle,
      ComponentFormLabel,
      ComponentFormUnwrapButton,
      ReactTags,
    } = useMenuOptionUI();

    const suggestions = getSuggestions();

    const context = useEditContext();
    const displayListOfTags = () => context.showPageOverlay({
      message: suggestions
        .slice()
        .reduce((acc: any, _tag: TagType) => `${acc}\n${_tag.name}`, ''),
      hasSpinner: false,
      hasCloseButton: true,
    });

    return (
      <>
        <ComponentFormTitle>{formTitle}</ComponentFormTitle>
        <ComponentFormLabel>{formBodyText}</ComponentFormLabel>
        <ReactTags
          suggestions={suggestions}
          placeholder={placeholder}
          noSuggestionsText={noSuggestionsText}
          minQueryLength={minQueryLength}
          allowNew={allowNew}
          allowMultipleTags={allowMultipleTags}
          inputAttributes={inputAttributes}
          autofocus={autofocus}
        />
        <ComponentFormUnwrapButton type="button" onClick={displayListOfTags}>
          {seeAllText}
        </ComponentFormUnwrapButton>
      </>
    );
  };
  const render = useContextMenuForm({
    renderForm,
  });
  const menuOptions: TMenuOption[] = [{
    name: 'Tag',
    icon: 'local_offer',
    label,
    handler: () => render,
    group,
    groupMerge,
    global,
    local,
  }];

  return menuOptions;
};

const withRegisteredTags = <P extends WithRegisterSuggestionsType>(
  Component: ComponentType<P>,
) => (props: P) => {
    const { registerSuggestions } = props;
    const { componentData } = useNodeDataHandlers<TagsNodeType>();

    if (!isEmpty(componentData) && componentData.tags) {
      registerSuggestions([...componentData.tags]);
    }

    return <Component {...props} />;
  };

const withTagButton = (useOverrides?: UseTagButtonOverrides) => flow(
  withMenuOptions({
    useMenuOptions: useMenuOptions(useOverrides),
    name: 'Tag',
    type: 'tag',
  }),
  withRegisteredTags,
);

export default withTagButton;
