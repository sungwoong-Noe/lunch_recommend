import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import DashBoard from "@/views/DashBoard.vue";
import ArticlePage from "@/views/article/ArticlePage.vue";
import ArticleDetail from "@/views/article/ArticleDetail.vue";


export const DASH_BOARD_PAGE = 'dashboard';
export const ARTICLE_LIST_PAGE = 'article-list';


const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    meta: {title: '대시보드'},
    component: DashBoard
  },
  {
    path: '/article',
    name: 'article-list',
    meta: {title: '게시글'},
    children: [
      {path: '', component: ArticlePage},
      {
        path: 'detail',
        name: 'article-detail',
        meta: {title: '상세'},
        component: ArticleDetail
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
