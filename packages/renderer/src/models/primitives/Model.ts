import { action, makeObservable, observable, set } from 'mobx';
import { BaseStore } from '~/stores/BaseStore';
import { Class } from '~/types';
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

  @action
  public static hydrate<T extends Class<Model<any>>, X extends InstanceType<T>>(this: T, attrs: X) {
    const newModel = new this(attrs.store);

    if (!!attrs) {
      set(newModel, attrs);
    }

    return newModel;
  }
}
