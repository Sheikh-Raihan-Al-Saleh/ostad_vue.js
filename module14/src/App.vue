<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import CartView from './components/CartView.vue';


</script>

<template>
  <header>
   
   <NavBar></NavBar>
   
  </header>
 

  <RouterView />
</template>

<style scoped>

</style>
