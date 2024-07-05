<script setup lang="ts">
import MusicPlayer from "@/components/MusicPlayer/index.vue";
import { ref } from "vue";
import { Button } from "@/shadcn/components/ui/button";
import MaterialSymbolsKeyboardArrowDownRounded from "@/assets/icon/MaterialSymbolsKeyboardArrowDownRounded.vue";
import SolarRewindForwardBoldDuotone from "@/assets/icon/SolarRewindForwardBoldDuotone.vue";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import SolarHeartBold from "@/assets/icon/SolarHeartBold.vue";
import SolarHeartOutline from "@/assets/icon/SolarHeartOutline.vue";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";
import MingcutePlaylistFill from "@/assets/icon/MingcutePlaylistFill.vue";
import IcRoundVolumeDown from "@/assets/icon/IcRoundVolumeDown.vue";
import IconButton from "@/components/PlayerControlsBar/components/IconButton.vue";
import LucideRepeat1 from "@/assets/icon/LucideRepeat1.vue";
import { ProgressSlider } from "@//components/ProgressSlider";

const value = ref(false);

const isLike = ref(true);

const progressBar = ref([50]);
const volumeBar = ref([50]);
</script>

<template>
  <MusicPlayer v-model="value" />
  <div class="player-controls-bar">
    <div>
      <ProgressSlider
        v-model="progressBar"
        :default-value="[33]"
        :max="100"
        :step="1"
      />
    </div>
    <div class="control">
      <div class="flex items-center">
        <Avatar class="rounded">
          <AvatarImage
            class="size-12"
            src="./music-player-placeholder-image.svg"
            alt="@radix-vue"
          />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <div class="flex flex-col ml-2">
          <b class="font-bold text-sm hover:underline cursor-pointer">
            Flower Children
          </b>
          <a class="text-xs opacity-50 hover:underline cursor-pointer">悠花</a>
        </div>
        <div class="ml-8">
          <button @click="isLike = !isLike" class="icon-button rounded-lg p-2">
            <SolarHeartBold v-if="isLike" class="text-red-600" />
            <SolarHeartOutline v-else />
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button class="rounded-lg icon-button">
          <SolarRewindForwardBoldDuotone class="size-6 m-2 rotate-180" />
        </button>
        <IconButton class="mx-2">
          <SolarPlayBold class="size-8 ml-1.5 mr-2 my-2" />
        </IconButton>
        <IconButton>
          <SolarRewindForwardBoldDuotone class="size-6 m-2" />
        </IconButton>
      </div>
      <div class="flex justify-center items-center gap-2">
        <IconButton>
          <MingcutePlaylistFill class="size-8 p-1.5" />
        </IconButton>
        <IconButton>
          <LucideRepeat1 class="size-8 p-1.5" />
        </IconButton>
        <div class="flex w-32">
          <IconButton>
            <IcRoundVolumeDown class="size-8 p-1" />
          </IconButton>
          <ProgressSlider
            v-model="volumeBar"
            :default-value="[33]"
            :max="100"
            :step="1"
          />
        </div>
        <IconButton @click="value = !value">
          <MaterialSymbolsKeyboardArrowDownRounded
            class="size-8 text-foreground rotate-180"
          />
        </IconButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player-controls-bar {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 64px;
  backdrop-filter: saturate(180%) blur(30px);
  background-color: var(--background);
  z-index: 50;
}
.control {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;
  padding: {
    right: 10vw;
    left: 10vw;
  }
}
.icon-button:hover {
  background-color: hsl(var(--accent) / 0.8);
}
</style>
