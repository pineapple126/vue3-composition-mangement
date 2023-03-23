import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';
import Layout from '@/layout/index.vue';

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'), // 路由懒加载
        name: 'dashboard',
        meta: {
          title: 'dashboard',
          icon: '#icondashboard',
          affix: true
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

export default router;