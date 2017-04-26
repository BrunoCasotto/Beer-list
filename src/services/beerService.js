import Axios from 'axios'
const config = require('_config/api.js')

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
} export default new BeerService()
