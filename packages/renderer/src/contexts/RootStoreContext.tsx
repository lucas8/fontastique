import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { createRootStore, RootStore } from '~/stores';

export const RootStoreContext = createContext<RootStore | null>(null);

type RootStoreProviderProps = {
  children?: React.ReactNode;
};

export const RootStoreProvider: React.FC<RootStoreProviderProps> = ({ children }) => {
  const root = useLocalObservable(createRootStore);

  return <RootStoreContext.Provider value={root}>{children}</RootStoreContext.Provider>;
};
