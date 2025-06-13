const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 600,
        height: 400,
        transparent: true,
        frame: false,
        hasShadow: false,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.loadFile('index.html');
}


app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('close-app', () => {
    BrowserWindow.getAllWindows().forEach(win => win.close());
});
