import { computed, observable, set } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { Model } from './primitives';

export class Font extends Model<FontStore> {
  @observable
  public name = '';

  @computed
  get isActive() {
    return this.store.activeFont?.id === this.id;
  }

  constructor(fields: Partial<Font> = {}, store: FontStore) {
    super(store);
    set(this, fields);
  }
}
