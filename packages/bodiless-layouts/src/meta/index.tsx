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
import {
  mergeWith,
  isArray,
  flow,
} from 'lodash';

type MetaCategory = {
  [cat:string]: string[],
};
type WithMeta = {
  title?: string,
  displayName?: string,
  description?: string,
  categories?: MetaCategory,
};
type CTWM = CT & WithMeta;
export type HOC = (Component:CTWM) => CTWM;

function customizer(objValue:any, srcValue:any) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
  return undefined;
}
const asPassThough = (Component:CTWM) => Component;
/**
 * Creates an HOC use it to attach meta data in an hoc.
 * @param Component The component to wrap.
 */
const withOutMeta = <P extends Object> (Component:CTWM) => (props:P) => (<Component {...props} />);
/**
 * withMeta creates an HOC that will add meta data to a React Component
 * @param meta the data to be side loaded in to the component
 */
const withMeta = (meta:Object) => (Component:CTWM) => {
  const newMeta = mergeWith({}, Component, meta, customizer);
  return Object.assign(withOutMeta(Component), newMeta);
};
/**
 * with Title returns an HOC that sideloads a title to a component
 * @param title The title to be added
 */
const withTitle = (title: string) => (Component: CTWM) => (
  withMeta({ title })(Component)
);
/**
 * withAppendTitle returns an HOC that appends to the sideload title of the component
 * Note it appends to the title with a space.
 * @param title The title to be appended
 */
const withAppendTitle = (newTitle: string) => (Component: CTWM) => {
  const { title } = Component;
  if (title) {
    return withTitle(`${title} ${newTitle}`)(Component);
  }
  return withTitle(newTitle)(Component);
};
/**
 * withDisplayName returns an HOC that sideloads a displayName to a component
 * @param displayName The displayName to be added
 */
const withDisplayName = (displayName: string) => (Component: CTWM) => (
  withMeta({ displayName })(Component)
);
/**
 * withAppendDisplayName returns a HOC that appends a name to the sideloaded DisplayName
 * @param newDisplayName the Display name to append
 */
const withAppendDisplayName = (newDisplayName: string) => (Component: CTWM) => {
  const { displayName } = Component;
  if (displayName) {
    return withDisplayName(displayName + newDisplayName)(Component);
  }
  return withDisplayName(newDisplayName)(Component);
};
/**
 * withDesc returns an HOC that sideloads the provided discription to the component.
 * @param description the discription to add
 */
const withDesc = (description: string) => (Component: CTWM):CTWM => (
  withMeta({ description })(Component)
);
/**
 * withAppendDesc returns an HOC that appends a description to the component sideload description.
 * @param newDescription the description to be appened
 */
const withAppendDesc = (newDescription: string) => (Component: CTWM):CTWM => {
  const description = Component.description
    ? Component.description + newDescription
    : newDescription;
  return withDesc(description)(Component);
};
/**
 * withTerm returns a function that then takes a term and that returns an HOC that side loads
 * the category and term on to the component.
 * @param cat that category to use in adding a term
 * @param term the term to add
 */
const withTerm = (cat: string) => (term: string) => (Component: CTWM):CTWM => (
  withMeta({ categories: { [cat]: [term] } })(Component)
);
/**
 * preserveMeta returns takes an hoc and returns another one that will apply the hoc but preserve
 * theMeta data from the component.
 * @param hoc the hoc to wrap.
 */
const perserveMeta = (hoc:HOC) => (Component:CTWM):CTWM => (
  withMeta(Component)(hoc(Component))
);

type Varientor = (rootHocs: HOC[]) => HOC[];
/**
 * Creates a Varientor that will just apply all of the hocs to each root Item
 * @param hocs: the HOC that are to be append to all of the rootItems
 * @return: a Varientor that will add all of the hoc to each root
 */
const addToAll = (...hocs: HOC[]): Varientor => rootHocs => (
  rootHocs.length === 0
    ? [flow(...hocs)]
    : rootHocs.map(root => flow(...hocs, root))
);
/**
 * permute create a Varientor that will martix the Varients with the root Hocs.
 * @param varients: an array of hoc that we want to vary or root HOCs
 * @return: a Varientor that will create new varients for each varient HOC for each Root HOC.
 */
const permute = (...varients: HOC[]): Varientor => rootHocs => (
  rootHocs.length === 0
    ? varients
    : rootHocs
      .map(hoc => [...varients.map(v => flow(hoc, v))])
      .reduce((acc, hocArray) => [...acc, ...hocArray])
);
/**
 * withFacet is expect to be passed to an on function and takes a term and and hoc (using curring)
 *  and returns a Varient that can be used in the on function
 * @param cat Category that the Component will be apart
 * @param term the Term in the Category associated with the Component
 * @param hocs the HOC to apply to the Component
 */
const withFacet = (cat: string) => (term: string) => (...hocs: HOC[]) => flow(
  perserveMeta(flow(...hocs)),
  withTerm(cat)(term),
  withAppendDisplayName(term.replace(/ /, '')),
  withAppendTitle(term),
  withAppendDesc(`${cat}: ${term}\n`),
);
/**
 * witVariations takes a number of Varientor executes them to get variations and uses them to
 * create new compoents based on the Base component.
 * @param varientors: The Varientors to apply to get our Components
 * @param Base: The base component to use in generation
 * @return: An array of Components generated from the Variations
 */
const vary = (...varientors: Varientor[]) => (Base: CTWM) => (
  flow(varientors)([]).map((hoc: HOC) => hoc(Base))
);
/**
 * asObject takes a array of components and returns them as an object keyed by there displayname.
 * @param Components the array to convert.
 */
const asObject = (Components: CTWM[]) => (
  Components.reduce(
    (acc, Component) => (
      { ...acc, [Component.displayName as string]: Component }
    ),
    {},
  )
);
export {
  withMeta,
  withTitle,
  withDisplayName,
  withTerm,
  withAppendTitle,
  withAppendDisplayName,
  withDesc,
  withAppendDesc,
  perserveMeta,
  asPassThough,
  vary,
  permute,
  asObject,
  addToAll,
  withFacet,
};
