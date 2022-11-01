import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './RootStore';

export class UiStore {
  @observable
  isScrollCaptured = false;

  rootStore: RootStore;

  @action
  public setScrollCaptured(isScrollCaptured: boolean) {
    this.isScrollCaptured = isScrollCaptured;
  }

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }
}
