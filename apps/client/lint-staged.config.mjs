import { resolve, sep } from 'path';

const config = {
  '*.{js,mjs,cjs,ts,mts,cts,tsx}': ['eslint --cache --fix', 'prettier --write --ignore-unknown'],

  /**
   * Run typechecking if any type-sensitive files or project dependencies was changed
   * @param {string[]} filenames
   * @return {string[]}
   */
  '{package-lock.json,packages/**/{*.ts,*.tsx,tsconfig.json}}': ['yarn typecheck'],
};

export default config;
