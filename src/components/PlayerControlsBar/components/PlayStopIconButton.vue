<script setup lang="ts">
import IconButton from "@/components/PlayerControlsBar/components/IconButton.vue";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import SolarStopCircleBold from "@/assets/icon/SolarStopCircleBold.vue";

defineOptions({
  name: "PlayStopIconButton",
});
const value = defineModel();
</script>

<template>
  <IconButton class="mx-2">
    <SolarStopCircleBold class="size-8 ml-1.5 mr-2 my-2" v-if="value" />
    <SolarPlayBold class="size-8 ml-1.5 mr-2 my-2" v-else />
  </IconButton>
</template>

<style scoped></style>
