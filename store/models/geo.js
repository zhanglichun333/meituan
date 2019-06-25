const state = () => ({
  position: {},
  menu: [],
  pois: [],
})

const mutations = {
  setPosition(state, position) {
    state.position = position
  },
  setCity(state, city) {
    state.position.city = city
  },
  setProvince(state, province) {
    state.position.province
  },
  setMenu(state, menu) {
    state.menu = menu
  },
  setPois(state, pois) {
    state.pois = pois
  }
}

const actions = {
  setPosition: ({commit}, position) => {
    commit('setPosition', position)
  },
  setCity: ({commit}, city) => {
    commit('setPosition', city)
  },
  setProvince: ({commit}, province) => {
    commit('setPosition', province)
  },
  setMenu: ({commit}, menu) => {
    commit('setMenu', menu)
  },
   setPois: ({commit}, pois) => {
    commit('setpois', pois)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}