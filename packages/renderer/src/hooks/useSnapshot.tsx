import { useEffect, useState } from 'react';
import { Font } from '~/models';
import { TSnapshot } from '~/stores';
import { createTreeFromSystem, Database, IDBManager } from '~/utils';

export const useSnapshot = (): TSnapshot => {
  useEffect(() => {
    const setupDatabase = async () => {
      await Database.getConnection();
    };
    setupDatabase();
  }, []);

  return [{ __typename: 'Font', name: 'Inter', id: 0, postscriptName: 'Inter' }];
  // { __typename: 'FontWeight', font_id: 0, weight: '500', italic: false, monospace: false, postscriptName: 'Inter V' },
};

/*

  useEffect(() => {
    (async () => {
      const fontCount = await db.transaction(FONTS_STORE_NAME, 'readwrite').objectStore(FONTS_STORE_NAME).count();

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
