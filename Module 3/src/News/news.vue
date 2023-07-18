<template>
    <section class="py-20 mt-20" :class="background">
      <div class="container mx-auto my-auto">
        <div class="flex justify-center">
          <div class="card p-5 max-w-lg">
            <p class="text-center text-4xl mb-4">Our News</p>
            <p class="text-center">Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="card p-5 max-w-md mr-10 mb-6 md:mb-6 md:mx-10 w-full md:w-1/2 pr-3 bg-white">
            <div class="flex items-center mt-2">
              <img src="https://preview.colorlib.com/theme/launch/images/person_1.jpg.webp" alt="Image" class="w-12 h-12 rounded-full mr-2">
              <div>
                <strong class="block">{{ content.author }}</strong>
                <span class="block">{{ getData() }}</span>
              </div>
            </div>
            <div class="mt-8">
              <a href="#"><p class="text-2xl hover:text-blue-300">{{ content.describe }}</p></a>
            </div>
          </div>
          <div class="card p-5 mr-10 mb-6 md:mb-6 md:mx-10 w-full md:w-1/2 pr-3 bg-white">
            <div class="flex items-center mt-2">
              <img src="https://preview.colorlib.com/theme/launch/images/person_1.jpg.webp" alt="Image" class="w-12 h-12 rounded-full mr-2">
              <div>
                <strong class="block">{{ content.author }}</strong>
                <span class="block">{{ getData() }}</span>
              </div>
            </div>
            <div class="mt-8">
              <a href="#"><p class="text-2xl hover:text-blue-300">{{ content.describe }}</p></a>
            </div>
          </div>
          <div class="card p-5 max-w-lg mr-10 mb-6 md:mb-6 md:mx-10 w-full md:w-1/2 pr-3 bg-white">
            <div class="flex items-center mt-2">
              <img src="https://preview.colorlib.com/theme/launch/images/person_1.jpg.webp" alt="Image" class="w-12 h-12 rounded-full mr-2">
              <div>
                <strong class="block">{{ content.author }}</strong>
                <span class="block">{{ getData() }}</span>
              </div>
            </div>
            <div class="mt-8">
              <a href="#"><p class="text-2xl hover:text-blue-300">{{ content.describe }}</p></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup>
    const background="bg-gray-100" 
   const content = {
    
    author: "Sheikh Raihan Al Saleh",
    describe:"Far far away behind the word mountains far from the countries"
    };

    const date= new Date()
    const dateString=date.toLocaleString()
    function getData()
    {
        return dateString
    }
  </script>
  
  <style scoped>
  </style>
  