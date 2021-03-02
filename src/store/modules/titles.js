const state = {
  searchTitles: []
}

const mutations = {
  addTitle (state, payload) {
    state.searchTitles.push(payload)
  }
}

const actions = {
  async getTitle ({ commit, dispatch }, url) {
    try {
      const response = await fetch(`http://localhost:3000/getTitle/${url}`)
      const { title } = await response.json()

      commit('addTitle', { title, url })
      dispatch('changeAlertMessage', 'Title succesfully found!')
      dispatch('changeAlertType', 'success')
    } catch (e) {
      dispatch('changeAlertMessage', 'Something went wrong!')
      dispatch('changeAlertType', 'warning')
    } finally {
      dispatch('toggleAlert')
    }
  }
}

const getters = {
  titles: state => state.searchTitles
}

export default {
  state,
  getters,
  actions,
  mutations
}
