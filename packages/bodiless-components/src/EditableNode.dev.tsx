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

/*

  Development version of EditableNode not optimized for rendering

*/

import React, { ClipboardEvent } from 'react';
import ContentEditable from 'react-contenteditable';
import { observer } from 'mobx-react-lite';
import { useNode, useEditContext } from '@bodiless/core';
import { Data, Props } from './EditableNodeCommon';

const ObserverText = observer((props: Props) => {
  const { placeholder } = props;
  const { node } = useNode<Data>();
  const text = node.data.text || placeholder || '';
  // eslint-disable-next-line react/no-danger
  return <span dangerouslySetInnerHTML={{ __html: text }} />;
});

const EditableNode = observer((props: any) => {
  const { isEdit } = useEditContext();
  return isEdit ? <EditableText {...props} /> : <ObserverText {...props} />;
});

const EditableText = observer((props: Props) => {
  const { node } = useNode<Data>();
  const onInput = (event: any) => {
    const newText = event.currentTarget.innerHTML;
    node.setData({ text: newText });
  };
  const pasteAsPlainText = (event: ClipboardEvent<HTMLDivElement>) => {
    if (event.clipboardData) {
      event.preventDefault();
      const text = event!.clipboardData.getData('text/plain');
      document.execCommand('insertHTML', false, text);
    }
  };
  const { placeholder } = props;
  const placeholderDataAttr = placeholder || '';
  const text = node.data.text || '';
  return (
    <ContentEditable
      tagName="span"
      className="bodiless-inline-editable"
      onChange={onInput}
      onPaste={pasteAsPlainText}
      html={text}
      data-placeholder={placeholderDataAttr}
    />
  );
});

export default EditableNode;
