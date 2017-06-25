import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Polyfill for window.fetch()
require('whatwg-fetch')

const store = () => new Vuex.Store({

  state: {
    _currentUser: null,
    _clientId: null,
    _apiBaseURL: 'https://api.luogu.org'
  },

  mutations: {
    SET_USER: function (state, user) {
      state._currentUser = user
    },
    SET_CLIENTID (state, clientId) { state.clientId = clientId }
  },

  actions: {
    async nuxtServerInit ({ commit }, { req, res }) {
      const Cookies = require('cookies')
      const cookies = new Cookies(req, res)
      let clientId = cookies.get('__client_id')
      const axios = require('axios')
      if (clientId) {
        // Send a request to backend to get a clientId.
        // const { data } = await axios.get('www.luogu.org/api/authenticate/getClientId')
        const data = { data: 'a745f02bb75fd14eefe03167e34975ecd245189a' }
        clientId = data.data
      }
      commit('SET_CLIENTID', clientId)
      axios.defaults.headers.common['Cookie'] = `__client_id=${clientId}`
    }
  }
})

export default store
