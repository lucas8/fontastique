import { RootStore } from './RootStore';

export const createRootStore = () => {
  return new RootStore();
};

export type TRootStore = ReturnType<typeof createRootStore>;
