import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/szakkorok',
      name: 'szakkorok',
      component: () => import('../views/Szakkorok.vue')
    },
  ]
})

export default router
