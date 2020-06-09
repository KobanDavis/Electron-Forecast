import React, { FC, useEffect, useState } from 'react'

import { weatherService } from '../../services'
import { useUserLocation } from '../../providers/UserLocationProvider'
import { HourlyWeatherResponse } from '../../types'

interface HourlyWeatherProps {}

const HourlyWeather: FC<HourlyWeatherProps> = () => {
	const [userLocation] = useUserLocation()
	const [hourlyWeather, setHourlyWeather] = useState<HourlyWeatherResponse>(null)
	useEffect(() => {
		const init = async (): Promise<void> => {
			const weather = await weatherService.getHourlyWeather(
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
	return <div className={null}></div>
}

export default HourlyWeather
