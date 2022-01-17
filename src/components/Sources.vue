<template>
  <div class="tile is-child box">
    <p class="title">Sources:</p>
    <div class="tile is-ancestor" style="flex-wrap: wrap">
      <div
        class="tile is-parent is-4 source-buttons"
        v-for="(source, id) in filterSources(SourcesData)"
        :key="id"
      >
        <b-button
          v-if="source.sceneElement != false"
          expanded
          @click="
            sourceChanger(
              source.name,
              (source.sceneElement != false) == 'undefined'
                ? null
                : source.visible
            )
          "
        >
          <span class="mdi mdi-eye" v-if="source.visible"></span>
          <span class="mdi mdi-eye-off" v-else></span>
          {{ source.name }}
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import ObsWebSocket from "@/obs-managment/index.js";

async function getSettings(data) {
  for await (let [indis, source] of data.sources.entries()) {
    await ObsWebSocket.send("GetSceneItemProperties", {
      item: source.name,
    }) //Sana await yazmayı düşünmeyen ama bir ton çözüm düşünen beynime tükürem iki saat oldu.
      .then((settings) => {
        data.sources[indis] = {
          ...settings,
          ...data.sources[indis],
        };
      })
      .catch(() => {
        data.sources[indis].sceneElement = false;
      });
  }
  return data;
}

export default {
  name: "Sources",
  data() {
    return {
      SourcesData: [],
    };
  },
  created() {
    this.getList();
    ObsWebSocket.on("SwitchScenes", () => {
      this.getList();
    });
  },
  beforeDestroy() {
    ObsWebSocket.removeAllListeners("SwitchScenes");
  },
  methods: {
    getList() {
      ObsWebSocket.send("GetSourcesList").then((data) => {
        getSettings(data).then((fullData) => {
          this.SourcesData = fullData.sources;
        });
      });
    },
    filterSources(sources) {
      return sources.filter((source) => {
        return source.sceneElement != false;
      });
    },
    sourceChanger(sourceName, status) {
      ObsWebSocket.send("SetSceneItemProperties", {
        item: sourceName,
        visible: !status,
      }).then(() => {
        this.getList();
      });
    },
  },
};
</script>

<style scoped>
.source-buttons {
  padding: 5px;
}
</style>
