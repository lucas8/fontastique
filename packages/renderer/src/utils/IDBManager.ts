import { TDatabase } from './Database';

export class IDBManager {
  db: TDatabase;

  constructor(instance: TDatabase) {
    this.db = instance;
  }

  // public async shouldBootstrap() {
  //   const fontCount = await this.db.transaction(FONTS_STORE_NAME, 'readwrite').objectStore(FONTS_STORE_NAME).count();

  //   return fontCount === 0;
  // }
}
