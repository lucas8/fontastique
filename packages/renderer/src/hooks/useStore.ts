import { useContext } from 'react';
import { RootStoreContext } from '~/contexts';

export const useStore = () => {
  const store = useContext(RootStoreContext);

  if (!store) {
    // TODO: error log this better with a boundery
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};
