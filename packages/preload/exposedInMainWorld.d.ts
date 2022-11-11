// eslint-disable-next-line
import { FontDescriptor } from 'font-scanner';

declare global {
  interface Window {
    readonly version: number;

    readonly api: {
      initialSnapshot: Promise<TSnapshot>;
    };
  }
}
