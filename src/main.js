import Vue from 'vue'
import store from './vuex/store'
import router from './routes'

const app = new Vue({
    router,
    store
}).$mount('#app')
