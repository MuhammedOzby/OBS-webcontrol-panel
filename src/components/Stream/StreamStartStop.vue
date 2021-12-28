<template>
  <div class="tile is-child box" id="StreamStartStop" @click="LiveStart()">
    <p v-bind:class="[title, textColor]">
      <span class="mdi mdi-36px mdi-account-voice"></span> {{ streamStatus }}
    </p>
  </div>
</template>

<script>
import ObsWebSocket from "@/obs-managment/index.js";
export default {
  name: "StreamStartStop",
  data() {
    return {
      title: "title",
      textColor: "has-text-grey",
      liveStatus: { streaming: false },
      streamStatus: "Live Off",
    };
  },
  created() {
    ObsWebSocket.on("StreamStatus", (status) => {
      this.liveStatus = status;
      this.textColor = "has-text-success";
      this.streamStatus = status.streaming ? "Live On" : "Live Off";
    });
    ObsWebSocket.on("StreamStopping", () => {
      this.textColor = "has-text-danger";
      this.streamStatus = "Live Closing";
    });
    ObsWebSocket.on("StreamStopped", () => {
      this.textColor = "has-text-grey";
      this.streamStatus = "Live Off";
    });
    ObsWebSocket.on("StreamStarting", () => {
      this.textColor = "has-text-warning";
      this.streamStatus = "Live Opening";
    });
    ObsWebSocket.on("StreamStarted", () => {
      this.textColor = "has-text-success";
      this.streamStatus = "Live On";
    });
  },
  methods: {
    LiveStart() {
      ObsWebSocket.send("StartStopStreaming");
    },
  },
};
</script>

<style scoped>
#StreamStartStop {
  cursor: pointer;
}
</style>
