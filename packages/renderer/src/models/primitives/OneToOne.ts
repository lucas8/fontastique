import { Class } from '~/types';
import { Model } from './Model';

export const OneToOne = (reciever: Class<Model<any>>) => {
  return (target: any, propertyKey: string) => {
    const model = target.constructor;
    const fields = Reflect.getMetadata('fields', model) || {};
    const field = { type: 'one-to-one', model: reciever };

    Reflect.defineMetadata('fields', { ...fields, [propertyKey]: field }, model);
  };
};
