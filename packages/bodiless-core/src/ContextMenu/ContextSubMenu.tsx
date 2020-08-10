/**
 * Copyright © 2020 Johnson & Johnson
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

import React, { FC } from 'react';
import { Div } from '@bodiless/fclasses';
import ContextMenuItem, { useUI as useFormUI } from '../components/ContextMenuItem';
import { ContextMenuBase } from '../components/ContextMenu';
import type { IContextMenuItemProps, ContextMenuFormProps } from '../Types/ContextMenuTypes';

const SubMenuGroup: FC<any> = ({ children }) => {
  const { ContextSubMenu } = useFormUI();
  return <ContextSubMenu>{children}</ContextSubMenu>;
};

type FormChromeProps = {
  hasSubmit: boolean;
  title?: string;
} & ContextMenuFormProps;

const FormChrome: FC<FormChromeProps> = (props) => {
  const {
    children,
    title,
    hasSubmit,
    closeForm,
  } = props;
  const {
    ComponentFormTitle, ComponentFormCloseButton, ComponentFormSubmitButton,
  } = useFormUI();

  return (
    <Div aria-label={`Context Submenu ${title} form`}>
      <ComponentFormCloseButton
        type="button"
        aria-label="Cancel"
        onClick={() => closeForm()}
      />
      <ComponentFormTitle>{title}</ComponentFormTitle>
      {children}
      {hasSubmit && (<ComponentFormSubmitButton aria-label="Submit" />)}
    </Div>
  );
};

const ContextSubMenu: FC<IContextMenuItemProps> = props => {
  const {
    option, children, ui, ...rest
  } = props;

  const finalUi = {
    ...ui,
    Toolbar: SubMenuGroup,
  };

  const handler = () => ({ closeForm }: ContextMenuFormProps) => (
    <ContextMenuBase ui={finalUi} renderInTooltip={false}>
      <FormChrome title={option.label} hasSubmit={false} closeForm={closeForm}>
        {children}
      </FormChrome>
    </ContextMenuBase>
  );
  const newOption = { ...option, handler };
  return <ContextMenuItem option={newOption} ui={ui} {...rest} />;
};

export default ContextSubMenu;
