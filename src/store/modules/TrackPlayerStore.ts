import { defineStore, storeToRefs } from "pinia";
import { computed, reactive, ref } from "vue";
import { AudioPlayer } from "@/components/AudioPlayer/AudioPlayer.ts";

interface Music {
  id: number;
  name: string;
  genre: string;
  isLike: boolean;
  date: Date; // RFC 3339 format
  artwork: string;
  duration: number; // Duration in seconds
}

interface Album {
  id: number;
  name: string;
}

interface Artist {
  id: number;
  name: string;
}

interface Source {
  id: number;
  url: string;
  size: number;
}

export interface MusicData {
  music: Music;
  album: Album;
  artist: Artist[];
  source: Source[];
}

type AudioLoadType =
  | "size-min"
  | "size-max"
  | "sequence-first"
  | "sequence-last";

function _seedRandom(seed: number) {
  const m = 0x80000000; // 2**31
  const a = 1103515245;
  const c = 12345;
  let state = seed ? seed : Math.floor(Math.random() * (m - 1));

  return function () {
    state = (a * state + c) % m;
    return state / (m - 1);
  };
}

/**
 * 播放歌单
 */
export const usePlayerStore = defineStore("whale-player-store", () => {
  // 音乐播放歌单
  const originPlayerTracks = ref<MusicData[]>([
    {
      music: {
        id: 0,
        name: "Song of the Phoenix",
        isLike: true,
        genre: "",
        // RFC 3339 format
        // 2014-05-20T07:00:00+00:00
        date: new Date(),
        // Load artwork from the network
        artwork: "",
        // Duration in seconds
        duration: 43414,
      },
      album: {
        id: 35325,
        name: "Celestial Harmony",
      },
      artist: [
        {
          id: 0,
          name: "Luna Azure",
        },
      ],
      source: [
        {
          id: 123,
          url: "https://96.f.1ting.com/local_to_cube_202004121813/96kmp3/2024/04/25/25e_lzx/01.mp3",
          size: 34325,
        },
      ],
    },
  ]);

  /* 播放属性 */
  const musicControl = reactive({
    // 是否在播放
    paused: true,
    // 音量条
    volume: 0,
    // 进度条
    progress: 0,
    duration: 0,
    // audio缓冲进度
    bufferProgress: 0,
    // 当前音乐索引
    currentIndex: 0,
    // 随机播放
    randomPlay: false,
    // 默认加载source音源配置
    audioLoadConf: "size-min" as AudioLoadType,
  });
  /*************************/

  // 回调函数
  let seedRandom = _seedRandom(0);
  let errorCallback: (error: Error | unknown) => void = () => {};

  /* 创建audio元素 */
  const audioElement = document.createElement("audio");
  const audioPlayer: AudioPlayer = new AudioPlayer(audioElement);
  audioPlayer.currentProgressChange = (v) => (musicControl.progress = v);
  audioPlayer.durationChange = (v) => (musicControl.duration = v);
  audioPlayer.pausedChange = (v) => (musicControl.paused = v);
  audioPlayer.volumeChange = (v) => (musicControl.volume = v);
  audioPlayer.bufferProgressChange = (v) => (musicControl.bufferProgress = v);
  // 初始化默认数据
  musicControl.paused = audioElement.paused;
  musicControl.volume = audioElement.volume;
  /*************************/

  /* 计算属性 */
  // volume
  const progressVolume = computed({
    get: () => [musicControl.volume],
    set: ([val]) => {
      setVolume(val);
      musicControl.volume = val;
    },
  });

  const progressPlayBack = computed({
    get: () => [musicControl.progress],
    set: ([val]) => {
      seekTo(val);
      musicControl.progress = val;
    },
  });

  // 底部音乐控制栏 显示/关闭
  const isMusicControlBarVisible = computed(
    () => originPlayerTracks.value.length !== 0,
  );

  // 播放列表
  const playerTrack = computed((): MusicData[] => {
    if (musicControl.randomPlay) {
      return _shuffleArray(
        originPlayerTracks.value,
        originPlayerTracks.value.length,
      );
    }
    return originPlayerTracks.value;
  });

  // 当前音乐
  const currentAudio = computed(() => {
    if (playerTrack && playerTrack.value.length === 0) {
      pause();
      const error = "current track no music";
      errorCallback(error);
      throw new Error(error);
    } else {
      return playerTrack.value[musicControl.currentIndex];
    }
  });
  const computationalAttribute = {
    progressVolume,
    progressPlayBack,
    isMusicControlBarVisible,
    playerTrack,
    currentAudio,
  };
  /**********************************/

  /* 内部函数 */
  function _shuffleArray<T>(array: Array<T>, seed: number) {
    seedRandom = _seedRandom(seed);
    const newArray = array.slice(); // 创建数组的副本
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(seedRandom() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // 交换元素
    }
    return newArray;
  }
  const audioLoadHandle = (arrays: Source[]) => {
    switch (musicControl.audioLoadConf) {
      case "size-min":
        return arrays.reduce((min, current) =>
          min.size < current.size ? min : current,
        );
      case "size-max":
        return arrays.reduce((max, current) =>
          max.size > current.size ? max : current,
        );
      case "sequence-first":
        return arrays[0];
      case "sequence-last":
        return arrays[arrays.length - 1];
    }
  };

  function loadAudio() {
    // 尝试初始化
    if (
      playerTrack &&
      playerTrack.value.length &&
      playerTrack.value.length !== 0
    ) {
      audioPlayer.loadAudio(audioLoadHandle(currentAudio.value.source).url);
    }
  }
  /***************************/

  /* 音乐播放控制 */
  // Changing Playback State
  const add = (track?: MusicData[] | MusicData) => {
    if (!track) {
      return;
    }
    if (Array.isArray(track)) {
      originPlayerTracks.value.push(...track);
    } else {
      originPlayerTracks.value.push(track);
    }
    loadAudio();
  };

  const play = () => {
    return audioPlayer.play();
  };
  const pause = () => {
    audioPlayer.pause();
  };
  const reset = () => {
    return audioPlayer.reset();
  };
  const seekTo = (time: number) => {
    return audioPlayer.seekTo(time);
  };
  const setVolume = (percentage: number) => {
    audioPlayer.setVolume(percentage);
  };

  // Remove two tracks from the queue:
  const remove = (trackIndexes: Array<number>) => {
    for (let trackIndex of trackIndexes) {
      const player = playerTrack.value[trackIndex];
      const index = originPlayerTracks.value.findIndex(
        (value) => value.music.id === player.music.id,
      );
      // 对原数组进行删除
      originPlayerTracks.value.splice(index, 1);
    }
  };

  const toggleMusicPlayback = async () => {
    if (musicControl.paused) {
      pause();
    } else {
      await play();
    }
  };

  // Retrieve the track objects in the queue:
  const getQueue = (): Array<MusicData> => {
    return playerTrack.value;
  };

  const player = {
    add,
    play,
    pause,
    reset,
    seekTo,
    setVolume,
    remove,
    toggleMusicPlayback,
    getQueue,
  };
  /***************************/

  // 播放音乐界面
  // 界面 显示/关闭
  const isPlayerDetailVisible = ref(false);
  const togglePlayDetailDisplay = () => {
    isPlayerDetailVisible.value = !isPlayerDetailVisible.value;
  };

  // 添加音乐到喜欢歌单
  const toggleMusicLike = () => {
    currentAudio.value.music.isLike = !currentAudio.value.music.isLike;
  };

  // Skip to the next track in the queue:
  const nextMusic = () => {
    skip((musicControl.currentIndex + 1) % playerTrack.value.length);
  };

  // Skip to the previous track in the queue:
  const lastMusic = () => {
    skip((musicControl.currentIndex - 1) % playerTrack.value.length);
  };

  // Controlling the Queue
  // Skip to a specific track index:
  const skip = (trackIndex: number) => {
    if (trackIndex !== undefined && playerTrack.value[trackIndex] !== undefined) {
      musicControl.currentIndex = trackIndex;
      loadAudio();
    }
  };

  const control = {
    isPlayerDetailVisible,
    togglePlayDetailDisplay,
    nextMusic,
    lastMusic,
    toggleMusicLike,
  };

  return {
    ...computationalAttribute,
    ...player,
    ...control,
    musicControl,
    toggleMusicPlayback,
  };
});

export function useRefPlayerStore() {
  return storeToRefs(usePlayerStore());
}
