import { action, computed, makeObservable, observable, set } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { Model } from './primitives';

export class Font extends Model<FontStore> {
  public static readonly __typename = 'Font';

  @observable
  public name = '';

  public previewText = 'How vexingly quick daft zebras jump!';

  constructor(store: FontStore, fields: Partial<Font> = {}) {
    super(store);
    makeObservable(this);

    set(this, fields);
  }

  @action.bound
  public setActive() {
    return this.store.setActiveFont(this);
  }

  @computed
  public get weights() {
    return this.store.rootStore.fontWeights.all.filter(fw => fw.font_id === this.id);
  }

  @computed
  public get sortedWeights() {
    return this.weights.sort((a, b) => {
      // sorted by weight, itallic at the bottom
      return a.weight + (a.italic ? 1 : 0) - (b.weight + (b.italic ? 1 : 0));
    });
  }

  @computed
  public get displayIndex() {
    return Array.from(this.store.data.values()).indexOf(this);
  }

  @computed
  public get isActive() {
    return this.store.activeFont?.id === this.id;
  }
}
