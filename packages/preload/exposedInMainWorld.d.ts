import { FontDescriptor } from 'font-scanner';

declare global {
  interface Window {
    readonly version: number;

    readonly api: {
      getFonts: () => Promise<FontDescriptor[]>;
    };
  }
}
