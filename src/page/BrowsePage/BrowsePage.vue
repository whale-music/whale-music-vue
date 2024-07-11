<script setup lang="ts">
import {
  ReTabs,
  ReTabsList,
  ReTabsTrigger,
  ReTabsContent,
} from "@/components/ReTabs";
import { useI18n } from "vue-i18n";

defineOptions({
  name: "BrowsePage",
});
const { t } = useI18n();

const tabsList = [
  {
    value: "playlist",
    label: t("browse.playlist"),
  },
  {
    value: "music",
    label: t("browse.music"),
  },
  {
    value: "album",
    label: t("browse.album"),
  },
  {
    value: "artist",
    label: t("browse.artist"),
  },
  {
    value: "MV",
    label: t("browse.mv"),
  },
  {
    value: "Tag",
    label: t("browse.tag"),
  },
];
</script>

<template>
  <div>
    <h1 class="text-5xl font-semibold my-8">{{ $t("nav.browse") }}</h1>
    <ReTabs default-value="playlist" class="w-[600px]">
      <ReTabsList class="grid w-full grid-cols-6 my-4">
        <ReTabsTrigger :value="i.value" v-for="i in tabsList" :key="i.value">
          {{ i.label }}
        </ReTabsTrigger>
      </ReTabsList>
      <ReTabsContent :value="i.value" v-for="i in tabsList" :key="i.value">
        <h1>{{ i.label }}</h1>
      </ReTabsContent>
    </ReTabs>
  </div>
</template>

<style scoped></style>
