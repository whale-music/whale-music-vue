<script setup lang="ts">
import { Skeleton } from "@/shadcn/components/ui/skeleton";

defineOptions({
  name: "SkeletonMusic",
})
</script>

<template>
  <div class="flex flex-col gap-8 mt-8">
    <div class="flex flex-wrap md:flex-nowrap gap-8">
      <Skeleton class="size-72 aspect-square rounded-xl flex-none" />
      <div class="flex flex-col justify-between gap-4 grow">
        <Skeleton class="h-12 w-2/3" />
        <div class="flex flex-col gap-1">
          <Skeleton class="h-6 w-48" />
          <div class="flex gap-2">
            <Skeleton class="h-5 w-24" v-for="_ in 2" :key="_" />
          </div>
        </div>
        <div class="space-y-0.5 w-full">
          <Skeleton class="h-6 w-full" v-for="_ in 3" :key="_" />
        </div>
        <div class="flex space-x-4">
          <Skeleton class="h-10 w-24" />
          <Skeleton class="h-10 w-14" />
          <Skeleton class="h-10 w-16" />
        </div>
      </div>
    </div>
    <div class="space-y-4">
      <h2 class="text-4xl font-bold">Source</h2>
      <div class="space-y-2">
        <Skeleton class="h-12 w-full" v-for="_ in 4" :key="_" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
