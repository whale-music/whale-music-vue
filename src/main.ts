import { createApp } from 'vue'
import '@/style/style.css'
import '@/style/tailwind.css'
import App from './App.vue'
import { router } from '@/router'


createApp(App)
    .use(router)
    .mount('#app')
