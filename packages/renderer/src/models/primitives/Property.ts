type Options = { unique?: boolean };

export const Property = (options?: Options) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata('fields', model) || {};
    const field = { type: 'property', ...options };

    Reflect.defineMetadata('fields', { ...fields, [propertyKey]: field }, model);
  };
};
