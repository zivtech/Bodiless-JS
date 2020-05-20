# Creating Bodiless Components

In the previous guides, you have seen how to use built-in Bodiless components to
build out an editable site. But what if you have pre-built components (or even
pages) you'd like to make editable? Bodiless-JS provides a set of utilities which
make it easy to wire up any component with an edit form. To demonstrate, we'll
create an editable version of the popular
[`ReactMarkdown` component](https://github.com/rexxars/r    eact-markdown).

Imagine you have the following page:

```js
import React from 'react';
import ReactMarkdown from 'react-markdown';

const PageBody = ({ title, markdownContent }) => (
  <main>
    <h1>{title}</h1>
    <ReactMarkdown source={markdownContent} />
  </main>
);
```

As you've seen, it's dead simple to make the title editable:

```
import { asEditable } from '@bodiless/components'

const H1 = asEditable('title')('h1');

const EditablePageBody = ({ title, markdownContent }) => (
  <main>
    <H1>{title}</H1>
    <ReactMarkdown source={markdownContent} />
  </main>
);
```

But what about the markdown field? Here we'd like to provide a form which allows the markdown
source to be edited. We'll do this by creating our own `asEditableMarkdown` HOC
which we can then apply to the `ReactMarkdown` component to make it editable. The easiest way to do
so is to use the `asBodilessComponent` utility.

```js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Editable } from '@bodiless/components';
import { asBodilessComponent } from '@bodiless/core';

const asBodilessMarkdown = asBodilessComponent(options); // "options" will be described below.

const Markdown = asBodilessMarkdown('body')(ReactMarkdown);

const H1 = asEditable('title')('h1');

const EditablePageBody = ({ title, markdownContent }) => (
  <main>
    <H1>{title}</H1>
    <Markdown source={markdownContent} />
  </main>
);
```

This will supply our Markdown field with an edit button (which can appear either in a local
context menu toolbar, or in the main left-hand menu toolbar).  When clicked, that button
will bring up a form which can edit the content of the "source" prop.

## `asBodiless...` Options

All the magic is in the `options` provided to `asBodilessComponent`, so let's look at them:

```
type Options<P, D> = {
  icon: string;
  name: string;
  label?: string;
  global?: boolean;
  local?: boolean;
  renderForm: FormBodyRenderer<P, D>;
  useGetMenuOptions?: UseGetMenuOptions<P>;
  activateEvent?: string,
  Wrapper?: CT<any>|string,
  defaultData?: D,
};
```

| Property | Description |
| --- | --- |
| icon | The name of the [material icon](https://material.io/resources/icons/?style=baseline) to use for the edit button |
| name | A unique machine name for this option |
| label | A human readable label for the edit button |
| global | If true, specifies that the button should appear on the global menu (the lefthand sidebar) |
| local | If true, specifies that the button should appear in the local context menu |
| renderForm | A render function which should the form fields. See below. |
| useGetMenuOptions | A hook which will be called to provide additional menu
buttons. |
| activateEvent | The event which will trigger the "activation" of the components edit button. Usually "onClick" |
| Wrapper | A component which will wrap this component in edit mode. Useful if the component itself cannot generate the activateEvent |
| defaultData | Optional default data to be used for this component |

### Defining the form

The key option above is `renderForm`. This is where you define the fields that
will be used to edit your component. Bodiless-JS uses the excellent
[Informed](https://joepuzzo.github.io/informed) library to build forms. Defining
your component form is as simple as returning informed inputs whose names match
the props of your component.

Let's see what a `renderForm` callback might look like for `ReactMarkdown`.
```
const renderForm = () => {
  const { ComponentFormTitle, ComponentFormTextArea } = useFormUI();
  return (
    <>
      <ComponentFormTitle>Edit Page Body</ComponentFormTitle>
      <ComponentFormTextArea field="source" />
    </>
  );
};
```
We provide a form title and a single field named after the `source` prop of
`ReactMarkdown`.

> Notice the use of the `useFormUI()` hook. The Bodiless-JS admin UI is designed
to be theme-able. Themers can provide their own styled versions of all UI
elements. Here we simply retrieve the elements we need. For example,
`ComponentFormTextArea` is nothing more than a themed version of the native
[TextArea](https://joepuzzo.github.io/informed/?path=/story/inputs--text-area)
input from Informed. `useFormUI()` will return such styled versions of all
native Informed inputs (pending [#336](https://github.com/johnsonandjohnson/Bodiless-JS/issues/336))

Now we're ready to complete our `asBodilessMarkdown` function:

```
const asBodilessMarkdown = asBodilessComponent<Props, Data>({
  icon: 'edit',
  name: 'edit',
  renderForm,
  global: false,
  local: true,
  Wrapper: 'div',
  defaultData: { source: 'Initial Value' },
});
```

Note the use of the `Wrapper` property.  We want our component to display its edit
button when clicked, but `ReactMarkdown` does not accept an `onClick` prop, so we
wrap it with something which does.  This wrapper will only be rendered when in edit
mode.

## Custom Inputs

The above will provide a basic textarea for editing the markdown content, which
is not ideal. We'd much rather have a full-featured markdown editor with
preview. Fortunately, Informed makes it easy to create a custom input which will
drop right into our form. Here, we create one based on the open-source
[react-mde](https://github.com/andrerpena/react-mde) package, using `ReactMarkdown`
itself to generate the preview.

```
import React, { useState } from 'react';
import { asField } from 'informed';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

// Use `ReactMarkdown` to render the preview.
const renderHTML = (text: string) => <ReactMarkdown>{text}</ReactMarkdown>;
const generatePreview = (text: string) => Promise.resolve(renderHTML(text));

// Use informed `asField` to wire this to informed.
const MarkdownField = asField(({ fieldState, fieldApi, ...rest }) => {
  const [selectedTab, setSelectedTab] = useState('write');
  const { value } = fieldState;
  const { setValue } = fieldApi;
  const textValue = !value && value !== 0 ? '' : value;
  return (
    <ReactMde
      {...rest}
      value={textValue}
      onChange={setValue}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={generatePreview}
    />
  );
});

export default MarkdownField;
```

Notice that the above code is completely independent of BodilessJS. This input
control could be used in *any* form build with Informed. The informed
documentation provides
[more information and examples of creating custom inputs](https://joepuzzo.github.io/informed/?path=/story/custominputs--creating-custom-inputs).

Now, we can rewrite our `renderForm` to use the above input.

```
const renderForm = () => {
  const { ComponentFormTitle } = useFormUI();
  return (
    <>
      <ComponentFormTitle>Edit Page Body</ComponentFormTitle>
      <MarkdownField field="source" classes={{ reactMde: 'bl-text-black' }} />
    </>
  );
};
```
```










