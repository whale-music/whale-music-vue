<script setup lang="ts">
defineOptions({
  name: "MenuItem",
});

const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="flex justify-between items-center">
    <h3 class="text-base text-foreground/75 font-medium">{{ props.label }}</h3>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
