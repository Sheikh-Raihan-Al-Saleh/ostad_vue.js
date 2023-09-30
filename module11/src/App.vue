<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header
    class="bg-dark border border-light border-bottom h-20 text-white d-flex align-items-center p-5 fs-4"
  >
    Module 11 Assignment
  </header>
  <section class="d-flex">
    <aside class="w-450 bg-dark">
      <router-view name="LeftSideBar"></router-view>
    </aside>
    <main class="w-100 min-vh-100 p-5">
      <router-view></router-view>
    </main>
  </section>
  <footer></footer>

  <RouterView />
</template>
