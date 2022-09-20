import axios from "axios";

export const state = () => ({
  list: []
});

export const mutations = {
  set(state, content) {
    state.list = content;
  }
};

export const actions = {
  async fetch({ commit }) {
    const response = await this.$axios.get(`/api/helpdesks`);
    const content = response.data;
    commit("set", content);
  }
};
