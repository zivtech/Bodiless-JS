/* eslint-disable no-underscore-dangle */
import { graphql } from 'gatsby';
import { useDrupalNode } from '../../DrupalDataProvider';

export const fragment = graphql`
  fragment DrupalParagraph on Paragraph {
    __typename
    id
  }
`;

const useDrupalData = (drupalField: string) => {
  const drupalNode = useDrupalNode();
  const items = drupalNode.relationships[drupalField].reduce(
    (acc: any, item: any) => [
      ...acc,
      { uuid: item.id, type: item.__typename },
    ],
    [],
  );
  return { items };
};

export default useDrupalData;
