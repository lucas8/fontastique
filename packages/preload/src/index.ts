/**
 * @module preload
 */

import { getAvailableFontFamilies } from 'electron-font-manager';
import { contextBridge } from 'electron';
import { versions } from './versions';

contextBridge.exposeInMainWorld('api', { getAvailableFontFamilies });
contextBridge.exposeInMainWorld('versions', { versions });
