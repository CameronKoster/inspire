import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js"
import QuoteController from "./components/quote/quote-controller.js"
import TodoController from "./components/todo/todo-controller.js"
import TimeController from "./components/time/time-controller.js"



class app {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      todoController: new TodoController(),
      timeController: new TimeController()
    }
  }
}

window.app = new app()  