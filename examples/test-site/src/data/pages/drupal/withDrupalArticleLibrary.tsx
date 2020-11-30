import {
  withNode, withNodeKey, WithNodeKeyProps,
} from '@bodiless/core';
import { flow } from 'lodash';
import withDrupalArticleData from '../../../components/drupal/data/article/withDrupalData';

import withContentLibrary, { LIBRARY_NODEKEY } from './withContentLibrary';
import withUpdateButton, { withUpdateNotifier } from './withUpdateButton';

const withDrupalArticleLibrary = (nodeKey?: WithNodeKeyProps) => flow(
  withUpdateNotifier,
  withUpdateButton,
  withContentLibrary,
  withNode,
  withNodeKey(nodeKey),
  withDrupalArticleData(LIBRARY_NODEKEY),
);

export default withDrupalArticleLibrary;
