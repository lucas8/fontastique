/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  appId: 'com.lucasstettner.fontastique',
  productName: 'Fontastique',
  directories: {
    output: 'dist',
    buildResources: 'buildResources',
  },
  mac: {
    entitlements: 'buildResources/entitlements.mac.plist',
    entitlementsInherit: 'buildResources/entitlements.mac.plist',
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
      repo: 'fontastique',
    },
  ],
};

module.exports = config;
