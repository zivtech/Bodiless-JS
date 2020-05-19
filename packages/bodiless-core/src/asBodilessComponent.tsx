import React, {
  ComponentType as CT,
} from 'react';
import {
  pick, omit, identity, flowRight,
} from 'lodash';
import withNode, { withNodeKey } from './withNode';
import {
  withNodeDataHandlers, withoutProps, withContextActivator, withLocalContextMenu,
} from './hoc';
import { ifReadOnly, ifEditable } from './withEditToggle';
import withEditButton, { EditButtonOptions } from './withEditButton';
import withData from './withData';

type Options<P, D> = EditButtonOptions<P, D> & {
  activateEvent?: string,
  Wrapper?: CT<any>|string,
};

/**
 * Given an event name and a wrapper component, provides an HOC which will wrap the base component
 * the wrapper, passing the event prop to the wrapper, and all other props to the base compoent.
 * @param event The event name.
 * @param Wrapper The component to wrap with
 */
const withActivatorWrapper = <P extends object>(event: string, Wrapper: CT<any>|string) => (
  (Component: CT<P>) => (props: P) => {
    const eventProp = pick(props, event);
    const rest = omit(props, event) as P;
    return (
      <Wrapper {...eventProp}>
        <Component {...rest} />
      </Wrapper>
    );
  }
);

/**
 * Makes a component "Bodiless" by connecting it to the Bodiless-jS data flow and giving it
 * a form which can be used to edit its props. Returns a standard `asBodiless...` function,
 * which takes `nodeKey` and `defaultData` parameters, and returns an HOC which yields an editable
 * version of the base component.
 *
 * @param options An object describing how this component should be made editable.
 */
const asBodilessComponent = <P extends object, D extends object>(options: Options<P, D>) => {
  const { activateEvent = 'onClick', Wrapper, ...rest } = options;
  return (nodeKey?: string, defaultData?: D) => flowRight(
    withNodeKey(nodeKey),
    withNode,
    withNodeDataHandlers(defaultData || {}),
    ifReadOnly(
      withoutProps(['setComponentData']),
    ),
    ifEditable(
      withEditButton(rest),
      withContextActivator(activateEvent),
      Wrapper ? withActivatorWrapper(activateEvent, Wrapper) : identity,
      withLocalContextMenu,
    ),
    withData,
  );
};

export default asBodilessComponent;
