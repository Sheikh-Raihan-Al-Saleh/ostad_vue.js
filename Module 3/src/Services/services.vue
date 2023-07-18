<template>

    <section class="py-20" :class="background">

        <div class="container mx-auto my-auto">
            <div class="flex justify-center">
                <div class="card p-5 max-w-lg">
                    
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="max-w-md mr-10 mb-6 md:mb-6 md:mx-10 w-full md:w-1/2 pr-3">
                    <img :src="ImageUrl.image1" class="w-10 h-10">
                    <div class="flex items-center mt-2">
                        <p>{{ service1.title }}</p>
                        

                    </div>
                    <div class="mt-2" :class="text">
                        <p>{{ service1.content }}</p>
                    </div>

                </div>

                <div class="max-w-md mr-10 mb-6 md:mb-6 md:mx-10 w-full md:w-1/2 pr-3">
                    <img :src="ImageUrl.image2" class="w-10 h-10">
                    <div class="flex items-center mt-2">
                        <p>{{ service2.title }}</p>
                       
                    </div>
                    <div class="mt-2" :class="text">
                        <p>{{ service2.content }}</p>
                    </div>

                </div>

                <div class="max-w-md mr-10 mb-6 md:mb-6 md:mx-10 w-full md:w-1/2 pr-3">
                    <img :src="ImageUrl.image3" class="w-10 h-10">
                    <div class="flex items-center mt-2">
                        <p>{{ service3.title }}</p>
                        
                    </div>
                    <div class="mt-2" :class="text">
                        <p>{{ service3.content }}</p>
                    </div>

                </div>

                <div class="max-w-md mr-10 mb-6 md:mb-6 md:mx-10 w-full md:w-1/2 pr-3">
                    <img :src="ImageUrl.image4" class="w-10 h-10">
                    <div class="flex items-center mt-2">
                        <p>{{ service4.title }}</p>
                        
                    </div>
                    <div class="mt-2" :class="text">
                        <p>{{ service4.content }}</p>
                    </div>

                </div>

            </div>
        </div>
    </section>

</template>

<script setup>

  const service1={
    title:'Grow Your Business',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }
  const service2={
    title:'Build Products',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }
  const service3={
    title:'Success Every Day',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }
  const service4={
    title:'Bring Ideas to Life',
    content:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',


  }
  
  const ImageUrl={
      image1:"https://cdn-icons-png.flaticon.com/512/4599/4599691.png",
      image2:"https://static.vecteezy.com/system/resources/previews/003/855/199/original/refresh-arrows-glyph-color-icon-reload-cached-circle-arrows-synchronization-silhouette-symbol-on-white-background-with-no-outline-negative-space-illustration-vector.jpg",
      image3:"https://static.vecteezy.com/system/resources/thumbnails/022/425/992/small_2x/isolated-briefcase-in-lineal-color-icon-on-white-background-luggage-bag-portfolio-job-vector.jpg",
      image4:"https://cdn-icons-png.flaticon.com/512/2039/2039054.png",
  }

  const text="text-gray-600"
  const background="bg-gray-100" 
</script>


<style scoped>

</style>