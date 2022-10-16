import { observable, set } from 'mobx';
import { Model } from './primitives';

export class FontFamily extends Model {
  @observable
  public name = '';

  constructor(item: Partial<FontFamily> = {}, store: any) {
    super(store);
    set(this, item);
  }
}
