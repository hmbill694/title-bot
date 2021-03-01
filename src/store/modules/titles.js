const state = {
  searchTitles: []
}

const mutations = {}

const actions = {
  async getTitle ({ commit }, url) {
    const response = await fetch(`http://localhost:3000/getTitle/${url}`)
    const processedResponse = await response.json()

    console.log(processedResponse)
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
