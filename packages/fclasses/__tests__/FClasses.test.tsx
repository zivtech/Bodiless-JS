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
import { shallow, mount } from 'enzyme';
import React, { HTMLProps } from 'react';
import { flow } from 'lodash';

import {
  addClasses,
  removeClasses,
  stylable,
} from '../src/FClasses';

const Span = stylable<HTMLProps<HTMLSpanElement>>('span');
const normalize = (className?: string) => (className ? className.split(' ').sort().join(' ') : undefined);

describe('stylable', () => {
  it('passes through props', () => {
    const wrapper = shallow(<Span id="foo" className="bar">baz</Span>);
    expect(wrapper.prop('id')).toBe('foo');
    expect(wrapper.prop('className')).toBe('bar');
    expect(wrapper.children().text()).toBe('baz');
  });

  it('does not pass the fClasses prop', () => {
    const wrapper = shallow(<Span fClasses={{}} />);
    expect(wrapper.prop('fClasses')).toBeUndefined();
  });
});

describe('Simple FClasses', () => {
  it('preserves classes passed via className', () => {
    const BigSpan = addClasses('text-xl').removeClasses('bg-yellow')(Span);
    const wrapper = mount(<BigSpan id="foo" className="text-blue bg-yellow" />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe(normalize('text-blue bg-yellow text-xl'));
  });

  it('allows chaining', () => {
    const BlueSpan = addClasses('text-blue bg-black')(Span);
    let wrapper = mount(<BlueSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe('bg-black text-blue');
    let TestSpan = removeClasses().addClasses('text-red')(BlueSpan);
    wrapper = mount(<TestSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe('text-red');
    TestSpan = addClasses('text-red').removeClasses()(BlueSpan);
    wrapper = mount(<TestSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe('text-red');
    TestSpan = addClasses('text-red').removeClasses('text-blue')(BlueSpan);
    wrapper = mount(<TestSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe('bg-black text-red');
    TestSpan = removeClasses('text-blue').addClasses('text-red')(BlueSpan);
    wrapper = mount(<TestSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe('bg-black text-red');
  });

  it('works', () => {
    const BlueSpan = addClasses('text-blue')(Span);
    const BigBlueSpan = addClasses('text-xl')(BlueSpan);
    const BigRedSpan = flow(
      addClasses('text-red'),
      removeClasses('text-blue'),
    )(BigBlueSpan);
    const PlainSpan = removeClasses()(BigRedSpan);
    const GreenSpan = flow(
      removeClasses(),
      addClasses('text-green'),
    )(BigRedSpan);

    let wrapper = mount(<BlueSpan />);
    expect(wrapper.find('span').prop('className')).toBe('text-blue');
    wrapper = mount(<BigBlueSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe(normalize('text-blue text-xl'));
    wrapper = mount(<BigRedSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe(normalize('text-red text-xl'));
    wrapper = mount(<PlainSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBeUndefined();
    wrapper = mount(<GreenSpan />);
    expect(normalize(wrapper.find('span').prop('className'))).toBe('text-green');
  });
});
