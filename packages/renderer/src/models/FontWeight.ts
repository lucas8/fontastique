import { computed, observable, set } from 'mobx';
import { FontWeightStore } from '~/stores/FontWeightStore';
import { Model, Property } from './primitives';

export type TFontWeight = 300 | 400 | 500 | 600 | 700;

export class FontWeight extends Model<FontWeightStore> {
  public static readonly __typename = 'FontWeight';

  @Property()
  public font_id?: string;

  @observable
  @Property()
  public path = '';

  @observable
  @Property()
  public weight: TFontWeight = 400;

  @observable
  @Property()
  public italic = false;

  @observable
  @Property()
  public monospace = false;

  @observable
  @Property()
  public postscriptName = '';

  @computed
  public get font() {
    return this.store.rootStore.fonts.all.find(font => font.id === this.font_id);
  }

  constructor(store: FontWeightStore, fields: Partial<FontWeight> = {}) {
    super(store);
    set(this, fields);
  }
}
