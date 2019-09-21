// store.js

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
     concerts: []
  },
  actions: {
    loadConcerts ({ commit }) {
        axios
          .get('https://api.myjson.com/bins/eb85z')
          .then(r => r.data)
          .then(concerts => {
          console.log(concerts)
        })
    }
  },
  mutations: {
    SET_CONCERTS (state, concerts) {
        state.concerts = concerts
  }
})