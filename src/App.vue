<script setup lang="ts">
import TopNavigationBar from "@/components/TopNavigationBar/index.vue";
import { useColorMode } from "@vueuse/core";
import { ScrollArea } from "@/shadcn/components/ui/scroll-area";
import PlayerControlsBar from "@/components/PlayerControlsBar/index.vue";
import { storeToRefs } from "pinia";
import { usePlayerStore } from "@/store/modules/PlayerStore.ts";

useColorMode();
const { isMusicControlBarVisible } = storeToRefs(usePlayerStore());
</script>

<template>
  <TopNavigationBar />
  <main>
    <ScrollArea class="h-full w-full">
      <div class="custom-padding">
        <RouterView />
      </div>
    </ScrollArea>
  </main>
  <PlayerControlsBar v-if="isMusicControlBarVisible" />
</template>

<style lang="css" scoped>
main {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  box-sizing: border-box;
  /* 取消进度条 */
  scrollbar-width: none;
}
/* 主容器使用内间距，使用外间距会导致顶栏无法显示主内容 */
.custom-padding {
  padding: 64px 10vw 96px 10vw;
}
</style>
