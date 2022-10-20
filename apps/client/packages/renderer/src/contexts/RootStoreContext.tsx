import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { createRootStore, RootStore, TSnapshot } from '~/stores';

export const RootStoreContext = createContext<RootStore | null>(null);

type RootStoreProviderProps = {
  snapshot: TSnapshot;
  children?: React.ReactNode;
};

export const RootStoreProvider: React.FC<RootStoreProviderProps> = ({ children, snapshot }) => {
  const root = useLocalObservable(() => createRootStore(snapshot));

  return <RootStoreContext.Provider value={root}>{children}</RootStoreContext.Provider>;
};
