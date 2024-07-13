<script setup lang="ts">
import {
  MusicPlayerDrawer,
  MusicPlayerDrawerContent,
  MusicPlayerDrawerFooter,
  MusicPlayerDrawerTitle,
  MusicPlayerDrawerDescription,
  DrawerClose,
} from "@/components/MusicPlayer/components/MusicPlayerDrawer";
import MaterialSymbolsKeyboardArrowDownRounded from "@/assets/icon/MaterialSymbolsKeyboardArrowDownRounded.vue";

defineOptions({
  name: "MusicPlayer",
});

const value = defineModel({
  default: false,
});
</script>

<template>
  <MusicPlayerDrawer v-model:open="value" :fade-from-index="9999">
    <MusicPlayerDrawerContent>
      <MusicPlayerDrawerTitle />
      <MusicPlayerDrawerDescription>
        <MusicPlayerDrawerFooter class="h-screen">
          <DrawerClose class="icon-button-close">
            <button class="hover:bg-accent rounded-lg">
              <MaterialSymbolsKeyboardArrowDownRounded
                class="w-10 h-10 text-foreground"
              />
            </button>
          </DrawerClose>
        </MusicPlayerDrawerFooter>
      </MusicPlayerDrawerDescription>
    </MusicPlayerDrawerContent>
  </MusicPlayerDrawer>
</template>

<style lang="scss" scoped>
.icon-button-close {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 300;
  border-radius: 0.75rem;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.28;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
}
</style>
