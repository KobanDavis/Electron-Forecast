import React, { FC, useEffect, useState } from 'react'
import { TitleBar } from './components'
import styles from './index.module.less'

const App: FC = () => {
	const [fadeIn, setFadeIn] = useState<boolean>(false)
	useEffect(() => {
		setTimeout(() => {
			setFadeIn(true)
		})
	})
	return (
		<div className={[styles.wrapper, ...(fadeIn ? [styles.in] : [])].join(' ')}>
			<TitleBar />
			<div className={styles.content}></div>
		</div>
	)
}

export default App
