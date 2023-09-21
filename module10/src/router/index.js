import { createRouter, createWebHistory } from 'vue-router'
import ProductListView from '../views/ProductListView.vue'
import ProductDetailsView from '../views/ProductDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/productlist',
      name: 'productlist',
      component: ProductListView
    },
    {
      path: '/product/:id',
      name: 'productdetails',
      component:ProductDetailsView
    }
  ]
})

export default router
