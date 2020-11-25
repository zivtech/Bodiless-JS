import { graphql } from 'gatsby';
import { withDefaultContent } from '@bodiless/core';
import useDrupalTitleData from '../title/useDrupalData';
import useDrupalImageData from '../image/useDrupalData';
import useDrupalBodyData from '../body/useDrupalData';
import useDrupalSubtitleData from '../subtitle/useDrupalData';
import { useDrupalNode } from '../../DrupalDataProvider';

export const fragment = graphql`
  fragment DrupalArticlePage on Query {
    Drupal: allNodeArticle {
      edges {
        node {
          drupal_id
          ...DrupalMarkdownBody
          ...DrupalMarkdownSubtitle
          ...DrupalNodeTitle
          ...DrupalFieldImage
        }
      }
    }
}
`;

const useArticleData = (prefix = '') => (props: any) => ({
  [`${prefix}title`]: useDrupalTitleData(props),
  [`${prefix}image`]: useDrupalImageData('field_image')(props),
  [`${prefix}subtitle`]: useDrupalSubtitleData(props),
  [`${prefix}body`]: useDrupalBodyData(props),
});

const useAllDrupalArticles = (props: any) => {
  const edges = useDrupalNode(props);
  const entries = edges.reduce((acc:any, { node }:any, ix:number) => ({
    ...acc,
    ...useArticleData(`${node.drupal_id}$`)({ drupalNodeKey: `${ix}.node` }),
  }), {});
  return entries;
};

const withDrupalData = withDefaultContent(useAllDrupalArticles);

export default withDrupalData;
