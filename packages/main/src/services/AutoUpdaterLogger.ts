import { AppUpdater } from 'electron-updater';

// TODO: delete this lol
export class AutoUpdaterLogger {
  updater: AppUpdater;
  log: any;

  constructor(autoUpdater: AppUpdater) {
    this.updater = autoUpdater;
    this.log = require('electron-log');
    this.log.transports.file.level = 'debug';

    this.updater.logger = this.log;

    this._setupLogs();
    this.updater.checkForUpdatesAndNotify();
  }

  private _setupLogs() {
    this.updater.on('checking-for-update', () => {
      this.log.info('Checking for update...');
    });
    this.updater.on('update-available', () => {
      this.log.info('Update available.');
    });
    this.updater.on('update-not-available', () => {
      this.log.info('Update not available.');
    });
    this.updater.on('error', err => {
      this.log.info('Error in auto-updater. ' + err);
    });
    this.updater.on('download-progress', progressObj => {
      let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
      log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
      log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
      this.log.info(log_message);
    });
    this.updater.on('update-downloaded', () => {
      this.log.info('Update downloaded');
    });
  }
}
