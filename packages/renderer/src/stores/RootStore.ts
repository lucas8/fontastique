import { FontFamilyStore } from './FontFamilyStore';

export class RootStore {
  fontFamilies: FontFamilyStore;

  constructor() {
    this.fontFamilies = new FontFamilyStore(this);
  }

  // TODO: store cleanup methods
}

export const createRootStore = () => {
  return new RootStore();
};
