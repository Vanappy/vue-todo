const state = {
  selected: 'all'
}

const actions = {
  switchTab({ commit }, { selected }) {
    commit('changeTab', selected)
  }
}

const mutations = {
  changeTab(state, selected) {
    state.selected = selected;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}