import React, { FC } from 'react'

interface MinusProps {
	size?: number | string
}

const Minus: FC<MinusProps> = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={props.size || 24} height={props.size || 24} viewBox='0 0 24 24'>
			<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-14v-4h14v4z' />
		</svg>
	)
}

export default Minus
