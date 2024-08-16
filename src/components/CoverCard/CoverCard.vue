<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import AkarIconsMoreHorizontal from "@/assets/icon/IcRoundMoreHoriz.vue";
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: "size-24",
  },
});

const focus = ref(false);
</script>

<template>
  <div
    class="flex flex-col w-full"
    @mouseover="focus = true"
    @mouseleave="focus = false"
  >
    <div class="w-full aspect-square relative">
      <Avatar class="size-full object-cover rounded-lg cursor-pointer">
        <AvatarImage :src="src" alt="@radix-vue" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <Transition name="fade">
        <div class="absolute inset-0 bg-black/35 will-change-[filter, opciaty] rounded-lg" v-if="focus">
          <div class="absolute left-2 bottom-2">
            <button>
              <span
                class="size-9 flex justify-center items-center rounded-full bg-background/10 backdrop-blur hover:bg-foreground/20 border border-foreground/10 text-neutral-50"
              >
                <SolarPlayBold />
              </span>
            </button>
          </div>
          <div class="absolute right-2 bottom-2">
            <button>
              <span
                class="size-9 flex justify-center items-center rounded-full bg-background/10 backdrop-blur hover:bg-foreground/20 border border-foreground/10 text-neutral-50"
              >
                <AkarIconsMoreHorizontal />
              </span>
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div class="mt-2">
      <a class="hover:underline cursor-pointer font-semibold">{{ title }}</a>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: background-color 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply bg-black/5;
}
</style>
