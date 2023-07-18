<template>
  <section>
    <div class="container mx-auto px-4 md:px-0">
      <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white-800 py-4 px-6 md:left-20 md:right-20" :class="bgWhite">
        <div class="justify-center">
          <a href="#" class="text-3xl font-semibold">Launch.</a>
        </div>
        <div class="justify-center space-x-6 hidden md:flex">
          <a href="#home" class="hover:text-gray-300">Home</a>
          <a href="#features" class="hover:text-gray-300">Features</a>
          <a href="#pricing" class="hover:text-gray-300">Pricing</a>
          <a href="#about" class="hover:text-gray-300">About</a>
          <a href="#advantage" class="hover:text-gray-300">Advantages</a>
          <a href="#contact" class="hover:text-gray-300">Contact</a>
          
        </div>
        <div>
          <button class="px-4 py-2 bg-white-700 hover:bg-blue-300 rounded-full mr-1 border">Sign In</button>
          <button class="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-full">Register</button>
        </div>
      </nav>
    </div>
  </section>
</template>

<script setup>
const bgWhite = "bg-white";
</script>

<style scoped>
</style>
