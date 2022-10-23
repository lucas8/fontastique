interface Window {
  readonly version: number;

  readonly api: { getAvailableFontFamilies: () => string[] };
}
