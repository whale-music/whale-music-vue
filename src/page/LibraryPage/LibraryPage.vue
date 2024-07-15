<script setup lang="ts">
import LikeLibrary from "@/page/LibraryPage/components/LikeLibrary/index.vue";
import { CoverCard } from "@/components/CoverCard";

defineOptions({
  name: "LibraryPage",
});
</script>

<template>
  <LikeLibrary />
  <div>
    <div class="my-2">
      <ul class="flex gap-4 font-semibold">
        <li
          class="cursor-pointer py-2 px-3 rounded transition-colors duration-150 hover:bg-foreground/20 bg-foreground/10"
        >
          全部歌单
        </li>
        <li
          class="cursor-pointer py-2 px-3 rounded transition-colors duration-150 hover:bg-foreground/20 text-foreground/80"
        >
          专辑
        </li>
        <li
          class="cursor-pointer py-2 px-3 rounded transition-colors duration-150 hover:bg-foreground/20 text-foreground/80"
        >
          艺术家
        </li>
        <li
          class="cursor-pointer py-2 px-3 rounded transition-colors duration-150 hover:bg-foreground/20 text-foreground/80"
        >
          MV
        </li>
        <li
          class="cursor-pointer py-2 px-3 rounded transition-colors duration-150 hover:bg-foreground/20 text-foreground/80"
        >
          听歌排行
        </li>
      </ul>
    </div>
    <div class="grid sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-11">
      <CoverCard
        title="123123"
        src="https://t.alcy.cc/fj/"
        v-for="i in 100"
        :key="i"
      />
    </div>
  </div>
</template>

<style scoped></style>
