import { graphql } from 'gatsby';
import { useDrupalNode } from './DrupalDataProvider';

export const useDrupalData = () => {
  const drupalNode = useDrupalNode();
  return {
    text: drupalNode.title,
  };
};

export const titleFragment = graphql`
  fragment DrupalNodeTitle on HasTitle {
    title
  }
`;

export const getSchemaCustomizations = () => {
  const HasTitle = `
    interface HasTitle {
      title
    }
  `;
  return {
    interfaces: {
      HasTitle,
    },
  };
};
