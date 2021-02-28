const state = {
  searchTitles: [
    {
      title: 'Google',
      url: 'www.google.com'
    }
  ]
}

const getters = {
  titles: state => state.searchTitles
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
