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

import { useContext, useRef, EventHandler } from 'react';
import { v1 } from 'uuid';
import PageEditContext from './PageEditContext';

export const useEditContext = () => useContext(PageEditContext.context);

export const useUUID = () => useRef(v1()).current;

export const useContextActivator = (
  event = 'onClick',
  handler?: EventHandler<any>,
) => {
  const context = useEditContext();

  // Don't attach the handler when not in edit mode.
  if (!context.isEdit) {
    return {
      [event]: handler,
    };
  }
  const handler$1 = (e: React.SyntheticEvent<any>) => {
    // Run the original handler, if it exists.
    if (handler) handler(e);
    // Prevent default behavior (maybe move this to asBodilessLink)
    const preventDefault = e && e.currentTarget && e.currentTarget.getAttribute('bl-prevent') !== 'false';
    if (preventDefault && e && e.preventDefault) e.preventDefault();
    // Do not activate the context if it is already innermost.
    if (context.isInnermost) return;
    // Do not activate if this event already activated an inner context.
    const activatingElement = (e.target as HTMLElement).closest('[data-bl-activator=true]');
    const thisElement = e.currentTarget;
    if (thisElement !== activatingElement) return;
    context.activate();
  };
  return {
    [event]: handler$1,
    'data-bl-activator': true,
  };
};
