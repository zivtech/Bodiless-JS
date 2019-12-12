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
import { mount } from 'enzyme';
import React, { ComponentType, HTMLProps, FC } from 'react';

import {
  withDesign,
  Props as DesignableProps,
} from '../src/Design';

type SpanType = ComponentType<HTMLProps<HTMLSpanElement>> | string;

type MyDesign = {
  foo?: (c: SpanType) => SpanType,
  bar?: (c: SpanType) => SpanType,
  baz?: (c: SpanType) => SpanType,
}

const DesignPrinter: FC<DesignableProps> = ({ design }) => {
  if (!design) return <div>No design</div>;
  const msg = Object.keys(design).map(k => (
    <span id={k} key={k} className={design[k]!('grist').toString()} />
  ));
  return <div>{msg}</div>;
};

describe('withDesign', () => {
  it('applies a design correctly', () => {
    const inner: MyDesign = {
      foo: (x: SpanType): SpanType => `${x}-inner`,
      bar: (x: SpanType): SpanType => `${x}-inner`,
    };
    const outer: MyDesign = {
      foo: (x: SpanType): SpanType => `outer-${x}`,
      bar: (x: SpanType): SpanType => `${x}-outer`,
      baz: (x: SpanType): SpanType => `${x}-outer`,
    };
    const Test = withDesign(inner)(DesignPrinter);
    const wrapper = mount(<Test />);
    expect(wrapper.find('#foo').prop('className')).toBe('grist-inner');
    expect(wrapper.find('#bar').prop('className')).toBe('grist-inner');
    const Test1 = withDesign(outer)(Test);
    const wrapper1 = mount(<Test1 />);
    expect(wrapper1.find('#foo').prop('className')).toBe('outer-grist-inner');
    expect(wrapper1.find('#bar').prop('className')).toBe('grist-inner-outer');
    expect(wrapper1.find('#baz').prop('className')).toBe('grist-outer');
  });
});
