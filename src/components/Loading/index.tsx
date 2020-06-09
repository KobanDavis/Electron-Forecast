import React, { FC, useEffect, useState } from 'react'

import styles from './index.module.less'

interface LoadingProps {
	size: number
}

const Loading: FC<LoadingProps> = (props) => {
	const size = (props.size || 2) * 16
	const borderWidth = size / 8
	const [backgroundColor, setBackgroundColor] = useState('rgba(255, 255, 255, 0)')

	useEffect(() => {
		const timeout = setTimeout(() => setBackgroundColor('rgba(0, 0, 0, 0.5)'), 0)
		return (): void => clearTimeout(timeout)
	}, [])

	return (
		<div className={styles.wrapper} style={{ backgroundColor }}>
			<div
				className={styles.loader}
				style={{
					width: size,
					height: size,
					border: `${borderWidth}px solid rgba(0, 0, 0, 0.05)`,
					borderTop: `${borderWidth}px solid #5a5a5a`,
				}}
			/>
		</div>
	)
}

export default Loading
