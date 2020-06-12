import { app, BrowserWindow, webFrame } from 'electron'
import path from 'path'
import url from 'url'

require('dotenv').config()

let mainWindow: Electron.BrowserWindow | null

const createWindow = (): void => {
	mainWindow = new BrowserWindow({
		minWidth: 400,
		minHeight: 274,
		width: 400,
		height: 274,
		frame: false,
		backgroundColor: '#323437',
		webPreferences: {
			nodeIntegration: true,
		},
	})

	if (process.env.NODE_ENV === 'development') {
		mainWindow.loadURL(`http://localhost:4000`)
	} else {
		mainWindow.loadURL(
			url.format({
				pathname: path.join(__dirname, './index.html'),
				protocol: 'file:',
				slashes: true,
			})
		)
		webFrame.setVisualZoomLevelLimits(1, 1)
	}

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)
app.allowRendererProcessReuse = true
