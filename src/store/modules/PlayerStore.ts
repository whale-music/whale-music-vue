import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

/**
 * 播放歌单
 */
export const usePlayerStore = defineStore("whale-player-store", () => {
  // 音乐播放歌单
  const playerTracks = ref([
    {
      music: {
        id: 0,
        name: "Flower Children",
        isLike: false,
      },
      artist: {
        id: 0,
        name: "悠花",
      },
    },
  ]);
  // 当前音乐索引
  const currentIndex = ref(0);
  // 当前音乐
  const currentMusic = computed(() => playerTracks.value[currentIndex.value]);
  // 添加音乐到喜欢歌单
  const toggleMusicLike = () => {
    currentMusic.value.music.isLike = !currentMusic.value.music.isLike;
  };

  // 底部音乐控制栏 显示/关闭
  const isMusicControlBarVisible = computed(
    () => playerTracks.value.length !== 0 ?? false,
  );

  // 下一首
  const nextMusic = computed(
    () => (currentIndex.value + 1) % playerTracks.value.length,
  );
  // 上一首
  const lastMusic = computed(
    () => (currentIndex.value - 1) % playerTracks.value.length,
  );

  /* 音乐播放控制 */
  const musicControl = reactive({
    // 是否在播放
    isPlay: false,
    // 音量条
    volume: 0,
    // 进度条
    progress: 0,
  });

  const toggleMusicPlayback = () => {
    musicControl.isPlay = !musicControl.isPlay;
  };

  // 播放音乐界面 显示/关闭
  const isPlayerVisible = ref(false);
  const togglePlay = () => {
    isPlayerVisible.value = !isPlayerVisible.value;
  };

  return {
    isPlayerVisible,
    isMusicControlBarVisible,
    togglePlay,
    toggleMusicLike,
    playerTracks,
    currentMusic,
    nextMusic,
    lastMusic,
    musicControl,
    toggleMusicPlayback,
  };
});
