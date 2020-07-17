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
import { flowRight } from 'lodash';
import { designable, withDesign, addProps } from '@bodiless/fclasses';
import withCompoundForm, { useRegisterSnippet, CompoundFormComponents } from './withCompoundForm';
import type { TMenuOption } from './PageEditContext/types';
import type { UseGetMenuOptions } from './Types/PageContextProviderTypes';
import ContextMenu from './components/ContextMenu';
import ContextMenuItem, { useUI as useFormUI } from './components/ContextMenuItem';
import { withoutProps } from './hoc';

type SubMenuOptions<P> = {
  useGetMenuOptions: UseGetMenuOptions<P>,
  name: string,
};

type PropsWithTitle = {
  title?: string,
};

const SubMenuBody:FC = ({ children, ...rest }) => {
  const ui = useFormUI();
  const { ComponentFormSubMenu } = ui;
  const finalUi = {
    ...ui,
    Toolbar: ComponentFormSubMenu,
  };

  return (
    <ContextMenu ui={finalUi} options={[]} {...rest}>
      {children}
    </ContextMenu>
  );
};

const SubMenuHeader:FC<PropsWithTitle> = ({ title = '' }) => {
  const { ComponentFormTitle } = useFormUI();

  return <ComponentFormTitle>{title}</ComponentFormTitle>;
};

const tagTitleComponentsStart: CompoundFormComponents = {
  Body: SubMenuBody,
  Header: SubMenuHeader,
};

const withSubmenu = <P extends object>(options: SubMenuOptions<P>) => {
  const { useGetMenuOptions, name } = options;
  const formOptions = { hasSubmit: false };

  return flowRight(
    withDesign({ Header: addProps({ title: name }) }),
    designable(tagTitleComponentsStart),
    withCompoundForm({
      useGetMenuOptions,
      name,
      peer: true,
      formOptions,
    }),
    withoutProps(['components', 'design']),
  );
};

/**
 * Hook to register a Sub Menu option.
 * Should be invoked within a component wrapped in `withSubmenu`.
 *
 * @param option The TMenuOption object that will be used to render `ContextMenuItem`.
 */
const useRegisterSubMenuOption = (option: TMenuOption) => useRegisterSnippet({
  id: `submenu-${option.name}`,
  render: () => (
    <ContextMenuItem
      option={option}
      key={option.name}
      aria-label={option.name}
      index={0}
      ui={{}}
    />
  ),
});

export default withSubmenu;
export {
  useRegisterSubMenuOption,
};
