import { makeObservable, observable } from 'mobx';
import { BaseStore } from '~/stores/BaseStore';

export abstract class Model<T extends BaseStore<any>> {
  public static readonly __typename: string;

  @observable
  public id = '';

  public store: T;

  constructor(store: T) {
    makeObservable(this);

    this.store = store;
  }
}
