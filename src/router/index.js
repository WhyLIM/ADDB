import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BiomarkerList from '../views/BiomarkerList.vue'
import BiomarkerDetail from '../views/BiomarkerDetail.vue'
import MarkerInteract from '../views/MarkerInteract.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/biomarkers',
            name: 'BiomarkerList',
            component: BiomarkerList
        },
        {
            path: '/biomarkers/:id',
            name: 'BiomarkerDetail',
            component: BiomarkerDetail
        },
        {
            path: '/about',
            redirect: '/about/index.html', // 默认重定向到文档主页
        },
        {
            path: '/about/:pathMatch(.*)*',
            name: 'AboutDocs',
            component: () => import('@/components/AboutDocs.vue'),
        },
        {
            path: '/test',
            name: 'MarkerInteract',
            component: MarkerInteract
        },
    ]
})

export default router
