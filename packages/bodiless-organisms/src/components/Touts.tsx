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

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { HTMLProps, FC } from 'react';
import { flow } from 'lodash';
import {
  stylable,
  applyDesign,
  withDesign,
  DesignableProps,
} from '@bodiless/fclasses';
import {
  asBodilessImage,
  asBodilessLink,
  asEditable,
} from '@bodiless/components';
import { withNode } from '@bodiless/core';

const getToutComponents = applyDesign({
  Wrapper: stylable<HTMLProps<HTMLDivElement>>('div'),
  ImageWrapper: stylable<HTMLProps<HTMLDivElement>>('div'),
  ImageLink: stylable('a'),
  Image: stylable<HTMLProps<HTMLImageElement>>('img'),
  ContentWrapper: stylable<HTMLProps<HTMLDivElement>>('div'),
  Title: stylable<HTMLProps<HTMLHeadingElement>>('h2'),
  Body: stylable<HTMLProps<HTMLDivElement>>('div'),
  Link: stylable<HTMLProps<HTMLAnchorElement>>('a'),
});

const ToutBase: FC<DesignableProps> = ({ design }) => {
  const {
    Wrapper,
    ImageWrapper,
    Image,
    ImageLink,
    ContentWrapper,
    Title,
    Body,
    Link,
  } = getToutComponents(design);

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageLink>
          <Image />
        </ImageLink>
      </ImageWrapper>
      <ContentWrapper>
        <Title />
        <Body />
        <Link />
      </ContentWrapper>
    </Wrapper>
  );
};
const asEditableTout = withDesign({
  Image: asBodilessImage('image'),
  ImageLink: asBodilessLink('cta'),
  Title: asEditable('title', 'Tout Title Text'),
  Link: flow(
    asBodilessLink('cta'),
    asEditable('ctaText', 'Tout Button Text'),
  ),
  Body: asEditable('body', 'Tout Body Text'),
});
const ToutClean = withNode(ToutBase) as React.ComponentType<DesignableProps>;
const Tout = asEditableTout(ToutClean as React.ComponentType<DesignableProps>);

export default Tout;
export {
  Tout,
  ToutClean,
  asEditableTout,
};
