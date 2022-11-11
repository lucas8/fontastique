/**
 * @module preload
 */

import { v4 as uuid } from 'uuid';
import { ipcRenderer, contextBridge } from 'electron';
import { FontDescriptor } from 'font-scanner';
import { versions } from './versions';

const getInitialSnapshot = async (): Promise<TSnapshot> => {
  const systemFonts: FontDescriptor[] = await ipcRenderer.invoke('getFonts');

  const fonts: Record<string, TSnapshotItem> = {};
  const fontWeights: TSnapshotItem[] = [];

  systemFonts.forEach(font => {
    fonts[font.family] = {
      __typename: 'Font',
      id: fonts[font.family]?.id ?? uuid(),
      name: font.family,
    };

    fontWeights.push({
      __typename: 'FontWeight',
      id: uuid(),
      font_id: fonts[font.family].id,
      weight: font.weight,
      italic: font.italic,
      monospace: font.monospace,
      path: font.path,
      postscriptName: font.postscriptName,
    });
  });

  return [...Object.values(fonts), ...fontWeights];
};

contextBridge.exposeInMainWorld('api', {
  initialSnapshot: getInitialSnapshot(),
});

contextBridge.exposeInMainWorld('versions', { versions });
