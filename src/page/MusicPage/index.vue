<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import MusicSources from "@/page/MusicPage/MusicSources.vue";
import MusicInfo from "@/page/MusicPage/MusicInfo.vue";

const route = useRoute();
onMounted(() => {
  console.log(route.params.id[0]);
});

const music = reactive({
  id: 2143453,
  name: "Song of the Phoenix",
  isLike: false,
  describe: "\"Echoes of the Universe\" takes listeners on a journey through the vast expanse of space, weaving together ethereal synths and haunting melodies that evoke the solitude and grandeur of the cosmos. Each track is a sonic portrait of distant galaxies, black holes, and the silent whispers of stars, creating an immersive experience that transcends time and space.",
  avatar: "https://t.alcy.cc/fj/",
  album: {
    id: 123123,
    name: "Phoenix",
  },
  upload: {
    userId: 123123,
    username: "Phoenix",
  },
  sources: [
    { id: 1234124, name: "241234325.mp3", path: "/234/15sdf/12124fsef.mp3" },
    { id: 1234124, name: "241234325.mp3", path: "/234/15sdf/12124fsef.mp3" },
    { id: 1234124, name: "241234325.mp3", path: "/234/15sdf/12124fsef.mp3" },
    { id: 1234124, name: "241234325.mp3", path: "/234/15sdf/12124fsef.mp3" },
    { id: 1234124, name: "241234325.mp3", path: "/234/15sdf/12124fsef.mp3" },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-8">
    <MusicInfo :music="music" />
    <div class="space-y-4">
      <h2 class="text-4xl font-bold">Source</h2>
      <MusicSources :music="music" />
    </div>
    <div class="text-xs text-foreground/75 font-normal">
      <p>最后更新于 2024年05月13日</p>
      <p>发行于2013年4月12日</p>
      <p>由 {{ music.upload.username }} 用户上传</p>
    </div>
  </div>
</template>

<style scoped></style>
