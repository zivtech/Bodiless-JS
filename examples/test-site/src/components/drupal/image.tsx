import { graphql } from 'gatsby';
import { useDrupalNode } from './DrupalDataProvider';

const ImageMeta = `
  interface ImageMeta {
    alt: String
    title: String
    width: Int
    height: Int
  }
`;
const interfaces = { ImageMeta };

export const getSchemaCustomizations = () => ({ interfaces });

export const fragments = graphql`
  fragment ImageMeta on ImageMeta {
    alt
  }
  
  fragment ImageData on file__file {
    localFile {
      publicURL
    }
  }
`;

const useDrupalData = (drupalFieldName: string) => {
  const drupalNode = useDrupalNode();
  return {
    src: drupalNode.relationships[drupalFieldName].localFile.publicURL,
    alt: drupalNode[drupalFieldName].alt,
  };
};

export default useDrupalData;
