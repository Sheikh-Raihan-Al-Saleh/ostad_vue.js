import { createRouter, createWebHistory } from 'vue-router'
import LibraryView from '../views/LibraryView.vue'
import SportsView from '../views/SportsView.vue'
import HistoryView from '../views/HistoryView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/লাইব্রেরি',
      name: 'লাইব্রেরি',
      component: LibraryView
    },
    {
      path: '/খেলাধুলা',
      name: 'খেলাধুলা',
      component: SportsView
    },
    {
      path: '/ইতিহাস',
      name: 'ইতিহাস',
      component: HistoryView
    },
  ]
})

export default router
