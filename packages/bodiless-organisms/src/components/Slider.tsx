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

import { Image } from '@bodiless/components';
import {
  addClasses,
  applyDesign,
  stylable,
  withDesign,
  DesignableProps,
} from '@bodiless/fclasses';
import React, { HTMLProps, FC } from 'react';
import { withNode, WithNodeProps } from '@bodiless/core';
import Carousel from 'nuka-carousel';

const getSliderComponents = applyDesign({
  Wrapper: stylable<HTMLProps<HTMLDivElement>>('div'),
  CarouselImage: stylable(Image),
});

// Basic Tout
const cleanSlider: FC<DesignableProps> = ({ design }) => {
  const {
    Wrapper,
    CarouselImage,
  } = getSliderComponents(design);

  return (
    // TO DO replace Carousel with being able to add in allowed types of components.
    <Wrapper>
      <Carousel>
        <CarouselImage nodeKey="image1" />
        <CarouselImage nodeKey="image2" />
        <CarouselImage nodeKey="image3" />
      </Carousel>
    </Wrapper>

  );
};

const asBasicSlider = withDesign({
  Wrapper: addClasses('container w-full h-64'),
  CarouselImage: addClasses('m-0 w-full h-64'),
});

type SBasicSliderProps = React.ComponentType<HTMLProps<HTMLDivElement> & WithNodeProps>
export default withNode(asBasicSlider(cleanSlider)) as SBasicSliderProps;
