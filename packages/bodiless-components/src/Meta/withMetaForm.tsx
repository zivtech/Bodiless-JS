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

export const withMetaSnippet = (data: MetaSnippetProps, next?: Function) => withEditFormSnippet({
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
    if (next) {
      // Allow user to override submit handler.
      return next(data, values);
    }
    return {
      [attribute]: values[name],
    };
  },
  initialValueHandler: (values) => {
    const { name, attribute } = data;
    return values[attribute] ? {
      ...values,
      [name]: values[attribute],
    } : { ...values };
  },
});

const withMetaFormHeader = (headerProps: HeaderProps) => (Component: CT) => {
  const metaHeaderSnippet: FormSnippet<any> = {
    id: v1(),
    render: () => {
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

const withMetaForm = (useGetMenuOptions: any, metaFormHeader: HeaderProps) => flowRight(
  withCompoundForm({
    useGetMenuOptions, name: 'Meta', peer: true, id: 'meta',
  }),
  withMetaFormHeader(metaFormHeader),
);

export default withMetaForm;
