import { computed, observable, set } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { Model } from './primitives';

export class Font extends Model<FontStore> {
  @observable
  public name = '';

  // this repersents the type of the object in the db
  public static __typename = 'Font';

  @computed
  public get scrollIndex() {
    return Array.from(this.store.data.values()).indexOf(this);
  }

  @computed
  public get isActive() {
    return this.store.activeFont?.id === this.id;
  }

  @computed
  get isNonActiveDarkCard() {
    return this.store.rootStore.ui.isScrollCaptured && !this.isActive;
  }

  constructor(fields: Partial<Font> = {}, store: FontStore) {
    super(store);
    set(this, fields);
  }
}
