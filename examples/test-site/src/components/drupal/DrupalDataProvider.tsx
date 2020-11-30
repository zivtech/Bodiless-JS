import React, { createContext, useContext, ComponentType as CT } from 'react';
import { get } from 'lodash';

const DrupalDataContext = createContext<any>({});

type DrupalNodeKeyProps = {
  drupalNodeKey?: string,
};

export const useDrupalNode = <
  D extends object = any,
  P extends DrupalNodeKeyProps = DrupalNodeKeyProps
>(props: P) => {
  const { drupalNodeKey } = props;
  const node = useContext(DrupalDataContext);
  const finalNode = drupalNodeKey !== undefined ? get(node, drupalNodeKey, {}) : node;
  return finalNode as D;
};

export const withDrupalData = (P: CT<any>) => {
  const WithDrupalData = ({ data, ...rest }: any) => {
    const { Drupal, ...restData } = data;
    return (
      <DrupalDataContext.Provider value={Drupal}>
        <P data={restData} {...rest} />
      </DrupalDataContext.Provider>
    );
  };
  return WithDrupalData;
};

export const withDrupalNode = (key?: string) => <P extends object>(Component: CT<P>) => {
  const WithDrupalNode = (props: P) => {
    const oldNode = useContext(DrupalDataContext);
    if (!key) {
      return <Component {...props} />;
    }
    const newNode = get(oldNode, key, {});
    return (
      <DrupalDataContext.Provider value={newNode}>
        <Component {...props} />
      </DrupalDataContext.Provider>
    );
  };
  return WithDrupalNode;
};
