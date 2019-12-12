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

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { ComponentType, FC, HTMLProps } from 'react';
import { flow, flowRight } from 'lodash';

type HOC = <P extends object>(C: ComponentType<P>) => ComponentType<P>;
type FooProps = {
  id: string,
};

const Foo = ({ id }: FooProps) => <span>{id}</span>;

const hoc1 = <P extends object>(Component: ComponentType<P> | string) => (
  (props: P) => <Component {...props} />
);

const hoc1x = <P extends object>(Component: ComponentType<P> | string) => (
  (props: P) => <Component {...props} />
);
hoc1x.foo = 'bar';

const hoc2: HOC = <P extends object>(Component: ComponentType<P> | string) => (
  (props: P) => <Component {...props} />
);

const TF1 = flow(hoc1, hoc2)(Foo);
const Test = <TF1 id="foo" />;

const TF5 = flow(hoc1x as HOC, hoc2)(Foo);
const Test5 = <TF5 id="foo" />;

// The following generates an error
// const TF6 = flow(hoc1x, hoc2)(Foo);
// const Test6 = <TF6 id="foo" />;

describe('tsflow problem', () => {
  it('happens', () => {});
});
