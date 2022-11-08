/**
 * @module preload
 */

import { getAvailableFontsSync } from 'font-scanner';
import { contextBridge } from 'electron';
import { versions } from './versions';

const getAvailableFonts = () => {
  const systemFonts = getAvailableFontsSync();

  return systemFonts;
};

contextBridge.exposeInMainWorld('api', { getAvailableFonts });
contextBridge.exposeInMainWorld('versions', { versions });
