<template>
  <div id="Navbar">
    <h1>
      <span class="mdi mdi-connection"></span>
      Connection status :
      <span v-if="!getConnectionStatus" class="has-text-danger"> Failed </span>
      <span v-if="getConnectionStatus" class="has-text-success">
        Connected
      </span>
      |
      <span class="mdi mdi-lock"></span>
      Auth status :
      <span v-if="!getAuthenticationStatus" class="has-text-danger">
        Failed
      </span>
      <span
        v-if="getAuthenticationStatus && getConnectionStatus"
        class="has-text-success"
      >
        Connected
      </span>
    </h1>
    <div class="tabs is-centered">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/live">Live</router-link></li>
        <li><a>Record</a></li>
        <li><a>Sound</a></li>
        <li><a>Others</a></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  components: {},
  computed: {
    ...mapGetters("obsWebSocket", [
      "getConnectionStatus",
      "getAuthenticationStatus",
    ]),
  },
};
</script>

<style scoped>
#Navbar {
  -webkit-box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.55);
  margin-bottom: 15px;
}
h1 {
  text-align: center;
}
</style>
