<template>
  <nav class="level" v-if="liveStatus.streaming">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Time</p>
        <p class="title">{{ liveStatus["stream-timecode"] }}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">kb/s</p>
        <p class="title">{{ liveStatus["kbits-per-sec"] }}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">FPS</p>
        <p class="title">{{ liveStatus.fps.toFixed(2) }}</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">Drop Frame</p>
        <p class="title">{{ liveStatus["num-dropped-frames"] }}</p>
      </div>
    </div>
  </nav>
</template>

<script>
import ObsWebSocket from "@/obs-managment/index.js";
export default {
  name: "StreamStatus",
  data() {
    return {
      title: "title",
      textColor: "has-text-grey",
      liveStatus: { streaming: false },
    };
  },
  created() {
    ObsWebSocket.on("StreamStatus", (params) => {
      this.liveStatus = params;
      this.textColor = "has-text-success";
    });
    ObsWebSocket.on("StreamStopping", () => {
      this.textColor = "has-text-danger";
    });
    ObsWebSocket.on("StreamStopped", () => {
      this.liveStatus = false;
      this.textColor = "has-text-grey";
    });
    ObsWebSocket.on("StreamStarting", () => {
      this.textColor = "has-text-warning";
    });
    ObsWebSocket.on("StreamStarted", () => {
      this.textColor = "has-text-success";
    });
  },
  beforeDestroy() {
    ObsWebSocket.removeAllListeners("StreamStatus");
    ObsWebSocket.removeAllListeners("StreamStopping");
    ObsWebSocket.removeAllListeners("StreamStopped");
    ObsWebSocket.removeAllListeners("StreamStarting");
    ObsWebSocket.removeAllListeners("StreamStarted");
    console.log(ObsWebSocket);
  },
  methods: {
    status(params) {
      this.liveStatus = params;
      this.textColor = "has-text-success";
    },
  },
};
</script>

<style scoped>
.varEnd {
  text-align: end;
}
.varStart {
  text-align: start;
}
</style>
