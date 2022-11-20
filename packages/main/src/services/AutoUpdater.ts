import { BrowserWindow } from 'electron';
import { autoUpdater } from 'electron-updater';

export class AutoUpdater {
  log: any;
  window: BrowserWindow;

  constructor(window: BrowserWindow) {
    this.window = window;
    this.log = require('electron-log');

    this.log.transports.file.level = 'debug';
    autoUpdater.logger = this.log;

    this._setupLogs();
    this._listenForUpdates();
  }
  private _listenForUpdates() {
    this.window.on('ready-to-show', () => {
      autoUpdater.checkForUpdatesAndNotify();
    });
  }

  private _setupLogs() {
    autoUpdater.on('checking-for-update', () => {
      this.log.info('Checking for update...');
    });
    autoUpdater.on('update-available', () => {
      this.log.info('Update available.');
    });
    autoUpdater.on('update-not-available', () => {
      this.log.info('Update not available.');
    });
    autoUpdater.on('error', err => {
      this.log.info('Error in auto-updater. ' + err);
    });
    autoUpdater.on('download-progress', progressObj => {
      let log_message = 'Download speed: ' + progressObj.bytesPerSecond;
      log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
      log_message = log_message + ' (' + progressObj.transferred + '/' + progressObj.total + ')';
      this.log.info(log_message);
    });
    autoUpdater.on('update-downloaded', () => {
      this.log.info('Update downloaded');
    });
  }
}
