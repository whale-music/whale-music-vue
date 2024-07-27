<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shadcn/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shadcn/components/ui/avatar";
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage src="./user.svg" alt="@radix-vue" class="opacity-60" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <RouterLink :to="{ name: 'SettingPage' }">
        <DropdownMenuItem>
          {{ $t("settings.settings") }}
        </DropdownMenuItem>
      </RouterLink>
      <DropdownMenuItem @click="$router.go(0)">{{
        $t("settings.refresh")
      }}</DropdownMenuItem>
      <DropdownMenuItem>{{ $t("settings.logout") }}</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<style scoped></style>
