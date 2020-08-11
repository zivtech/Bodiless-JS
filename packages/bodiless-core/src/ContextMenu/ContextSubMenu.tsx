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

import React, { FC, ComponentType as CT } from 'react';
import { Div, addProps } from '@bodiless/fclasses';
import ContextMenuItem, { useUI as useFormUI } from '../components/ContextMenuItem';
import ContextMenu from '../components/ContextMenu';
import type { IContextMenuItemProps, ContextMenuFormProps } from '../Types/ContextMenuTypes';

const SubMenuGroup: FC<any> = ({ children }) => {
  const { ContextSubMenu } = useFormUI();
  return <ContextSubMenu>{children}</ContextSubMenu>;
};

type FormChromeOptions = {
  title?: string;
  hasSubmit?: boolean;
  closeForm: () => void;
};

const withFormChrome = <P extends object>(options: FormChromeOptions) => (Component: CT<P>) => {
  const { title, closeForm, hasSubmit = true } = options;

  const FormChrome = (props: P) => {
    const {
      ComponentFormTitle, ComponentFormCloseButton, ComponentFormSubmitButton,
    } = useFormUI();

    return (
      <>
        <ComponentFormCloseButton
          type="button"
          aria-label="Cancel"
          onClick={() => closeForm()}
        />
        <ComponentFormTitle>{title}</ComponentFormTitle>
        <Component {...props} />
        {hasSubmit && (<ComponentFormSubmitButton aria-label="Submit" />)}
      </>
    );
  };

  return FormChrome;
};

const ContextSubMenu: FC<IContextMenuItemProps> = props => {
  const {
    option, children, ui, ...rest
  } = props;

  const finalUi = {
    ...ui,
    Toolbar: addProps({ 'aria-label': `Context Submenu ${option.label} form` })(Div),
  };

  const handler = () => ({ closeForm }: ContextMenuFormProps) => {
    const ContextMenuGroup = withFormChrome({
      closeForm,
      title: option.label,
      hasSubmit: false,
    })(SubMenuGroup);

    return (
      <ContextMenu ui={{ ...finalUi, ContextMenuGroup }} renderInTooltip={false}>
        {children}
      </ContextMenu>
    );
  };
  const newOption = { ...option, handler };
  return <ContextMenuItem option={newOption} ui={ui} {...rest} />;
};

export default ContextSubMenu;
