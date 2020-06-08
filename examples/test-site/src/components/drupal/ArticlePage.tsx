import React, { ComponentType as CT, HTMLProps } from 'react';
import { graphql } from 'gatsby';
import {
  H1, Img, Div, DesignableComponentsProps, designable, withDesign,
} from '@bodiless/fclasses';
import { flow } from 'lodash';
import { withNode, withDefaultContent } from '@bodiless/core';
import { asEditable, asBodilessImage } from '@bodiless/components';
import { useDrupalData as useDrupalTitleData } from './title';
import useDrupalImageData from './image';

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
  const { Title, Image } = components;
  return (
    <>
      <Title />
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
});

export const withDrupalArticleContent = withDefaultContent(() => ({
  title: useDrupalTitleData(),
  image: useDrupalImageData('field_image'),
}));

export const fragment = graphql`
  fragment DrupalArticlePage on Query {
    Drupal: allNodeArticle {
      edges {
        node {
          type: __typename
          body {
            type: __typename
            value
          }
          ...DrupalNodeTitle
          field_image {
            ...ImageMeta
          }
          relationships {
            field_image {
              ...ImageData
            }
          }
        }
      }
    }
}
`;
