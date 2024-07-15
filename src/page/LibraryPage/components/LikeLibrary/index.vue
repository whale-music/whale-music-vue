<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";

defineOptions({
  name: "LikeLibrary",
});

const likeMusic = [
  {
    title: "Echoes of Time",
    artist: "Starlight Whisper",
    lyrics: "Echoes of time, in my mind, memories of you, forever I'll find.",
  },
  {
    title: "Whispering Winds",
    artist: "Mystic River",
    lyrics: "Whispering winds, through the trees, a melody that sets me free.",
  },
  {
    title: "Silent Symphony",
    artist: "Dream Weaver",
    lyrics: "Silent symphony, in my heart, we'll never be apart.",
  },
  {
    title: "Dancing Shadows",
    artist: "Echo Star",
    lyrics:
      "Dancing shadows, in the moonlight, holding hands, everything's alright.",
  },
  {
    title: "Waves of Dreams",
    artist: "Luna Sky",
    lyrics: "Waves of dreams, wash over me, guiding me to where I'll be.",
  },
];
</script>

<template>
  <div>
    <div class="flex my-4 items-center gap-4">
      <Avatar class="text-5xl object-cover rounded-full cursor-pointer">
        <AvatarImage src="https://t.alcy.cc/fj/" alt="@radix-vue" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <h1 class="text-5xl font-semibold cursor-pointer">焚梦的音乐库</h1>
    </div>
    <div class="h-60 flex gap-x-6 my-8">
      <div
        class="bg-primary/10 basis-1/3 h-60 rounded-lg px-6 py-4 flex flex-col cursor-pointer"
      >
        <span class="text-lg flex-1 text-primary">
          {{ likeMusic[0].lyrics }}
        </span>
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-3xl font-bold text-primary">我喜欢的音乐</h2>
            <span class="text-base">123 首歌</span>
          </div>
          <div
            class="rounded-full h-full bg-primary text-primary-foreground aspect-square flex justify-center items-center"
          >
            <SolarPlayBold class="size-5/12" />
          </div>
        </div>
      </div>
      <div class="basis-2/3 h-60">
        <ul class="grid grid-cols-3 gap-4">
          <li v-for="i in likeMusic" class="truncate flex gap-2 hover:bg-foreground/20 p-2 rounded-lg transition-colors duration-150 ease-linear">
            <Avatar class="size-10 object-cover rounded cursor-pointer">
              <AvatarImage src="https://t.alcy.cc/fj/" alt="@radix-vue" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div class="flex flex-col">
              <span class="text-base font-bold cursor-pointer">{{
                i.title
              }}</span>
              <span
                class="text-xs font-medium hover:underline cursor-pointer"
              >
                {{ i.artist }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
