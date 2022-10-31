import { useEffect, useRef, useState } from 'react';
import * as idb from 'idb';
import { TSnapshot } from '~/stores';

const DB_NAME = 'typescape_snapshot';
const DB_VERSION = 1;
const STORE_NAME = 'fonts';

export const useSnapshot = (): TSnapshot => {
  const [snapshot, setSnapshot] = useState<TSnapshot>([]);
  const hasInitialized = useRef(false);

  useEffect(() => {
    (async () => {
      const db = await idb.openDB(DB_NAME, DB_VERSION, {
        upgrade: udb => {
          if (!udb.objectStoreNames.contains(STORE_NAME)) {
            const fontsOS = udb.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });

            // create the database fields (TODO: generate these at build time from mobx schema)
            fontsOS.createIndex('name', 'name', { unique: false });
            fontsOS.createIndex('updatedAt', 'updatedAt', { unique: false });
          }
        },
      });

      const fontCount = await db.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME).count();

      // if the app rerenders for any reason,we've already injected idb results
      // in the store, skip this step for now
      if (hasInitialized.current === true) {
        return;
      }

      // very crude way of checking if we already have results in the db already
      // THIS WILL BREAK OVER TIME
      // TODO (blocking): add a way to diff fonts in the system, or check the last time we refreshed the db
      if (fontCount === 0) {
        console.log('[useSnapshot] no fonts found, bootstrapping indexes...');

        const systemFonts = window.api.getAvailableFontFamilies();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);

        await Promise.all([...systemFonts.map(name => store.put({ name }))]);
      }

      const fonts = await db.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME).getAll();

      console.log(`[useSnapshot] ${fonts.length} fonts found & injected in idb, setting snapshot...`);

      setSnapshot(fonts.map(({ name, id }) => ({ __typename: 'Font', name, id })));

      hasInitialized.current = true;

      return () => db.close();
    })();
  }, []);

  return snapshot;
};
