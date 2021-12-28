<template>
  <div id="LoginScreen" v-if="!getConnectionStatus">
    <div class="loginform">
      <b-field label="Address">
        <b-input v-model="address"></b-input>
      </b-field>
      <b-field label="Password">
        <b-input v-model="password" password-reveal></b-input>
      </b-field>
      <b-button expanded @click="connect()">Connect</b-button>
    </div>
  </div>
</template>

<script>
import obsWebSocket from "@/obs-managment/index.js";
import { mapGetters } from "vuex";
export default {
  name: "LoginScreen",
  computed: {
    ...mapGetters("obsWebSocket", ["getConnectionStatus"]),
  },
  data() {
    return {
      address: window.localStorage.address,
      password: window.localStorage.password,
    };
  },
  created() {},
  methods: {
    connect() {
      window.localStorage.address = this.address;
      window.localStorage.password = this.password;
      obsWebSocket.connect({
        address: window.localStorage.address,
        password: window.localStorage.password,
      });
    },
  },
};
</script>

<style scoped>
#LoginScreen {
  background: rgba(70, 70, 70, 0.707);
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100vh;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loginform {
  background-color: white;
  width: 80vh;
  padding: 25px;
  border-radius: 15px;
}
</style>
