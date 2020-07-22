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

const SubMenuBody:FC<PropsWithTitle> = ({ title, children, ...rest }) => {
  const ui = useFormUI();
  const { ComponentFormSubMenu, ComponentFormTitle } = ui;
  const finalUi = {
    ...ui,
    Toolbar: ComponentFormSubMenu,
  };

  return (
    <>
      <ComponentFormTitle>{title}</ComponentFormTitle>
      <ContextMenu ui={finalUi} options={[]} {...rest}>
        {children}
      </ContextMenu>
    </>
  );
};

const subMenuComponentsStart: CompoundFormComponents = {
  Body: SubMenuBody,
};

/**
 * HOC to create a Sub Menu which is built on top of the "compound form". Children of this
 * component can contribute Menu Options to the Sub Menu form.
 *
 * @param options Hook to register Admin Menu option and its name.
 */
const withSubmenu = <P extends object>(options: SubMenuOptions<P>) => {
  const formOptions = { hasSubmit: false };
  const finalOptions = { ...options, formOptions, peer: true };

  return flowRight(
    withDesign({ Body: addProps({ title: options.name }) }),
    designable(subMenuComponentsStart),
    withCompoundForm(finalOptions),
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
