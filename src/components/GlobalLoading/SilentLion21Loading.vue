<script setup lang="ts">
defineOptions({
  name: "SilentLion21Loading"
})
</script>

<template>
  <div class="loader">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  align-items: center;
}

.bar {
  display: inline-block;
  width: 3px;
  height: 10px;
  background-color: hsl(var(--foreground) / 0.5);
  border-radius: 10px;
  animation: scale-up4 1s linear infinite;
}

.bar:nth-child(2) {
  height: 35px;
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
