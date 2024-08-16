<script setup lang="ts">
import {
  ReTabs,
  ReTabsContent,
  ReTabsList,
  ReTabsTrigger,
} from "@/components/ReTabs";
import { useI18n } from "vue-i18n";
import TabPlayList from "@/page/BrowsePage/components/TabPlayList/index.vue";
import TabMusic from "@/page/BrowsePage/components/TabMusic/index.vue";
import TabAlbum from "@/page/BrowsePage/components/TabAlbum/index.vue";
import TabArtist from "@/page/BrowsePage/components/TabArtist/index.vue";
import TabMV from "@/page/BrowsePage/components/TabMV/index.vue";
import TabTag from "@/page/BrowsePage/components/TabTag/index.vue";
import { computed, inject, onMounted, Ref, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ScrollAreaViewport } from "radix-vue";
import { scrollAreaRootKey } from "@/constant/Dependenceinjection.ts";
import { ContainerRollingUtil } from "@/utils/ContainerRollingUtil.ts";

defineOptions({
  name: "BrowsePage",
});
const { t } = useI18n();

const tabsList = [
  {
    value: "playlist",
    label: t("browse.playlist"),
    component: TabPlayList,
  },
  {
    value: "music",
    label: t("browse.music"),
    component: TabMusic,
  },
  {
    value: "album",
    label: t("browse.album"),
    component: TabAlbum,
  },
  {
    value: "artist",
    label: t("browse.artist"),
    component: TabArtist,
  },
  {
    value: "mv",
    label: t("browse.mv"),
    component: TabMV,
  },
  {
    value: "tag",
    label: t("browse.tag"),
    component: TabTag,
  },
];

// Rolling distance
const top = 110;

const router = useRouter();
const route = useRoute();
const tabs = ref();

const scrollAreaRoot =
  inject<Ref<InstanceType<typeof ScrollAreaViewport> | undefined>>(
    scrollAreaRootKey,
  );

watch(tabs, (newVal) => {
  router.push({ name: "BrowsePage", params: { tab: newVal } });
});
const defaultValue = computed(() => {
  if (!(route.params && route.params?.tab)) {
    return undefined;
  }
  return route.params.tab[0];
});

onMounted(() => {
  const value = route?.params?.tab?.[0];
  if (value) {
    ContainerRollingUtil.scrollTo({ el: scrollAreaRoot?.value, top });
  }
});
</script>

<template>
  <div>
    <h1 class="text-5xl font-semibold my-8">{{ $t("nav.browse") }}</h1>
    <ReTabs
      :default-value="defaultValue ?? 'playlist'"
      class="w-full"
      v-model="tabs"
    >
      <ReTabsList class="grid sm:w-full md:w-1/2 grid-cols-6 my-4">
        <ReTabsTrigger
          :value="i.value"
          v-for="i in tabsList"
          :key="i.value"
          @click="ContainerRollingUtil.scrollTo({ el: scrollAreaRoot, top })"
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
