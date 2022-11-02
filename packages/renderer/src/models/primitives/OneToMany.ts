import { Model } from './Model';

export const OneToMany = <T extends Model<any>>(pointer: keyof T) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata('fields', model) || {};
    const field = { type: 'one-to-many', target: pointer, on: model };

    Reflect.defineMetadata('fields', { ...fields, [propertyKey]: field }, model);
  };
};

export const ManyToOne = <T extends Model<any>>(pointer: keyof T) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata('fields', model) || {};
    const field = { type: 'many-to-one', target: pointer, on: model };

    Reflect.defineMetadata('fields', { ...fields, [propertyKey]: field }, model);
  };
};
