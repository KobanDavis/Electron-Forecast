import React, { FC, useEffect, useState } from 'react'
import moment from 'moment'

import { weatherService } from '../../services'
import { useUserLocation } from '../../providers/UserLocationProvider'
import { DailyWeatherResponse } from '../../types'
import styles from './index.module.less'
import { Cloudy } from '../../assets/icons/Weather'

interface HourlyWeatherProps {}

const HourlyWeather: FC<HourlyWeatherProps> = () => {
	const [userLocation] = useUserLocation()
	const [hourlyWeather, setHourlyWeather] = useState<DailyWeatherResponse>(null)
	useEffect(() => {
		const init = async (): Promise<void> => {
			const weather = await weatherService.getDailyWeather(
				userLocation.coords.latitude,
				userLocation.coords.longitude
			)
			setHourlyWeather(weather)
			// Refresh hourly
			setTimeout(init, 3600000)
		}

		init()
	}, [])
	console.log(hourlyWeather)
	return hourlyWeather ? (
		<div className={styles.wrapper}>
			{hourlyWeather.daily.map((item, i) => (
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
	) : null
}

export default HourlyWeather
