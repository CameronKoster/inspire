const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=beach'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


function handleError() {
	throw new Error("Image currently unavailable")
}



let image = {};

export default class ImageService {

	getImage(callWhenDone) {
		// ^^^^^^^ How do you call this function?
		imgApi.get('')
			.then(res => {
				image = res.data.images[0]
				callWhenDone(image)
			})
			.catch(handleError)
	}

}

