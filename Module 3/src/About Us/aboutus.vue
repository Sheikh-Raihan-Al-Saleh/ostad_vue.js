<template>
    <section class="mt-20" id="about">
      <div class="container mx-auto my-auto px-4 md:px-0">
        <div class="flex flex-col md:flex-row">
          <img :src="ImageUrl" alt="Image" class="w-full md:max-w-xl mr-10">
          <div class="card p-5 max-w-lg mb-8 md:mr-10 md:w-1/2">
            <p class="text-blue-600">{{ about.title }}</p>
            <p class="text-4xl mb-4 mt-2">{{ about.subtitle }}</p>
            <p class="mt-2">{{ about.firstpera }}</p>
            <p class="mt-2">{{ about.secondpera }}</p>
            <p class="mt-4 text-gray-600"><i class="fas fa-check text-blue-600"></i> {{ about.feature1 }}</p>
            <p class="mt-4 text-gray-600"><i class="fas fa-check text-blue-600"></i> {{ about.feature2 }}</p>
            <p class="mt-4 text-gray-600"><i class="fas fa-check text-blue-600"></i> {{ about.feature3 }}</p>
  
            <div class="flex">
              <div class="mr-20">
                <p class="mt-4 text-4xl">{{ subscriberCount }} M</p>
                <p class="mt-2 text-gray-600 uppercase">members</p>
              </div>
              <div>
                <p class="mt-4 text-4xl">{{ people.team }}</p>
                <p class="mt-2 text-gray-600 uppercase">Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const about = {
    title: "About",
    subtitle: "About Us",
    firstpera: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    secondpera: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    feature1: "There live the blind texts",
    feature2: "Far far away behind the word",
    feature3: "Their place and supplies",
  }

  const ImageUrl="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?w=2000"
  
  const people = {
    subscriber: 0, // Initialize subscriber count to 0
    team: "14",
  }
  
  const subscriberCount = ref(people.subscriber);
  
  // Increment the subscriber count on page load
  onMounted(() => {
    setInterval(() => {
      if (subscriberCount.value < 59) {
        subscriberCount.value++;
      }
    }, 50); // Change the interval value if you want a different increment speed
  });
  </script>
  
  <style scoped>
  </style>
  