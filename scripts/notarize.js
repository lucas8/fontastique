require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { notarize } = require('electron-notarize');

module.exports = async function (context) {
  // Only notarize the app on Mac OS only.
  if (process.platform !== 'darwin') {
    return;
  }
  console.log('afterSign hook triggered', context);

  // Same appId in electron-builder.
  let appId = 'com.lucasstettner.typescape';

  let appPath = path.join(context.appOutDir, `${context.packager.appInfo.productFilename}.app`);
  if (!fs.existsSync(appPath)) {
    throw new Error(`Cannot find application at: ${appPath}`);
  }

  console.log(`Notarizing ${appId} found at ${appPath}`);

  try {
    await notarize({
      appBundleId: appId,
      appPath: appPath,
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_PASSWORD,
    });
  } catch (error) {
    console.error(error);
  }

  console.log(`Done notarizing ${appId}`);
};
