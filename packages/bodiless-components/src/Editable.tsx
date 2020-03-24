/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ComponentType as CT } from 'react';
import { flow } from 'lodash';
import {
  withNode,
  withNodeKey,
  withChild,
} from '@bodiless/core';
import EditableNode from './EditableNode.dev';
import './Editable.css';

const Editable = withNode(
  (props: any) => <EditableNode {...props} />,
);
const withPlaceholder = <P extends object> (placeholder?: string) => (Component:CT<P> | string) => {
  const WithPlaceholder = placeholder
    ? (props:P) => <Component placeholder={placeholder} {...props} />
    : (props:P) => <Component {...props} />;
  return WithPlaceholder;
};

const asEditable = (nodeKey?: string, placeholder?: string) => (
  withChild(
    flow(
      withNodeKey(nodeKey),
      withPlaceholder(placeholder),
    )(Editable),
  )
);
export default Editable;
export {
  withPlaceholder,
  asEditable,
};
