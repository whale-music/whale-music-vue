import { createApp } from 'vue'
import '@/style/style.css'
import '@/style/tailwind.css'
import App from './App.vue'
import { router } from '@/router'
import { i18n } from '@/locale'


createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
