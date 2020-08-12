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

import React, { createContext, useContext } from 'react';
import { ContextMenuFormProps } from '../Types/ContextMenuTypes';

type ContextType = {
  // eslint-disable-next-line max-len
  setRenderForm?: React.Dispatch<React.SetStateAction<((props: ContextMenuFormProps) => JSX.Element) | undefined>>;
};

const ContextMenuContext = createContext<ContextType>({});

const useContextMenuContext = () => useContext(ContextMenuContext);

export default ContextMenuContext;
export {
  useContextMenuContext,
};
