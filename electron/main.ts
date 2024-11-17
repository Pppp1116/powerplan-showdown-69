import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.ts')
    }
  });

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('get-power-plans', async () => {
    try {
      const { stdout } = await execAsync('powercfg /list');
      // Parse the output and return power plans
      const plans = stdout.split('\n')
        .filter(line => line.includes('Power Scheme GUID'))
        .map(line => {
          const match = line.match(/: ([\w-]+)\s+\((.*?)\)/);
          if (match) {
            return {
              id: match[1],
              name: match[2].trim(),
              processorPerformance: 90,
              systemCooling: 80,
              hardDiskTimeout: 20,
              wirelessAdapterPower: "Medium",
              usbSettings: "Balanced",
              pciExpressPower: "Moderate savings",
              isCustom: false
            };
          }
          return null;
        })
        .filter(Boolean);
      return plans;
    } catch (error) {
      console.error('Error getting power plans:', error);
      return [];
    }
  });

  ipcMain.handle('set-power-plan', async (_, guid: string) => {
    try {
      await execAsync(`powercfg /setactive ${guid}`);
      return true;
    } catch (error) {
      console.error('Error setting power plan:', error);
      return false;
    }
  });

  ipcMain.handle('run-benchmark', async () => {
    // Implement actual benchmark logic here
    return {
      cpuScore: Math.random() * 1000 + 8000,
      gpuScore: Math.random() * 1000 + 12000,
      memoryScore: Math.random() * 1000 + 5000,
      diskScore: Math.random() * 1000 + 3000,
      networkScore: Math.random() * 1000 + 2000,
      timestamp: Date.now()
    };
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});