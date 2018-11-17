import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()





export default class WeatherController {
	constructor() {
		this.getWeather()
	}

	getWeather() {
		weatherService.getWeather(weather => {
			let template = ""
			template += `
			<div>
			<i>${weather.weather[0].icon} </i> 
			${weather.main.temp}°
			${weather.weather[0].description}
			${weather.name}
			</div>
			`
			document.getElementById("weather").innerHTML = template
		})
	}
}






