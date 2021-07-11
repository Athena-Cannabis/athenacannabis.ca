import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

// const Contact = () => import('../views/Contact.vue');
const Collections = () => import('../views/Collections.vue');
const CollectionsProducts = () => import('../views/CollectionsProducts.vue');
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
      path: '/collections',
      name: 'collections',
      component: Collections,
    },
    {
      path: '/collections/:slug',
      name: 'collections-products',
      component: CollectionsProducts,
    },
    {
      path: '/products/:slug',
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
