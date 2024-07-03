<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/shadcn/components/ui/button'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <Button @click="count++">{{ count }}</Button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
