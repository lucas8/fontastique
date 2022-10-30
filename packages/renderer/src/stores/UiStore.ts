import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './RootStore';

export class UiStore {
  // if the scrolling is linked to my list
  @observable
  public isScrollBound: boolean = true;

  rootStore: RootStore;

  @action
  public setScrollBound(isScrollBound: boolean) {
    this.isScrollBound = isScrollBound;
  }

  constructor(rootStore: RootStore) {
    makeObservable(this);
    this.rootStore = rootStore;
  }
}
