import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const CategoryHome = () => import('../views/CategoryHome.vue');
const CategoryProducts = () => import('../views/CategoryProducts.vue');
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
      path: '/category',
      name: 'category-home',
      component: CategoryHome,
    },
    {
      path: '/category/:slug',
      name: 'category-products',
      component: CategoryProducts,
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
