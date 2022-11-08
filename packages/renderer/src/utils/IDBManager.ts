import { TDatabase } from './Database';

export class IDBManager {
  db: TDatabase;

  constructor(instance: TDatabase) {
    this.db = instance;
  }

  public async shouldBootstrap() {
    const fontCount = await this.db.transaction('Font', 'readwrite').objectStore('Font').count();

    return fontCount === 0;
  }
}
