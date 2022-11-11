import { computed, observable, set } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { Model, Property } from './primitives';

export class Font extends Model<FontStore> {
  public static readonly __typename = 'Font';

  @observable
  @Property()
  public name = '';

  constructor(store: FontStore, fields: Partial<Font> = {}) {
    super(store);
    set(this, fields);
  }

  @computed
  public get weights() {
    return this.store.rootStore.fontWeights.all.filter(fw => fw.font_id === this.id);
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
