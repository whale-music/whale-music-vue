<script setup lang="ts">
import { Separator } from "@/shadcn/components/ui/separator";
defineOptions({
  name: "Menu",
});

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div>
    <h2 class="text-3xl font-semibold">{{ props.title }}</h2>
    <Separator class="my-3" />
    <div class="space-y-6">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
