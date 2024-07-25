<script setup lang="ts">
import IconButton from "@/components/PlayerControlsBar/components/IconButton.vue";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import SolarStopCircleBold from "@/assets/icon/SolarStopCircleBold.vue";

defineOptions({
  name: "PlayStopIconButton",
});
const value = defineModel();
const emits = defineEmits(["play", "pause"]);
const play = () => emits("play");
const pause = () => emits("pause");
</script>

<template>
  <IconButton class="mx-2" v-if="value" @click="play()">
    <SolarPlayBold class="size-8 ml-1.5 mr-2 my-2" />
  </IconButton>
  <IconButton class="mx-2" @click="pause()" v-else>
    <SolarStopCircleBold class="size-8 ml-1.5 mr-2 my-2" />
  </IconButton>
</template>

<style scoped></style>
