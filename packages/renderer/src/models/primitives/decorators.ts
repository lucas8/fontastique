import { Model } from './Model';

type Options = { unique?: boolean };
export const modelFieldsSymbol = Symbol('modelFields');

export const Property = (options?: Options) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata(modelFieldsSymbol, model) || {};
    const field = { type: 'property', ...options };

    Reflect.defineMetadata(modelFieldsSymbol, { ...fields, [propertyKey]: field }, model);
  };
};

export const OneToMany = <T extends Model<any>>(typename: string, pointer: keyof T) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata(modelFieldsSymbol, model) || {};
    const field = { type: 'one-to-many', pointer, typename };

    Reflect.defineMetadata(modelFieldsSymbol, { ...fields, [propertyKey]: field }, model);
  };
};

export const ManyToOne = <T extends Model<any>>(typename: string, pointer: keyof T) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata(modelFieldsSymbol, model) || {};
    const field = { type: 'many-to-one', pointer, typename };

    Reflect.defineMetadata(modelFieldsSymbol, { ...fields, [propertyKey]: field }, model);
  };
};
