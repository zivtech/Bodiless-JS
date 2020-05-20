/**
 * @file
 * Integration tests for context menu forms.
 */
import React, { useState } from 'react';
import { mount, shallow } from 'enzyme';
import contextMenuForm, { ContextMenuForm, FormProps, FormBodyRenderer } from '../src/contextMenuForm';

describe('contextMenuForm', () => {
  it('Applies options as props to the innter ContextMenuForm', () => {
    const render = jest.fn();
    const submitValues = jest.fn();
    const initialValues = {
      foo: 'bar',
    };

    const Form = contextMenuForm({ submitValues, initialValues })(render);
    // @ts-ignore We're not providng all necessary props here.
    const wrapper = shallow(<Form />);
    wrapper.prop('children')();
    expect(render).toHaveBeenCalled();
    wrapper.prop('submitValues')();
    expect(submitValues).toHaveBeenCalled();
    expect(wrapper.prop('initialValues').foo).toBe('bar');
  });

  it('Allows options to be overridden', () => {
    const options = {
      children: jest.fn(),
      submitValues: jest.fn(),
      initialValues: {
        foo: 'bar',
      },
    };
    const props = {
      children: jest.fn(),
      submitValues: jest.fn(),
      initialValues: {
        foo: 'baz',
      },
    };

    const Form = contextMenuForm(options)(options.children);
    // @ts-ignore We're not providng all necessary props here.
    const wrapper = shallow(<Form {...props} />);
    wrapper.prop('children')();
    expect(props.children).toHaveBeenCalled();
    expect(options.children).not.toHaveBeenCalled();
    wrapper.prop('submitValues')();
    expect(props.submitValues).toHaveBeenCalled();
    expect(options.submitValues).not.toHaveBeenCalled();
    expect(wrapper.prop('initialValues').foo).toBe('baz');
  });
});

describe('ContextMenuForm', () => {
  describe('submitValues prop', () => {
    const submit = jest.fn();
    const close = jest.fn();
    const jsx = (
      <ContextMenuForm submitValues={submit} closeForm={close}>
        {() => <></>}
      </ContextMenuForm>
    );
    it('Closes the form when the submit handler returns nothing', () => {
      const wrapper = shallow(jsx);
      wrapper.prop('onSubmit')();
      expect(close).toHaveBeenCalled();
    });
    it('Does not close the form when the submit handler returns true', () => {
      submit.mockReturnValueOnce(true);
      close.mockReset();
      const wrapper = shallow(
        (<ContextMenuForm closeForm={close}>{() => <></>}</ContextMenuForm>),
      );
      wrapper.prop('onSubmit')();
      expect(close).toHaveBeenCalled();
    });
    it('Closes the form when no submit handler is provided', () => {
      close.mockReset();
      const wrapper = shallow(jsx);
      wrapper.prop('onSubmit')();
      expect(close).not.toHaveBeenCalled();
    });
  });
});

describe('ContextMenuForm (High Level)', () => {
  it('Allows state from an enclosing component to be used in the form and submit handler', () => {
    const submit = jest.fn();
    const close = jest.fn();
    const Form = (props: FormProps) => {
      const [state, setState] = useState('unclicked');
      const renderFormBody: FormBodyRenderer<{}> = () => (
        <button type="button" id="clickme" onClick={() => setState('clicked')}>{state}</button>
      );
      const submitValues = () => submit(state);
      return (
        <ContextMenuForm {...props} submitValues={submitValues}>
          {renderFormBody}
        </ContextMenuForm>
      );
    };
    const wrapper = mount(<Form closeForm={close} />);
    const stateButton = wrapper.find('button#clickme');
    expect(stateButton.text()).toBe('unclicked');
    stateButton.simulate('click');
    expect(stateButton.text()).toBe('clicked');
    const submitButton = wrapper.find('button[aria-label="Submit"]');
    submitButton.simulate('submit');
    expect(submit).toHaveBeenCalled();
    expect(submit.mock.calls[0][0]).toBe('clicked');
    expect(close).toHaveBeenCalled();
  });
});
