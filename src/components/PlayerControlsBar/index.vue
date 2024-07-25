<script setup lang="ts">
import MusicPlayer from "@/components/MusicPlayer/index.vue";
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
import { usePlayerStore } from "@/store/modules/TrackPlayerStore.ts";
import PlayStopIconButton from "@/components/PlayerControlsBar/components/PlayStopIconButton.vue";
import { PlaybackProgressSlider } from "@/components/PlayerControlsBar/components/PlaybackProgressSlider";
import { computed } from "vue";

const playerStore = usePlayerStore();

const bufferPercentage = computed(() => {
  return `${(playerStore.musicControl.bufferProgress / playerStore.musicControl.duration) * 100}%`;
});
</script>

<template>
  <MusicPlayer v-model="playerStore.isPlayerDetailVisible" />
  <div class="player-controls-bar">
    <div>
      <PlaybackProgressSlider
        v-model="playerStore.progressPlayBack"
        :default-value="[0]"
        :max="playerStore.musicControl.duration"
        :step="1"
        :buffer="bufferPercentage"
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
            {{ playerStore.currentAudio.music.name }}
          </b>
          <a
            class="text-xs opacity-50 hover:underline cursor-pointer"
            v-for="i in playerStore.currentAudio.artist"
          >
            {{ i.name }}
          </a>
        </div>
        <div class="ml-8">
          <button
            @click="playerStore.toggleMusicLike"
            class="icon-button rounded-lg p-2"
          >
            <SolarHeartBold
              v-if="playerStore.currentAudio.music.isLike"
              class="text-red-600"
            />
            <SolarHeartOutline v-else />
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button class="rounded-lg icon-button">
          <SolarRewindForwardBoldDuotone
            class="size-6 m-2 rotate-180"
            @click="playerStore.lastMusic"
          />
        </button>
        <PlayStopIconButton
          @play="playerStore.play"
          @pause="playerStore.pause"
          v-model="playerStore.musicControl.paused"
        />
        <IconButton>
          <SolarRewindForwardBoldDuotone
            class="size-6 m-2"
            @click="playerStore.nextMusic"
          />
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
            v-model="playerStore.progressVolume"
            :default-value="[0]"
            :max="1"
            :step="0.01"
          />
        </div>
        <IconButton @click="playerStore.togglePlayDetailDisplay">
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
