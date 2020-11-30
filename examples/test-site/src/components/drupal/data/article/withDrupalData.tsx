import { graphql } from 'gatsby';
import { withDefaultContent } from '@bodiless/core';
import useDrupalTitleData from '../title/useDrupalData';
import useDrupalImageData from '../image/useDrupalData';
import useDrupalBodyData from '../body/useDrupalData';
import useDrupalSubtitleData from '../subtitle/useDrupalData';
import { useDrupalNode } from '../../DrupalDataProvider';

export type ArticleMetadata = {
  id: string,
  revisionId: string,
  updateTime: string,
};

export type DrupalArticleNode = {
  drupal_id: string,
  drupal_internal__vid: string,
  changed: string,
};

export const fragment = graphql`
  fragment DrupalArticlePage on Query {
    Drupal: allNodeArticle {
      edges {
        node {
          drupal_id
          changed,
          drupal_internal__vid
          ...DrupalMarkdownBody
          ...DrupalMarkdownSubtitle
          ...DrupalNodeTitle
          ...DrupalFieldImage
        }
      }
    }
}
`;

const useArticleMetadata = (props: any): ArticleMetadata => {
  const drupalNode = useDrupalNode<DrupalArticleNode>(props);
  return {
    id: drupalNode.drupal_id,
    revisionId: drupalNode.drupal_internal__vid,
    updateTime: drupalNode.changed,
  };
};

const useArticleData = (prefix = '') => (props: any) => ({
  [`${prefix}title`]: useDrupalTitleData(props),
  [`${prefix}image`]: useDrupalImageData('field_image')(props),
  [`${prefix}subtitle`]: useDrupalSubtitleData(props),
  [`${prefix}body`]: useDrupalBodyData(props),
  [prefix.slice(0, -1)]: useArticleMetadata(props),
});

const useAllDrupalArticles = (prefix?: string) => (props: any) => {
  const finalPrefix = prefix ? `${prefix}$` : '';
  const edges = useDrupalNode<any[]>(props);
  const entries = edges.reduce((acc:any, { node }:any, ix:number) => ({
    ...acc,
    ...useArticleData(`${finalPrefix}${node.drupal_id}$`)({ drupalNodeKey: `${ix}.node` }),
  }), {});
  return entries;
};

const withDrupalData = (prefix?: string) => withDefaultContent(useAllDrupalArticles(prefix));

export default withDrupalData;
