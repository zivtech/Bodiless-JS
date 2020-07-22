import React, { ComponentType as CT } from 'react';
import { flowRight } from 'lodash';
import { v1 } from 'uuid';
import {
  useFormUI, useRegisterSnippet, withCompoundForm, withEditFormSnippet,
} from '@bodiless/core';
import type { FormSnippet } from '@bodiless/core';
import { Div } from '@bodiless/fclasses';

export enum FieldType {
  Text = 'text',
  TextArea = 'textarea',
}

export type HeaderProps = {
  title: string,
  description: string,
};

export type MetaSnippetProps = {
  name: string,
  type: FieldType,
  label: string,
  attribute: string,
};

export const withMetaSnippet = (
  data: MetaSnippetProps,
  nextSubmitHandler?: Function,
  nextInitialValuesHandler?: Function,
) => withEditFormSnippet({
  render: () => {
    const { name, label, type } = data;
    const { ComponentFormLabel, ComponentFormText, ComponentFormTextArea } = useFormUI();
    const Field = type === 'text' ? ComponentFormText : ComponentFormTextArea;
    return (
      <Div key={name}>
        <ComponentFormLabel>{label}</ComponentFormLabel>
        <Field field={name} />
      </Div>
    );
  },
  submitValueHandler: (values: any) => {
    const { name, attribute } = data;
    const submitValues = { [attribute]: values[name] };
    return nextSubmitHandler ? nextSubmitHandler(submitValues) : submitValues;
  },
  initialValueHandler: (values) => {
    const { name, attribute } = data;
    const initialValues = values[attribute] ? {
      ...values,
      [name]: values[attribute],
    } : { ...values };
    return nextInitialValuesHandler ? nextInitialValuesHandler(initialValues) : initialValues;
  },
});

const withMetaFormHeader = (headerProps: HeaderProps | undefined) => (Component: CT) => {
  const metaHeaderSnippet: FormSnippet<any> = {
    id: v1(),
    render: () => {
      if (!headerProps) return <></>;
      const { ComponentFormTitle, ComponentFormDescription } = useFormUI();
      return (
        <Div key="form-header">
          <ComponentFormTitle>{headerProps.title}</ComponentFormTitle>
          <ComponentFormDescription>{headerProps.description}</ComponentFormDescription>
        </Div>
      );
    },
  };

  const WithFormHeader = (props: any) => {
    useRegisterSnippet(metaHeaderSnippet);
    return <Component {...props} />;
  };
  return WithFormHeader;
};

const withMetaForm = (useGetMenuOptions: any, metaFormHeader: HeaderProps | undefined) => flowRight(
  withCompoundForm({
    useGetMenuOptions, name: 'Meta', peer: true, id: 'meta',
  }),
  withMetaFormHeader(metaFormHeader),
);

export default withMetaForm;
