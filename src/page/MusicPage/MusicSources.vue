<script setup lang="ts">
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/shadcn/components/ui/context-menu";
import { onMounted } from "vue";
import MusicSourceItem from "@/page/MusicPage/MusicSourceItem.vue";

defineOptions({
  name: "MusicSources",
});

defineProps<{ music: any }>();

onMounted(() => {
  document.addEventListener("contextmenu", (event: MouseEvent) => {
    event.preventDefault();
  });
});
</script>

<template>
  <ul class="w-full">
    <ContextMenu v-for="(i, index) in music.sources">
      <ContextMenuTrigger>
        <MusicSourceItem :index="index" :source="i" />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>下载</ContextMenuItem>
        <ContextMenuItem>编辑</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </ul>
</template>

<style scoped></style>
