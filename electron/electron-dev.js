const { spawn } = require('child_process');
const electron = require('electron');
const path = require('path');

// Start Vite dev server
const vite = spawn('npm', ['run', 'dev'], { 
  shell: true,
  stdio: 'inherit'
});

// Wait for Vite to start before launching Electron
setTimeout(() => {
  // Start Electron
  const electronProcess = spawn(electron, [path.join(__dirname, 'main.ts')], { 
    shell: true,
    env: { ...process.env, NODE_ENV: 'development' },
    stdio: 'inherit'
  });

  // Handle process termination
  const cleanup = () => {
    vite.kill();
    electronProcess.kill();
    process.exit();
  };

  process.on('SIGTERM', cleanup);
  process.on('SIGINT', cleanup);
  process.on('SIGQUIT', cleanup);
}, 5000);