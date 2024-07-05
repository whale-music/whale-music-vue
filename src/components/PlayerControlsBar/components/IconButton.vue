<script setup lang="ts">
</script>

<template>
  <button class="rounded-lg icon-button">
    <slot />
  </button>
</template>

<style scoped>
.icon-button:hover {
  background-color: hsl(var(--accent) / 0.8);
}
</style>
