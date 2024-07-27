import { defineStore, storeToRefs } from "pinia";
import { computed, reactive } from "vue";
import { useColorMode } from "@vueuse/core";
import { useI18n } from "vue-i18n";

export const useSettingStore = defineStore("whale-setting-store", () => {
  const colorMode = useColorMode();
  const i18n = useI18n();
  const state = reactive({
    appearance: colorMode.value as "auto" | "dark" | "light",
    language: navigator.language,
    musicQuality: 'min-size',
    playInterface: 'default',
  });

  const appearance = computed({
    get: () => {
      return state.appearance;
    },
    set: (val) => {
      colorMode.value = val;
      state.appearance = val;
    },
  });
  const language = computed({
    get: () => {
      return state.language;
    },
    set: (val) => {
      i18n.locale.value = val;
      state.language = val;
    },
  });

  const attributes = { appearance, language };
  return { state, ...attributes };
});

export const useRefGlobalStore = () => {
  return storeToRefs(useSettingStore());
};
