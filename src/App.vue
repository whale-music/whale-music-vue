<script setup lang="ts">
import TopNavigationBar from "@/components/TopNavigationBar/index.vue";
import { useColorMode } from "@vueuse/core";
import { ScrollArea } from "@/shadcn/components/ui/scroll-area";
import MusicPlayer from "@/components/MusicPlayer/index.vue";
import { Button } from "@/shadcn/components/ui/button";
import { ref } from "vue";
useColorMode();
const value = ref(false);
</script>

<template>
  <TopNavigationBar />
  <main>
    <ScrollArea class="h-full w-full">
      <div class="custom-padding">
        <RouterView />
        <Button @click="value = !value">open</Button>
      </div>
    </ScrollArea>
  </main>
  <MusicPlayer v-model="value"/>
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
