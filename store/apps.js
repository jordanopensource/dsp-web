import axios from 'axios';

export const state = () => ({
  list: [],
  publishers: [],
  categories: [],
  popular: [],
  spotlight: [],
  weekly: [],
})

export const mutations = {
  set(state, content) {
    state.list = content
  },
  setPublishers(state, content) {
    state.publishers = content
  },
  setCategories(state, content) {
    state.categories = content
  },
  setPopular(state, content) {
    state.popular = content.filter((obj) => {
      return obj.tags.find((tag) => {
        return tag.name === 'popular-app'
      })
    })
  },
  setSpotlight(state, content) {
    state.spotlight = content.filter((obj) => {
      return obj.tags.find((tag) => {
        return tag.name === 'spotlight-app'
      })
    })
  },
  setWeekly(state, content) {
    state.weekly = content.filter((obj) => {
      return obj.tags.find((tag) => {
        return tag.name === 'app-of-the-week'
      })
    })
  }
}

export const actions = {
  async fetch({commit}) {
    const response = await axios.get(this.$config.APIBaseURL + '/apps');
    const content = response.data;
    commit("set", content);
    commit("setPopular", content);
    commit("setSpotlight", content);
    commit("setWeekly", content);
    
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
