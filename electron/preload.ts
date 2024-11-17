import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getPowerPlans: () => ipcRenderer.invoke('get-power-plans'),
  setPowerPlan: (guid: string) => ipcRenderer.invoke('set-power-plan', guid),
  runBenchmark: () => ipcRenderer.invoke('run-benchmark'),
  uninstallApp: () => ipcRenderer.invoke('uninstall-app')
});