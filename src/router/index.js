import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import CoreScheduleView from '../views/CoreScheduleView.vue'
import FinanceTrackerView from '../views/FinanceTrackerView.vue'

const router = createRouter({
    history: createWebHistory(),

    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }

        return {
            top: 0,
            behavior: 'smooth',
        }
    },

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/projects/coreschedule',
            name: 'coreschedule',
            component: CoreScheduleView,
        },
        {
            path: '/projects/finance',
            name: 'finance',
            component: FinanceTrackerView,
        },
    ],
})

export default router