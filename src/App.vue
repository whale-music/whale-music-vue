<script setup lang="ts">
import TopNavigationBar from '@/components/TopNavigationBar/index.vue'
import { useColorMode } from '@vueuse/core'
useColorMode()
</script>

<template>
  <TopNavigationBar />
  <main>
    <RouterView />
  </main>
</template>

<style lang="css" scoped>
main {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: auto;
  padding: 64px 10vw 96px 10vw;
  box-sizing: border-box;
  /* firefox 取消进度条 */
  scrollbar-width: none;
}
</style>
