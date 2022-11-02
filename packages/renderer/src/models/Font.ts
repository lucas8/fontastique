import { computed, observable, set } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { FontWeight } from './FontWeight';
import { Model, OneToOne } from './primitives';
import { Property } from './primitives/Property';

// TODO: use mobx reactions to save state to the idb

export class Font extends Model<FontStore> {
  public static __typename = 'Font';

  @observable
  @Property()
  public name = '';

  @observable
  @Property()
  public postscriptName = '';

  constructor(fields: Partial<Font> = {}, store: FontStore) {
    super(store);
    set(this, fields);
  }

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
}
