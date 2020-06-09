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
  Image: CT<any>,
  Body: CT<any>,
};

const startComponents: Components = {
  Title: H1,
  Image: Img,
  Body: Div,
};

type Props = DesignableComponentsProps<Components> & HTMLProps<HTMLElement>;

const ArticlePageBase = ({ components }: Props) => {
  const { Title, Image, Body } = components;
  return (
    <>
      <Title />
      <Image />
      <Body />
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
  Body: flow(
    replaceWith(ReactMarkdown),
    asBodilessMarkdown('body'),
  ),
});
