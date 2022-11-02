import { computed, observable, set } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { FontWeight } from './FontWeight';
import { Model } from './primitives';
import { OneToMany } from './primitives/OneToMany';
import { Property } from './primitives/Property';

export class Font extends Model<FontStore> {
  public static readonly __typename = 'Font';

  @observable
  @OneToMany<FontWeight>('font')
  public weights: FontWeight[] = [];

  @observable
  @Property()
  public name = '';

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
