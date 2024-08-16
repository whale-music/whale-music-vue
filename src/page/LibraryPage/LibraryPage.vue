<script setup lang="ts">
import LikeLibrary from "@/page/LibraryPage/components/LikeLibrary/index.vue";
import {
  ReTabs,
  ReTabsContent,
  ReTabsList,
  ReTabsTrigger,
} from "@/components/ReTabs";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import LibraryTabPlayList from "@/page/LibraryPage/components/Tabs/LibraryTabPlayList.vue";
import LibraryTabArtist from "@/page/LibraryPage/components/Tabs/LibraryTabArtist.vue";
import LibraryTabAlbum from "@/page/LibraryPage/components/Tabs/LibraryTabAlbum.vue";
import LibraryTabMV from "@/page/LibraryPage/components/Tabs/LibraryTabMV.vue";
import LibraryTabPlayHistory from "@/page/LibraryPage/components/Tabs/LibraryTabPlayHistory.vue";

defineOptions({
  name: "LibraryPage",
});

const router = useRouter();
const route = useRoute();
const tabs = ref();

const { t } = useI18n();

const tabsList = [
  {
    value: "playlist",
    label: t("library.playlist"),
    component: LibraryTabPlayList,
  },
  {
    value: "artist",
    label: t("library.artist"),
    component: LibraryTabArtist,
  },
  {
    value: "album",
    label: t("library.album"),
    component: LibraryTabAlbum,
  },
  {
    value: "mv",
    label: t("library.mv"),
    component: LibraryTabMV,
  },
  {
    value: "playHistory",
    label: t("library.playHistory"),
    component: LibraryTabPlayHistory,
  },
];

watch(tabs, (newVal) => {
  router.push({ name: "LibraryPage", params: { tab: newVal } });
});

const defaultValue = computed(() => {
  if (!(route.params && route.params?.tab)) {
    return undefined;
  }
  return route.params.tab[0];
});
</script>

<template>
  <LikeLibrary />
  <div>
    <ReTabs
      :default-value="defaultValue ?? 'playlist'"
      class="w-full"
      v-model="tabs"
    >
      <ReTabsList class="flex justify-start w-full my-4">
        <ReTabsTrigger :value="i.value" v-for="i in tabsList" :key="i.value">
          {{ i.label }}
        </ReTabsTrigger>
      </ReTabsList>
      <ReTabsContent :value="i.value" v-for="i in tabsList" :key="i.value">
        <Component :is="i.component" />
      </ReTabsContent>
    </ReTabs>
  </div>
</template>

<style scoped></style>
