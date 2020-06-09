export interface WeatherService {
	getHourlyWeather(lat: number, lng: number): Promise<HourlyWeatherResponse>
}

export interface HourlyWeatherResponse {}
