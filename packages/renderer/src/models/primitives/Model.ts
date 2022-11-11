import { makeObservable, observable } from 'mobx';
import { BaseStore } from '~/stores/BaseStore';
import { createModelId } from '~/utils';
import { Property } from './decorators';

export abstract class Model<T extends BaseStore<any>> {
  public static readonly __typename: string;

  @observable
  @Property()
  public id: string = createModelId();

  public store: T;

  constructor(store: T) {
    makeObservable(this);

    this.store = store;
  }
}
