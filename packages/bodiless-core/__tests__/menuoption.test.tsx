import React, { useCallback, FC } from 'react';
// import { observable, action } from 'mobx';
import { observer } from 'mobx-react-lite';
import { mount } from 'enzyme';
import { withMenuOptions } from '../src/PageContextProvider';
import { useEditContext } from '../src/hooks';

describe('useMemo for getMenuOptions', () => {
  it('Children do not re-render on parent prop change', () => {
    const innerSpy = jest.fn();
    const Inner: FC<any> = ({ children }) => {
      innerSpy();
      return <span>{children}</span>;
    };
    const outerSpy = jest.fn();
    const Outer: FC<any> = ({ children }) => {
      outerSpy();
      return <span>{children}</span>;
    };

    const wrapper = mount((
      <Outer>
        <Inner />
      </Outer>
    ));
    expect(innerSpy).toBeCalledTimes(1);
    expect(outerSpy).toBeCalledTimes(1);
    wrapper.setProps({ foo: 'bar' });
    expect(outerSpy).toBeCalledTimes(2);
    expect(innerSpy).toBeCalledTimes(1);
  });

  it('Children do not re-render on parent prop change when parent provides options', () => {
    const innerSpy = jest.fn();
    const Inner: FC<any> = ({ children }) => {
      innerSpy();
      return <span>{children}</span>;
    };
    const outerSpy = jest.fn();
    const Outer$: FC<any> = ({ children }) => {
      outerSpy();
      return <span>{children}</span>;
    };
    const withOuterOptions = withMenuOptions({
      id: 'Outer',
      useGetMenuOptions: () => useCallback(() => [{ name: 'outer' }], []),
    });
    const Outer = withOuterOptions(Outer$);

    const wrapper = mount((
      <Outer>
        <Inner />
      </Outer>
    ));
    expect(innerSpy).toBeCalledTimes(1);
    expect(outerSpy).toBeCalledTimes(1);
    wrapper.setProps({ foo: 'bar' });
    expect(outerSpy).toBeCalledTimes(2);
    expect(innerSpy).toBeCalledTimes(1);
  });

  it('Subscribers to edit content do not re-render when parent with memoized options re-renders', () => {
    const innerSpy = jest.fn();
    const Inner: FC<any> = ({ children }) => {
      innerSpy();
      const { isEdit } = useEditContext();
      const className = isEdit ? 'foo' : undefined;
      return <span className={className}>{children}</span>;
    };
    const outerSpy = jest.fn();
    const Outer$: FC<any> = ({ children }) => {
      outerSpy();
      return <span>{children}</span>;
    };
    const withOuterOptions = withMenuOptions({
      id: 'Outer',
      useGetMenuOptions: () => useCallback(() => [{ name: 'outer' }], []),
    });
    const Outer = withOuterOptions(Outer$);

    const wrapper = mount((
      <Outer>
        <Inner />
      </Outer>
    ));
    expect(innerSpy).toBeCalledTimes(1);
    expect(outerSpy).toBeCalledTimes(1);
    wrapper.setProps({ foo: 'bar' });
    expect(outerSpy).toBeCalledTimes(2);
    expect(innerSpy).toBeCalledTimes(1);
  });

  it('Subscribers to edit content do re-render when parent changes memoized options', () => {
    const innerSpy = jest.fn();
    const Inner: FC<any> = ({ children }) => {
      innerSpy();
      const { isEdit } = useEditContext();
      const className = isEdit ? 'foo' : undefined;
      return <span className={className}>{children}</span>;
    };
    const outerSpy = jest.fn();
    const Outer$: FC<any> = ({ children }) => {
      outerSpy();
      return <span>{children}</span>;
    };
    const withOuterOptions = withMenuOptions({
      id: 'Outer',
      useGetMenuOptions: ({ foo }: any) => useCallback(() => [{ name: foo }], [foo]),
    });
    const Outer = withOuterOptions(Outer$);

    const wrapper = mount((
      <Outer>
        <Inner />
      </Outer>
    ));
    expect(innerSpy).toBeCalledTimes(1);
    expect(outerSpy).toBeCalledTimes(1);
    wrapper.setProps({ foo: 'bar' });
    expect(outerSpy).toBeCalledTimes(2);
    expect(innerSpy).toBeCalledTimes(2);
  });

  it('ways of memoizing getMenuOptions', () => {
    const Menu = observer(() => {
      const { contextMenuOptions } = useEditContext();
      const items = contextMenuOptions.map(option => (
        <span key={option.name}>{option.name}</span>
      ));
      return <>{items}</>;
    });
    const useGetMenuOptions = ({ foo }: any) => {
      const getMenuOptions = () => [{ name: foo }];
      return getMenuOptions;
    };
    const Provider = withMenuOptions({
      id: 'Provider',
      useGetMenuOptions,
    })('span');
    const Test = (props: any) => (
      <>
        <Provider {...props} />
        <Menu />
      </>
    );
    const wrapper = mount(<Test foo="bar" />);
    console.log(wrapper.text());
  });
});

// class Store {
//   // @ts-ignore
//   @observable foo = false;
//
//   // @ts-ignore
//   @action toggleFoo() { this.foo = !this.foo; }
// }
//
// const Outer = withMenuOptions(...)('span');
// const Inner = () => {
//   const { isEdit } = useEditContext();
//   doSomeExpensiveRenderingBasedOnIsEdit();
// }
// <Outer onMouseOver={doSomethingWhichChangesMenuOptions}>
//   <Inner />
// </Outer>
//
// describe('Not updating menu options', () => {
//   const store = new Store();
//   const withOptions = withMenuOptions({
//     name: 'Foo',
//     useGetMenuOptions: () => {
//       const getMenuOptions = useCallback(() => {
//         const options = store.foo ? [{ name: 'foo' }] : [];
//         return options;
//       }, []);
//       return getMenuOptions;
//     },
//   });
//   const ComponentWithOptions = withOptions('span');
// });
//
