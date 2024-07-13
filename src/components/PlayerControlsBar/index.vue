<script setup lang="ts">
import MusicPlayer from "@/components/MusicPlayer/index.vue";
import { computed } from "vue";
import MaterialSymbolsKeyboardArrowDownRounded from "@/assets/icon/MaterialSymbolsKeyboardArrowDownRounded.vue";
import SolarRewindForwardBoldDuotone from "@/assets/icon/SolarRewindForwardBoldDuotone.vue";
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
import { usePlayerStore } from "@/store/modules/PlayerStore.ts";
import { storeToRefs } from "pinia";
import PlayStopIconButton from "@/components/PlayerControlsBar/components/PlayStopIconButton.vue";

const playerStore = usePlayerStore();
// 导出函数
const { togglePlay, toggleMusicLike, toggleMusicPlayback } = playerStore;
// 导出响应式变量
const { isPlayerVisible, currentMusic, musicControl } =
  storeToRefs(playerStore);

const volumeBar = computed({
  get: () => [musicControl.value.volume],
  set: (val) => {
    musicControl.value.volume = val[0];
  },
});

const progressBar = computed({
  get: () => [musicControl.value.progress],
  set: (val) => {
    musicControl.value.progress = val[0];
  },
});
</script>

<template>
  <MusicPlayer v-model="isPlayerVisible" />
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
            {{ currentMusic.music.name }}
          </b>
          <a class="text-xs opacity-50 hover:underline cursor-pointer">{{
            currentMusic.artist.name
          }}</a>
        </div>
        <div class="ml-8">
          <button @click="toggleMusicLike" class="icon-button rounded-lg p-2">
            <SolarHeartBold
              v-if="currentMusic.music.isLike"
              class="text-red-600"
            />
            <SolarHeartOutline v-else />
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button class="rounded-lg icon-button">
          <SolarRewindForwardBoldDuotone class="size-6 m-2 rotate-180" />
        </button>
        <PlayStopIconButton
          @click="toggleMusicPlayback"
          v-model="musicControl.isPlay"
        />
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
        <IconButton @click="togglePlay">
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
