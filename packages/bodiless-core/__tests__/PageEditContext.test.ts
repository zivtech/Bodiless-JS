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

import PageEditContext from '../src/PageEditContext';
import { PageEditContextInterface } from '../src/PageEditContext/types';

const spawn = (parent: PageEditContextInterface) => {
  const id = Math.random().toString();
  return parent.spawn({
    id,
    name: id,
    getMenuOptions: () => [
      {
        name: id,
        icon: 'foo',
      },
    ],
  });
};

const createContextTree: () => { [key: string]: PageEditContextInterface } = () => {
  const root = new PageEditContext();
  const parent1 = spawn(root);
  const child11 = spawn(parent1);
  const child12 = spawn(parent1);
  const parent2 = spawn(root);
  const child21 = spawn(parent2);
  return {
    root,
    parent1,
    parent2,
    child11,
    child12,
    child21,
  };
};

describe('PageEditContext', () => {
  it('activates only itself and all ancestors', () => {
    const tree = createContextTree();
    tree.child11.activate();
    expect(tree.root.isActive).toBeTruthy();
    expect(tree.parent1.isActive).toBeTruthy();
    expect(tree.child11.isActive).toBeTruthy();
    expect(tree.child12.isActive).toBeFalsy();
    expect(tree.parent2.isActive).toBeFalsy();
    expect(tree.child21.isActive).toBeFalsy();
    expect(tree.root.isInnermost).toBeFalsy();
    expect(tree.parent1.isInnermost).toBeFalsy();
    expect(tree.child11.isInnermost).toBeTruthy();
    expect(tree.child12.isInnermost).toBeFalsy();
    expect(tree.parent2.isInnermost).toBeFalsy();
    expect(tree.child21.isInnermost).toBeFalsy();
  });

  it('sets the correct menu options', () => {
    const tree = createContextTree();
    const expectOptionNamesToBe = (expected: string[]) => {
      // We test getting the menu options from anywhere in the context tree.
      Object.keys(tree).forEach(key => {
        expect(tree[key].contextMenuOptions.length).toBe(expected.length);
        tree[key].contextMenuOptions.forEach((option: any, index: any) => expect(
          option.name,
        ).toBe(expected[index]));
      });
    };
    tree.child21.activate();
    expectOptionNamesToBe([tree.parent2.id, tree.child21.id]);
    tree.child12.activate();
    expectOptionNamesToBe([tree.parent1.id, tree.child12.id]);
    tree.parent1.activate();
    expectOptionNamesToBe([tree.parent1.id]);
  });

  it('toggles edit mode correctly', () => {
    const tree = createContextTree();
    tree.parent1.toggleEdit(true);
    Object.keys(tree).forEach(key => expect(tree[key].isEdit).toBeTruthy());
    tree.parent2.toggleEdit();
    Object.keys(tree).forEach(key => expect(tree[key].isEdit).toBeFalsy());
    tree.root.toggleEdit();
    Object.keys(tree).forEach(key => expect(tree[key].isEdit).toBeTruthy());
    tree.child21.toggleEdit(false);
    Object.keys(tree).forEach(key => expect(tree[key].isEdit).toBeFalsy());
  });
});
