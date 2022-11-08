import { useEffect, useState } from 'react';
import { TSnapshot } from '~/stores';
import { Database, IDBManager } from '~/utils';

export const useSnapshot = (): TSnapshot => {
  const [snapshot, setSnapshot] = useState([]);

  useEffect(() => {
    const setupDatabase = async () => {
      const db = await Database.getConnection();
      const manager = new IDBManager(db);

      if (await manager.shouldBootstrap()) {
        // const systemFontFamilies = window.api.getAvailableFonts().reduce((acc, font) => {
        //   return { [font.family]: { name: font.family }, ...acc };
        // }, []);
        // setSnapshot(systemFontFamilies);
      } else {
      }
    };
    setupDatabase();
  }, []);

  // return snapshot;

  return [
    { __typename: 'Font', name: 'Inter', id: 0 },
    {
      id: 0,
      __typename: 'FontWeight',
      font_id: 0,
      weight: '500',
      italic: false,
      monospace: false,
      path: '/',
      postscriptName: 'Inter V',
    },
    {
      id: 1,
      __typename: 'FontWeight',
      font_id: 0,
      weight: '600',
      italic: false,
      monospace: false,
      path: '/',
      postscriptName: 'Inter VX',
    },
  ];
  // ,
};

/*

  useEffect(() => {
    (async () => {
      const fontCount = await db.transaction(FONTS_STORE_NAME, 'readwrite').objectStore(FONTS_STORE_NAME).count();

      // in the store, skip this step for now
      if (hasInitialized.current === true) {
        return;
      }

      // very crude way of checking if we already have results in the db already
      // THIS WILL BREAK OVER TIME
      // TODO (blocking): add a way to diff fonts in the system, or check the last time we refreshed the db
      if (fontCount === 0) {
        console.log('[useSnapshot] no fonts found, bootstrapping indexes...');

        const systemFontFamilies = window.api.getAvailableFontsSync().reduce((acc, font) => {
          return { [font.family]: { name: font.family, postscriptName: font.postscriptName }, ...acc };
        }, [] as Font[]);
        console.log(systemFontFamilies);
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);

        await Promise.all([...Object.values(systemFontFamilies).map(font => store.put(font))]);
      }

      const fonts = await db.transaction(STORE_NAME, 'readwrite').objectStore(STORE_NAME).getAll();

      console.log(`[useSnapshot] ${fonts.length} fonts found & injected in idb, setting snapshot...`);

      setSnapshot(fonts.map(font => ({ __typename: 'Font', ...font })));

      hasInitialized.current = true;

      return () => db.close();
    })();
  }, []);
*/
