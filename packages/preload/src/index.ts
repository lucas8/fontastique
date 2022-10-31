/**
 * @module preload
 */

import { getAvailableFontsSync } from 'font-scanner';
import { contextBridge } from 'electron';
import { versions } from './versions';

contextBridge.exposeInMainWorld('api', { getAvailableFontsSync });
contextBridge.exposeInMainWorld('versions', { versions });
