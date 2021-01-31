import axios from 'axios';

export const state = () => ({
  list: [],
})

export const mutations = {
  set(state, content) {
    state.list = content
  },
}

export const actions = {
  async fetch({commit}) {
    const response = await axios.get(this.$config.APIBaseURL + '/software-recommendations');
    const content = response.data;
    commit("set", content);
  },
}
