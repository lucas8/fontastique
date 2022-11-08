import { getAvailableFontsSync } from 'font-scanner';

declare global {
  interface Window {
    readonly version: number;

    readonly api: { getAvailableFonts: typeof getAvailableFontsSync };
  }
}
