<template>
  <section class="py-20" :class="background" id="features">
    <div class="container mx-auto my-auto  px-4 md:px-0">
      <div class="flex flex-col md:flex-row">
        <div class="card p-5 max-w-lg mr-0 md:mr-10">
          <p class="text-blue-600">DIGITAL SERVICES</p>
          <p class="text-5xl mt-2">Selling Digital Services</p>
          <p class="mt-6">{{ features.description }}</p>
          <p class="mt-4"><i class="fas fa-check text-blue-600"></i> {{ features.feature1 }}</p>
          <p class=""><i class="fas fa-check text-blue-600"></i> {{ features.feature2 }}</p>
          <p class="mt-4 italic">{{ quote.Quote }}</p>
          <div class="flex items-center mt-4">
            <img src="https://preview.colorlib.com/theme/launch/images/person_1.jpg.webp" alt="Image" class="w-12 h-12 rounded-full mr-2">
            <div>
              <strong class="block">{{ quote.author }}</strong>
              <span class="block">{{ quote.designation }}</span>
            </div>
          </div>
        </div>
        <div class="ml-0 md:ml-4 max-w-full md:max-w-2xl mt-8">
          <div class="aspect-w-16 aspect-h-9">
            <iframe :src="video" frameborder="0" allowfullscreen width="660" height="450"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = {
  description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
  feature1: "There live the blind texts",
  feature2: "Far far away behind the word",
};

const quote = {
  Quote: "“Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. ”",
  author: "Sheikh Raihan Al Saleh",
  designation: "Junior Software Engineer"
};

const video="https://www.youtube.com/embed/vDMyIZ2nsS0"
const background="bg-gray-100" 
</script>

<style scoped>
</style>
