import { action, makeObservable, observable, set, toJS } from 'mobx';
import { FieldMetadata, Model, modelFieldsSymbol } from '~/models/primitives';
import { BaseStore } from './BaseStore';
import { TSnapshotItem } from './RootStore';

type ILatentEntityOperation = {
  on: string;
  operation: 'one-to-many' | 'many-to-one';
  instance: Model<any>;
  field: string;
};

export class HydrationStore {
  @observable
  private latentEntityOperations: Array<ILatentEntityOperation> = new Array();

  constructor() {
    makeObservable(this);
  }

  @action
  public hydrateStore(store: BaseStore<any>, snapshot: TSnapshotItem[]) {
    return snapshot.map(attrs => this.hydrateModel(store, attrs));
  }

  @action
  public resolveLatentEntityOperations(models: Model<any>[]) {
    models.forEach(model => {
      const operations = this.latentEntityOperations.filter(op => op.on === (model.constructor as any).__typename);

      operations.forEach(op => {
        if (op.operation === 'many-to-one') {
          set(model, { [op.field]: [...((model as any)[op.field] || []), op.instance] });
        }
        if (op.operation === 'one-to-many') {
          // checking if our id matches the operation we found
          if ((model as any)[op.field + '_id'] !== op.instance.id) {
            return;
          }

          set(model, { [op.field]: op.instance });
        }
      });
    });
  }

  @action
  private hydrateModel(store: BaseStore<any>, attrs: Record<string, any>): Model<any> {
    const model = store.model;
    const fields: FieldMetadata = Reflect.getMetadata(modelFieldsSymbol, model);
    const instance = new model(store);

    Object.keys(fields)
      .sort(a => (fields[a].type === 'property' ? 1 : -1))
      .forEach((fieldName: string) => {
        const field = fields[fieldName];

        if (field.type === 'property') {
          set(instance, { [fieldName]: attrs[fieldName] });
        } else {
          this.latentEntityOperations.push({
            on: field.typename,
            operation: field.type,
            instance,
            field: field.pointer.toString(),
          });
        }
      });

    return instance;
  }
}
