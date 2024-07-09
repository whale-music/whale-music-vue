<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import IconamoonArrowRight2Bold from '@/assets/icon/IconamoonArrowRight2Bold.vue'
import AvatarDropdown from '@/components/TopNavigationBar/components/AvatarDropdown.vue'
import { useI18n } from 'vue-i18n'

defineOptions({
  name: "TopNavigationBar"
})

const route = useRoute()
const { t } = useI18n()
const links = ref([
  {
    name: "HomePage",
    label: t("nav.home"),
  },
  {
    name: 'DashboardPage',
    label: t("nav.dashboard"),
  },
  {
    name: 'BrowsePage',
    label: t("nav.browse"),
  },
  {
    name: 'LibraryPage',
    label: t("nav.library"),
  },
])

const isActive = ((name: string)=>route.name === name)
const windowSize = useWindowSize()
const isWideScreen = computed(()=>windowSize.width.value >= 700)
</script>

<template>
 <header>
   <div class="flex items-center flex-1" v-if="isWideScreen">
      <IconamoonArrowRight2Bold class="card rotate-180" @click.native="$router.go(-1)"/>
      <IconamoonArrowRight2Bold class="card" @click.native="$router.go(1)"/>
   </div>
     <nav class="space-x-3">
        <RouterLink v-for="i in links" :to="{name: i.name}" :key="i.name">
          <a class="rounded-sm hover:bg-accent py-1.5 px-2.5" :class="{ 'text-primary': isActive(i.name), 'font-extrabold': isActive(i.name), 'font-semibold': !isActive(i.name)}">{{ i.label }}</a>
        </RouterLink>
     </nav>
   <div v-if="isWideScreen">
     <AvatarDropdown />
   </div>
 </header>
</template>


<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 10vw;
  padding-left: 10vw;
  backdrop-filter: saturate(180%) blur(20px);

  color: hsl(var(--foreground) / 0.7);
  background-color: hsl(var(--background) / 0.8);
  z-index: 20;
}

.card {
  @apply w-10 h-8 rounded-sm
}
.card:hover {
  @apply bg-accent
}

nav {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 max(5vw,90px);
}

a {
  font-size: 1.2rem;
  text-wrap: nowrap;
  text-decoration: none;
}
</style>
