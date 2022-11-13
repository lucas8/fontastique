import { computed, makeObservable, observable, set } from 'mobx';
import { FontWeightStore } from '~/stores/FontWeightStore';
import { Model } from './primitives';

export type TFontWeight = 300 | 400 | 500 | 600 | 700;

export class FontWeight extends Model<FontWeightStore> {
  public static readonly __typename = 'FontWeight';

  @observable
  public font_id = '';

  @observable
  public path = '';

  @observable
  public weight: TFontWeight = 400;

  @observable
  public italic = false;

  @observable
  public monospace = false;

  @observable
  public postscriptName = '';

  constructor(store: FontWeightStore, fields: Partial<FontWeight> = {}) {
    super(store);
    makeObservable(this);

    set(this, fields);
  }

  @computed
  public get font() {
    return this.store.rootStore.fonts.all.find(font => font.id === this.font_id);
  }
}
