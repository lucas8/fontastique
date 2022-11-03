import { observable } from 'mobx';
import { FontWeightStore } from '~/stores/FontWeightStore';
import { Font } from '.';
import { Model, Property } from './primitives';
import { ManyToOne } from './primitives/';

type TFontWeight = 300 | 400 | 500 | 600 | 700;

export class FontWeight extends Model<FontWeightStore> {
  public static readonly __typename = 'FontWeight';

  @observable
  @ManyToOne<Font>('Font', 'weights')
  public font?: Font;

  @Property()
  public font_id?: string;

  @observable
  @Property()
  public path: string = '';

  @observable
  @Property()
  public weight: TFontWeight = 400;

  @observable
  @Property()
  public italic: boolean = false;

  @observable
  @Property()
  public monospace: boolean = false;

  @observable
  @Property()
  public postscriptName: string = '';

  constructor(store: FontWeightStore) {
    super(store);
  }
}
