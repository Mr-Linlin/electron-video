import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    // fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },

  });
  // 接收渲染进程的消息
  ipcMain.on('communication', (event, request) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    if (request) {
      switch (request.type) {
        case 'Maximize'://开启窗口最大化
          win.maximize()
          break;
        case 'Minimize'://开启窗口最小化
          win.minimize()
          break;
        case 'WillResize'://窗口缩小
          win.unmaximize()
          break
        case 'CLosed'://关闭窗口
          win.close()
          break
      }
    }

  })
  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
    // mainWindow.webContents.openDevTools();

  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
