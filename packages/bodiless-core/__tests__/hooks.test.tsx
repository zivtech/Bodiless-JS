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
import { shallow } from 'enzyme';
import { useContextActivator } from '../src/hooks';
import PageEditContext from '../src/PageEditContext';
import { useEditContext } from '../lib';

const TestComponent = ({ element: Element, event, handler }: any) => (
  <Element {...useContextActivator(event, handler)}>Foo!</Element>
);

// TODO: We should have reusable mocks for events.
const event = {
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
};

const getMockContext = (isInnermost: boolean) => {
  const context = new PageEditContext();
  Object.defineProperty(context, 'isEdit', { value: true });
  Object.defineProperty(context, 'activate', { value: jest.fn() });
  Object.defineProperty(context, 'isInnermost', { value: isInnermost });
  return context;
};

describe('useContextActivator', () => {
  beforeEach(() => {
    jest.spyOn(PageEditContext.prototype, 'activate');
    // jest.spyOn(PageEditContext.prototype, 'isInnermost', 'get').mockImplementation(() => false);
    jest.spyOn(PageEditContext.prototype, 'isEdit', 'get').mockImplementation(() => true);
  });

  afterEach(() => {
    (PageEditContext.prototype.activate as any).mockRestore();
    // (PageEditContext.prototype.isInnermost as any).mockRestore();
    (PageEditContext.prototype.isEdit as any).get.mockRestore();
  });

  it('creates an activator for a mouseover event', () => {
    const conditions = {
      event: 'onMouseOver',
      trigger: 'mouseover',
      element: 'span',
    };
    const wrapper =shallow(<TestComponent {...conditions} />);
    wrapper.simulate(conditions.trigger, event);
    expect(PageEditContext.prototype.activate).toHaveBeenCalledTimes(1);
  });

  it('invokes a passed handler', () => {
    const handler = jest.fn();
    const wrapper = shallow(
      <TestComponent handler={handler} event="onClick" element="div" />
    );
    wrapper.simulate('click', event);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(PageEditContext.prototype.activate).toHaveBeenCalledTimes(1);
  });
});
