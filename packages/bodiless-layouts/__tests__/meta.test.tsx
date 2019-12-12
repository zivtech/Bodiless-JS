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

import React from 'react';
import {
  withTitle,
  withAppendTitle,
  withAppendDisplayName,
  withDisplayName,
  withDesc,
  withAppendDesc,
  withTerm,
  perserveMeta,
  permute,
  addToAll,
  withFacet,
} from '../lib/meta';

describe('withTitle', () => {
  it('add a title to the component', () => {
    const Comp = React.Fragment;
    expect(withTitle('title')(Comp).title).toBe('title');
  });
});
describe('withAppendTitle', () => {
  it('append more to the components Title', () => {
    const Comp = withTitle('title')(React.Fragment);

    expect(withAppendTitle('extra')(Comp).title).toBe('title extra');
  });
});
describe('withDisplayName', () => {
  it('add a displayName to the component', () => {
    const Comp = React.Fragment;
    expect(withDisplayName('title')(Comp).displayName).toBe('title');
  });
});
describe('withAppendDisplayName', () => {
  it('append more to the components DisplayName', () => {
    const Comp = withDisplayName('title')(React.Fragment);

    expect(withAppendDisplayName('extra')(Comp).displayName).toBe('titleextra');
  });
});
describe('withDesc', () => {
  it('add a description to the component', () => {
    const Comp = React.Fragment;
    expect(withDesc('title')(Comp).description).toBe('title');
  });
});
describe('withAppendDesc', () => {
  it('append more to the components Desc', () => {
    const Comp = withDesc('title')(React.Fragment);

    expect(withAppendDesc('extra')(Comp).description).toBe('titleextra');
  });
});
describe('withTerm', () => {
  it('adds a term to a category', () => {
    const Comp = React.Fragment;
    const NewComp = withTerm('cat')('term')(Comp);
    expect(NewComp.categories).toStrictEqual({ cat: ['term'] });
  });
  it('should add a second term if there is already one', () => {
    const StartComp = withTerm('cat')('term')(React.Fragment);
    const NewComp = withTerm('cat')('term2')(StartComp);
    expect(NewComp.categories).toStrictEqual({ cat: ['term', 'term2'] });
  });
  it('should run on the same component with no side effect', () => {
    const Comp = withTitle('title')(React.Fragment);
    const NewComp = withTerm('cat')('term')(Comp);
    const NewComp2 = withTerm('cat2')('term2')(Comp);
    expect(NewComp.categories).toStrictEqual({ cat: ['term'] });
    expect(NewComp2.categories).toStrictEqual({ cat2: ['term2'] });
  });
});
describe('perserveMeta', () => {
  it('if a hoc is wrapped in perserve meta the meta from before the hoc will be applied', () => {
    const Comp = withTitle('title')(React.Fragment);
    const HOC = (Component:React.ComponentType) => () => <Component />;
    const perservedHOC = perserveMeta(HOC);
    expect(perservedHOC(Comp).title).toBe('title');
  });
});
describe('permute', () => {
  it('Should create a varientor that with no agument returns the hoc it has', () => {
    const C = withTitle('title')(React.Fragment);
    const hocsGroup1 = [withTerm('a')('1'), withTerm('a')('2')];
    const varientor = permute(...hocsGroup1);
    const hocs = varientor([]);
    expect(hocs[0](C).categories).toStrictEqual({ a: ['1'] });
    expect(hocs[1](C).categories).toStrictEqual({ a: ['2'] });
  });
  it('should create a varientor that will martix its hoc with those pass to varientor ', () => {
    const C = withTitle('title')(React.Fragment);
    const hocsGroup1 = [withTerm('a')('1'), withTerm('a')('2')];
    const hocsGroup2 = [withTerm('b')('3'), withTerm('b')('4'), withTerm('b')('5')];
    const varientor = permute(...hocsGroup1);
    const hocs = varientor(hocsGroup2);
    expect(hocs[0](C).categories).toStrictEqual({ a: ['1'], b: ['3'] });
    expect(hocs[1](C).categories).toStrictEqual({ a: ['2'], b: ['3'] });
    expect(hocs[2](C).categories).toStrictEqual({ a: ['1'], b: ['4'] });
    expect(hocs[3](C).categories).toStrictEqual({ a: ['2'], b: ['4'] });
    expect(hocs[4](C).categories).toStrictEqual({ a: ['1'], b: ['5'] });
    expect(hocs[5](C).categories).toStrictEqual({ a: ['2'], b: ['5'] });
  });
});
describe('addToAll', () => {
  it('should return a varientor that adds its hocs to all of the one passed in', () => {
    const C = withTitle('title')(React.Fragment);
    const hocsGroup1 = [withTerm('a')('1'), withTerm('b')('2')];
    const hocsGroup2 = [withTerm('c')('3'), withTerm('c')('4')];
    const varientor = addToAll(...hocsGroup1);
    const hocs = varientor(hocsGroup2);
    expect(hocs[0](C).categories).toStrictEqual({ a: ['1'], b: ['2'], c: ['3'] });
    expect(hocs[1](C).categories).toStrictEqual({ a: ['1'], b: ['2'], c: ['4'] });
  });
});
describe('withFacet', () => {
  it('should set the cat and term', () => {
    const C = withTitle('title')(React.Fragment);
    const hoc = withFacet('cat')('term')();
    expect(hoc(C).categories).toStrictEqual({ cat: ['term'] });
  });
  it('should append to the title', () => {
    const C = withTitle('title')(React.Fragment);
    const hoc = withFacet('cat')('term')();
    expect(hoc(C).title).toBe('title term');
  });
  it('should append to the Description', () => {
    const C = withDesc('title\n')(React.Fragment);
    const hoc = withFacet('cat')('term')();
    expect(hoc(C).description).toBe('title\ncat: term\n');
  });
  it('should apply any hoc passed in and respect meta data added before it.', () => {
    const C = withTitle('title')(React.Fragment);
    const newHoc = <P extends object> (Component:React.ComponentType<P>) => {
      const B = (props:P) => <Component {...props} />;
      B.categories = { x: ['y'] };
      return B;
    };
    const hoc = withFacet('cat')('term')(newHoc);
    expect(hoc(C).categories).toStrictEqual({ x: ['y'], cat: ['term'] });
    expect(hoc(C).title).toBe('title term');
  });
});
