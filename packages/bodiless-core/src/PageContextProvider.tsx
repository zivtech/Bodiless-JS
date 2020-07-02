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

import React, { FC, useRef, ComponentType } from 'react';
import PageEditContext from './PageEditContext';
import { useEditContext, useUUID } from './hooks';
import { Props, Options, TMenuOptionGetter } from './Types/PageContextProviderTypes';

// Menu Provider component
const PageContextProvider: FC<Props> = ({
  getMenuOptions,
  name,
  id,
  peer,
  children,
}) => {
  const ref = useRef<TMenuOptionGetter>();
  ref.current = getMenuOptions;
  const context = useEditContext();
  const id$ = id || useUUID();
  const values = {
    getMenuOptions: () => (ref.current || getMenuOptions!)(),
    id: id$,
    name: name || id$,
  };

  if (peer) {
    context.registerPeer(values);
    return <>{children}</>;
  }
  // eslint-disable-next-line react/destructuring-assignment
  const newValue = context.spawn(values);
  return (
    <PageEditContext.Provider value={newValue}>
      {children}
    </PageEditContext.Provider>
  );
};

PageContextProvider.defaultProps = {
  getMenuOptions: () => [],
};

/**
 * Using supplied options, returns an HOC which adds one or more menu options (buttons).
 * This simplly wraps the supplied component with a `PageContextProvider`.
 *
 * Note that, unlike `PageContexProvider` itself, this function takes a custom hook
 * (`useGetMenuOptions`), which is invoked to create the 'getMenuOptions' prop
 * for `PageContextProvider`.  This allows you to use props and context at render
 * time to create your `getMenuOptions` callback.
 *
 * @param Options The values used to define the menu options.
 *
 * @return An HOC which will add those menu options to the component it wraps.
 */
export const withMenuOptions = <P extends object>({
  useGetMenuOptions,
  ...rest
}:Options<P>) => (Component: ComponentType<P> | string) => {
    const WithMenuOptions = (props: P) => {
      const getMenuOptions = useGetMenuOptions
        ? useGetMenuOptions(props, useEditContext())
        : undefined;

      return (
        <PageContextProvider getMenuOptions={getMenuOptions} {...rest}>
          <Component {...props} />
        </PageContextProvider>
      );
    };
    return WithMenuOptions;
  };

export default PageContextProvider;
