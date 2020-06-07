import Vue from "vue";
import Vuex from "vuex";
import { hotelSearch } from "../services/hotel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotelAutoComplete: {},
  },
  mutations: {
    CHANGE_HOTEL_LIST(state, payload) {
      console.log(payload);
      state.hotelAutoComplete = payload;
    },
  },
  actions: {
    async getHotel({ commit }, model) {
      try {
        let response = await hotelSearch(model);
        if (response.status == 200) {
          commit("CHANGE_HOTEL_LIST", response.data);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    hotelList: (state) => state.hotelAutoComplete,
  },
});
