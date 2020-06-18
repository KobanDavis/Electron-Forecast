import { useState, useEffect } from 'react'

import styles from './index.module.less'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
type Breakpoints = Record<Breakpoint, boolean>

/**
 * A custom hook used to check if the window's width fits a certain breakpoint.
 * Returns an object of breakpoints and booleans to indicate if they correspond to the window width.
 */
const useBreakpoints = (): Breakpoints => {
	const [width, setWidth] = useState<number>(window.innerWidth)

	// Register an event listener on mount, remove on unmount, updates width on window resize
	useEffect(() => {
		const handleResize = (): void => setWidth(window.outerWidth)
		window.addEventListener('resize', handleResize)
		return (): void => window.removeEventListener('resize', handleResize)
	}, [])

	return Object.entries(styles).reduce<Breakpoints>((breakpoints, [size, value]) => {
		// remove 'px' and convert to number
		const breakpoint = Number(value.slice(0, -2))
		breakpoints[size as Breakpoint] = breakpoint > width
		return breakpoints
	}, {} as any)
}

export default useBreakpoints
