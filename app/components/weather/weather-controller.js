import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()

function drawWeather(weatherFromService) {
	let template = ""
	template += `
	<div>
 		${weatherFromService.weather[0].icon}  
 		${weatherFromService.main.temp}°
		${weatherFromService.weather[0].description}
		${weatherFromService.name}
		</div>
	`
	document.getElementById("weather").innerHTML = template
}


export default class WeatherController {
	constructor() {
		weatherService.getWeather(drawWeather)
	}

	// getWeather() {
	// 	weatherService.getWeather(weather => {
	// 		let template = ""
	// 		template += `
	// 		<div>
	// 		<i>${weather.weather[0].icon} </i> 
	// 		${weather.main.temp}°
	// 		${weather.weather[0].description}
	// 		${weather.name}
	// 		</div>
	// 		`
	// 		console.log(template)
	// 		document.getElementById("weather").innerHTML = template
	// 	})
	// }
}






