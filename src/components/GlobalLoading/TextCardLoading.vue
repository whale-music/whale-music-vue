<script setup lang="ts">
defineOptions({
  name: "TextCardLoading",
});
</script>

<template>
  <div class="py-8 px-6 border border-accent rounded-lg">
    <p>三月雪连夜，未应伤物华。只缘春欲尽，留著伴梨花</p>
    <div class="h-[1px] w-full bg-accent mb-2 mt-4" />
    <div class="flex justify-between">
      <p class="opacity-50 font-thin text-xs">《嘲三月十八日雪》唐朝·温庭筠</p>
      <div class="loader">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.loader {
  display: flex;
  align-items: center;
}

.bar {
  display: inline-block;
  width: 3px;
  height: 6px;
  background-color: hsl(var(--foreground) / 0.5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 1rem;
  margin: 0 5px;
  animation-delay: 0.25s;
}

.bar:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes scale-up4 {
  20% {
    background-color: hsl(var(--foreground));
    transform: scaleY(1.5);
  }

  40% {
    transform: scaleY(1);
  }
}
</style>
