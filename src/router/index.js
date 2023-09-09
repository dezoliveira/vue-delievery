import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },

  {
    path: '/addProducts/:id',
    name: 'AddProducts',
    props: true,
    component: () => import('@/views/AddProducts.vue'),
    // loading: LoadingComponent,
    // timeout: 5000
  },

  {
    path: '/all-products',
    redirect: '/'
  },

  {
    path: '/shoppingBag',
    name: 'shoppingBag',
    props: true,
    component: () => import('@/views/ShoppingBag.vue')
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
