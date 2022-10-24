const config = {
  '*.{js,mjs,cjs,ts,mts,cts,tsx}': ['eslint --cache --fix', 'prettier --write --ignore-unknown'],
  '{package-lock.json,packages/**/{*.ts,*.tsx,tsconfig.json}}': ['yarn typecheck'],
};

export default config;
