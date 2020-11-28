import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import React from 'react';
import { flow } from 'lodash';
import { withDesign } from '@bodiless/fclasses';
import { asHeader1 } from '../../../components/Elements.token';
import Layout from '../../../components/Layout';
import { withDrupalNode, withDrupalData } from '../../../components/drupal/DrupalDataProvider';
import { asEditableArticlePage, ArticlePageClean } from '../../../components/drupal/ArticlePage';
// import withDrupalArticleData from '../../../components/drupal/data/article/withDrupalData';
import withDrupalArticleLibrary from './withDrupalArticleLibrary';

const DrupalPage = flow(
  withDrupalNode('edges'),
  withDrupalData,
)(Page);

const withArticlePageStyles = withDesign({
  Title: asHeader1,
});

// const asArticlePage = (nodeKeys?: WithNodeKeyProps) => flow(
//   withArticlePageStyles,
//   asEditableArticlePage,
//   withNode,
//   withNodeKey(nodeKeys),
//   withDrupalArticleData(),
// );
//
// const ArticlePage = asArticlePage('2ffe18ee-79f2-44f1-8ed7-5ee8bb0cf952')(ArticlePageClean);

const asArticleLibraryPage = flow(
  withArticlePageStyles,
  asEditableArticlePage,
  withDrupalArticleLibrary('content'),
);

const ArticlePage = asArticleLibraryPage(ArticlePageClean);

export default (props: any) => {
  const { data } = props;
  return (
    <DrupalPage {...props}>
      <Layout>
        <ArticlePage />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </DrupalPage>
  );
};

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
    ...DrupalArticlePage
  }
`;
