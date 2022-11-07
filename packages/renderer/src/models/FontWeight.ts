import { observable } from 'mobx';
import { FontWeightStore } from '~/stores/FontWeightStore';
import { Font } from '.';
import { Model, Property } from './primitives';
import { ManyToOne } from './primitives/';

type TFontWeight = 300 | 400 | 500 | 600 | 700;

export class FontWeight extends Model<FontWeightStore> {
  public static readonly __typename = 'FontWeight';

  @observable
  @ManyToOne<Font>('weights')
  public font?: Font;

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

  constructor(store: FontWeightStore) {
    super(store);
  }
}
