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
import { flowRight } from 'lodash';
import {
  StaticPage,
  ContextWrapperProps,
  withCompoundForm,
  // withChild,
  useFormUI,
  useRegisterSnippet,
  ContextMenu,
} from '@bodiless/core';
import { observer } from 'mobx-react-lite';
import { ContextWrapper, PageEditor } from '@bodiless/core-ui';
import { Submenu } from '@bodiless/ui';
import GatsbyNodeProvider, {
  Props as NodeProviderProps,
} from './GatsbyNodeProvider';
import GatsbyPageProvider, { Props as PageProviderProps } from './GatsbyPageProvider';
import useNewPageButton from './useNewPageButton';
import useGitButtons from './useGitButtons';

type FinalUI = {
  ContextWrapper: ComponentType<ContextWrapperProps>;
  PageEditor: ComponentType;
};
type UI = Partial<FinalUI>;

export type Props = NodeProviderProps & PageProviderProps & {
  ui?: UI,
};

const defaultUI: FinalUI = {
  ContextWrapper,
  PageEditor,
};

const getUI = (ui: UI = {}): FinalUI => ({ ...defaultUI, ...ui });

const InnerButtons: FC = () => {
  useNewPageButton();
  useGitButtons();
  return <></>;
};

const useGetMenuOptions = () => () => [{
  icon: 'cloud',
  label: 'File',
  name: 'file',
}];

const GitFormBody = () => {
  const ui = {
    ...useFormUI(),
    Toolbar: Submenu,
  };
  const { ComponentFormTitle } = ui;

  const subMenuOptions = [
    {
      name: 'listCommits',
      icon: 'book',
      label: 'History',
    },
    {
      name: 'savechanges',
      icon: 'cloud_upload',
      label: 'Push',
    },
    {
      name: 'Pull',
      label: 'Pull',
      icon: 'cloud_download',
    },
    {
      name: 'resetchanges',
      label: 'Revert',
      icon: 'undo',
    },
  ];

  return (
    <React.Fragment key="form-submenu">
      <ComponentFormTitle>File</ComponentFormTitle>
      <ContextMenu ui={ui} options={subMenuOptions} />
    </React.Fragment>
  );
};

const GitSubMenu: FC = () => {
  useRegisterSnippet({
    id: 'test-id-f31gv312uzzxx',
    render: GitFormBody,
    initialValues: {},
    submitValues: () => undefined,
  });

  return <></>;
};

const GitMenu = flowRight(
  withCompoundForm({ useGetMenuOptions, name: 'File', peer: true }),
)(React.Fragment);

const Page: FC<Props> = observer(({ children, ui, ...rest }) => {
  const { PageEditor: Editor, ContextWrapper: Wrapper } = getUI(ui);
  if (process.env.NODE_ENV === 'development') {
    return (
      <GatsbyNodeProvider {...rest}>
        <GatsbyPageProvider pageContext={rest.pageContext}>
          <Editor>
            <InnerButtons />
            <GitMenu>
              <GitSubMenu />
            </GitMenu>
            <Wrapper clickable>
              {children}
            </Wrapper>
          </Editor>
        </GatsbyPageProvider>
      </GatsbyNodeProvider>
    );
  }
  return (
    <GatsbyNodeProvider {...rest}>
      <StaticPage>{children}</StaticPage>
    </GatsbyNodeProvider>
  );
});

export default Page;
