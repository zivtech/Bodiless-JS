import React, { ComponentType as CT } from 'react';
import { flowRight } from 'lodash';
import { v1 } from 'uuid';
import { useFormUI, useRegisterSnippet, withCompoundForm } from '@bodiless/core';
import type { FormSnippet } from '@bodiless/core';

export type HeaderProps = {
  title: string,
  description: string,
};

export const withMetaFormHeader = (headerProps: HeaderProps) => (Component: CT) => {
  const metaHeaderSnippet: FormSnippet<any> = {
    id: v1(),
    render: () => {
      const { ComponentFormTitle, ComponentFormDescription } = useFormUI();
      return (
        <>
          <ComponentFormTitle>{headerProps.title}</ComponentFormTitle>
          <ComponentFormDescription>{headerProps.description}</ComponentFormDescription>
        </>
      );
    },
  };

  const WithFormHeader = (props: any) => {
    useRegisterSnippet(metaHeaderSnippet);
    return <Component {...props} />;
  };
  return WithFormHeader;
};

const withMetaForm = (useGetMenuOptions: any, seoFormHeader: HeaderProps) => flowRight(
  withCompoundForm({
    useGetMenuOptions, name: 'Meta', peer: true, id: 'meta',
  }),
  withMetaFormHeader(seoFormHeader),
);

export default withMetaForm;
