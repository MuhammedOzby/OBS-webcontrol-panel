<template>
  <div id="app">
    <LoginFrom />
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/template/Navbar";
import LoginFrom from "./components/template/LoginFrom.vue";

export default {
  name: "Main",
  components: {
    Navbar,
    LoginFrom,
  },
};
</script>

<style scoped>
.container {
  padding: 5px;
}
</style>
