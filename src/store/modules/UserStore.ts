import { defineStore, storeToRefs } from "pinia";
import { computed, reactive } from "vue";

type Musics = Array<{
  id: number;
  name: string;
  artist: string[];
  lyrics: {
    id: number;
    label: string;
    value: string;
  }[];
}>;
type User = {
  id: number;
  name: string;
  signature: string;
  avatar: string;
  background: string;
  setting: string;
  like: {
    count: number;
    // 喜爱歌单前30首
    musics: Musics;
  };
};

function getRandomLyrics(musics: Musics) {
  const randomIndex = Math.floor(Math.random() * musics.length);
  return musics[randomIndex].lyrics[0].value;
}

export const useUserStore = defineStore("whale-user-store", () => {
  const user = reactive<User>({
    avatar: `https://t.alcy.cc/fj/?q=${Date.now()}`,
    background: "https://t.alcy.cc/fj/?q=${Date.now()}",
    id: 0,
    name: "焚梦",
    setting: "{}",
    signature: "現實與夢境，這裡……是你的夢境還是現實呢？",
    like: {
      count: 43243,
      musics: [],
    },
  } as User);

  user.like.musics = [
    {
      id: 1,
      name: "Echoes of Time",
      artist: ["Starlight Whisper", "Luna Sky"],
      lyrics: [
        {
          id: 1,
          label: "Verse 1",
          value:
            "Echoes of time, in my mind, memories of you, forever I'll find.",
        },
        {
          id: 2,
          label: "Chorus",
          value:
            "In the echoes of time, I'll always find, a piece of you, in my mind.",
        },
        {
          id: 3,
          label: "Verse 2",
          value: "Waves of dreams, wash over me, guiding me to where I'll be.",
        },
      ],
    },
    {
      id: 2,
      name: "Whispering Winds",
      artist: ["Mystic River"],
      lyrics: [
        {
          id: 1,
          label: "Verse 1",
          value:
            "Whispering winds, through the trees, a melody that sets me free.",
        },
        {
          id: 2,
          label: "Chorus",
          value:
            "In the whispering winds, my heart begins, to feel the beat, of nature's sin.",
        },
        {
          id: 3,
          label: "Verse 2",
          value: "Silent symphony, in my heart, we'll never be apart.",
        },
      ],
    },
    {
      id: 3,
      name: "Silent Symphony",
      artist: ["Dream Weaver"],
      lyrics: [
        {
          id: 1,
          label: "Verse 1",
          value: "Silent symphony, in my heart, we'll never be apart.",
        },
        {
          id: 2,
          label: "Chorus",
          value: "In the silent symphony, you and me, forever free.",
        },
        {
          id: 3,
          label: "Verse 2",
          value:
            "Dancing shadows, in the moonlight, holding hands, everything's alright.",
        },
      ],
    },
    {
      id: 4,
      name: "Dancing Shadows",
      artist: ["Echo Star"],
      lyrics: [
        {
          id: 1,
          label: "Verse 1",
          value:
            "Dancing shadows, in the moonlight, holding hands, everything's alright.",
        },
        {
          id: 2,
          label: "Chorus",
          value:
            "In the dancing shadows, love always grows, a bond that only we know.",
        },
        {
          id: 3,
          label: "Verse 2",
          value: "Waves of dreams, wash over me, guiding me to where I'll be.",
        },
      ],
    },
    {
      id: 5,
      name: "Waves of Dreams",
      artist: ["Luna Sky"],
      lyrics: [
        {
          id: 1,
          label: "Verse 1",
          value: "Waves of dreams, wash over me, guiding me to where I'll be.",
        },
        {
          id: 2,
          label: "Chorus",
          value:
            "In the waves of dreams, nothing's as it seems, but everything's as it should be.",
        },
        {
          id: 3,
          label: "Verse 2",
          value:
            "Echoes of time, in my mind, memories of you, forever I'll find.",
        },
      ],
    },
  ];

  const isLogin = computed(() => {
    return !(user === null || user.id === null);
  });

  const randomLikeLyric = computed(() => {
    return getRandomLyrics(user.like.musics);
  });

  return {
    ...user,
    isLogin,
    randomLikeLyric
  };
});

export const useRefUserStore = () => {
  return storeToRefs(useUserStore());
};
