<script setup lang="ts">
import { computed, ref } from "vue";
import TextCardLoading from "./TextCardLoading.vue";
import SilentLion21Loading from "@/components/GlobalLoading/SilentLion21Loading.vue";

const loading = ref("SilentLion21Loading");

const getLoadingComponent = computed(() => {
  if (loading.value === "SilentLion21Loading") {
    return SilentLion21Loading;
  } else if (loading.value === "TextCardLoading") {
    return TextCardLoading;
  } else {
    return SilentLion21Loading;
  }
});
</script>

<template>
  <div class="flex flex-col">
    <Component :is="getLoadingComponent" />
  </div>
</template>

<style scoped></style>
