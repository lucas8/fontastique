import { action, computed, makeObservable, observable } from 'mobx';
import { Font } from '~/models';
import { BaseStore } from './BaseStore';
import { RootStore } from './RootStore';

export class FontStore extends BaseStore<Font> {
  @observable
  public activeFont: Font | null = null;

  constructor(rootStore: RootStore) {
    super(rootStore, Font);
    makeObservable(this);
  }

  @action.bound
  public setActiveFont(font: Font) {
    this.activeFont = font;
  }

  @computed
  public get all() {
    return Array.from(this.data.values());
  }
}
