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

import React, { ReactNode, useCallback } from 'react';
import {
  Form, FormApi, FormState, Text, TextArea,
} from 'informed';
import { UI } from './Types/ContextMenuTypes';
import ReactTagsField from './components/ReactTagsField';

const defaultUI = {
  Icon: 'i',
  ComponentFormTitle: 'h3',
  ComponentFormLabel: 'label',
  ComponentFormButton: 'button',
  ComponentFormCloseButton: 'button',
  ComponentFormSubmitButton: 'button',
  ComponentFormUnwrapButton: 'button',
  ComponentFormText: Text,
  ComponentFormTextArea: TextArea,
  ComponentFormError: 'div',
  Form: 'div',
  ReactTags: ReactTagsField,
};

export const getUI = (ui: UI = {}) => ({ ...defaultUI, ...ui });

export type Options<D> = {
  submitValues?: (componentData: D) => boolean|void;
  initialValues?: D;
  hasSubmit?: Boolean;
};

export type FormProps = {
  closeForm: () => void;
  ui?: UI;
  'aria-label'?: string;
};

export type FormBodyProps<D> = FormProps & Options<D> & {
  formApi: FormApi<D>;
  formState: FormState<D>;
};

export type FormBodyRenderer<D> = (props: FormBodyProps<D>) => ReactNode;

type Props<D> = FormProps & Options<D> & {
  children: FormBodyRenderer<D>,
};

export const ContextMenuForm = <D extends object>({
  closeForm,
  ui,
  submitValues = () => undefined,
  initialValues = {} as D,
  hasSubmit = true,
  children = () => <></>,
  ...rest
}: Props<D>) => {
  const { ComponentFormCloseButton, ComponentFormSubmitButton } = getUI(ui);
  return (
    <Form
      onSubmit={(values: D) => {
        if (!submitValues(values)) {
          closeForm();
        }
      }}
      initialValues={initialValues}
      {...rest}
    >
      {({ formApi, formState }) => (
        <>
          <ComponentFormCloseButton
            type="button"
            onClick={closeForm}
            aria-label="Cancel"
          />
          {children({
            closeForm,
            formApi,
            formState,
            ui,
          })}
          {hasSubmit && !formState.invalid
          && (
            <ComponentFormSubmitButton aria-label="Submit" />
          )}
        </>
      )}
    </Form>
  );
};

export const contextMenuForm = <D extends object>(options: Options<D> = {}) => (
  renderFormBody?: FormBodyRenderer<D>,
) => (
  (props: Props<D>) => (
    <ContextMenuForm {...options} {...props}>
      {renderFormBody || (() => <></>)}
    </ContextMenuForm>
  )
);

type HookOptions<D> = Options<D> & {
  renderFormBody?: FormBodyRenderer<D>,
};

const useContextMenuForm = <D extends object>(options: HookOptions<D> = {}) => useCallback(
  contextMenuForm(options)(options.renderFormBody),
  [options],
);

export default useContextMenuForm;
