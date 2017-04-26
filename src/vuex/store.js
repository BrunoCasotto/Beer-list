import Vue from 'vue'
import Vuex from 'vuex'

import Loader from './modules/Loader.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        Loader
    }
})

export default store