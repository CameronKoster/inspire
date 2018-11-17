const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
const apiUrl = url + encodeURIComponent(url2);


// @ts-ignore
const weatherApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let weather = {};

function handleError() {
	throw new Error("Weather is currently unavailable")
}

// HEY FUN FACT 
// Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
// res.data.temp is the temperature in Kelvin
// You should probably convert the temperature data to either F or C
export default class WeatherService {
	getWeather(callWhenDone) {
		weatherApi.get('')
			.then(res => {
				weather = res.data;
				callWhenDone(weather);
			})
			.catch(handleError)
	}




}







