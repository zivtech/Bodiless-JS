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

import { useState } from 'react';

const TAG_ANY_KEY = 'any';

class Tag {
  id: string;

  categoryId: string;

  name: string;

  constructor(id: string, name: string, categoryId?: string) {
    this.id = id;
    this.categoryId = categoryId || '';
    this.name = name;
  }

  isEqual(tag: Tag) {
    return tag.id === this.id && tag.categoryId === this.categoryId;
  }
}

type FilterByGroupStoreSettings = {
  multipleAllowedTags?: boolean,
};

const readTagsFromQueryParams = () => {
  const tags: Tag[] = [];
  const params = new URLSearchParams(window.location.search);
  params.forEach((tagId, categoryId) => {
    tags.push(new Tag(tagId, '', categoryId));
  });
  return tags;
};

const updateUrlQueryParams = (tags: Tag[]) => {
  const {
    protocol,
    host,
    pathname,
  } = window.location;
  const queryParams = new URLSearchParams();
  tags.forEach(tag => {
    queryParams.append(tag.categoryId || '', tag.id);
  });
  const newurl = `${protocol}//${host}${pathname}?${queryParams}`;
  window.history.pushState({ path: newurl }, '', newurl);
};

const useFilterByGroupStore = (settings: FilterByGroupStoreSettings) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>(readTagsFromQueryParams());

  const { multipleAllowedTags = false } = settings;

  const updateSelectedTags = (tags: Tag[]) => {
    updateUrlQueryParams(tags);
    setSelectedTags(tags);
  };

  const selectTag = (tag: Tag) => {
    updateSelectedTags([
      ...(
        !multipleAllowedTags
          ? selectedTags.filter(tag$ => tag.categoryId !== tag$.categoryId)
          : selectedTags
      ),
      tag,
    ]);
  };

  const unSelectTag = (tag: Tag) => {
    updateSelectedTags([
      ...selectedTags.filter(tag$ => !tag.isEqual(tag$)),
    ]);
  };

  const isTagSelected = (tag: Tag) => selectedTags.find(tag$ => tag.isEqual(tag$)) !== undefined;

  const getSelectedTags = () => selectedTags;

  const clearSelectedTags = () => updateSelectedTags([]);

  return {
    selectTag,
    unSelectTag,
    getSelectedTags,
    isTagSelected,
    clearSelectedTags,
  };
};

export {
  Tag,
  TAG_ANY_KEY,
  useFilterByGroupStore,
};
