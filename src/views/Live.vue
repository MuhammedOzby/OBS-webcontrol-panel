<template>
  <div id="Live">
    <StreamStatus />
    <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <StreamStartStop />
      </div>
      <div class="tile is-8 is-vertical is-parent">
        <Scenes />
        <Sources />
      </div>
    </div>
  </div>
</template>

<script>
import StreamStartStop from "@/components/Stream/StreamStartStop.vue";
import StreamStatus from "@/components/Stream/StreamStatus.vue";
import Scenes from "@/components/Scenes.vue";
import Sources from "@/components/Sources.vue";
export default {
  name: "Live",
  components: {
    StreamStartStop,
    StreamStatus,
    Scenes,
    Sources,
  },
};
</script>

<style scoped></style>
