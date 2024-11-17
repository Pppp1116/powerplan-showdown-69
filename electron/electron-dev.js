const { spawn } = require('child_process');
const electron = require('electron');
const path = require('path');

// Start Vite dev server
const vite = spawn('npm', ['run', 'dev'], { shell: true });
vite.stdout.on('data', (data) => {
  console.log(`Vite: ${data}`);
});

// Wait for Vite to start before launching Electron
setTimeout(() => {
  // Start Electron
  const electronProcess = spawn(electron, [path.join(__dirname, 'main.ts')], { 
    shell: true,
    env: { ...process.env, NODE_ENV: 'development' }
  });

  electronProcess.stdout.on('data', (data) => {
    console.log(`Electron: ${data}`);
  });

  electronProcess.stderr.on('data', (data) => {
    console.error(`Electron Error: ${data}`);
  });
}, 5000);