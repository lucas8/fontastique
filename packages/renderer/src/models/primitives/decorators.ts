import { Model } from './Model';

type Options = { unique?: boolean };
type ModelFieldMeta =
  | ({
      type: 'property';
    } & Options)
  | { type: 'one-to-many'; pointer: string | number | symbol; typename: string }
  | { type: 'many-to-one'; pointer: string | number | symbol; typename: string };
export type FieldMetadata = Record<string, ModelFieldMeta>;

export const modelFieldsSymbol = Symbol('modelFields');

export const Property = (options?: Options) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata(modelFieldsSymbol, model) || {};
    const field: ModelFieldMeta = { type: 'property', ...options };

    Reflect.defineMetadata(modelFieldsSymbol, { ...fields, [propertyKey]: field }, model);
  };
};

export const OneToMany = <T extends Model<any>>(typename: string, pointer: keyof T) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata(modelFieldsSymbol, model) || {};
    const field: ModelFieldMeta = { type: 'one-to-many', pointer, typename };

    Reflect.defineMetadata(modelFieldsSymbol, { ...fields, [propertyKey]: field }, model);
  };
};

export const ManyToOne = <T extends Model<any>>(pointer: keyof T) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const type = Reflect.getMetadata('design:type', target, propertyKey);
    const fields = Reflect.getMetadata(modelFieldsSymbol, model) || {};
    const field: ModelFieldMeta = { type: 'many-to-one', pointer, typename: type?.name };

    Reflect.defineMetadata(modelFieldsSymbol, { ...fields, [propertyKey]: field }, model);
  };
};
