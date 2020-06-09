import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.less'
import { UserLocationProvider } from './providers/UserLocationProvider'

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

const AppWithProviders: FC = () => (
	<UserLocationProvider>
		<App />
	</UserLocationProvider>
)

ReactDOM.render(<AppWithProviders />, mainElement)
