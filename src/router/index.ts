import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from "@/views/DashBoard.vue";
import ContentTest from "@/views/ContentTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashBoard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/test',
      name: 'contentTest',
      component: ContentTest

    }
  ]
})

export default router
