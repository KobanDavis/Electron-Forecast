import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

require('dotenv').config()

let mainWindow: Electron.BrowserWindow | null

const createWindow = (): void => {
	mainWindow = new BrowserWindow({
		minWidth: 500,
		minHeight: 200,
		width: 800,
		height: 600,
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
	}

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)
app.allowRendererProcessReuse = true
