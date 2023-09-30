<template>
    <h4 v-if="userStore.currentUser">Welcome {{ userStore.currentUser.email }}</h4>
    <button @click="logout" class="btn btn-danger">Logout</button>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logoutUser();
  router.push('/login');
};
</script>
