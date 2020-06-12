import React, { FC, useEffect, useState } from 'react'
import { TitleBar, Loading, DailyWeather } from './components'
import styles from './index.module.less'
import { useUserLocation } from './providers/UserLocationProvider'

const getUserPosition = (): Promise<Position> => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	})
}

const App: FC = () => {
	const [fadeIn, setFadeIn] = useState<boolean>(false)
	const [userLocation, setUserLocation] = useUserLocation()
	useEffect(() => {
		const init = async (): Promise<void> => {
			let location: Position = JSON.parse(localStorage.getItem('userLocation'))
			// 12 hours
			if (!location || location.timestamp < Date.now() + 4.32e7) {
				location = await getUserPosition()
				// Location is non-enumerable, so we have to reconsturct the object from the readonly properties manually
				location = {
					timestamp: location.timestamp,
					coords: {
						accuracy: location.coords.accuracy,
						altitude: location.coords.altitude,
						altitudeAccuracy: location.coords.altitudeAccuracy,
						heading: location.coords.heading,
						latitude: location.coords.latitude,
						longitude: location.coords.longitude,
						speed: location.coords.speed,
					},
				}
				localStorage.setItem('userLocation', JSON.stringify(location))
			}
			setUserLocation(location)
			setTimeout(setFadeIn, 0, true)
		}

		init()
	}, [])
	return (
		<div className={[styles.wrapper, ...(fadeIn ? [styles.in] : [])].join(' ')}>
			<TitleBar />
			{userLocation ? (
				<div className={styles.content}>
					<DailyWeather />
				</div>
			) : (
				<Loading size={2} />
			)}
		</div>
	)
}

export default App
