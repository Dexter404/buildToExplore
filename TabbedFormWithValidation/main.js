const electron = require('electron')
const { app, BrowserWindow } = require('electron')

let win = null

app.on('ready', createWindow)
app.on('activate', createWindow)

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

function createWindow() {
    if (win == null)
        win = new BrowserWindow()
    win.loadFile('index.html')
    win.on('closed', () => { win = null })
}