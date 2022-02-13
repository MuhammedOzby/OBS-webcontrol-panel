<template>
  <div id="Live">
    <StreamStatus />
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <!-- <div class="tile is-parent is-3">
            <StreamStartStop />
          </div> -->
          <div class="tile is-parent">
            <Scenes />
          </div>
        </div>
        <div class="tile is-parent">
          <Sources />
        </div>
      </div>
    </div>
    <div class="start-stream-drawer">
      <StreamStartStop />
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

<style scoped>
.start-stream-drawer {
  position: fixed;
  top: 10%;
  left: -5px;
}
</style>
