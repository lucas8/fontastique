import { computed, observable } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { FontWeight } from './FontWeight';
import { Model, OneToMany, Property } from './primitives';

export class Font extends Model<FontStore> {
  public static readonly __typename = 'Font';

  @observable
  @OneToMany<FontWeight>('FontWeight', 'font')
  public weights: Array<FontWeight> = [];

  @observable
  @Property()
  public name = '';

  constructor(store: FontStore) {
    super(store);
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
