<template>
  <Navbar></Navbar>
  <section class="py-20" id="home">
    <div class="container mx-auto my-auto px-4 md:px-0 mt-4">
      <div class="flex flex-col md:flex-row">
        <div class="card p-5 max-w-lg mb-8 md:mr-10 md:w-1/2">
          <p class="text-4xl md:text-6xl font-bold">{{ title }}</p>
          <p class="mt-5 mb-8 text-gray-600">{{ subtitle }}</p>
          <a href="#" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full mr-2 mb-2 md:mb-0">SEE FEATURES</a>
          <a href="#" class="py-2 px-4 bg-white-500 font-semibold hover:bg-blue-600 hover:text-white rounded-full">PRICING</a>
        </div>
        <img  :src="ImageUrl" alt="Image" class="w-full md:max-w-2xl">
      </div>
    </div>
  </section>
  <Features></Features>
  <Slide></Slide>
  <Services></Services>
  <Pricing></Pricing>
  <Advantage></Advantage>
  <Aboutus></Aboutus>
  <News></News>
  <Getintouch></Getintouch>
  <Footbar></Footbar>
</template>

<script setup>
import Navbar from './components/navbar.vue';
import Footbar from './components/footbar.vue';
import Features from './Features/features.vue';
import Getintouch from './Get in touch/getintouch.vue';
import News from './News/news.vue';
import Aboutus from './About Us/aboutus.vue';
import Pricing from './Pricing/pricing.vue';
import Services from './Services/services.vue';
import Advantage from './Advantage/advantage.vue';
import Slide from './Slide/slide.vue';

const title = "Promote Your Products by Colorlib";
const subtitle = "Another cool free html css template by Colorlib Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast";
const ImageUrl="https://previews.123rf.com/images/scanrail/scanrail1311/scanrail131100043/23499594-creative-abstract-mobile-applications-business-software-and-social-media-networking-service.jpg"
</script>

<style scoped>
</style>
