import React, { ComponentType as CT, HTMLProps } from 'react';
import {
  H1, Img, Div, DesignableComponentsProps, designable, withDesign, replaceWith,
} from '@bodiless/fclasses';
import { flow } from 'lodash';
import ReactMarkdown from 'react-markdown';
import { withNode } from '@bodiless/core';
import { asEditable, asBodilessImage } from '@bodiless/components';
import asBodilessMarkdown from '../markdown/asBodilessMarkdown';

type Components = {
  Title: CT<any>,
  SubTitle: CT<any>,
  Image: CT<any>,
  Body: CT<any>,
};

const startComponents: Components = {
  Title: H1,
  Image: Img,
  Body: Div,
  SubTitle: Div,
};

type Props = DesignableComponentsProps<Components> & HTMLProps<HTMLElement>;

const ArticlePageBase = ({ components }: Props) => {
  const {
    Title, SubTitle, Image, Body,
  } = components;
  return (
    <>
      <Title />
      <SubTitle />
      <Body />
      <Image />
    </>
  );
};

export const ArticlePageClean = flow(
  designable(startComponents),
  withNode,
)(ArticlePageBase);

export const asEditableArticlePage = withDesign({
  Title: asEditable('title', 'Page Title'),
  Image: asBodilessImage('image'),
  SubTitle: flow(
    replaceWith(ReactMarkdown),
    asBodilessMarkdown('subtitle'),
  ),
  Body: flow(
    replaceWith(ReactMarkdown),
    asBodilessMarkdown('body'),
  ),
});
