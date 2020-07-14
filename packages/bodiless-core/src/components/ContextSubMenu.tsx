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

import React from 'react';
import { flowRight } from 'lodash';
import { v1 } from 'uuid';
import withCompoundForm, { useRegisterSnippet } from '../withCompoundForm';
import type { TMenuOption } from '../PageEditContext/types';
import type { UseGetMenuOptions } from '../Types/PageContextProviderTypes';
import withChild from '../withChild';
import ContextMenu from './ContextMenu';
import ContextMenuItem, { useUI as useFormUI } from './ContextMenuItem';

type SubMenuOptions<P> = {
  useGetMenuOptions: UseGetMenuOptions<P>,
  name: string,
  formTitle: string,
  getSubMenuButtons: () => TMenuOption[],
};

const withSubmenu = <P extends object>(options: SubMenuOptions<P>) => {
  const {
    useGetMenuOptions,
    name,
    formTitle,
    getSubMenuButtons,
  } = options;

  const subMenuBody = () => {
    const ui = useFormUI();
    const { ComponentFormTitle, ComponentFormSubMenu } = ui;
    const finalUi = {
      ...ui,
      Toolbar: ComponentFormSubMenu,
    };

    return (
      <React.Fragment key="form-submenu">
        <ComponentFormTitle>{formTitle}</ComponentFormTitle>
        <ContextMenu ui={finalUi} options={getSubMenuButtons()} />
      </React.Fragment>
    );
  };

  const subMenuBodySnippet = () => {
    useRegisterSnippet({
      id: v1(),
      render: subMenuBody,
    });

    return <></>;
  };

  return flowRight(
    /**
     * @todo Implement withFormWrapper(FormWrapper)
     */
    withCompoundForm({ useGetMenuOptions, name, peer: true }),
    withChild(subMenuBodySnippet),
  );
};

const useRegisterSubMenuOption = (option: TMenuOption) => useRegisterSnippet({
  id: `submenu-${option.name}`, // @todo figure out how to get a unique id.
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
