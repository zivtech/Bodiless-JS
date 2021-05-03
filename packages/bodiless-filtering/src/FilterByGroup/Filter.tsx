/**
 * Copyright © 2021 Johnson & Johnson
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

/* eslint-disable arrow-body-style, max-len, @typescript-eslint/no-unused-vars */
import React, { FC, ComponentType, HTMLProps } from 'react';
import { flow, isEmpty } from 'lodash';
import {
  withNodeKey,
  withNode,
  withNodeDataHandlers,
  ifReadOnly,
  ifEditable,
  withContextActivator,
  withLocalContextMenu,
} from '@bodiless/core';
import {
  designable,
  Div,
  H3,
  Input,
  Label,
  withDesign,
  replaceWith,
  stylable,
  asToken,
  HOC,
  withoutProps,
  DesignableComponentsProps,
} from '@bodiless/fclasses';
import {
  asEditable,
  asBodilessList,
  withBasicSublist,
  withTagButton,
  ifViewportIs,
  ifViewportIsNot,
} from '@bodiless/components';
import { withAccordionSublist } from '@bodiless/accordion';
import {
  TagTitleProps,
  TagTitleComponents,
  FilterProps,
  FilterComponents,
} from './types';
import { useFilterByGroupContext, withTagProps } from './FilterByGroupContext';
import { asExpandedOnDesktopBody } from './token';
import { useTagsAccessors } from './FilterModel';
import { withCategoryListContextProvider } from './CategoryListContext';

const tagTitleComponentsStart: TagTitleComponents = {
  FilterInputWrapper: Div,
  FilterGroupItemInput: Input,
  FilterGroupItemPlaceholder: Label,
  FilterGroupItemLabel: Label,
};

/**
 * @todo refactor this
*/
const withUnselectOnDelete: HOC<{ onDelete?: any }> = Component => props => {
  /*
  const {
    setSelectedNode,
    setSelectedTag,
  } = useFilterByGroupContext();

  const onDelete = (deletedItem: any) => {
    setSelectedTag();
    setSelectedNode();
  };
  return <Component {...props} onDelete={onDelete} />;
  */
  return <Component {...props} />;
};

const TagTitleBase: FC<TagTitleProps> = ({
  components,
  emptyTitleText = 'Select Tag...',
  ...rest
}) => {
  const {
    FilterGroupItemInput,
    FilterGroupItemLabel,
    FilterGroupItemPlaceholder,
    FilterInputWrapper,
  } = components;

  const { tag } = useTagsAccessors();

  const {
    selectTag,
    isTagSelected,
    unSelectTag,
    multipleAllowedTags,
  } = useFilterByGroupContext();

  const onSelect = () => {
    if (isTagSelected(tag)) {
      unSelectTag(tag);
    } else {
      selectTag(tag);
    }
  };

  if (tag === undefined) return <></>;

  return (
    <FilterInputWrapper {...rest} key={tag.id}>
      <FilterGroupItemInput
        type={multipleAllowedTags ? 'checkbox' : 'radio'}
        name="filter-item"
        value={tag.id}
        id={tag.id}
        onChange={() => onSelect()}
        checked={isTagSelected(tag)}
      />
      {
        isEmpty(tag.name)
          ? (<FilterGroupItemPlaceholder htmlFor={tag.id}>{ emptyTitleText }</FilterGroupItemPlaceholder>)
          : (<FilterGroupItemLabel htmlFor={tag.id}>{ tag.name }</FilterGroupItemLabel>)
      }
    </FilterInputWrapper>
  );
};

const TagTitle = flow(
  withoutProps([
    'componentData',
    'onContextMenu',
    'getSuggestions',
    'allowMultipleTags',
    'noSuggestionsText',
    'seeAllText',
    'formTitle',
    'formBodyText',
    'selectedTags',
    'registerSuggestions',
  ]),
  ifEditable(
    withTagButton(() => ({
      label: 'Name',
      /**
       * @todo investigate why it is not working
       */
      groupMerge: 'merge-up',
    })),
    withContextActivator('onClick'),
    withLocalContextMenu,
  ),
  ifReadOnly(withoutProps(['setComponentData'])),
  withTagProps({
    allowMultipleTags: false,
    placeholder: 'Add or Create',
    formTitle: 'Group Membership',
    formBodyText: 'Select from available groups:',
    seeAllText: 'View All Groups',
    noSuggestionsText: 'No matching groups found.',
  }),
  withNodeDataHandlers({ tags: [] }),
  withNode,
  withNodeKey('tag'),
  designable(tagTitleComponentsStart, 'TagTitle'),
)(TagTitleBase);

const TestFilterComponentsStart: FilterComponents = {
  CategoryList: asToken(
    asBodilessList(undefined, undefined, () => ({ groupLabel: 'Group' })),
    withDesign({
      Title: asToken(
        replaceWith(H3),
        asEditable('category_name', 'Category Name'),
      ),
      Item: asToken(
        stylable,
        withCategoryListContextProvider,
      ),
      Wrapper: stylable,
    }),
  )('ul'),
  TagList: asToken(
    withUnselectOnDelete,
    asBodilessList(undefined, undefined, () => ({ groupLabel: 'Tag' })),
    withDesign({
      Title: replaceWith(TagTitle),
      Wrapper: stylable,
    }),
  )('ul'),
};

type FilterBaseProps =
  Omit<FilterProps, 'components'> & DesignableComponentsProps<FilterComponents>;
class FilterBase extends React.PureComponent<FilterBaseProps> {
  Filter: ComponentType<HTMLProps<HTMLHeadingElement>> = Div;

  RestProps = {};

  constructor(props: FilterBaseProps) {
    super(props);
    const { components, ...rest } = props;
    const { TagList, CategoryList } = components;

    const AccordionTagList = asExpandedOnDesktopBody(TagList);

    this.RestProps = rest;
    this.Filter = flow(
      ifViewportIs(['lg', 'xl', 'xxl'])(withBasicSublist(TagList)),
      ifViewportIsNot(['lg', 'xl', 'xxl'])(withAccordionSublist(AccordionTagList)),
    )(CategoryList);
  }

  render() {
    return (<this.Filter {...this.RestProps} />);
  }
}

const FilterClean: ComponentType<FilterProps> = asToken(
  designable(TestFilterComponentsStart, 'Filter'),
  withNodeKey('filter'),
)(FilterBase);

export default FilterClean;
