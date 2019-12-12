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

import React from 'react';
import { flow } from 'lodash';
import {
  permute,
  vary,
  withFacet,
  withDesc,
  asObject,
  withDisplayName,
  HOC,
  addToAll,
} from '@bodiless/layouts';
import { FlexboxGrid } from '@bodiless/layouts-ui';
import Tout from '../Tout';
import {
  asToutHorizontal,
  asToutVertical,
  asToutNoTitle,
  asToutNoCta,
  asToutNoBody,
  asToutNoBodyNoTitle,
  asToutDefaultStyle,
} from '../Tout/token';
import { withType } from './Categories';

const withToutStructure = withFacet('Tout Structure');
const withToutOrientation = withFacet('Tout Orientation');
const toutBasicVariations = vary(
  addToAll(
    withDesc('A way to tout a call to Action.\n'),
    withDisplayName(''),
    withType('Tout')(),
    asToutDefaultStyle,
  ),
  permute(
    ...flow(
      addToAll(withToutOrientation('Vertical')(asToutVertical as HOC)),
      permute(
        withToutStructure('With Title/Body')(),
        withToutStructure('No Title')(asToutNoTitle as HOC),
        withToutStructure('No Body')(asToutNoBody as HOC),
        withToutStructure('No Title/Body')(asToutNoBodyNoTitle as HOC),
      ),
    )([]),
    ...flow(
      addToAll(withToutOrientation('Horizontal')(asToutHorizontal as HOC)),
      permute(
        withToutStructure('With Title/Body')(),
        withToutStructure('No Title')(asToutNoTitle as HOC),
        withToutStructure('No Body')(asToutNoBody as HOC),
      ),
    )([]),
  ),
  permute(
    withToutStructure('With CTA')(),
    withToutStructure('No CTA')(asToutNoCta as HOC),
  ),
)(Tout);
const ComponentTypes = { ...asObject(toutBasicVariations) };

const FlexBoxDefault = props => (
  <FlexboxGrid
    componentTypes={ComponentTypes}
    {...props}
  />
);
// eslint-disable-next-line import/prefer-default-export
export { FlexBoxDefault };
