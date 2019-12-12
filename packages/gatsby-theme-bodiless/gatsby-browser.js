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

/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Override Gatsby default scroll behavior. Only scroll if hashed element exists. See
// https://github.com/gatsbyjs/gatsby/blob/v2.15.0-rc.4/packages/gatsby/cache-dir/navigation.js#L142-L144
export const shouldUpdateScroll = ({ routerProps: { location } }) => {
  const target = location.hash ? location.hash.slice(1) : '';
  const targetElement = document.getElementById(target) || document.getElementsByName(target)[0];
  return !!targetElement;
};
