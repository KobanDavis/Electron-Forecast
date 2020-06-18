import { app, BrowserWindow } from 'electron'
import path from 'path'
import url from 'url'

const root = process.cwd()
const isDev = process.env.NODE_ENV === 'development'
const paths = {
	root,
	asar: path.resolve(root, './resources/app.asar')
}

require('dotenv').config(isDev ? undefined : { path: path.resolve(paths.asar, './.env') })

let mainWindow: Electron.BrowserWindow | null

const rem = 16 // (px)
const cardHeight = 200
const height = 3 * rem + 2 * rem + cardHeight
const createWindow = (): void => {
	mainWindow = new BrowserWindow({
		minWidth: 400,
		minHeight: height,
		width: 400,
		height,
		frame: false,
		backgroundColor: '#323437',
		webPreferences: {
			nodeIntegration: true
		}
	})

	if (isDev) {
		mainWindow.loadURL(`http://localhost:4000/?${process.env.NODE_ENV}`)
	} else {
		mainWindow.loadURL(
			url.format({
				pathname: path.resolve(process.cwd(), './resources/app.asar/dist/react/index.html'),
				protocol: 'file:',
				slashes: true
			})
		)
	}

	mainWindow.on('closed', () => {
		mainWindow = null
	})
}

app.on('ready', createWindow)
app.allowRendererProcessReuse = true
