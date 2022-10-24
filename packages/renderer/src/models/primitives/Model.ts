import { makeObservable, observable } from 'mobx';
import { BaseStore } from '~/stores/BaseStore';
import { createModelId } from '~/utils';

export abstract class Model<T extends BaseStore<any>> {
  @observable
  public id: string = createModelId();

  public store: T;

  constructor(store: T) {
    makeObservable(this);

    this.store = store;
  }
}
