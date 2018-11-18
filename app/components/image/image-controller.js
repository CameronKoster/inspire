import ImageService from "./image-service.js";


let imageService = new ImageService;



export default class ImageController {
  constructor() {
    this.getImage()
  }

  getImage() {
    imageService.getImage(image => {

      drawImage(image)
    }
    )
  }
}


function drawImage(image) {
  let template = ""
  template = `
    url(${image.url})
  `
  document.getElementById("body").style.backgroundImage = template
}


  // API -> Service getImage -> drawFunction in controller, but not invoked ->
    // Place uninvoked drawFunction in param of Service getImage  ->
    // invoke drawImage known as callback in service.getimage


