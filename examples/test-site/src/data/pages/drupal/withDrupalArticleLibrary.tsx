import React from 'react';
import {
  useNode, ContentNode, withNode, withNodeKey, WithNodeKeyProps,
} from '@bodiless/core';
import { flow } from 'lodash';
import { withContentLibrary } from '@bodiless/layouts';
import { ComponentSelector } from '@bodiless/layouts-ui';
import withDrupalArticleData from '../../../components/drupal/data/article/withDrupalData';

const LIBRARY_NODEKEY = '___drupal';

const useLibraryNode = () => {
  const { node } = useNode();
  return { node: node.peer(`Page$${LIBRARY_NODEKEY}`) };
};

// We display nothing bc the title says it all
const ArticleDisplay = () => <></>;

const useOverrides = () => ({
  global: true,
  local: false,
  label: 'Drupal',
});

const useMeta = (node: ContentNode<any>) => {
  const titleNode = node.child<any>('title');
  const { data } = titleNode;
  return {
    title: data.text || 'No title',
    // @TODO Render subtitle markdown here?
    // description: data.subtitle || 'No subtitle',
  };
};

const options = {
  DisplayComponent: ArticleDisplay,
  Selector: ComponentSelector,
  useLibraryNode,
  useMeta,
  useOverrides,
  peer: true,
};

const withDrupalArticleLibrary = (nodeKey?: WithNodeKeyProps) => flow(
  withContentLibrary(options),
  withNode,
  withNodeKey(nodeKey),
  withDrupalArticleData(LIBRARY_NODEKEY),
);

export default withDrupalArticleLibrary;
