<script setup lang="ts">
import { CoverCard } from "@/components/CoverCard";

defineOptions({
  name: "TabPlayList",
});
</script>

<template>
  <div class="grid sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-11">
    <RouterLink
      :to="{ name: 'MusicPage', params: { id: i } }"
      v-for="i in 100"
      :key="i"
    >
      <CoverCard title="123123" src="https://t.alcy.cc/fj/" />
    </RouterLink>
  </div>
</template>

<style scoped></style>
