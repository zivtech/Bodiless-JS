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

import { flow } from 'lodash';
import { addClasses } from '@bodiless/fclasses';
import {
  asBodilessImage,
  asBodilessLink,
  Editable,
  withPlaceholder,
} from '@bodiless/components';
import { withChild, withNodeKey } from '@bodiless/core';
import {
  asAlignCenter,
  asAlignRight,
  asAlignLeft,
  asUnderline,
  asAlignJustify,
} from './ElementDefault.token';

const asBold = addClasses('');
const asItalic = addClasses('');
const asLink = addClasses('text-blue-700 underline');
const asStrikeThrough = addClasses('');
const asTextColorPrimary = addClasses('text-black');
const asHeader1 = flow(addClasses('text-3xl'), asTextColorPrimary);
const asHeader2 = addClasses('text-2xl');
const asCta = addClasses('bg-orange-700 hover:bg-orange-600 text-center text-white p-2 rounded');
const asBlockItem = addClasses('p-1 w-full');
const asPageContainer = addClasses('container mx-auto');
const asPrimaryColorBackground = addClasses('bg-gray-200');
const asImage = addClasses('');
const asEditableImage = asBodilessImage;
const asEditableLink = asBodilessLink;
const asImageRounded = addClasses('rounded-lg');
const asSuperScript = addClasses('');
const asEditable = (nodeKey?: string, placeholder?: string) => withChild(
  flow(
    withNodeKey(nodeKey),
    withPlaceholder(placeholder),
  )(Editable),
);
export {
  asBold,
  asItalic,
  asUnderline,
  asLink,
  asStrikeThrough,
  asAlignLeft,
  asAlignRight,
  asAlignCenter,
  asAlignJustify,
  asHeader1,
  asHeader2,
  asCta,
  asBlockItem,
  asPageContainer,
  asPrimaryColorBackground,
  asImage,
  asEditableImage,
  asEditableLink,
  asEditable,
  asImageRounded,
  asSuperScript,
  asTextColorPrimary,
};
