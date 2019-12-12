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

import React, { FC, useRef } from 'react';
import PageEditContext from './PageEditContext';
import { useEditContext, useUUID } from './hooks';
import { Props, TMenuOptionGetter } from './Types/PageContextProviderTypes';

// Menu Provider component
const PageContextProvider: FC<Props> = ({
  getMenuOptions,
  name,
  id,
  children,
}) => {
  const ref = useRef<TMenuOptionGetter>();
  ref.current = getMenuOptions;
  const newValue = useEditContext().spawn({
    getMenuOptions: () => (ref.current || getMenuOptions!)(),
    id: id || useUUID(),
    name: name || 'Unknown',
  });

  return (
    <PageEditContext.Provider value={newValue}>
      {children}
    </PageEditContext.Provider>
  );
};

PageContextProvider.defaultProps = {
  getMenuOptions: () => [],
};

// Menu provider HOC - uses the recompose withHandlers() pattern.
// That is:
//   withMenuOptions(myMenuOptionGetterCreator);
// is equivalent to
//   withHandlers({
//     getMenuOptions: myMenuOptionGetterCreator,
//   });
export default PageContextProvider;
