import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import DashBoard from "@/views/DashBoard.vue";
import ArticlePage from "@/views/article/ArticlePage.vue";
import ArticleDetail from "@/views/article/ArticleDetail.vue";
import ArticleUpsert from "@/views/article/ArticleInsert.vue";


export const DASH_BOARD_PAGE = 'dashboard';
export const DOMAIN_ARTICLE = 'article';
export const METHOD_LIST = 'list';
export const METHOD_CREATE = 'create';
export const METHOD_DETAIL = 'detail';


const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    meta: {title: '대시보드'},
    component: DashBoard
  },
  {
    path: `/${DOMAIN_ARTICLE}`,
    name: `${DOMAIN_ARTICLE}-${METHOD_LIST}`,
    meta: {title: 'Article'},
    children: [
      {path: '', component: ArticlePage},
      {
        path: METHOD_DETAIL,
        name: `${DOMAIN_ARTICLE}-${METHOD_DETAIL}`,
        meta: {title: '상세'},
        component: ArticleDetail
      },
      {
        path: METHOD_CREATE,
        name: `${DOMAIN_ARTICLE}-${METHOD_CREATE}`,
        meta: {
          title: '등록'
        },
        component: ArticleUpsert,
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
