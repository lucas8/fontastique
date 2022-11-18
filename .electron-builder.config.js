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
  // afterSign: async context => {
  //   // Mac releases require hardening+notarization: https://developer.apple.com/documentation/xcode/notarizing_macos_software_before_distribution
  //   if (!isDebug && context.electronPlatformName === 'darwin') {
  //     await notarizeMac(context);
  //   }
  // },
  mac: {
    target: 'dmg',
    category: 'public.app-category.utilities',
    hardenedRuntime: true,
    // gatekeeperAssess: true,
  },
  files: ['packages/**/dist/**'],
};

module.exports = config;
