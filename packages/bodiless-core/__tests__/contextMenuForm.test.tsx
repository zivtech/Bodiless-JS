/**
 * @file
 * Integration tests for context menu forms.
 */
import React, { useState } from 'react';
import { mount } from 'enzyme';
import { ContextMenuForm, FormProps, FormBodyRenderer } from '../src/contextMenuForm';

describe('ContextMenuForm', () => {
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
