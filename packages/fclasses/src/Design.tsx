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


// eslint-disable-next-line import/no-extraneous-dependencies
import { intersection, flowRight } from 'lodash';
import React, { ComponentType } from 'react';

export type Props = {
  design?: Design,
};

type CT<P> = ComponentType<P> | string;

export type DesignElement<P> = (c: ComponentType<P> | string) => ComponentType<P>;

export type Design = {
  [key: string]: ((a: CT<any>) => CT<any>) | undefined;
};

export type Designable = {
  [key: string]: CT<any>,
};
/**
 * is an HOC that will attach a displayName to an object
 * @param name the name of the displayName.
 */
const withDisplayName = <P extends Object> (name: string) => (Component: ComponentType<P>) => {
  const WithDisplayName = (props: P) => <Component {...props} />;
  WithDisplayName.displayName = name;
  return WithDisplayName;
};
export const applyDesign = (components: Designable) => (design?: Design) => {
  const incomingDesign = design || {};
  const keysToApply = intersection(Object.keys(components), Object.keys(incomingDesign));
  const appliedDesign = keysToApply.reduce(
    (acc, key) => ({ ...acc, [key]: incomingDesign[key]!(components[key]) }),
    {},
  );
  const unNamedComponents = { ...components, ...appliedDesign } as Designable;
  // Lets wrap the object so that we can name it after the key.
  if (!design) return { ...components };
  return Object.keys(unNamedComponents).reduce(
    (acc, name) => (
      { ...acc, [name]: withDisplayName(name)(unNamedComponents[name] as ComponentType) }
    ),
    {},
  );
};

export const withDesign = <P extends Props>(design: Design) => (
  (Component: ComponentType<P>) => {
    const WithDesign = (props: P) => {
      const { design: designFromProps } = props;
      let finalDesign: Design = design;
      if (designFromProps) {
        const keysToWrap = intersection(Object.keys(designFromProps), Object.keys(design));
        const wrappedDesign = keysToWrap.reduce(
          (acc, key) => ({ ...acc, [key]: flowRight(designFromProps[key]!, design[key]!) }),
          {},
        );
        finalDesign = { ...design, ...designFromProps, ...wrappedDesign };
      }
      return <Component {...props} design={finalDesign} />;
    };
    return WithDesign;
  }
);

export const replaceWith = <P extends object>(Component: CT<P>) => () => Component;
export const remove = <P extends React.HTMLAttributes<HTMLBaseElement>> () => (props:P) => {
  const { children } = props;
  return <React.Fragment>{children}</React.Fragment>;
};
