import Vuex from 'vuex'
import Vue from 'vue'
import titles from './modules/titles'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    titles
  }
})
