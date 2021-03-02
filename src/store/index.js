import Vuex from 'vuex'
import Vue from 'vue'
import titles from './modules/titles'
import alert from './modules/alert'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    titles,
    alert
  }
})
