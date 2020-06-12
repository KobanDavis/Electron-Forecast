import React, { FC } from 'react'

import styles from './index.module.less'

interface CloudyProps {}

const Cloudy: FC<CloudyProps> = (props) => {
	return (
		<svg width='96' height='96' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
			<g className={styles.sun} aria-label='Sun' transform='matrix(1, 0, 0, 1, 0, -2)'>
				<circle cx='9.032' cy='11.73' r='4.864'></circle>
				<path d='M 2.396 12 L 0 12 L 0 10 L 2.396 10 L 2.396 12 Z M 10 5.542 L 10 2 L 8 2 L 8 5.542 L 10 5.542 Z M 5.207 6.418 L 3.051 4.262 L 1.637 5.676 L 3.793 7.832 L 5.207 6.418 Z M 14.668 4.022 L 12.553 6.136 L 13.967 7.55 L 16.082 5.436 L 14.668 4.022 Z M 2.968 14.929 L 0.77 16.848 L 2.073 18.365 L 4.271 16.446 L 2.968 14.929 Z'></path>
			</g>
			<g className={styles.cloud} aria-label='Cloud' transform='matrix(1, 0, 0, 1, 0, -2)'>
				<rect x='6.5' y='15.033' width='16.051' height='5.569'></rect>
				<rect x='10.312' y='9.91' width='8.472' height='5.286'></rect>
				<path d='M 24 17.722 C 24 20.084 22.05 22 19.646 22 L 9.354 22 C 6.95 22 5 20.084 5 17.722 C 5 16.952 5.253 14.362 8.815 13.573 C 8.931 8.553 13.764 8 14.5 8 C 17.671 8 20.253 10.443 20.421 13.516 C 22.455 13.875 24 15.621 24 17.722 Z M 22 17.722 C 22 15.646 20.021 15.104 18.511 15.21 C 18.729 13.771 18.271 10 14.5 10 C 10.625 10 10.438 13.854 10.489 15.209 C 9.104 15.125 7 15.604 7 17.722 C 7 18.978 8.056 20 9.354 20 L 19.645 20 C 20.944 20 22 18.978 22 17.722 Z'></path>
			</g>
			<g className={styles.rain} aria-label='Rain'>
				<path d='M 8.541 23.998 L 7.131 22.588 L 9.721 19.998 L 11.131 21.408 L 8.541 23.998 Z M 16.084 21.408 L 14.674 19.998 L 12.084 22.588 L 13.494 23.998 L 16.084 21.408 Z M 20.959 21.408 L 19.549 19.998 L 16.959 22.588 L 18.369 23.998 L 20.959 21.408 Z'></path>
			</g>
		</svg>
	)
}

export default Cloudy
