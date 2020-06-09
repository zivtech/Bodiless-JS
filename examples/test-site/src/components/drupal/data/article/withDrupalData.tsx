import { graphql } from 'gatsby';
import { withDefaultContent } from '@bodiless/core';
import useDrupalTitleData from '../title/useDrupalData';
import useDrupalImageData from '../image/useDrupalData';
import useDrupalBodyData from '../body/useDrupalData';

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

const withDrupalData = withDefaultContent(() => ({
  title: useDrupalTitleData(),
  image: useDrupalImageData('field_image'),
  body: useDrupalBodyData(),
}));

export default withDrupalData;
