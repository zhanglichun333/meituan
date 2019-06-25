import Vue from 'vue'
import Vuex from 'vuex'

import geo from './models/geo'

Vue.use(Vuex)

const store = () => 
  new Vuex.Store({
    modules: {
      geo
    },
    actions: {
      async nuxtServerInit({commit}, {req, app}) {
        const {status, data:{province, city}} = await app.$axios.get('https://restapi.amap.com/v3/ip?key=b598c12de310236d9d40d3e28ea94d03')
        commit('geo/setPosition', status === 200 ? {province, city} : {province: '', city: ''})
        const {status: status1, data:{menu}} = await app.$axios.get('/geo/menu')
        commit('geo/setMenu', status1 === 200 ? menu : [])
        const {status: status2, data:{pois}} = await app.$axios.get(encodeURI(`https://restapi.amap.com/v3/place/text?keywords=美食&offset=4&page=1&city=梅州&key=a776091c1bac68f3e8cda80b8c57627c&extensions=base`))
        commit('geo/setPois', status2 === 200 ? pois : [])
      }
    }
  })

export default store
