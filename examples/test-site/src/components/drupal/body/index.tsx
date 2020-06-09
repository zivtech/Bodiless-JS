import { graphql } from 'gatsby';
import { useDrupalNode } from '../DrupalDataProvider';

export const fragments = graphql`
  fragment DrupalMarkdownField on MarkdownField {
    value
  }
  fragment DrupalMarkdownBody on HasMarkdownBody {
    body {
      value
    }
  }
`;

const useDrupalData = () => {
  const drupalNode = useDrupalNode();
  return {
    source: drupalNode.body.value,
  };
};

export default useDrupalData;
