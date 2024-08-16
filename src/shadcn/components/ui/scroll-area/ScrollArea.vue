<script setup lang="ts">
import { type HTMLAttributes, computed, provide, ref } from "vue";
import {
  ScrollAreaCorner,
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  ScrollAreaViewport
} from "radix-vue";
import ScrollBar from './ScrollBar.vue'
import { cn } from '@/shadcn/utils'
import { scrollAreaRootKey } from "@/constant/Dependenceinjection.ts";

const props = defineProps<ScrollAreaRootProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const scrollAreaRoot= ref<InstanceType<typeof ScrollAreaViewport>>();
provide(scrollAreaRootKey, scrollAreaRoot)
</script>

<template>
  <ScrollAreaRoot v-bind="delegatedProps" :class="cn('relative overflow-hidden', props.class)">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]" ref="scrollAreaRoot">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
