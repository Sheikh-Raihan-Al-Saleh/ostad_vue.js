import { createRouter, createWebHistory } from 'vue-router'

import ProductsView from '../components/ProductsView.vue'
import HomeView from '../components/HomeView.vue'
import CartView from '../components/CartView.vue'
import LoginView from '../components/LoginView.vue'
import RegistrationView from '../components/RegistrationView.vue'
import OrderView from '../components/OrderView.vue'
import ProductDetails from '../components/ProductDetails.vue'
import { authStore } from '../store/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/products',
      name: 'ProductsView',
      component: ProductsView,
      meta:{
          requiresAuth: true
      }
    },

    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !authStore.isAuthenticated){
      next('/login')
  }else{
      next()
  }
})

export default router
