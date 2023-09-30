import { createRouter, createWebHistory } from 'vue-router'
import PageMain from '../views/PageMain.vue'
import DocsPage from '../views/DocsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageMain
    },
    {
      path: '/Docs',
      name: 'Documentation',
      component: DocsPage
    }
  ]
})

export default router
//component: () => import('../views/AboutView.vue')
