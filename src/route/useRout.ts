import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../view/Home.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
