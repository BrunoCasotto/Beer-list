const assert = require('assert')
const mocha = require('mocha')
const chai = require('chai')
const coMocha = require('co-mocha')
const axios = require('axios')
coMocha(mocha)

//helpers
let expect = chai.expect

//service
const BeerService = require('./../src/services/beerService.js')

describe('BeerService', () => {

	it('test getAll method', function* () {
		let result = yield BeerService.getAll()
		let products = result.data
		expect(products).to.be.a('array')
		expect(products[0]).to.have.property('id')
		expect(products[0]).to.have.property('name')
		expect(products[0]).to.have.property('tagline')
		expect(products[0]).to.have.property('first_brewed')
		expect(products[0]).to.have.property('description')
		expect(products[0]).to.have.property('image_url')
		expect(products[0]).to.have.property('abv')
		expect(products[0]).to.have.property('ibu')
		expect(products[0]).to.have.property('target_fg')
		expect(products[0]).to.have.property('target_og')
		expect(products[0]).to.have.property('ebc')
		expect(products[0]).to.have.property('srm')
		expect(products[0]).to.have.property('ph')
		expect(products[0]).to.have.property('attenuation_level')
		expect(products[0]).to.have.property('volume')
		expect(products[0]).to.have.property('boil_volume')
		expect(products[0]).to.have.property('method')
		expect(products[0]).to.have.property('ingredients')
		expect(products[0]).to.have.property('food_pairing')
		expect(products[0]).to.have.property('brewers_tips')
		expect(products[0]).to.have.property('contributed_by')
	})

	it('test getSingle method', function* () {
		let products = yield BeerService.getSingle(1)
		let product = products.data[0]

		expect( product ).to.have.property('id')
		expect( product ).to.have.property('name')
		expect( product ).to.have.property('tagline')
		expect( product ).to.have.property('first_brewed')
		expect( product ).to.have.property('description')
		expect( product ).to.have.property('image_url')
		expect( product ).to.have.property('abv')
		expect( product ).to.have.property('ibu')
		expect( product ).to.have.property('target_fg')
		expect( product ).to.have.property('target_og')
		expect( product ).to.have.property('ebc')
		expect( product ).to.have.property('srm')
		expect( product ).to.have.property('ph')
		expect( product ).to.have.property('attenuation_level')
		expect( product ).to.have.property('volume')
		expect( product ).to.have.property('boil_volume')
		expect( product ).to.have.property('method')
		expect( product ).to.have.property('ingredients')
		expect( product ).to.have.property('food_pairing')
		expect( product ).to.have.property('brewers_tips')
		expect( product ).to.have.property('contributed_by')
	})
})
