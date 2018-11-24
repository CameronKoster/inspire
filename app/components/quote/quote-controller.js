import QuoteService from "./quote-service.js";

let qs = new QuoteService


export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(quote => {
			drawQuote(quote)
		})
	}
}

function drawQuote(quote) {
	let template = ""
	template += `
	<div>
	<h3>${quote.quote.body}</h3>
	<h5>${quote.quote.author}</h5>
	</div>
	`
	document.getElementById("quote").innerHTML = template
}
