import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifURL: ""
  },
  mutations: {
    SET_GIF(state, payload: string) {
      state.gifURL = payload;
    }
  },
  actions: {
    async setGif({ commit }) {
      // To Do: refactor to async await to get giphy.
      // giphy API URL Random
      // To Do: Setup config file to hide api key.
      // split api call into own file and import utility
      const imgURL: string = "";
      try {
        const req = await axios.get(imgURL);
        const data = await req.data.data;
        commit("SET_GIF", data.image_url);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
