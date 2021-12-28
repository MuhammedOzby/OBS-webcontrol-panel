<template>
  <div class="tile is-child box" id="StreamStatus" v-if="liveStatus.streaming">
    <table class="table is-fullwidth">
      <tbody>
        <tr>
          <td class="varStart">Time</td>
          <td class="varEnd">{{ liveStatus["stream-timecode"] }}</td>
        </tr>
        <tr>
          <td class="varStart">kb/s</td>
          <td class="varEnd">
            {{ liveStatus["kbits-per-sec"] }}
          </td>
        </tr>
        <tr>
          <td class="varStart">FPS</td>
          <td class="varEnd">{{ liveStatus.fps.toFixed(2) }}</td>
        </tr>
        <tr>
          <td class="varStart">Drop Frame</td>
          <td class="varEnd">{{ liveStatus["num-dropped-frames"] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
    ObsWebSocket.on("StreamStatus", (status) => {
      this.liveStatus = status;
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
  methods: {},
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
