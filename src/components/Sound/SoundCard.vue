<template>
  <div :id="'SoundCard' + index" class="tile is-child box">
    <div class="columns">
      <div class="column is-2">
        <b-button size="is-large" @click="setMute()">
          <i :class="[iconClass, iconSize, iconName]" aria-hidden="true"> </i>
        </b-button>
      </div>
      <div class="column is-10">
        <b-field :label="sourceData.name">
          <b-slider
            v-model="volume"
            size="is-medium"
            :value="volume"
            :max="100"
            @input="setVolume()"
            ticks
          >
          </b-slider>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>
import ObsWebSocket from "@/obs-managment/index.js";
export default {
  name: "SoundCard",
  props: ["sourceData", "index"],
  created() {
    this.getSoundData();
  },
  data() {
    return {
      volume: 0,
      muted: false,
      iconClass: "mdi",
      iconSize: "mdi-36px",
      soundData: null,
    };
  },
  methods: {
    getSoundData() {
      ObsWebSocket.send("GetVolume", {
        source: this.sourceData.name,
      }).then((data) => {
        this.soundData = data;
        this.volume = (data.volume * 100) ^ 10;
        this.muted = data.muted;
      });
    },
    setVolume() {
      ObsWebSocket.send("SetVolume", {
        source: this.sourceData.name,
        volume: this.volume / 100,
      });
    },
    setMute() {
      ObsWebSocket.send("SetMute", {
        source: this.sourceData.name,
        mute: !this.muted,
      });
      this.muted = !this.muted;
    },
  },
  computed: {
    iconName() {
      return this.muted ? "mdi-volume-off" : "mdi-volume-high";
    },
  },
};
</script>

<style></style>
