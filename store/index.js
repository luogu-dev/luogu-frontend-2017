import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Polyfill for window.fetch()
require('whatwg-fetch')

const store = () => new Vuex.Store({

  state: {
    _currentUser: null,
    _clientId: null,
    _apiBaseURL: 'http://api.luogu.org'
  },

  mutations: {
    SET_USER: function (state, user) {
      state._currentUser = user
    },
    SET_CLIENTID (state, clientId) { state._clientId = clientId },
    SET_APIBASEURL (state, apiBaseURL) { state._apiBaseURL = apiBaseURL }
  },

  actions: {
    async nuxtServerInit ({ commit }, { req, res }) {
      const Cookies = require('cookies')
      const cookies = new Cookies(req, res)
      let clientId = cookies.get('__client_id')
      const axios = require('axios')
      const { get } = require('~plugins/lgapi')
      if (process.env.API_GATEWAY_BASEURL) commit('SET_APIBASEURL', process.env.API_GATEWAY_BASEURL)
      axios.defaults.baseURL = process.env.API_GATEWAY_BASEURL || 'http://api.luogu.org'
      if (!clientId) {
        // Send a request to backend to get a clientId.
        try {
          const { data } = await axios.get('/api/authenticate/getClientId', { headers: { cookie: '' } })
          clientId = data.data
          commit('SET_CLIENTID', clientId)
          console.log('got new clientId from server ', clientId)
        } catch (e) {
          if (e) console.log('Error: ', e)
        }
        // const data = { data: 'a745f02bb75fd14eefe03167e34975ecd245189a' }
      } else {
        console.log('using clientId from client', clientId)
      }
      commit('SET_CLIENTID', clientId)
      axios.defaults.headers.common['cookie'] = `__client_id=${clientId || ''}`
      const currentUser = await get('/api/user/current')
      if (!currentUser.err) commit('SET_USER', currentUser)
    }
  }
})

export default store
