import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()





export default class WeatherController {
	constructor() {
		this.getWeather()
	}

	getWeather() {
		debugger
		weatherService.getWeather(weather => {
			let template = ""
			template += `
			<div>
			${weatherService.getWeather(weather)}
			</div>
			`
			document.getElementById("weather").innerHTML = template
		})
	}
}



// function drawWeather() {
// 	weatherService.getWeather(callWhenDone)




// }





//What can you do with this weather object?