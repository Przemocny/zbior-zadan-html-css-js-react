import axios from 'axios'
import querystring from 'query-string'



// instancja do zasobu
const instance = axios.create({
	baseURL: "url to api",
	timeout: 1000 * 60,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
})

// opcjonalny logger response
const DEBUG = false
const logger = (data, url) => {
	DEBUG &&
		console.log(
			url,
			`\n\t status: ${data.status}`,
			`\n\t payload: `,
			data.data
		)
	return data.data
}

// wygodna abstrakcja dla instancji api
export const request = (url, config = {}) => {
	DEBUG && console.log(url, 'config', config)
	// podstawowa konfiguracja
	let request = {
		url,
		...config,
	}

	if (!request.headers) {
		request.headers = {}
	}

	// jeśli jest upload plików
	if (config.multipart) {
		request.headers['content-type'] = 'multipart/form-data'
	}

	// jeśli jest jakieś query
	if (config.query && Object.keys(config.query).length !== 0) {
		request.url +=
			'?' +
			querystring.stringify(config.query, { arrayFormat: 'bracket' })
	}

	// wywołanie
	return instance
		.request(request)
		.then((data) => {
			return logger(data, url)
		})
		.catch((err) => {
			// jeśli błąd to zwraca do następnego catcha
			//  aby obsłużyc go w ui
			const { data, status } = err.response
			return Promise.reject({ data, status })
		})
}
