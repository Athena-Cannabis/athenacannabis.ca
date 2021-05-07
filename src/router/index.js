import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const HowToShop = () => import('../views/HowToShop.vue');
const NotFound = () => import('../views/NotFound.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/how-to-shop',
      name: 'how-to-shop',
      component: HowToShop,
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect:
      {
        name: 'not-found'
      }
    }
  ],
});
