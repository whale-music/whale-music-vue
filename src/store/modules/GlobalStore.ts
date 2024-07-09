import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("whale-global-store", () => {
  const globalLoading = ref(false);
  const setGlobalLoading = (val: boolean) => {
    globalLoading.value = val;
  };
  return {
    globalLoading,
    setGlobalLoading,
  };
});

export const useRefGlobalStore = () => {
  return storeToRefs(useGlobalStore());
};
