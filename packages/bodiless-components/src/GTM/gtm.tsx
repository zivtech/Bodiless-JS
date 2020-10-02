// @ts-nocheck
/**
 * Copyright © 2020 Johnson & Johnson
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

import React, { ComponentType as CT, PropsWithChildren } from 'react';
import { stripIndent } from 'common-tags';
import { FieldProps } from 'informed';
import { HelmetProps } from 'react-helmet';
import { withHeadElement } from '../Meta/Meta';

// type GtmEventData = {
//   content: string;
// };
//
// type GtmDefaultPageData = {
//   event: string;
//   page: object;
// };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateDataLayer = (dataLayer: any, dataLayerName: string) => {
  let result = `window.${dataLayerName} = window.${dataLayerName} || [];`;

  if (dataLayer !== undefined) {
    result += `window.${dataLayerName}.push(${JSON.stringify(dataLayer)});`;
  }

  return stripIndent`${result}`;
};

// const tagManagerEnabled = (process.env.GOOGLE_TAGMANAGER_ENABLED || '1') === '1';
// const withEvent = (
//   dataLayerName: string,
//   defaultPageData: GtmDefaultPageData,
//   nodeKey: string,
//   nodeCollection: string,
// ) => (HelmetComponent: CT) => (props: any) => {
//   // @todo: fixme condition for testing.
//   if ((process.env.NODE_ENV === 'production' && tagManagerEnabled) || 1) {
//     const { children, ...rest } = props;
//     const { node } = useNode(nodeCollection);
//     const { data } = node.child<GtmEventData>(nodeKey);
//     const merged = _.merge({}, defaultPageData, data);
//     return (
//       <HelmetComponent {...rest}>
//         {children}
//         <script>{generateDataLayer(merged, dataLayerName)}</script>
//       </HelmetComponent>
//     );
//   }
//   return <></>;
// };

type BaseProps = PropsWithChildren<HelmetProps>;
type Data = {
  content: string;
};
type Props = BaseProps & Data;

type BasicOptions = {
  name: string;
};

type Options = {
  label: string;
  useFormElement?: () => CT<FieldProps<any, any>>,
  placeholder?: string;
} & BasicOptions;

const withDataLayer$ = (options: Options) => (
  HelmetComponent: CT<BaseProps>,
) => ({ children, content, ...rest }: Props) => {
  console.log('options', options);
  console.log('content', content);
  return (
    <HelmetComponent {...rest}>
      {children}
      <script>
        {content}
      </script>
    </HelmetComponent>
  );
};

const withDataLayer = withHeadElement(withDataLayer$);

export default withDataLayer;
