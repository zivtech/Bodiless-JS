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

import React, { FC, ComponentType } from 'react';
import { observer } from 'mobx-react-lite';
import Tooltip from 'rc-tooltip';

import { useEditContext } from '../hooks';
import { useUI } from './PageEditor';
import { TMenuOption } from '../PageEditContext/types';

const LocalContextMenu: FC = ({ children }) => {
  const { LocalContextMenu: Menu } = useUI();
  const context = useEditContext();
  // let the context know it has a localMenu
  context.hasLocalMenu = true;
  const { contextMenuOptions, isInnermostLocalMenu } = context;

  const options = contextMenuOptions.filter((option: TMenuOption) => Boolean(option.local));
  return (
    <Tooltip
      visible={isInnermostLocalMenu && options.length > 0}
      overlay={<Menu options={options} />}
      trigger={[]}
      destroyTooltipOnHide
      placement="bottom"
    >
      {children}
    </Tooltip>
  );
};

export default observer(LocalContextMenu) as ComponentType;
