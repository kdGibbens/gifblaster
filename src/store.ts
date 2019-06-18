import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifURL: "",
  },
  mutations: {
    SET_GIF(state, payload: string) {
      state.gifURL = payload;
    },
  },
  actions: {
    setGif({ commit }) {
      // To Do: refactor to async await to get giphy.
      // giphy API URL Random
      // To Do: Setup config file to hide api key.
      // split api call into own file and import utility
      const imgURL: string = "";
      axios.get(imgURL).then((response) => {
        commit("SET_GIF", response.data.data.image_url);
      });
    },
  },
});
