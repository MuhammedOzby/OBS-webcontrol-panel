<template>
  <div id="Live">
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <StreamStartStop />
        <StreamStatus />
      </div>
      <div class="tile is-parent">
        <Scenes />
      </div>
    </div>
  </div>
</template>

<script>
import StreamStartStop from "@/components/Stream/StreamStartStop.vue";
import ObsWebsockets from "@/obs-managment/index.js";
import StreamStatus from "@/components/Stream/StreamStatus.vue";
import Scenes from "../components/Scenes.vue";
export default {
  created() {
    ObsWebsockets.send("GetSceneList").then((data) => {
      console.log(data);
    });
  },
  name: "Live",
  components: {
    StreamStartStop,
    StreamStatus,
    Scenes,
  },
};
</script>

<style scoped></style>
