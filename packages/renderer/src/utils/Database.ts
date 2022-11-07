import * as idb from 'idb';
import { dbModels } from '~/models';
import { FieldMetadata, modelFieldsSymbol } from '~/models/primitives';

const DB_NAME = 'typescape_snapshot';
const DB_VERSION = 1;

export type TDatabase = idb.IDBPDatabase<unknown>;

/**
 * this class acts like a proxy for the database (singleton pattern) - it controls
 * the schema and connection models
 */
export class Database {
  private static instance: Promise<TDatabase>;

  public static getConnection() {
    if (this.instance) return this.instance;

    this.instance = idb.openDB(DB_NAME, DB_VERSION, {
      upgrade: udb => {
        dbModels.forEach(model => {
          // create the object stores from the reflected model metadata
          if (!udb.objectStoreNames.contains(model.__typename)) {
            const fields: FieldMetadata = Reflect.getMetadata(modelFieldsSymbol, model);
            // TODO: cleanup typename stuff
            const os = udb.createObjectStore(model.__typename, { keyPath: 'id', autoIncrement: true });

            Object.keys(fields).forEach(fieldName => {
              const field = fields[fieldName];

              if (field.type === 'property') {
                os.createIndex(fieldName, fieldName, { unique: field.unique });
              }
            });
          }
        });
      },
    });

    return this.instance;
  }
}
