<script setup lang="ts">
import { CoverCard } from "@/components/CoverCard";

defineOptions({
  name: "TabMV",
});
</script>

<template>
  <div class="grid sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-11">
    <CoverCard
      title="123123"
      src="https://t.alcy.cc/fj/"
      v-for="i in 100"
      :key="i"
    />
  </div>
</template>

<style scoped></style>
