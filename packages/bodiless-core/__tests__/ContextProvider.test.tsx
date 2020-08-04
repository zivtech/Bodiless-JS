/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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

import React, {
  useMemo, useEffect, FC, useState, useCallback,
} from 'react';
import { shallow, mount, ReactWrapper } from 'enzyme';
import { observer } from 'mobx-react-lite';
import PageContextProvider, { withMenuOptions, useRegisterMenuOptions } from '../src/PageContextProvider';
import { useEditContext } from '../src/hooks';
import { PageEditContextInterface } from '../src/PageEditContext/types';
import PageEditContext, { useApi, defaultStore } from '../src/PageEditContext';
import { TMenuOption } from '../src/Types/ContextMenuTypes';

const menuRendered = jest.fn();
const Menu = observer(() => {
  menuRendered();
  const items = useApi().contextMenuOptions.map(
    option => <span id={option.name} key={option.name}>{option.name}</span>,
  );
  return (
    <>
      {items}
    </>
  );
});

const activatorFired = jest.fn();
const Activator: FC = ({ children }) => {
  const context = useEditContext();
  const onClick = useCallback(() => {
    context.activate();
    activatorFired();
  }, [context]);
  return (
    <div id="activate" onClick={onClick}>
      {children}
    </div>
  );
};

const foobarRendered = jest.fn();
const FooBar: FC<any> = ({
  children, foo, bar, peer,
}) => {
  foobarRendered();
  const options$: TMenuOption[] = [];
  if (foo) {
    options$.push({
      name: 'foo',
      label: foo,
    });
  }
  if (bar) {
    options$.push({
      name: 'bar',
      label: bar,
    });
  }
  const options = useMemo(() => options$, [foo, bar]);
  const props = {
    getMenuOptions: () => options,
    name: 'FooBar',
  };

  if (peer) {
    useRegisterMenuOptions(props);
    return null;
  }
  return (
    <PageContextProvider {...props}>
      {children}
    </PageContextProvider>
  );
};

const ListenerTest = (props: any) => (
  <>
    <FooBar {...props}>
      <Activator />
    </FooBar>
    <Menu />
  </>
);

const RemoveTest = ({ baz, peer, ...rest }: any) => (
  baz
    ? <Baz peer={peer}><ListenerTest peer={peer} {...rest} /></Baz>
    : <ListenerTest peer={peer} {...rest} />
);

const bazRendered = jest.fn();
const Baz: FC<any> = ({ children, peer }) => {
  bazRendered();
  const options$ = [{
    name: 'baz',
  }];
  const options = useMemo(() => options$, []);
  const props = {
    getMenuOptions: () => options,
    name: 'Baz',
  };
  if (peer) {
    useRegisterMenuOptions(props);
    return <>{children}</>;
  }
  return (
    <PageContextProvider {...props}>
      {children}
    </PageContextProvider>
  );
};

describe('withMenuOptions', () => {
  type Props = {
    foo: string;
  };

  // A menu option getter creator which uses values from
  // both props and context to define menu options.
  const useGetMenuOptions = (
    { foo }: Props,
    { id }: PageEditContextInterface,
  ) => () => [
    {
      name: foo,
      icon: id,
      isActive: () => true,
      handler: () => undefined,
    },
  ];

  const WrappedComponent = ({ foo }: Props) => <span>{foo}</span>;

  const Test = withMenuOptions({ useGetMenuOptions })(WrappedComponent);

  it('passes props and context correctly to the getMenuOptions creator', () => {
    const ShowContextId = () => <span>{useEditContext().id}</span>;
    const originalId = shallow(<ShowContextId />).prop('children');
    const foo = Math.random().toString();
    const wrapper = shallow(<Test foo={foo} />);
    const options = wrapper.prop('getMenuOptions')();
    expect(options.length).toBe(1);
    expect(options[0].name).toBe(foo);
    expect(options[0].icon).toBe(originalId);
  });

  it('passes props correctly to the wrapped component', () => {
    const foo = Math.random().toString();
    const wrapper = shallow(<Test foo={foo} />);
    const wrapped = wrapper.find(WrappedComponent);
    expect(wrapped.prop('foo')).toBe(foo);
  });
});

