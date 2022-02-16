<template>
  <div id="Live">
    <RecordStatus />
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <!-- <div class="tile is-parent is-3">
            <RecordStartStop />
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
      <RecordStartStop />
    </div>
  </div>
</template>

<script>
import RecordStartStop from "@/components/Record/RecordStartStop.vue";
import RecordStatus from "@/components/Record/RecordStatus.vue";
import Scenes from "@/components/Scenes.vue";
import Sources from "@/components/Sources.vue";
export default {
  name: "Record",
  components: {
    RecordStartStop,
    RecordStatus,
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
