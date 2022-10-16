import { makeAutoObservable } from 'mobx';

export class RootStore {
  constructor() {
    makeAutoObservable(this);
  }

  testing = true;

  // TODO: store cleanup
}
