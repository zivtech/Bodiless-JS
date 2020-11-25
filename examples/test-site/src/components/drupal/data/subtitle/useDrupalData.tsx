import { graphql } from 'gatsby';
import { useDrupalNode } from '../../DrupalDataProvider';

export const fragments = graphql`
  fragment DrupalMarkdownSubtitle on HasMarkdownSubtitle {
    field_subtitle {
      value
    }
  }
`;

const useDrupalData = () => {
  const drupalNode = useDrupalNode();
  return {
    source: drupalNode.field_subtitle.value,
  };
};

export default useDrupalData;
