<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import { useUserStore } from "@/store/modules/UserStore.ts";

defineOptions({
  name: "LikeLibrary",
});

const userStore = useUserStore();
</script>

<template>
  <div>
    <div class="flex my-4 items-center gap-4">
      <Avatar class="text-5xl object-cover rounded-full cursor-pointer size-14">
        <AvatarImage :src="userStore.avatar" alt="@radix-vue" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <h1 class="text-5xl font-semibold cursor-pointer">{{ $t('settings.myLibrary',[userStore.name]) }}</h1>
    </div>
    <div class="h-60 flex gap-x-6 my-8">
      <div
        class="bg-primary/10 basis-1/3 h-60 rounded-lg px-6 py-4 flex flex-col"
      >
        <span class="text-lg flex-1 text-primary">
          {{ userStore.randomLikeLyric }}
        </span>
        <div class="flex justify-between items-center">
          <div class="flex flex-col gap-1">
            <h2 class="text-3xl font-bold text-primary">{{ $t('settings.myLikeMusic') }}</h2>
            <span class="text-base">{{ $t('settings.likeCount',[userStore.like.count]) }}</span>
          </div>
          <div
            class="rounded-full h-full bg-primary text-primary-foreground aspect-square flex justify-center items-center cursor-pointer"
          >
            <SolarPlayBold class="size-5/12" />
          </div>
        </div>
      </div>
      <div class="basis-2/3 h-60">
        <ul class="grid grid-cols-3 gap-4">
          <li
            v-for="i in userStore.like.musics"
            class="truncate flex gap-2 hover:bg-foreground/20 p-2 rounded-lg transition-colors duration-150 ease-linear"
          >
            <Avatar class="size-10 object-cover rounded cursor-pointer">
              <AvatarImage src="https://t.alcy.cc/fj/" alt="@radix-vue" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div class="flex flex-col">
              <span class="text-base font-bold cursor-pointer">{{
                i.name
              }}</span>
              <div class="flex gap-2">
                <span
                  class="text-xs font-medium hover:underline cursor-pointer w-full truncate"
                  v-for="a in i.artist"
                >
                  {{ a }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
