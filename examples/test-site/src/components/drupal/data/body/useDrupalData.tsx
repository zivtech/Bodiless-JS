import { graphql } from 'gatsby';
import { useDrupalNode } from '../../DrupalDataProvider';

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

const useDrupalData = (props: any) => {
  const drupalNode = useDrupalNode(props);
  return {
    source: drupalNode.body.value,
  };
};

export default useDrupalData;
