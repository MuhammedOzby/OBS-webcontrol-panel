export default {
  namespaced: true,
  state: {
    connectionStatus: {
      connection: false,
      authentication: false,
    },
  },
  mutations: {
    setConnectionStatus(state, payload) {
      state.connectionStatus.connection = payload ? true : false;
    },
    setAuthenticationStatus(state, payload) {
      state.connectionStatus.authentication = payload ? true : false;
    },
  },
  actions: {},
  getters: {
    getConnectionStatus(state) {
      return state.connectionStatus.connection;
    },
    getAuthenticationStatus(state) {
      return state.connectionStatus.authentication;
    },
  },
};
