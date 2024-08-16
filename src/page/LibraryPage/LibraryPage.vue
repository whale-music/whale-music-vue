<script setup lang="ts">
import LikeLibrary from "@/page/LibraryPage/components/LikeLibrary/index.vue";
import {
  ReTabs,
  ReTabsContent,
  ReTabsList,
  ReTabsTrigger,
} from "@/components/ReTabs";
import { computed, inject, onMounted, Ref, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import LibraryTabPlayList from "@/page/LibraryPage/components/Tabs/LibraryTabPlayList.vue";
import LibraryTabArtist from "@/page/LibraryPage/components/Tabs/LibraryTabArtist.vue";
import LibraryTabAlbum from "@/page/LibraryPage/components/Tabs/LibraryTabAlbum.vue";
import LibraryTabMV from "@/page/LibraryPage/components/Tabs/LibraryTabMV.vue";
import LibraryTabPlayHistory from "@/page/LibraryPage/components/Tabs/LibraryTabPlayHistory.vue";
import { ScrollAreaViewport } from "radix-vue";
import { scrollAreaRootKey } from "@/constant/Dependenceinjection.ts";
import { ContainerRollingUtil } from "@/utils/ContainerRollingUtil.ts";

defineOptions({
  name: "LibraryPage",
});

// Rolling distance
const top = 375;

const router = useRouter();
const route = useRoute();
const tabs = ref();

const { t } = useI18n();

const scrollAreaRoot =
  inject<Ref<InstanceType<typeof ScrollAreaViewport> | undefined>>(
    scrollAreaRootKey,
  );

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
  return route.params.tab?.[0];
});


onMounted(() => {
  const value = route?.params?.tab?.[0];
  if (value) {
    ContainerRollingUtil.scrollTo({ el: scrollAreaRoot?.value, top });
  }
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
      <ReTabsList class="md:flex justify-start w-full my-4 hidden">
        <ReTabsTrigger
          :value="i.value"
          v-for="i in tabsList"
          @click="
            ContainerRollingUtil.scrollTo({ el: scrollAreaRoot, top })
          "
          :key="i.value"
        >
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
