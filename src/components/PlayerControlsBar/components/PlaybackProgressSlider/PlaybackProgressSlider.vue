<script setup lang="ts">
import { type HTMLAttributes, computed, ref } from "vue";
import type { SliderRootEmits, SliderRootProps } from "radix-vue";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "@/shadcn/utils";

const props = defineProps<
  SliderRootProps & { class?: HTMLAttributes["class"] } & {
    buffer: string;
  }
>();
const emits = defineEmits<SliderRootEmits>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

// 监听鼠标聚焦
const isHovered = ref(false);
</script>

<template>
  <SliderRoot
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :class="
      cn(
        'relative flex w-full touch-none select-none items-center cursor-pointer',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <SliderTrack
      class="relative h-1 w-full grow overflow-hidden rounded-full bg-foreground/10 buffer-progress"
    >
      <SliderRange class="absolute h-full bg-primary rounded-full" />
    </SliderTrack>
    <SliderThumb
      v-show="isHovered"
      v-for="(_, key) in modelValue"
      :key="key"
      class="block size-3 rounded-full bg-foreground/90 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderRoot>
</template>

<style scoped>
.buffer-progress::before {
  @apply bg-primary/10;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: width 0.5s ease-in-out;
  border-start-end-radius: 9999px;
  border-end-end-radius: 9999px;
  width: v-bind(buffer);
  height: 100%;
}
</style>
