import { observable, set } from 'mobx';
import { Model } from './primitives';

export class FontFamily extends Model {
  @observable
  public name = '';

  constructor(fields: Partial<FontFamily> = {}, store: any) {
    super(store);
    set(this, fields);
  }
}
