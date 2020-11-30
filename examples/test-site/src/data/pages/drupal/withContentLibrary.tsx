import React from 'react';
import { useNode, ContentNode } from '@bodiless/core';
import { withContentLibrary as withContentLibraryBase } from '@bodiless/layouts';
import { ComponentSelector } from '@bodiless/layouts-ui';
import { ArticleMetadata } from '../../../components/drupal/data/article/withDrupalData';

export const LIBRARY_NODEKEY = '___drupal';

export const useLibraryNode = () => {
  const { node } = useNode();
  return { node: node.peer(`Page$${LIBRARY_NODEKEY}`) };
};

// We display nothing bc the title says it all
const ArticleDisplay = () => <></>;

export const useOverrides = () => {
  const { node } = useNode<ArticleMetadata>();

  return {
    global: true,
    local: false,
    label: 'Drupal',
    isHidden: !!node.data.revisionId,
  };
};

const useMeta = (node: ContentNode<any>) => {
  const titleNode = node.child<any>('title');
  const { data } = titleNode;
  return {
    title: data.text || 'No title',
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

const withContentLibrary = withContentLibraryBase(options);

export default withContentLibrary;
