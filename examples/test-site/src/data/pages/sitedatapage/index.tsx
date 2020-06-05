import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import React from 'react';
import { flow } from 'lodash';
import { withDesign } from '@bodiless/fclasses';
import { asHeader1 } from '../../../components/Elements.token';
import Layout from '../../../components/Layout';
import { withDrupalNode, withDrupalData } from '../../../components/drupal/DrupalDataProvider';
import { asEditableArticlePage, withDrupalArticleContent, ArticlePageClean } from '../../../components/drupal/ArticlePage';

const DrupalPage = flow(
  withDrupalNode('edges[0].node'),
  withDrupalData,
)(Page);

const withArticlePageStyles = withDesign({
  Title: asHeader1,
});

const asArticlePage = flow(
  withArticlePageStyles,
  asEditableArticlePage,
  withDrupalArticleContent,
);

const ArticlePage = asArticlePage(ArticlePageClean);

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
