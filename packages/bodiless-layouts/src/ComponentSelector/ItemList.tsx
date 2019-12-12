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

import React, { useContext, ReactNode } from 'react';
import Tooltip from 'rc-tooltip';
import { DefaultContentNode } from '@bodiless/core';
import MaterialIcon from '@material/react-material-icon';
import 'rc-tooltip/assets/bootstrap.css';
import { uiContext } from '.';
import { ScreenShot, titleToImageName } from './ScreenShot';
import { ComponentWithMeta, ItemListProps } from './types';

const ItemList: React.FC<ItemListProps> = props => {
  const { components, onSelect } = props;
  const finalUI = useContext(uiContext);
  const elems: ReactNode[] = components.map(
    (Component: ComponentWithMeta<any>, index: number) => {
      // Image is part of JS
      // eslint-disable-next-line no-undef
      const testerImage = new Image();
      testerImage.src = `/images/component-previews/${titleToImageName(
        Component.title,
      )}`;
      return (
        <finalUI.ItemBox key={Component.displayName}>
          {testerImage.width === 0 ? (
            <ScreenShot
              Component={Component}
              node={DefaultContentNode.dummy(String(index), [])}
            />
          ) : null}

          <Tooltip
            placement="rightBottom"
            mouseLeaveDelay={0}
            overlayStyle={{
              opacity: 1,
            }}
            overlay={(
              <finalUI.ComponentDescriptionWrapper>
                <h3 className="bl-text-lg bl-font-bold">{Component.title}</h3>
                <finalUI.ComponentDescriptionStyle>
                  <p>{Component.description}</p>
                </finalUI.ComponentDescriptionStyle>
              </finalUI.ComponentDescriptionWrapper>
            )}
          >
            <finalUI.ComponentDescriptionIcon>
              info
            </finalUI.ComponentDescriptionIcon>
          </Tooltip>
          <finalUI.ComponentSelectButton
            type="submit"
            onClick={event => onSelect(event, Component.displayName)}
          />
          <finalUI.ComponentPreviewStyle
            src={`/images/component-previews/${titleToImageName(
              Component.title,
            )}`}
          />
          <finalUI.TitleWrapper>
            {Component.title || Component.displayName || 'Untitled'}
          </finalUI.TitleWrapper>
        </finalUI.ItemBox>
      );
    },
  );
  return (
    <finalUI.GridListBox>
      <div>
        <MaterialIcon>view_stream</MaterialIcon>
        <MaterialIcon>view_module</MaterialIcon>
        <MaterialIcon>view_comfy</MaterialIcon>
      </div>
      {elems}
    </finalUI.GridListBox>
  );
};
export default ItemList;
