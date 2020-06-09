import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  fragment DrupalFieldImage on HasFieldImage {
    field_image {
      ...ImageMeta
    }
    relationships {
       field_image {
       ...ImageData
       }
    }
  }
`;
