<template>
  <div id="Navbar">
    <div class="screen-type" @click="fullScreen()">
      <span class="mdi mdi-36px mdi-fullscreen" v-if="!screenStatus"></span>
      <span class="mdi mdi-36px mdi-fullscreen-exit" v-else></span>
    </div>
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
        <li v-bind:class="{ 'is-active': currentRouteName == 'Home' }">
          <router-link to="/">
            <span class="icon is-small">
              <i class="mdi mdi-24px mdi-home" aria-hidden="true"> </i>
            </span>
            Home
          </router-link>
        </li>
        <li v-bind:class="{ 'is-active': currentRouteName == 'Live' }">
          <router-link to="/live">
            <span class="icon is-small">
              <i class="mdi mdi-24px mdi-broadcast" aria-hidden="true"> </i>
            </span>
            Live
          </router-link>
        </li>
        <li v-bind:class="{ 'is-active': currentRouteName == 'Record' }">
          <router-link to="/record">
            <span class="icon is-small">
              <i class="mdi mdi-24px mdi-record" aria-hidden="true"> </i>
            </span>
            Record
          </router-link>
        </li>
        <li v-bind:class="{ 'is-active': currentRouteName == 'Sound' }">
          <router-link to="/sound">
            <span class="icon is-small">
              <i class="mdi mdi-24px mdi-volume-high" aria-hidden="true"> </i>
            </span>
            Sound
          </router-link>
        </li>
        <li v-bind:class="{ 'is-active': currentRouteName == 'Others' }">
          <router-link to="/others">
            <span class="icon is-small">
              <i class="mdi mdi-24px mdi-cog" aria-hidden="true"> </i>
            </span>
            Others
          </router-link>
        </li>
        <li v-bind:class="{ 'is-active': currentRouteName == 'Tools' }">
          <router-link to="/tools">
            <span class="icon is-small">
              <i class="mdi mdi-24px mdi-hammer-screwdriver" aria-hidden="true">
              </i>
            </span>
            Tools
          </router-link>
        </li>
        <li v-bind:class="{ 'is-active': currentRouteName == 'About' }">
          <router-link to="/about">
            <span class="icon is-small">
              <i class="mdi mdi-24px mdi-information" aria-hidden="true"> </i>
            </span>
            About
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      screenStatus: false,
    };
  },
  name: "Navbar",
  created() {
    this.screenStatus = document.fullscreen;
  },
  methods: {
    fullScreen() {
      if (this.screenStatus) {
        document.exitFullscreen().then(() => {
          this.screenStatus = document.fullscreen;
        });
      } else {
        document.documentElement.requestFullscreen().then(() => {
          this.screenStatus = document.fullscreen;
        });
      }
    },
  },
  components: {},
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
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
.screen-type {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
