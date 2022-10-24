import { action, computed, makeObservable, observable } from 'mobx';
import { Font } from '~/models';
import { BaseStore } from './BaseStore';
import { RootStore } from './RootStore';

export class FontStore extends BaseStore<Font> {
  @observable
  public activeFont: Font | null = null;

  @computed
  get all(): Font[] {
    return Array.from(this.data.values());
  }

  @action
  public setActiveFont(font: Font) {
    this.activeFont = font;
  }

  constructor(rootStore: RootStore) {
    super(rootStore, Font);
    makeObservable(this);
  }
}
