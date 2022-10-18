import { FontFamilyStore } from './FontFamilyStore';

export class RootStore {
  fontFamilies: FontFamilyStore;

  constructor() {
    this.fontFamilies = new FontFamilyStore(this);
  }

  // 1. check store checks if data is in the indexdb
  // 2. if not, it fetches it from from the preload
  // 3. if it is, loads into mobx, and fetches relations

  // TODO: store cleanup methods
}

export const createRootStore = () => {
  return new RootStore();
};
