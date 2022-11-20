/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'com.lucasstettner.typescape',
  productName: 'Typescape',
  directories: {
    output: 'dist',
    buildResources: 'buildResources',
  },
  mac: {
    target: 'default',
    category: 'public.app-category.utilities',
    hardenedRuntime: true,
    gatekeeperAssess: false,
  },
  afterSign: './scripts/notarize.js',
  files: ['packages/**/dist/**'],
  dmg: {
    sign: false,
  },
  publish: [
    {
      provider: 'github',
      owner: 'lucas8',
      repo: 'typescape',
    },
  ],
};

module.exports = config;
