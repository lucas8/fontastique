import React, { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import type { TStore } from '../models/createStore';
import { createStore } from '../models/createStore';

const StoreContext = createContext<TStore | null>(null);

type StoreProviderProps = {
  children?: React.ReactNode;
};

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const store = useLocalStore(createStore);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const store = useContext(StoreContext);
  if (!store) {
    // TODO: error log this better with a boundery
    throw new Error('useStore must be used within a StoreProvider.');
  }
};
