const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=forest'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});


let images = [];

export default class ImageService {
	getImage(callWhenDone) {
		imgApi.get('')
			.then(res => {
				// images = res.data.images[0]
				// images.forEach(img => {
				// 	images.push(img)
				// })
				for (let i = 0; i < res.data.images.length; i++) {
					images.push(res.data.images[i])
				}
				let randomImage = images[Math.floor(Math.random() * images.length)]
				callWhenDone(randomImage)
			})
	}
}

