import { createRouter, createWebHistory } from 'vue-router'
import PageMain from '../views/PageMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageMain
    }
  ]
})

export default router
//component: () => import('../views/AboutView.vue')
