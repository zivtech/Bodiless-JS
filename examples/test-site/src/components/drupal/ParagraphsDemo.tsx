import React, { ComponentType as CT, HTMLProps } from 'react';
import { graphql } from 'gatsby';
import {
  useNode, withNode, withDefaultContent, withNodeKey,
} from '@bodiless/core';
import {
  H1, DesignableComponentsProps, designable, withDesign,
} from '@bodiless/fclasses';
import { flow } from 'lodash';
import { asEditable } from '@bodiless/components';
import useDrupalParagraphData from './data/paragraphs/useDrupalData';
import useDrupalTitleData from './data/title/useDrupalData';
import { withDrupalNode } from './DrupalDataProvider';

const MockFlowContainerClean = withNode(() => {
  const { node } = useNode();
  return (
    <pre>
      {JSON.stringify(node.data, null, 2)}
    </pre>
  );
});

type Components = {
  Title: CT<any>,
  Container: CT<any>,
};

const startComponents: Components = {
  Title: H1,
  Container: MockFlowContainerClean,
};

type Props = DesignableComponentsProps<Components> & HTMLProps<HTMLElement>;

const ParagraphedArticlePageBase = ({ components }: Props) => {
  const { Title, Container } = components;
  return (
    <>
      <Title />
      <Container />
    </>
  );
};

export const ParagraphedArticlePageClean = flow(
  designable(startComponents),
  withNode,
)(ParagraphedArticlePageBase);

export const asEditableParagraphedArticlePage = withDesign({
  Title: asEditable('title', 'Page Title'),
  Container: withNodeKey('container'),
});

export const fragment = graphql`
  fragment DrupalParagraphedArticlePage on Query {
    Drupal: allNodeParagraphedContentDemo {
      edges {
        node {
          ...DrupalNodeTitle
          relationships {
            field_paragraphs_demo {
               ...DrupalParagraph
            }
          }
        }
      }
    }
}
`;

export const withDrupalData = flow(
  withDefaultContent(() => ({
    title: useDrupalTitleData(),
    container: useDrupalParagraphData('field_paragraphs_demo'),
  })),
  withDrupalNode('edges[1].node'),
);
