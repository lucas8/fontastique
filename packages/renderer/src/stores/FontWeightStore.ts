import { computed, makeObservable } from 'mobx';
import { FontWeight } from '~/models';
import { BaseStore } from './BaseStore';
import { RootStore } from './RootStore';

export class FontWeightStore extends BaseStore<FontWeight> {
  constructor(rootStore: RootStore) {
    super(rootStore, FontWeight);
    makeObservable(this);
  }

  @computed
  public get all() {
    return Array.from(this.data.values());
  }
}
