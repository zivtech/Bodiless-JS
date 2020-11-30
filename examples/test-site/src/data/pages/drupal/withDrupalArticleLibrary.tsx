import React from 'react';
import {
  useNode, ContentNode, withNode, withNodeKey, WithNodeKeyProps, useMenuOptionUI,
} from '@bodiless/core';
import { flow } from 'lodash';
import { withContentLibrary, withUpdateButton } from '@bodiless/layouts';
import { ComponentSelector } from '@bodiless/layouts-ui';
import withDrupalArticleData from '../../../components/drupal/data/article/withDrupalData';
import type { ArticleMetadata } from '../../../components/drupal/data/article/withDrupalData';

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

const useLinkedLibraryNode = () => {
  const { node: targetNode } = useNode<any>();
  const { node: libraryNode } = useLibraryNode();
  const { id } = targetNode.data;
  return {
    node: id && libraryNode.child<ArticleMetadata>(id),
  };
};

const useLInkedNodes = () => ({
  targetNode: useNode<ArticleMetadata>().node,
  libraryNode: useLinkedLibraryNode().node,
});

const useFormOptions = () => {
  const { libraryNode, targetNode } = useLInkedNodes();
  const renderForm = () => {
    const {
      ComponentFormFieldWrapper, ComponentFormFieldTitle, ComponentFormDescription,
    } = useMenuOptionUI();
    const renderNode = (node: ContentNode<ArticleMetadata>|undefined, title: string) => (
      <ComponentFormFieldWrapper key={title}>
        <ComponentFormFieldTitle>{title}</ComponentFormFieldTitle>
        <ComponentFormDescription>
          {node?.data.revisionId
            ? `Revision ${node.data.revisionId}, ${node.data.updateTime}`
            : 'Not available'}
        </ComponentFormDescription>
      </ComponentFormFieldWrapper>
    );
    return (
      <>
        {renderNode(targetNode, 'Current')}
        {renderNode(libraryNode, 'Original')}
      </>
    );
  };
  const hasSubmit = libraryNode && libraryNode.data.revisionId !== targetNode.data.revisionId;
  return {
    renderForm,
    hasSubmit,
  };
};

const updateOptions = {
  useOverrides,
  useFormOptions,
  useLibraryNode: useLinkedLibraryNode,
  peer: true,
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
  withUpdateButton(updateOptions),
  withContentLibrary(options),
  withNode,
  withNodeKey(nodeKey),
  withDrupalArticleData(LIBRARY_NODEKEY),
);

export default withDrupalArticleLibrary;
