import axios from 'axios';

export const state = () => ({
  list: [],
  categories: []
})

export const mutations = {
  set(state, content) {
    state.list = content
  },
  setCategories(state, content) {
    state.categories = content
  }
}

export const actions = {
  async fetch({commit}) {
    const response = await axios.get(this.$config.APIBaseURL + '/guides');
    const content = response.data;
    commit("set", content);
  },
  async fetchCategories({commit}) {
    const response = await axios.get(this.$config.APIBaseURL + '/guide-categories');
    const content = response.data;
    commit("setCategories", content);
  }
}
