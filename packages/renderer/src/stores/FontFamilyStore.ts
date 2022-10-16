import { computed } from 'mobx';
import { FontFamily } from '~/models';
import { BaseStore } from './BaseStore';
import { RootStore } from './RootStore';

export class FontFamilyStore extends BaseStore<FontFamily> {
  constructor(rootStore: RootStore) {
    super(rootStore, FontFamily);
  }

  @computed
  get all(): FontFamily[] {
    return Array.from(this.data.values());
  }
}
