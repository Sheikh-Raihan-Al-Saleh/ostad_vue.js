<template>
  <footer class=" site-footer bg-gray-200 py-20 mt-20">
    <div class="container mx-auto my-auto  px-4 md:px-20">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
          <div class="widget">
            <h3 class="text-lg font-semibold">About Launch<span class="text-primary">.</span></h3>
            <p class="mt-4">{{ launch }}</p>
          </div>
          <div class="widget mt-6">
            <h3 class="text-lg font-semibold">Connect</h3>
            <ul class="list-none flex space-x-4 mt-4">
              <li><a href="#"><i class="fab fa-instagram text-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter text-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-facebook text-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin text-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-pinterest text-lg"></i></a></li>
              <li><a href="#"><i class="fab fa-dribbble text-lg"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
          <div class="widget">
            <h3 class="text-lg font-semibold">Projects</h3>
            <ul class="list-none mt-4">
              <li><a href="#">La Lega Stadium</a></li>
              <li><a href="#">France Building</a></li>
              <li><a href="#">22 New Homes</a></li>
              <li><a href="#">Manage Center</a></li>
              <li><a href="#">Sports Hall</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-1/6 px-4 mb-8 lg:mb-0">
          <div class="widget">
            <h3 class="text-lg font-semibold">Services</h3>
            <ul class="list-none mt-4">
              <li><a href="#">Architect</a></li>
              <li><a href="#">Interior Design</a></li>
              <li><a href="#">Landscape Design</a></li>
              <li><a href="#">Consultancy</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-2/6 px-4">
          <div class="widget">
            <h3 class="text-lg font-semibold">Contact</h3>
            <address class="mt-4">{{ Contact.address }}</address>
            <ul class="list-none links mt-4">
              <li><a href="">{{ Contact.primary }}</a></li>
              <li><a href="">{{ Contact.secondary }}</a></li>
              <li><a href="">{{ Contact.email }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row mt-10">
        <div class="col-12 text-center">
          <p>
            All rights reserved | This template is made with <i class="fas fa-heart text-red-500"></i> by
            <a href="https://colorlib.com" target="_blank" class="text-blue-600">Colorlib</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const launch = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
const Contact = {
  address: "43 Raymouth Rd. Baltemoer, London 3910",
  primary: "+1 (123) 456 - 789",
  secondary: " +1 (123) 456 - 789 ",
  email: "info@mydomain.com",
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>
