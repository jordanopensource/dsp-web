import axios from "axios";

export const state = () => ({
  list: [],
  categories: [],
  popular: [],
  spotlight: []
});

export const mutations = {
  set(state, content) {
    state.list = content;
  },
  setCategories(state, content) {
    state.categories = content;
  },
  setPopular(state, content) {
    state.popular = content.filter(obj => {
      return obj.tags.find(tag => {
        return tag.name === "popular-guide";
      });
    });
  },
  setSpotlight(state, content) {
    state.spotlight = content.filter(obj => {
      return obj.tags.find(tag => {
        return tag.name === "spotlight-guide";
      });
    });
  }
};

export const actions = {
  async fetch({ commit }) {
    const response = await this.$axios.get(`/api/guides`);
    const content = response.data;
    commit("set", content);
    commit("setPopular", content);
    commit("setSpotlight", content);
  },
  async fetchCategories({ commit }) {
    const response = await this.$axios.get(`/api/guide-categories`);
    const content = response.data;
    commit("setCategories", content);
  }
};
