/**
 * @module preload
 */

import * as fontManager from 'electron-font-manager';
import { contextBridge } from 'electron';

const getAvailableFontFamilies = () => fontManager.getAvailableFontFamilies();

contextBridge.exposeInMainWorld('api', { getAvailableFontFamilies });
