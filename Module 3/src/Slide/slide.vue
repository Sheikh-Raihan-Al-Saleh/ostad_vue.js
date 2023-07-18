<template>
    <section class="mt-20"  id="about">
        <div class="container mx-auto my-auto px-4 md:px-0">
            <div class="flex flex-col md:flex-row">
                <img :src="ImageUrl" alt="Image" class="w-full md:max-w-xl mr-20">
                <div class="card p-5 max-w-lg mb-8 md:mr-10 md:w-1/2">
                
                    <div class="flex flex-col md:flex-row">
                        <a href="#">

                            <div class="card p-3 max-w-md  mb-6 md:mb-6 md:mx-50 w-full md:w-full pr-3" :class="bgGray, Blueborder">
                                <div class="flex items-center mt-2">
                                    <img :src="Image.image1" alt="Image" class="w-12 h-12 rounded-full mr-2">
                                    <div>
                                        <strong class="block">{{ Advantage1.title }}</strong>
                                        <span class="block">{{ Advantage1.content }}</span>
                                    </div>
                                </div>
                            
                            </div>
                        </a>
                        
                    </div>

                    <div class="flex flex-col md:flex-row">
                        <a href="#">

                            <div class="card p-3 max-w-md  mb-6 md:mb-6 md:mx-50 w-full md:w-full pr-3" :class="bgGray, Orangeborder">
                                <div class="flex items-center mt-2">
                                    <img :src="Image.image2" alt="Image" class="w-12 h-12 rounded-full mr-2">
                                    <div>
                                        <strong class="block">{{ Advantage2.title }}</strong>
                                        <span class="block">{{ Advantage2.content }}</span>
                                    </div>
                                </div>
                            
                            </div>
                        </a>
                        
                    </div>

                    <div class="flex flex-col md:flex-row">
                        <a href="#">

                            <div class="card p-3 max-w-md  mb-6 md:mb-6 md:mx-50 w-full md:w-full pr-3 " :class="bgGray, Yellowborder">
                                <div class="flex items-center mt-2">
                                    <img :src="Image.image3" alt="Image" class="w-12 h-12 rounded-full mr-2">
                                    <div>
                                        <strong class="block">{{ Advantage3.title }}</strong>
                                        <span class="block">{{ Advantage3.content }}</span>
                                    </div>
                                </div>
                            
                            </div>
                        </a>
                        
                    </div>

                    <div class="flex flex-col md:flex-row">
                        <a href="#">

                            <div class="card p-3 max-w-md  mb-6 md:mb-6 md:mx-50 w-full md:w-full pr-3 border" :class="bgGray, Greenborder">
                                <div class="flex items-center">
                                    <img :src="Image.image4" alt="Image" class="w-12 h-12 rounded-full mr-2">
                                    <div>
                                        <strong class="block">{{ Advantage4.title }}</strong>
                                        <span class="block">{{ Advantage4.content }}</span>
                                    </div>
                                </div>
                            
                            </div>
                        </a>
                        
                    </div>

                    

                    
                </div>
            </div>
        </div>
    </section>
</template>
  
  <script setup>

  const ImageUrl="https://static7.depositphotos.com/1000128/710/i/950/depositphotos_7103328-stock-photo-smartphone-with-cloud-of-application.jpg"
  const bgGray="bg-gray-200"
  const Blueborder="border border-blue-900" 
  const Orangeborder="border border-orange-900" 
  const Yellowborder="border border-yellow-900" 
  const Greenborder="border border-green-900"
  
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

  const Image={
      image1:"https://cdn-icons-png.flaticon.com/512/4599/4599691.png",
      image2:"https://static.vecteezy.com/system/resources/previews/003/855/199/original/refresh-arrows-glyph-color-icon-reload-cached-circle-arrows-synchronization-silhouette-symbol-on-white-background-with-no-outline-negative-space-illustration-vector.jpg",
      image3:"https://static.vecteezy.com/system/resources/thumbnails/022/425/992/small_2x/isolated-briefcase-in-lineal-color-icon-on-white-background-luggage-bag-portfolio-job-vector.jpg",
      image4:"https://cdn-icons-png.flaticon.com/512/2039/2039054.png",
  }
  </script>
  
  <style scoped>
  </style>
  