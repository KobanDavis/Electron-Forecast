import React, { FC, useEffect, useState } from 'react'
import moment from 'moment'

import { weatherService } from '../../services'
import { useUserLocation } from '../../providers/UserLocationProvider'
import { DailyWeatherResponse } from '../../types'
import styles from './index.module.less'
import { Cloudy } from '../../assets/icons/Weather'
// import { useBreakpoints } from '../../hooks'
import Loading from '../Loading'

interface HourlyWeatherProps {}

const DailyWeather: FC<HourlyWeatherProps> = () => {
	const [userLocation] = useUserLocation()
	// const breakpoints = useBreakpoints()

	const [dailyWeather, setDailyWeather] = useState<DailyWeatherResponse>(null)

	useEffect(() => {
		const init = async (): Promise<void> => {
			const weather = await weatherService.getDailyWeather(
				userLocation.coords.latitude,
				userLocation.coords.longitude
			)
			setDailyWeather(weather)
			// Refresh hourly
			setTimeout(init, 3600000)
		}

		init()
	}, [])

	return dailyWeather ? (
		<div className={styles.wrapper}>
			{dailyWeather.daily.map((item, i) => (
				<div className={styles.card} key={i}>
					<div className={styles.weather}>
						<Cloudy />
						<div className={styles.temp}>
							<div className={styles.day}>{Math.round(item.temp.day)}&deg;</div>
							<div className={styles.minmax}>
								{Math.round(item.temp.max)}&deg;↑ • {Math.round(item.temp.min)}&deg;↓
							</div>
						</div>
					</div>
					<div className={styles.description}>
						<div>{i === 0 ? 'today' : moment(item.dt, 'X').format('ddd Do').toLowerCase()}</div>
						<div>{item.weather[0].description}</div>
					</div>
				</div>
			))}
		</div>
	) : (
		<Loading size={4} />
	)
}

export default DailyWeather
