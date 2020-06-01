import { graphql } from 'gatsby';
import { Page } from '@bodiless/gatsby-theme-bodiless';
import React, { createContext, ComponentType } from 'react';
import { flow } from 'lodash';
import { asEditable } from '@bodiless/components';
import { H1 } from '@bodiless/fclasses';
import { asHeader1 } from '../../../components/Elements.token';
import Layout from '../../../components/Layout';
import { withDefaultContent } from '@bodiless/core';

const DrupalDataContext = createContext<any>({});

const withDrupalData = (P: ComponentType<any>) => {
  const WithDrupalData = ({ data, ...rest }: any) => {
    const { Drupal, ...restData } = data;
    return (
      <DrupalDataContext.Provider value={Drupal}>
        <P data={restData} {...rest} />
      </DrupalDataContext.Provider>
    );
  };
  return WithDrupalData;
};

const withDrupalDefaultContent


const DrupalPage = withDrupalData(Page);

const Title = flow(
  asEditable('title', 'Page Title'),
  asHeader1,
  withDefaultContent({ title: { text: 'Foo' } }),
)(H1);


export default (props: any) => {
  const { data } = props;
  return (
    <DrupalPage {...props}>
      <Layout>
        <Title />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Layout>
    </DrupalPage>
  );
};

export const fragment = graphql`
  fragment DrupalArticlePage on Query {
    Drupal: allNodeArticle {
      edges {
        node {
          body {
            value
          }
          title
        }
      }
    }
}
`;

export const query = graphql`
  query($slug: String!) {
    ...PageQuery
    ...SiteQuery
    ...DrupalArticlePage
  }
`;
