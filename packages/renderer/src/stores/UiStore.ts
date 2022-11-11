import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './RootStore';

export class UiStore {
  @observable
  isScrollCaptured = false;

  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }

  @action
  public setScrollCaptured(isScrollCaptured: boolean) {
    this.isScrollCaptured = isScrollCaptured;
  }
}
