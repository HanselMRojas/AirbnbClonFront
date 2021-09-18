import * as actions from './actions'

const state = {
  drawer: false,
  corazon: false,
  drawerLinks: [
    { id: 0, title: 'Home', icon: 'dashboard', to: '/' },
    { id: 1, title: 'About', icon: 'forum', to: '/about' }
  ]
}

const mutations = {
  CAMBIAR_ESTADO_DRAWER (state) {
    state.drawer = !state.drawer
  },
  CAMBIAR_ESTADO_CORAZON (state) {
    state.corazon = !state.corazon
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true
}
