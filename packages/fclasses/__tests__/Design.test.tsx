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
import React, { ComponentType, FC } from 'react';

import {
  withDesign,
  DesignableProps,
  Design,
} from '../src/Design';

type SpanType = ComponentType<any>;
type MyDesignableComponents = {
  foo: SpanType,
  bar: SpanType,
  baz: SpanType,
};
type MyDesign = Design<MyDesignableComponents>;

const Span: SpanType = props => <span {...props} />;
const hoc = (newClassName: string) => (C: SpanType):SpanType => props => {
  const { className, ...rest } = props;
  const combinedClassName = newClassName + (className || '');
  return <C className={combinedClassName} {...rest} />;
};
const DesignPrinter: FC<DesignableProps<MyDesignableComponents>> = ({ design }) => {
  const components = {
    foo: Span as SpanType,
    bar: Span as SpanType,
    baz: Span as SpanType,
  };
  if (design) {
    if (design.foo) {
      components.foo = design.foo(components.foo);
    }
    if (design.bar) {
      components.bar = design.bar(components.bar);
    }
    if (design.baz) {
      components.baz = design.baz(components.baz);
    }
  }
  const Foo = components.foo;
  const Bar = components.bar;
  const Baz = components.baz;
  return (
    <div>
      <Foo id="foo" />
      <Bar id="bar" />
      <Baz id="baz" />
    </div>
  );
};

describe('withDesign', () => {
  it('applies a design correctly', () => {
    const inner: MyDesign = {
      foo: hoc('innerA'),
      bar: hoc('innerB'),
    };
    const outer: MyDesign = {
      foo: hoc('outerC'),
      bar: hoc('outerD'),
      baz: hoc('outerE'),
    };
    const Test = withDesign(inner)(DesignPrinter);
    const wrapper = mount(<Test />);
    expect(wrapper.find('#foo').last().props().className).toBe('innerA');
    expect(wrapper.find('#bar').last().props().className).toBe('innerB');
    const Test1 = withDesign(outer)(Test);
    const wrapper1 = mount(<Test1 />);
    // have to use last() because each hoc adds a component that is found
    expect(wrapper1.find('#foo').last().props().className).toBe('innerAouterC');
    expect(wrapper1.find('#bar').last().props().className).toBe('innerBouterD');
    expect(wrapper1.find('#baz').last().props().className).toBe('outerE');
  });
});
