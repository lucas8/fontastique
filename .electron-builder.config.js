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
  dmg: {
    background: null,
    backgroundColor: '#DFD0BF',
    window: {
      width: 400,
      height: 300,
    },
    contents: [
      {
        x: 100,
        y: 100,
      },
      {
        x: 300,
        y: 100,
        type: 'link',
        path: '/Applications',
      },
    ],
  },
  mac: {
    target: 'dmg',
    category: 'public.app-category.utilities',
    hardenedRuntime: true,
    // gatekeeperAssess: true,
  },
  win: {
    target: 'nsis',
  },
  linux: {
    target: 'AppImage',
    category: 'Utility',
  },
  files: ['packages/**/dist/**'],
};

module.exports = config;
