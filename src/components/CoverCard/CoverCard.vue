<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import AkarIconsMoreHorizontal from "@/assets/icon/IcRoundMoreHoriz.vue";

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
</script>

<template>
  <div class="flex flex-col w-full group">
    <div class="w-full aspect-square relative">
      <Avatar
        class="size-full object-cover rounded cursor-pointer"
      >
        <AvatarImage :src="src" alt="@radix-vue" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <div
        class="hidden group-hover:block absolute inset-0 bg-black bg-opacity-35 transition-all duration-1000 ease-in"
      >
        <div class="absolute left-2 bottom-2">
          <button>
            <span
              class="size-9 flex justify-center items-center rounded-full bg-background/10 backdrop-blur hover:bg-foreground/20 border border-foreground/10"
            >
              <SolarPlayBold />
            </span>
          </button>
        </div>
        <div class="absolute right-2 bottom-2">
          <button>
            <span
              class="size-9 flex justify-center items-center rounded-full bg-background/10 backdrop-blur hover:bg-foreground/20 border border-foreground/10"
            >
              <AkarIconsMoreHorizontal />
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="mt-2">
      <a class="hover:underline cursor-pointer font-semibold">{{ title }}</a>
    </div>
  </div>
</template>

<style scoped></style>
