import React, { FC } from 'react';
import ContextMenuItem from '../components/ContextMenuItem';
import type { IContextMenuItemProps } from '../Types/ContextMenuTypes';

const ContextSubMenu: FC<IContextMenuItemProps> = props => {
  const { options, children, ...rest } = props;

  const handler = () => (<>{children}</>);
  const newOptions = { ...options, handler };
  return <ContextMenuItem options={newOptions} {...rest} />;
};

export default ContextSubMenu;