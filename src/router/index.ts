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
        path: '/browse',
        component: ()=>import('@/page/BrowsePage/BrowsePage.vue')
    },
    {
        name: 'LibraryPage',
        path: '/library',
        component: ()=>import('@/page/LibraryPage/LibraryPage.vue')
    },
] satisfies Readonly<RouteRecordRaw[]>

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export {
    router
}
