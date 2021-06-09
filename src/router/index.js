import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

// const Contact = () => import('../views/Contact.vue');
const CategoryProducts = () => import('../views/CategoryProducts.vue');
const CategoryHome = () => import('../views/CategoryHome.vue');
const HowToShop = () => import('../views/HowToShop.vue');
const NotFound = () => import('../views/NotFound.vue');
const Product = () => import('../views/Product.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    /*
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    */
    {
      path: '/how-to-shop',
      name: 'how-to-shop',
      component: HowToShop,
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
      path: '/product/:slug',
      name: 'product',
      component: Product,
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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});
