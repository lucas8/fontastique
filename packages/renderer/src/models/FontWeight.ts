import { observable, set } from 'mobx';
import { FontStore } from '~/stores/FontStore';
import { Font } from '.';
import { Model, OneToOne, Property } from './primitives';

type TFontWeight = 300 | 400 | 500 | 600 | 700;

export class FontWeight extends Model<FontStore> {
  public static __typename = 'FontWeight';

  @observable
  @OneToOne(Font)
  public font?: Font;

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

  constructor(fields: Partial<FontWeight> = {}, store: FontStore) {
    super(store);
    set(this, fields);
  }
}
