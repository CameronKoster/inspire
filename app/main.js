import WeatherController from "./components/weather/weather-controller.js"
import ImageController from "./components/image/image-controller.js"
import QuoteController from "./components/quote/quote-controller.js"
import TodoController from "./components/todo/todo-controller.js"
//import TimeController from "./components/time/time-controller.js"



class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      todoController: new TodoController(),
      //timeController: new TimeController()
    }
  }
}

// function dateAndTime() {
//   let currentDate = new Date()
//   let currentTime = new Date()
//   console.log(currentDate)
//   let template = ""
//   template += `
//   <h1>${currentDate}</h1>
//   <h2>${currentTime}</h2>
//   `
//   document.getElementById("time").innerHTML = template
// }

window.app = new app()  