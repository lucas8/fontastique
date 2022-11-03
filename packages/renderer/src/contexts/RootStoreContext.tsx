import React, { createContext } from 'react';
import { useLocalObservable } from 'mobx-react-lite';
import { createRootStore, RootStore, TSnapshot } from '~/stores';

// singleton reference to our store
let rootStore: RootStore;

export const RootStoreContext = createContext<RootStore | null>(null);

type RootStoreProviderProps = {
  snapshot: TSnapshot;
  children?: React.ReactNode;
};

export const RootStoreProvider: React.FC<RootStoreProviderProps> = ({ children, snapshot }) => {
  const root = useLocalObservable(() => (!!rootStore ? rootStore : (rootStore = createRootStore(snapshot))));

  return <RootStoreContext.Provider value={root}>{children}</RootStoreContext.Provider>;
};
