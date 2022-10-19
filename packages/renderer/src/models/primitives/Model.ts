import { makeObservable, observable } from 'mobx';
import { createModelId } from '~/utils';

export abstract class Model {
  @observable
  public id: string = createModelId();

  public __typename: string = this.constructor.name;

  store: any;

  constructor(store: any) {
    makeObservable(this);

    this.store = store;
  }
}
