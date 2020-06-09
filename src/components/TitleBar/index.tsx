import React, { FC } from 'react'
import { remote } from 'electron'

import styles from './index.module.less'
import { Minus, Cross } from '../../assets/icons'
import Sun from '../../assets/icons/Sun'

const TitleBar: FC = () => {
	const handleMinimise = (): void => remote.BrowserWindow.getFocusedWindow().minimize()
	const handleClose = (): void => remote.BrowserWindow.getFocusedWindow().destroy()
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<span className={styles.name}>forecast</span>
				<Sun size={16} />
			</div>
			<div className={styles.buttons}>
				<div className={[styles.button, styles.minus].join(' ')} onClick={handleMinimise}>
					<Minus size={16} />
				</div>
				<div className={[styles.button, styles.close].join(' ')} onClick={handleClose}>
					<Cross size={16} />
				</div>
			</div>
		</div>
	)
}

export default TitleBar
