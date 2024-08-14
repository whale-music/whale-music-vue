<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import AkarIconsMoreHorizontal from "@/assets/icon/IcRoundMoreHoriz.vue";
import { ref } from "vue";

defineOptions({
  name: "MusicSourceItem",
});

defineProps<{
  index: number;
  source: any;
}>();

const hover = ref(false);
</script>

<template>
  <li
    class="h-12 w-full rounded-lg flex items-center relative group hover:bg-foreground/10"
    :class="index % 2 == 1 ? 'bg-background' : 'bg-foreground/5'"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="size-12 flex items-center justify-center">
      <span class="text-sm font-normal text-foreground/65 group-hover:hidden">
        {{ index + 1 }}
      </span>
      <SolarPlayBold
        class="text-primary hidden cursor-pointer size-5 group-hover:block"
      />
    </div>
    <div class="text-sm font-medium text-foreground/85">
      {{ source.name }}
    </div>
    <div class="absolute right-4 cursor-pointer grid place-items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <AkarIconsMoreHorizontal v-if="hover" class="size-4 text-primary/85" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel class="w-24 truncate">{{ source.name }}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </li>
</template>

<style scoped></style>
