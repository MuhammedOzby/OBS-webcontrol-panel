<template>
  <div id="Scenes">
    <div class="tile is-child box">
      <p class="title">Active Scene: {{ ScenesData["current-scene"] }}</p>
      <div class="columns">
        <div
          class="column is-half"
          v-for="(scene, id) in ScenesData.scenes"
          :key="id"
        >
          <b-button
            expanded
            :focused="scene.name == ScenesData['current-scene']"
            @click="sceneChanger(scene.name)"
            >{{ scene.name }}</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ObsWebSocket from "@/obs-managment/index.js";
export default {
  name: "Scenes",
  data() {
    return {
      ScenesData: {},
    };
  },
  created() {
    ObsWebSocket.send("GetSceneList").then((data) => {
      this.ScenesData = data;
    });
  },
  methods: {
    sceneChanger(sceneName) {
      ObsWebSocket.send("SetCurrentScene", {
        "scene-name": sceneName,
      }).then(() => {
        ObsWebSocket.send("GetSceneList").then((data) => {
          this.ScenesData = data;
        });
      });
    },
  },
};
</script>

<style scoped>
#Scenes {
  width: 100%;
  height: 100%;
}
</style>
