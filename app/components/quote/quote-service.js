let url = '//bcw-getter.herokuapp.com/?url=';
let url2 = 'https://favqs.com/api/qotd';
let apiUrl = url + encodeURIComponent(url2);
//Do Not Edit above we have to go through the bcw-getter to access this api


const quoteApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let quote = {};

export default class QuoteService {
	getQuote(callWhenDone) {
		quoteApi.get('')
			.then((res) => {
				quote = res.data
				callWhenDone(res.data)
			})
	}
}
