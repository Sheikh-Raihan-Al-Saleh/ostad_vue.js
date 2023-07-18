<template>
    <section class="py-20 mt-20" :class="background" id="advantage">
      <div class="container mx-auto my-auto">
        <div class="flex justify-center">
          <div class="card p-5 max-w-xl">
            <p class="text-center text-4xl mb-5">Advantage of using our products</p>
            <p class="text-center">Far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="card p-10 max-w-md mr-10 mb-6 md:mb-6 md:mx-20 w-full md:w-full pr-3">
            <div class="flex items-center mt-2">
              <img :src="ImageUrl.image1" alt="Image" class="w-12 h-12 rounded-full mr-2">
              <div>
                <strong class="block">{{ Advantage1.title }}</strong>
                <span class="block">{{ Advantage1.content }}</span>
              </div>
              
            </div>

            
           
          </div>

          <div class="card p-10 max-w-md mr-10 mb-6 md:mb-6 md:mx-20 w-full md:w-full pr-3">
            <div class="flex items-center mt-2">
              <img :src="ImageUrl.image2" alt="Image" class="w-12 h-12 rounded-full mr-2">
              <div>
                <strong class="block">{{ Advantage2.title }}</strong>
                <span class="block">{{ Advantage2.content }}</span>
              </div>
              
            </div>

          </div>
          
        </div>

        <div class="flex flex-col md:flex-row">
          <div class="card p-10 max-w-md mr-10 mb-6 md:mb-6 md:mx-20 w-full md:w-full pr-3">
            <div class="flex items-center mt-2">
              <img :src="ImageUrl.image3" alt="Image" class="w-12 h-12 rounded-full mr-2">
              <div>
                <strong class="block">{{ Advantage3.title }}</strong>
                <span class="block">{{ Advantage3.content }}</span>
              </div>
              
            </div>

            
           
          </div>

          <div class="card p-10 max-w-md mr-10 mb-6 md:mb-6 md:mx-20 w-full md:w-full pr-3">
            <div class="flex items-center mt-2">
              <img :src="ImageUrl.image4" alt="Image" class="w-12 h-12 rounded-full mr-2">
              <div>
                <strong class="block">{{ Advantage4.title }}</strong>
                <span class="block">{{ Advantage4.content }}</span>
              </div>
              
            </div>

         </div>
          
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup>

    const background="bg-gray-100" 
    const ImageUrl={
      image1:"https://cdn-icons-png.flaticon.com/512/4599/4599691.png",
      image2:"https://static.vecteezy.com/system/resources/previews/003/855/199/original/refresh-arrows-glyph-color-icon-reload-cached-circle-arrows-synchronization-silhouette-symbol-on-white-background-with-no-outline-negative-space-illustration-vector.jpg",
      image3:"https://static.vecteezy.com/system/resources/thumbnails/022/425/992/small_2x/isolated-briefcase-in-lineal-color-icon-on-white-background-luggage-bag-portfolio-job-vector.jpg",
      image4:"https://cdn-icons-png.flaticon.com/512/2039/2039054.png",
  }

  const Advantage1={
    title:'Grow Your Business',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }

  const Advantage2={
    title:'Build Products',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }
  const Advantage3={
    title:'Success Every Day',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }
  const Advantage4={
    title:'Bring Ideas to Life',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }
  </script>
  
  <style scoped>
  </style>
  