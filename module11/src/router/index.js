import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore';
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TodoListView from '../views/TodoListView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import SideBar from '../components/SideBar.vue'

const routes = [
  {
      path: '/', components: {
          default: HomeView,
          LeftSideBar: SideBar
      },
      meta:{
        requiresAuth: true
    }
  },
  
  {
      path: '/login', components: {
          default: LoginView,
          LeftSideBar: SideBar
      }
  },
  
  {
      path: '/registration', components: {
          default: RegistrationView,
          LeftSideBar: SideBar
      }
  },

  {
      path: '/todo', components: {
          default: TodoListView,
          LeftSideBar: SideBar
      },
      meta:{
        requiresAuth: true
    }
  },
 
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
  
    if (to.meta.requiresAuth && !userStore.currentUser) {
      next('/login');
    } else {
      next();
    }
  });

  

export default router
