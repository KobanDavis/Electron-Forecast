import { WeatherService, DailyWeatherResponse } from '../types'

const openWeatherMapURL: string = process.env.OPEN_WEATHER_API_URL
const openWeatherMapAPIKey: string = process.env.OPEN_WEATHER_API_KEY

const weatherService: WeatherService = {
	getDailyWeather: async (lat: number, lng: number): Promise<DailyWeatherResponse> => {
		const part = ['current', 'minutely', 'hourly'].join(',')
		const endpoint = `${openWeatherMapURL}/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=${openWeatherMapAPIKey}&units=metric`
		return fetch(endpoint).then((r) => r.json())
	},
}

export default weatherService
