export interface WeatherService {
	getDailyWeather(lat: number, lng: number): Promise<DailyWeatherResponse>
}

export interface DailyWeatherResponse {
	lat: number
	lon: number
	timezone: string
	timezone_offset: number
	daily: {
		dt: number
		temp: {
			morn: number
			day: number
			eve: number
			night: number
			min: number
			max: number
		}
		feels_like: number
		pressure: number
		humidity: number
		dew_point: number
		clouds: number
		wind_speed: number
		wind_deg: number
		weather: [
			{
				id: number
				main: string
				description: string
				icon: string
			}
		]
	}[]
}
