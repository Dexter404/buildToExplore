const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

/* References
 * https://github.com/hokein/electron-sample-apps/tree/master/pepper-flash-plugin
 */ 

let ppapi_flash_path = 'C:\\Windows\\System32\\Macromed\\Flash';

// Specify flash path.
// On Windows, it might be /path/to/pepflashplayer.dll
// On OS X, /path/to/PepperFlashPlayer.plugin
// On Linux, /path/to/libpepflashplayer.so
if(process.platform  == 'win32'){
  ppapi_flash_path = path.join(ppapi_flash_path, 'pepflashplayer64_26_0_0_131.dll');
} else if (process.platform == 'linux') {
  ppapi_flash_path = path.join(ppapi_flash_path, 'libpepflashplayer.so');
} else if (process.platform == 'darwin') {
  ppapi_flash_path = path.join(ppapi_flash_path, 'PepperFlashPlayer.plugin');
}

app.commandLine.appendSwitch('ppapi-flash-path', ppapi_flash_path);

// Specify flash version, for example, v18.0.0.203
app.commandLine.appendSwitch('ppapi-flash-version', '26.0.0.131');


/* References
 * https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
 */
//server is required to catch fsCommand from flash files
//so creating a simple server using node.js
let port = 8080;
let connect = require('connect');
let serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(port, function(){
    console.log(`Server running on ${port}...`);
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    'width': 800,
    'height': 600,
    'webPreferences': {'plugins': true, 'webSecurity': false}
  });
  //mainWindow.loadFile('flash-to-javascript.html');
  //mainWindow.loadURL(`http://localhost:${port}/flash-to-javascript.html`);
  mainWindow.loadURL(`http://localhost:${port}/index.html`);
});
