import React, { ComponentType as CT, HTMLProps } from 'react';
import { graphql } from 'gatsby';
import {
  H1, Img, Div, DesignableComponentsProps, designable, withDesign, replaceWith,
} from '@bodiless/fclasses';
import { flow } from 'lodash';
import ReactMarkdown from 'react-markdown';
import { withNode, withDefaultContent } from '@bodiless/core';
import { asEditable, asBodilessImage } from '@bodiless/components';
import useDrupalTitleData from './title';
import useDrupalImageData from './image';
import useDrupalBodyData from './body';
import asBodilessMarkdown from './body/asBodilessMarkdown';

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

export const withDrupalArticleContent = withDefaultContent(() => ({
  title: useDrupalTitleData(),
  image: useDrupalImageData('field_image'),
  body: useDrupalBodyData(),
}));

export const fragment = graphql`
  fragment DrupalArticlePage on Query {
    Drupal: allNodeArticle {
      edges {
        node {
          ...DrupalMarkdownBody
          ...DrupalNodeTitle
          ...DrupalFieldImage
        }
      }
    }
}
`;
