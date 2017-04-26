import Vue from 'vue'
import Router from 'vue-router'

//modules
import Home from './components/Home.vue'
import ProductSingle from './components/ProductSingle.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/beer/:id', component: ProductSingle },
		{ path: "*", component: NotFound }
	]
})