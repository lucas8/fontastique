type Options = { unique?: boolean };
type ModelFieldMeta = {
  type: 'property';
} & Options;

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
