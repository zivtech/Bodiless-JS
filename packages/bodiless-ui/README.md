# `@bodiless/ui`

This package contains shared UI elements for the default Bodiless edit
interface. UI elements which are used by more than one Bodiless package should
be defined here.

## Exposing an "injectible" UI.

In general, any Bodiless component which exposes an edit interface or other
administrative UX should allow injection of the UI elements it needs by
accepting a `ui` prop.  The value for this prop should be a keyed set of
components.  The structure of this object should be defined by a `UI`
interface. For example, consider a component which renders a message:

```
type FullUI = {
  Wrapper: ComponentType<HTMLProps<HTMLDivElement>> | string,
  Text: ComponentType<HTMLProps<HTMLSpanElement>> | string,
  DismissButton: ComponentType<HTMLProps<HTMLButtonElement>> | string,
  Icon: ComponentType<HTMLProps<HTMLSpanElement>> | string.
};

export type UI = Partial<FullUI>;

export type Props = {
  message: string,
  icon: string,
  ui?: UI,
};

const defaultUI: FullUI = {
  Wrapper: 'div',
  Text: 'span',
  DismissButton: 'button',
  Icon: 'i',
};

const getUI = (ui: UI) => ({ ...defaultUI, ...ui });

export const MessageBox = ({ message, icon, ui }) => {
  const { Wrapper, Text, DismissButton, Icon } = getUI(ui);
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Text>{message}</Text>
      <DismissButton />
    </Wrapper>
  );
};
```

## Implementing the UI

A library can now implement the UI by wrapping the "clean" version of the component
with a version which provides styled UI elements (the following example uses the `fclasses`
library to style using tailwind classes):

```
import { stylable, addClasses } from '@bodiless/fclasses';
import { MessageBox as CleanMessageBox, Props } from 'messagebox';

const Div = stylable<HTMLProps<HTMLDivElement>>('div');
const Span = stylable<HTMLProps<HTMLSpanElement>>('span');

const ui: UI = {
  Wrapper: addClasses('bg-black text-white')(Div);
  Icon: addClasses('block material-icon text-xl')(Span);
};

export const MessageBox: FC<Props> = props = <CleanMessageBox {...props} ui={ui} />;
```

Note - here we only provide overrides for two out of the four elements.  The
others will fall back to their defaults.

## Default UI

Each package in the bodiless ecosystem should have a corresponding `-ui`
package which exports a default implementation of the UI for any admin
or editorial interfaces it supplies.  Wherever possible, this package
should make use of shared elements from this basic `bodiless-ui` package.

## Components

### &lt;Spinner /&gt;

Adds the spinner, which centers itself based on its container's dimensions.

You can also override the width and height if you want a bigger or smaller spinner by adding more style rules to the exposed `.bodiless-spinner` class [here](./src/Spinner.css). 

*Properties*

|Name|Type|Default|Description|
|-----|-----|-----|-----|
|color |String | |The css class name, used to control a color of the spinner. |

*Usage:*

```tsx
import { Spinner } from '@bodiless/ui';
import React, { Component } from 'react';

export default class Example extends Component {
  render() {
  return (
      <div>
        <Spinner color="bl-bg-grey" />
      </div>
    );
  }
}
``` 
