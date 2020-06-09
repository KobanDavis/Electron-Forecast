import { WeatherService, HourlyWeatherResponse } from '../types'

const openWeatherMapURL: string = process.env.OPEN_WEATHER_API_URL
const openWeatherMapAPIKey: string = process.env.OPEN_WEATHER_API_KEY

const weatherService: WeatherService = {
	getHourlyWeather: async (lat: number, lng: number): Promise<HourlyWeatherResponse> => {
		const part = ['current', 'minutely', 'daily'].join(',')
		const endpoint = `${openWeatherMapURL}/onecall?lat=${lat}&lon=${lng}&exclude=${part}&appid=${openWeatherMapAPIKey}`
		return fetch(endpoint).then((r) => r.json())
	},
}

export default weatherService
