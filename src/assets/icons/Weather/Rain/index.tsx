import React, { FC } from 'react'

interface RainProps {}

const Rain: FC<RainProps> = (props) => {
	return (
		<svg width='240' height='240' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
			<path d='M 6.481 23.999 L 5.071 22.589 L 7.661 19.999 L 9.071 21.409 L 6.481 23.999 Z M 14.024 21.409 L 12.614 19.999 L 10.024 22.589 L 11.434 23.999 L 14.024 21.409 Z M 18.899 21.409 L 17.489 19.999 L 14.899 22.589 L 16.309 23.999 L 18.899 21.409 Z'></path>
		</svg>
	)
}

export default Rain
