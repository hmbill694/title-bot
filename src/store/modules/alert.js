const state = {
  showAlert: false,
  alertType: '',
  alertMessage: ''
}

const mutations = {
  toggleAlert (state) {
    state.showAlert = !state.showAlert
  },
  changeAlertType (state, val) {
    state.alertType = val
  },
  changeAlertMessage (state, val) {
    state.alertMessage = val
  }
}

const actions = {
  toggleAlert ({ commit }) {
    commit('toggleAlert')
  },
  changeAlertType ({ commit }, type) {
    commit('changeAlertType', type)
  },
  changeAlertMessage ({ commit }, message) {
    commit('changeAlertMessage', message)
  }
}

const getters = {
  showAlert: state => state.showAlert,
  alertType: state => state.alertType,
  alertMessage: state => state.alertMessage
}

export default {
  state,
  getters,
  actions,
  mutations
}
