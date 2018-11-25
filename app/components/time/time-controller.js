import TimeService from "../time/time-service.js"


let timeService = new TimeService;


let currentDate = new Date();
let date = currentDate.getDate();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();

export default class TimeController {
  constructor() {
    function drawTime() {
      timeService.getTime()
      let template = "";
      template += `
      <div>${date} ${month} ${year}</div> 
      `
      document.getElementById("time").innerHTML = template
    }
  }
}


