const { BrowserWindow } = require('electron');

let mainWindow;

module.exports = {
    init: async () => {
        mainWindow = new BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
            },
        });

        mainWindow.loadFile('src/engine/index.html');
        console.log('Engine initialized');
    },

    renderPage: (html) => {
        if (!mainWindow) {
            console.error('Engine not initialized');
            return;
        }
        mainWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html)}`);
        console.log('Page rendered in the Engine');
    },
};
