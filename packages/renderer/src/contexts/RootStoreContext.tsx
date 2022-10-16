import React, { createContext, useContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { createRootStore, TRootStore } from '~/stores/createRootStore';

const RootStoreContext = createContext<TRootStore | null>(null);

type RootStoreProviderProps = {
  children?: React.ReactNode;
};

export const RootStoreProvider: React.FC<RootStoreProviderProps> = ({ children }) => {
  const root = useLocalObservable(createRootStore);

  return <RootStoreContext.Provider value={root}>{children}</RootStoreContext.Provider>;
};

export const useStore = () => {
  const store = useContext(RootStoreContext);

  if (!store) {
    // TODO: error log this better with a boundery
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};
