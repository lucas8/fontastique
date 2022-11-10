/**
 * @module preload
 */

import { ipcRenderer, contextBridge } from 'electron';
import { versions } from './versions';

contextBridge.exposeInMainWorld('api', {
  getFonts: () => ipcRenderer.invoke('getFonts'),
});

contextBridge.exposeInMainWorld('versions', { versions });
