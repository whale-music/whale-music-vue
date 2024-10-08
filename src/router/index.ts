import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: ()=>import('@/page/HomePage/HomePage.vue')
    },
    {
        name: 'DashboardPage',
        path: '/dashboard',
        component: ()=>import('@/page/DashboardPage/DashboardPage.vue')
    },
    {
        name: 'BrowsePage',
        path: '/browse/:tab(.*)*',
        component: ()=>import('@/page/BrowsePage/BrowsePage.vue')
    },
    {
        name: 'LibraryPage',
        path: '/library/:tab(.*)*',
        component: ()=>import('@/page/LibraryPage/LibraryPage.vue')
    },
    {
        name: 'SettingPage',
        path: '/setting',
        component: ()=>import('@/page/SettingPage/SettingPage.vue')
    },
    {
        name: 'MusicPage',
        path: '/music/:id(.*)*',
        component: ()=>import('@/page/MusicPage/index.vue')
    },
] satisfies Readonly<RouteRecordRaw[]>

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export {
    router
}
