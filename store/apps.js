import axios from 'axios';

export const state = () => ({
  list: [],
  publishers: [],
  categories: [],
})

export const mutations = {
  set(state, content) {
    state.list = content
  },
  setPublishers(state, content) {
    state.publishers = content
  },
  setCategories(state, content) {
    state.publishers = content
  },
}

export const actions = {
  async fetch({commit}) {
    const response = await axios.get(this.$config.APIBaseURL + '/apps');
    const content = response.data;
    commit("set", content);
  },
  async fetchPublishers({commit}) {
    const response = await axios.get(this.$config.APIBaseURL + '/app-publishers');
    const content = response.data;
    commit("setPublishers", content);
  },
  async fetchCategories({commit}) {
    const response = await axios.get(this.$config.APIBaseURL + '/app-categories');
    const content = response.data;
    commit("setCategories", content);
  },
}
