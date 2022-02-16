<template>
  <div
    class="tile is-child box"
    @mouseover="statusText = true"
    @mouseleave="statusText = false"
    id="RecordingStartStop"
    @click="RecordStart()"
  >
    <p v-bind:class="[title, textColor]">
      <span class="mdi mdi-36px mdi-record"></span>
      <transition name="fade">
        <span v-show="statusText" class="btn-text"> {{ streamStatus }}</span>
      </transition>
    </p>
  </div>
</template>

<script>
import ObsWebSocket from "@/obs-managment/index.js";
export default {
  name: "RecordingStartStop",
  data() {
    return {
      statusText: false,
      title: "title",
      textColor: "has-text-grey",
      streamStatus: "Record Off",
    };
  },
  created() {
    ObsWebSocket.on("RecordingStopping", () => {
      console.log("stop");
      this.textColor = "has-text-danger";
      this.streamStatus = "Record Closing";
    });
    ObsWebSocket.on("RecordingStopped", () => {
      console.log("stop");
      this.textColor = "has-text-grey";
      this.streamStatus = "Record Off";
    });
    ObsWebSocket.on("RecordingStarting", () => {
      console.log("start");
      this.textColor = "has-text-warning";
      this.streamStatus = "Record Opening";
    });
    ObsWebSocket.on("RecordingStarted", () => {
      this.textColor = "has-text-success";
      this.streamStatus = "Record On";
    });
  },
  beforeDestroy() {
    ObsWebSocket.removeAllListeners("RecordingStopping");
    ObsWebSocket.removeAllListeners("RecordingStopped");
    ObsWebSocket.removeAllListeners("RecordingStarting");
    ObsWebSocket.removeAllListeners("RecordingStarted");
  },
  methods: {
    RecordStart() {
      ObsWebSocket.send("StartStopRecording");
    },
  },
};
</script>

<style scoped>
#RecordingStartStop {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
