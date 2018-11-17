import ImageService from "./image-service.js";


let imageService = new ImageService;


let template = "";

export default class ImageController {
  constructor() {
    this.getImage()
  }



  getImage() {
    console.log("invoked getimage in controller")
    imageService.getImage(drawImage)  // API -> Service getImage -> drawFunction in controller, but not invoked ->
    // Place uninvoked drawFunction in param of Service getImage  ->
    // invoke drawImage known as callback in service.getimage




    document.getElementById("body").innerHTML = template
  }

}


function drawImage(image) {
  console.log(image)
}



