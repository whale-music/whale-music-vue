<script setup lang="ts">
import { Badge } from "@/shadcn/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/shadcn/components/ui/dialog";
import AkarIconsMoreHorizontal from "@/assets/icon/IcRoundMoreHoriz.vue";
import { ScrollArea } from "@/shadcn/components/ui/scroll-area";
import { Button } from "@/shadcn/components/ui/button";
import SolarHeartBold from "@/assets/icon/SolarHeartBold.vue";
import SolarHeartOutline from "@/assets/icon/SolarHeartOutline.vue";
import SolarPlayBold from "@/assets/icon/SolarPlayBold.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";

defineOptions({
  name: "MusicIntroduce",
});

defineProps<{ music: any }>();
</script>

<template>
  <div class="flex flex-col justify-between gap-4">
    <div class="flex flex-col gap-4">
      <h1 class="text-5xl font-semibold font-sans">{{ music.name }}</h1>
      <div class="flex flex-col">
        <span class="block text-lg font-light"
          >Album by
          <RouterLink to="" class="font-bold hover:underline"
            >{{ music.album.name }}
          </RouterLink>
        </span>
        <div class="text-sm text-foreground/65 space-x-1">
          <Badge
            variant="secondary"
            v-for="i in ['Secondary', 'Srggdaoq']"
            class="text-foreground/65 text-xs cursor-pointer hover:text-foreground/75 hover:bg-secondary"
          >
            {{ i }}
          </Badge>
          <span> / </span>
          <Badge
            variant="secondary"
            v-for="i in ['Volia', 'Qingdao']"
            class="text-foreground/65 text-xs cursor-pointer hover:text-foreground/75 hover:bg-secondary"
          >
            {{ i }}
          </Badge>
        </div>
      </div>
      <Dialog>
        <DialogTrigger as-child>
          <p
            class="h-16 py-0.5 text-sm text-foreground/65 line-clamp-3 cursor-pointer hover:text-foreground/85"
          >
            {{ music.describe }}
          </p>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[50vw]">
          <DialogHeader class="pb-4">
            <DialogTitle class="text-2xl font-semibold"> 音乐介绍 </DialogTitle>
            <DialogDescription />
          </DialogHeader>
          <ScrollArea class="max-h-[70vh]">
            <div
              class="whitespace-pre-line text-base pr-2 tracking-tight antialiased font-medium font-mono leading-tight"
            >
              {{ music.describe }}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
    <div class="flex space-x-4">
      <Button class="space-x-2 font-bold font-sans text-base shadow-none">
        <SolarPlayBold class="size-5" />
        <span> Play </span>
      </Button>
      <Button
        class="bg-secondary text-secondary-foreground shadow-none hover:bg-secondary/65"
        @click="music.isLike = !music.isLike"
      >
        <SolarHeartBold v-if="music.isLike" class="size-5 text-primary" />
        <SolarHeartOutline v-else class="size-5" />
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            class="bg-secondary text-secondary-foreground shadow-none hover:bg-secondary/65"
          >
            <AkarIconsMoreHorizontal class="size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem> 添加歌单 </DropdownMenuItem>
          <DropdownMenuItem> 删除音乐 </DropdownMenuItem>
          <DropdownMenuItem> 编辑音乐 </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
</template>

<style scoped></style>
