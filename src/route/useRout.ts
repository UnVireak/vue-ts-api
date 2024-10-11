import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../view/Home.vue';
import Form from '../view/Form.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    meta: {
      title: 'Form',
    },
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes
})
router.afterEach((to) => {
  const defaultTitle = 'My Vue App';
  document.title = to.meta.title ? `${to.meta.title}` : defaultTitle;
});
export default router;
