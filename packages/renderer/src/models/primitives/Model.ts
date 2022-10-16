import { makeObservable, observable } from 'mobx';
import { createModelId } from '~/utils';

export abstract class Model {
  @observable
  public id: string = createModelId();

  store: any;

  constructor(store: any) {
    makeObservable(this);

    this.store = store;
  }
}
