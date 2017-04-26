import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './vuex/store'

import Home from './components/Home.vue'
import ProductSingle from './components/ProductSingle.vue'

//vue router
Vue.use(VueRouter)

const router = new VueRouter({ 
    routes: [
      { path: '/', component: Home },
      { path: '/beer/:id', component: ProductSingle }
    ]
})

const app = new Vue({
    router,
    store
}).$mount('#app')
