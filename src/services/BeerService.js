const Axios = require('axios')
const config = require('./../configs/api.js')

class BeerService {

	getAll () {
		return Axios({
			url: `${config.url}/beers`,
			method: 'get',
			data: {}
		})
	}

	getSingle( id ) {
		return Axios({
			url: `${config.url}/beers/${id}`,
			method: 'get',
			data: {}
		})
	}
} module.exports = new BeerService()
