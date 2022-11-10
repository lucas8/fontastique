import { useEffect, useState } from 'react';
import { TSnapshot } from '~/stores';
import { createModelId, Database, IDBManager } from '~/utils';

export const useSnapshot = (): TSnapshot => {
  const [snapshot, setSnapshot] = useState<TSnapshot>([]);

  useEffect(() => {
    const setupDatabase = async () => {
      const db = await Database.getConnection();
      const manager = new IDBManager(db);

      if (await manager.shouldBootstrap()) {
        const fonts = await window.api.getFonts();

        const fontTree = fonts.reduce((prev, curr) => {
          const { weight, italic, monospace, path, postscriptName } = curr;
          const id = prev[curr.family]?.id ?? createModelId();

          return {
            ...prev,
            [curr.family]: {
              __typename: 'Font',
              id,
              name: curr.family,
              weights: (prev[curr.family]?.weights || []).concat({
                id: createModelId(),
                __typename: 'FontWeight',
                font_id: id,
                weight,
                italic,
                monospace,
                path,
                postscriptName,
              }),
            },
          };
        }, {} as any);

        const newSnapshot = Object.values(fontTree).reduce((prev: any, curr: any) => {
          curr.weights.forEach((weight: any) => {
            prev.push(weight);
          });

          delete curr.weights;

          prev.push(curr);

          return prev;
        }, [] as Array<any>);

        console.log(newSnapshot);
        setSnapshot(newSnapshot as any);
      }
    };
    setupDatabase();
  }, []);

  return snapshot;

  // return [
  //   { __typename: 'Font', name: 'Inter', id: '96b0a785-a730-4cb1-bb4d-1f132068b155' },
  //   { __typename: 'Font', name: 'Inter V', id: '6b0a785-a730-4cb1-bb4d-1f132068b155' },
  //   {
  //     font_id: '96b0a785-a730-4cb1-bb4d-1f132068b155',
  //     __typename: 'FontWeight',
  //     weight: '500',
  //     italic: false,
  //     monospace: false,
  //     path: '/',
  //     postscriptName: 'Inter V',
  //   },
  //   {
  //     font_id: '96b0a785-a730-4cb1-bb4d-1f132068b155',
  //     __typename: 'FontWeight',
  //     weight: '600',
  //     italic: false,
  //     monospace: false,
  //     path: '/',
  //     postscriptName: 'Inter VX',
  //   },
  // ];
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
