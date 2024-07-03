import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/page/HomePage/HomePage.vue'
import DashboardPage from '@/page/DashboardPage/DashboardPage.vue'
import BrowsePage from '@/page/BrowsePage/BrowsePage.vue'
import LibraryPage from '@/page/LibraryPage/LibraryPage.vue'


const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'DashboardPage',
        path: '/dashboard',
        component: DashboardPage
    },
    {
        name: 'BrowsePage',
        path: '/browse',
        component: BrowsePage
    },
    {
        name: 'LibraryPage',
        path: '/library',
        component: LibraryPage
    },
] satisfies Readonly<RouteRecordRaw[]>

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
