import { app } from 'electron';
import path from 'path';
import fs from 'fs';

export class Installer {
  private installationPath: string;
  private appDataPath: string;

  constructor() {
    this.installationPath = app.getPath('exe');
    this.appDataPath = path.join(app.getPath('appData'), app.getName());
  }

  async checkFirstRun(): Promise<boolean> {
    try {
      if (!fs.existsSync(this.appDataPath)) {
        fs.mkdirSync(this.appDataPath, { recursive: true });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking first run:', error);
      return false;
    }
  }

  async uninstall(): Promise<boolean> {
    try {
      // Remove app data
      if (fs.existsSync(this.appDataPath)) {
        fs.rmSync(this.appDataPath, { recursive: true, force: true });
      }

      // Remove desktop shortcut
      const desktopPath = app.getPath('desktop');
      const shortcutPath = path.join(desktopPath, `${app.getName()}.lnk`);
      if (fs.existsSync(shortcutPath)) {
        fs.unlinkSync(shortcutPath);
      }

      // Remove start menu shortcut
      const startMenuPath = path.join(app.getPath('appData'), 'Microsoft', 'Windows', 'Start Menu', 'Programs', app.getName());
      if (fs.existsSync(startMenuPath)) {
        fs.rmSync(startMenuPath, { recursive: true, force: true });
      }

      return true;
    } catch (error) {
      console.error('Error during uninstallation:', error);
      return false;
    }
  }
}