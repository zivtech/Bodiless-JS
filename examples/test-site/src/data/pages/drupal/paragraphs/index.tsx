import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import React from 'react';
import { flow } from 'lodash';
import { withDesign } from '@bodiless/fclasses';
import { asHeader1 } from '../../../../components/Elements.token';
import Layout from '../../../../components/Layout';
import { withDrupalData } from '../../../../components/drupal/DrupalDataProvider';
import {
  asEditableParagraphedArticlePage,
  ParagraphedArticlePageClean,
  withDrupalData as withDrupalParagraphedArticleData,
} from '../../../../components/drupal/ParagraphsDemo';

const DrupalPage = flow(
  withDrupalData,
)(Page);

const withArticlePageStyles = withDesign({
  Title: asHeader1,
});

const asParagraphedArticlePage = flow(
  withArticlePageStyles,
  asEditableParagraphedArticlePage,
  withDrupalParagraphedArticleData,
);

const ParagraphedArticlePage = asParagraphedArticlePage(ParagraphedArticlePageClean);

export default (props: any) => {
  const { data } = props;
  return (
    <DrupalPage {...props}>
      <Layout>
        <ParagraphedArticlePage />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </DrupalPage>
  );
};

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
    ...DrupalParagraphedArticlePage
  }
`;
