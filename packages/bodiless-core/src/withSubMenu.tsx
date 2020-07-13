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

import React, {
  ComponentType as CT,
  createContext,
  MutableRefObject,
  useRef,
  useContext,
} from 'react';
import withCompoundForm from './withCompoundForm';
import type { UseGetMenuOptions } from './Types/PageContextProviderTypes';
import type { TMenuOption } from './PageEditContext/types';

type SubMenuOptions<P> = {
  useGetMenuOptions: UseGetMenuOptions<P>,
  name: string,
  formTitle: string,
};

type RegisterSubMenuItem = (subMenuItems: TMenuOption[]) => void;

const SubMenuContext = createContext<RegisterSubMenuItem>(() => {});
const SubMenuItemsContext = createContext<MutableRefObject<TMenuOption[]>|undefined>(undefined);

/**
 * HOC to create a Sub Menu form.
 */
const withSubMenu = <P extends object>(options: SubMenuOptions<P>) => (Component: CT<P>) => {
  const { useGetMenuOptions, name } = options;
  const ComponentWithButton = withCompoundForm({ useGetMenuOptions, name, peer: true })(Component);

  const WithSubMenu = (props:P) => {
    // This ref will hold all Sub Menu Items registered by child components.
    const allSubMenuItems = useRef<TMenuOption[]>([]);
    // This callback will be used by child components to contribute their Sub Menu Items.
    const registerSubMenuItem = (subMenuItems: TMenuOption[]) => {
      // Ensure that there is only a single entry for each Sub Menu Item based on its name.
      /**
       * @todo useRegisterSnippet;
       */
      subMenuItems.forEach(item => {
        const existsAt = allSubMenuItems.current.findIndex(i => i.name === item.name);
        if (existsAt >= 0) allSubMenuItems.current.splice(existsAt, 1, item);
        else allSubMenuItems.current.push(item);
      });
    };

    // Wrap the original component with a context containing the register submenu callback
    return (
      <SubMenuContext.Provider value={registerSubMenuItem}>
        <SubMenuItemsContext.Provider value={allSubMenuItems}>
          <ComponentWithButton {...props} />
        </SubMenuItemsContext.Provider>
      </SubMenuContext.Provider>
    );
  };
  return WithSubMenu;
};

/**
 * Hook to register a sub menu items which will be added to the sub menu. Should be
 * inviked within a component wrapped in `withSubMenu`
 *
 * @param subMenuItems At array of `TMenuOption[]` items to be added to submenu.
 */
const useRegisterSubMenuItems = (subMenuItems: TMenuOption[]) => (
  useContext(SubMenuContext)(subMenuItems)
);

export default withSubMenu;
export {
  useRegisterSubMenuItems,
};
