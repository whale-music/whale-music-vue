<script setup lang="ts">

import { Button } from "@/shadcn/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/shadcn/components/ui/avatar";
import BasilLogoutSolid from "@/assets/icon/LetsIconsSignOutCircle.vue";
defineOptions({
  name: "UserCard"
})
</script>

<template>
    <div class="w-full h-32 rounded-2xl grid place-items-center bg-foreground/5">
      <div class="w-full flex justify-between p-4 px-6">
        <div class="flex gap-4">
          <Avatar class="size-20 object-cover rounded-full cursor-pointer">
            <AvatarImage src="https://t.alcy.cc/fj/" alt="@radix-vue" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <div class="flex flex-col justify-between py-2">
            <h3 class="text-2xl font-semibold">焚梦</h3>
            <span class="text-base opacity-85 w-32 sm:w-40 md:w-full truncate">
              現實與夢境，這裡……是你的夢境還是現實呢？
            </span>
          </div>
        </div>
        <button
          class="flex items-center gap-0.5 my-4 px-2 rounded-lg hover:bg-foreground/10 transition-colors duration-150 ease-linear"
        >
          <BasilLogoutSolid class="rotate-180 size-8" />
          <span class="font-semibold text-lg"> 登出 </span>
        </button>
      </div>
    </div>
</template>

<style scoped>

</style>
