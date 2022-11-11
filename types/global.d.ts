declare module 'electron-font-manager' {
  export function getAvailableFontFamilies(): string[];
}

type TSnapshotItem = { __typename: string; [key: string]: any };
type TSnapshot = Array<TSnapshotItem>;
