import axios from 'axios';

export const state = () => ({
  pages: []
})

export const mutations = {
  setPages(state, content) {
    state.pages = content
  }
}

export const getters = {
  getPages(state) {
    return state.pages
  }
}

export const actions = {
    async nuxtServerInit({ commit }) {
    const response = await axios.get(this.$config.APIBaseURL + '/pages');
    const content = response.data;
    commit("setPages", content);
  }
}