describe('ContextProvider', () => {
  describe('Adding and removing menu options', () => {
    let wrapper: ReactWrapper<any>;

    beforeEach(() => {
      defaultStore.reset();
      foobarRendered.mockClear();
      activatorFired.mockClear();
      menuRendered.mockClear();
    });

    afterEach(() => {
      // Unmount our listener components or they will continue to fire irrelevantly.
      if (wrapper.length) wrapper.unmount();
    });

    it('Re-renders a listener when options change', () => {
      wrapper = mount(<ListenerTest foo="fiddle" />);
      wrapper.find('div#activate').simulate('click');
      expect(foobarRendered).toHaveBeenCalledTimes(1);
      expect(menuRendered).toHaveBeenCalledTimes(2);
      expect(activatorFired).toHaveBeenCalledTimes(1);
      wrapper.setProps({ foo: 'fuddle' });
      expect(foobarRendered).toHaveBeenCalledTimes(2);
      expect(menuRendered).toHaveBeenCalledTimes(3);
      expect(activatorFired).toHaveBeenCalledTimes(1);
    });

    it('Does not re-render a listener when options do not change', () => {
      wrapper = mount(<ListenerTest foo="fiddle" />);
      wrapper.find('div#activate').simulate('click');
      expect(foobarRendered).toHaveBeenCalledTimes(1);
      expect(menuRendered).toHaveBeenCalledTimes(2);
      expect(activatorFired).toHaveBeenCalledTimes(1);
      wrapper.setProps({ foo: 'fiddle', unusedProp: 'baz' });
      expect(foobarRendered).toHaveBeenCalledTimes(2);
      expect(activatorFired).toHaveBeenCalledTimes(1);
      expect(menuRendered).toHaveBeenCalledTimes(2);
    });
  

    it('removes options when a provider is removed', () => {
      wrapper = mount(<RemoveTest baz foo />);
      wrapper.find('div#activate').simulate('click');
      expect(wrapper.text()).toBe('bazfoo');
      wrapper.setProps({ baz: false });
      wrapper.find('div#activate').simulate('click');
      wrapper.update();
      console.log(wrapper.debug());
      expect(wrapper.text()).toBe('foo');
    });
  });

  it('adds correct value prop and children to the context provider', () => {
    const option = {
      name: Math.random().toString(),
      icon: 'icon',
    };
    const getMenuOptions = () => [option];
    const name = Math.random().toString();
    const id = Math.random().toString();
    const children = Math.random().toString();
    const wrapper = shallow(
      <PageContextProvider getMenuOptions={getMenuOptions} name={name} id={id}>
        {children}
      </PageContextProvider>,
    );
    const value = wrapper.prop('value');
    expect(value.getMenuOptions().length).toBe(1);
    expect(value.getMenuOptions()[0].name).toBe(option.name);
    expect(value.name).toBe(name);
    expect(value.id).toBe(id);
    expect(wrapper.html()).toBe(children);
  });

  it('adds a new id if one is not provided', () => {
    const getMenuOptions = () => [];
    const ShowContextId = () => <span>{useEditContext().id}</span>;
    const originalId = shallow(<ShowContextId />).prop('children');
    const wrapper = shallow(
      <PageContextProvider getMenuOptions={getMenuOptions}>
        foo
      </PageContextProvider>,
    );
    const newId = wrapper.prop('value').id;
    expect(newId).not.toBe(originalId);
  });

  it('creates an id that persists across re-renders', () => {
    const ShowContextId = () => <span>{useEditContext().id}</span>;
    // Need to use mount in order for persistence hooks to function correctly
    // See https://github.com/airbnb/enzyme/issues/1938
    const wrapper = mount(
      <PageContextProvider getMenuOptions={() => []}>
        <ShowContextId />
      </PageContextProvider>,
    );
    const firstId = wrapper.find('span').text();
    wrapper.setProps({ name: 'foo' });
    const secondId = wrapper.find('span').text();
    expect(firstId).toBe(secondId);
  });
});

describe('useRegisterMenuOptions', () => {
  let wrapper: ReactWrapper<any>;

  beforeEach(() => {
    defaultStore.reset();
    PageEditContext.root.unregisterPeers();
  });

  afterEach(() => {
    if (wrapper.length) wrapper.unmount();
  });

  it('registers root menu options correctly to the root context', () => {
    wrapper = mount(<ListenerTest foo bar peer />);
    expect(wrapper.text()).toBe('foobar');
  });

  it('Re-renders menu options when they change', () => {
    wrapper = mount(<ListenerTest foo peer />);
    expect(wrapper.text()).toBe('foo');
    wrapper.setProps({ bar: true });
    wrapper.update();
    expect(wrapper.text()).toBe('foobar');
  });

  it.only('Does not re-render a listener when options do not change', () => {
    wrapper = mount(<ListenerTest foo peer />);
    expect(foobarRendered).toHaveBeenCalledTimes(1);
    expect(menuRendered).toHaveBeenCalledTimes(2);
    wrapper.setProps({ foo: true, peer: true, unusedProp: 'baz' });
    expect(foobarRendered).toHaveBeenCalledTimes(2);
    expect(menuRendered).toHaveBeenCalledTimes(2);
  });

  it('Deletes menu options when the component providign them is removed', () => {
    wrapper = mount(<RemoveTest baz foo peer />);
    console.log(wrapper.debug());
    expect(wrapper.text()).toBe('bazfoo');
    wrapper.setProps({ baz: false, foo: true, peer: true });
    wrapper.update();
    console.log(wrapper.debug());
    expect(wrapper.text()).toBe('foo');

  });
});

describe.skip('React behavior', () => {
  it('runs effects in depth order', () => {
    const A = ({ children }: any) => {
      console.log('render a');
      useEffect(() => console.log('effect a'));
      return <>{children}</>;
    };
    const B = ({ children }: any) => {
      console.log('render b');
      useEffect(() => console.log('b'));
      return <>{children}</>;
    };
    mount(<A><B /></A>);
  });
});

describe.skip('Enzyme behavior', () => {
  it('requires an update() call to update wrapper changed on effect', () => {
    const ToggleBOnEffect: FC<any> = ({ setShowB }) => {
      useEffect(() => {
        setShowB(true);
      });
      return null;
    };
    const RenderAorB: FC<any> = ({ showB }) => (
      <span>{showB ? 'B' : 'A'}</span>
    );

    const Wrapper: FC<any> = ({ withB }) => {
      const [showB, setShowB] = useState<boolean>(false);
      return (
        <>
          <RenderAorB showB={showB} />
          {withB && <ToggleBOnEffect setShowB={setShowB} />}
        </>
      );
    };
    const wrapper = mount(<Wrapper />);
    expect(wrapper.text()).toBe('A');
    wrapper.setProps({ withB: true });
    console.log(wrapper.find('span').text());
    console.log(wrapper.find('span').debug());
    // expect(wrapper.text()).toBe('A');
    // console.log(wrapper.debug());
    // console.log(wrapper.debug());
    // console.log(wrapper.text());
    wrapper.update();
    // expect(wrapper.text()).toBe('B');
  });
});
