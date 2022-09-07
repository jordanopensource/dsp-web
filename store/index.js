import axios from "axios";

export const state = () => ({
  pages: [],
  menus: []
});

export const mutations = {
  setPages(state, content) {
    state.pages = content;
  },
  setMenus(state, content) {
    state.menus = content;
  }
};

export const getters = {
  getPages(state) {
    return state.pages;
  },
  getMenus(state) {
    return state.menus;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const menusResponse = await this.$axios.get(`/api/menus`);
    const menusContent = menusResponse.data;
    commit("setMenus", menusContent);
    const pagesResponse = await this.$axios.get(`/api/pages`);
    const pagesContent = pagesResponse.data;
    commit("setPages", pagesContent);
  }
};
