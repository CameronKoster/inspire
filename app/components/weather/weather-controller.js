import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()



function drawWeather(weatherFromService) {
	let template = ""
	template += `
<img src="http://openweathermap.org/img/w/${weatherFromService.weather[0].icon}.png">
	<h4>${Math.floor((weatherFromService.main.temp) * 1.8 - 459.67)}°<h4>
	<h4>${weatherFromService.name}</h4>
	`
	document.getElementById("weather").innerHTML = template
}



export default class WeatherController {
	constructor() {
		weatherService.getWeather(drawWeather)
	}
}






