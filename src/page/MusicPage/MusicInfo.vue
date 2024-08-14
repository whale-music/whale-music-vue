<script setup lang="ts">

import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/components/ui/avatar";
import MusicIntroduce from "@/page/MusicPage/MusicIntroduce.vue";

defineOptions({
  name: "MusicInfo",
})

defineProps<{ music: any }>();
</script>

<template>
  <div class="flex gap-14 flex-wrap md:flex-nowrap mt-8">
      <Avatar class="sm:size-72 size-full aspect-square rounded-xl">
        <AvatarImage :src="music.avatar" alt="@radix-vue" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <MusicIntroduce :music="music" />
    </div>
</template>

<style scoped>

</style>
