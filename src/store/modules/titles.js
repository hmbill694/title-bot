const state = {
  searchTitles: []
}

const mutations = {
  addTitle (state, payload) {
    state.searchTitles.push(payload)
  }
}

const actions = {
  async getTitle ({ commit }, url) {
    try {
      const response = await fetch(`http://localhost:3000/getTitle/${url}`)
      const { title } = await response.json()

      commit('addTitle', { title, url })
    } catch (e) {
      console.log('fish')
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
