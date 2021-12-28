import Vue from "vue";
import Vuex from "vuex";

/**
 * Modules import
 */
import OBSModule from "./modules/obs-web-socket";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    obsWebSocket: OBSModule,
  },
});
