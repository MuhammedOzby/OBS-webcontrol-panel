<template>
  <div id="Sound">
    <div class="tile">
      <div class="tile is-anchestor is-vertical">
        <sound-card
          :sourceData="soundItem"
          :index="index"
          v-for="(soundItem, index) in SourcesData"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SoundCard from "@/components/Sound/SoundCard.vue";
import ObsWebSocket from "@/obs-managment/index.js";
export default {
  name: "Sound",
  data() {
    return {
      SourcesData: null,
    };
  },
  created() {
    ObsWebSocket.send("GetSourcesList").then((data) => {
      const Soundsources = data.sources.filter((data) => {
        if (
          data.typeId == "wasapi_output_capture" ||
          data.typeId == "wasapi_input_capture"
        )
          return data;
      });
      this.SourcesData = Soundsources;
    });
  },
  components: {
    SoundCard,
  },
  methods: {},
};
</script>

<style></style>
