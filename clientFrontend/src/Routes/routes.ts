import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('../Pages/HomePage/Homepage.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export {
    router
}