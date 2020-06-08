import React, { createContext, useContext, ComponentType as CT } from 'react';
import { get } from 'lodash';

const DrupalDataContext = createContext<any>({});

export const useDrupalNode = () => useContext(DrupalDataContext);

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

export const withDrupalNode = (path?: string) => <P extends object>(Component: CT<P>) => {
  const WithDrupalNode = ({ drupalNodeKey, ...rest }: P & { drupalNodeKey?: string }) => {
    const oldNode = useContext(DrupalDataContext);
    const key = drupalNodeKey || path;
    if (!key) {
      return <Component {...rest as P} />;
    }
    const newNode = get(oldNode, key, {});
    return (
      <DrupalDataContext.Provider value={newNode}>
        <Component {...rest as P} />
      </DrupalDataContext.Provider>
    );
  };
  return WithDrupalNode;
};
