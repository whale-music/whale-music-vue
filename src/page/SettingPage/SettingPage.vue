<script setup lang="ts">
import UserCard from "@/page/SettingPage/components/UserCard/index.vue";
import { Menu, MenuItem } from "@/page/SettingPage/components/Menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/components/ui/select";
import { useSettingStore } from "@/store/modules/SettingStore.ts";
import { Switch } from "@/shadcn/components/ui/switch";
const settings = useSettingStore();
console.log(settings.language);
</script>

<template>
  <div class="flex justify-center">
    <div class="basis-2/3 space-y-4">
      <UserCard />
      <!-- 通用 -->
      <Menu :title="$t('settings.general')">
        <MenuItem :label="$t('settings.appearance.text')">
          <Select v-model="settings.appearance">
            <SelectTrigger class="w-[180px] bg-foreground/5 border-0">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="light"
                  ><span class="text-xs font-semibold">Light</span>
                </SelectItem>
                <SelectItem value="dark">
                  <span class="text-xs font-semibold">Dark</span>
                </SelectItem>
                <SelectItem value="auto">
                  <span class="text-xs font-semibold">System</span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </MenuItem>
        <MenuItem :label="$t('settings.language')">
          <Select v-model="settings.language">
            <SelectTrigger class="w-[180px] bg-foreground/5 border-0">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="en"
                  ><span class="text-xs font-semibold">English</span>
                </SelectItem>
                <SelectItem value="zh-CN">
                  <span class="text-xs font-semibold">简体中文</span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </MenuItem>
        <MenuItem :label="$t('settings.musicQuality.text')">
          <Select v-model="settings.state.musicQuality">
            <SelectTrigger class="w-[180px] bg-foreground/5 border-0">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="min-size"
                  ><span class="text-xs font-semibold">最小文件</span>
                </SelectItem>
                <SelectItem value="max-size">
                  <span class="text-xs font-semibold">最大文件</span>
                </SelectItem>
                <SelectItem value="first">
                  <span class="text-xs font-semibold">第一位</span>
                </SelectItem>
                <SelectItem value="last">
                  <span class="text-xs font-semibold">最后一位</span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </MenuItem>
      </Menu>
      <!-- 性能 -->
      <Menu :title="$t('settings.performance.text')">
        <MenuItem :label="$t('settings.performance.topBar')">
          <Switch v-model:checked="settings.state.performance.topBlur" />
        </MenuItem>
        <MenuItem :label="$t('settings.performance.bottomBar')">
          <Switch v-model:checked="settings.state.performance.bottomBlur" />
        </MenuItem>
        <MenuItem :label="$t('settings.performance.playInterface.text')">
          <Select v-model="settings.state.playInterface">
            <SelectTrigger class="w-[180px] bg-foreground/5 border-0">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default"
                  ><span class="text-xs font-semibold">默认</span>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </MenuItem>
      </Menu>
    </div>
  </div>
</template>

<style scoped></style>
