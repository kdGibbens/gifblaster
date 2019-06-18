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
    setGif({ commit }) {
      // Async await to get giphy.
      let imgURL = "";
      axios.get(imgURL).then(response => {
        commit("SET_GIF", response.data.data.image_url);
      });
    }
  },
  getters: {}
});
