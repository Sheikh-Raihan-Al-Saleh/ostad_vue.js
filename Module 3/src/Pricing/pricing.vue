<template>
  <section class="py-20" id="pricing">
    <div class="container mx-auto my-auto">
      <div class="flex justify-center">
        <div class="card p-5 max-w-lg">
          <p class="text-center text-4xl mb-4">{{ title }}</p>
          <p class="text-center">{{ subtitle }}</p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row space-x-5 mx-4 md:mx-20 lg:mx-40">
        <div class="card p-10 shadow max-w-sm mb-6 md:mb-6 md:w-1/3 md:pr-3 bg-white rounded-lg">
          <div class="flex flex-col items-center mt-2">
            <p class="text-3xl">Free</p>
            <p class="text-4xl text-blue-600 mt-4"><sup>$</sup>0</p>
            <ul class="list-none mx-auto mb-5 mt-3">
              <li class="flex items-center mb-2">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature1 }}</span>
              </li>
              <li class="flex items-center mb-2">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature2 }}</span>
              </li>
              <li class="flex items-center">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature3 }}</span>
              </li>
            </ul>
            <a href="#" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full mr-2 uppercase">get started</a>
          </div>
        </div>
        <div class="card p-10 shadow-xl max-w-sm mb-6 md:mb-6 md:w-1/3 md:pr-3 bg-white rounded-lg">
          <div class="flex flex-col items-center mt-2">
            <p class="text-3xl">Standard</p>
            <p class="text-4xl text-blue-600 mt-4"><sup>$</sup>19.99</p>
            <ul class="list-none mx-auto mb-5 mt-3">
              <li class="flex items-center mb-2">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature1 }}</span>
              </li>
              <li class="flex items-center mb-2">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature2 }}</span>
              </li>
              <li class="flex items-center">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature3 }}</span>
              </li>
            </ul>
            <a href="#" class="py-2 px-4 bg-white text-blue-600 border border-blue-300 hover:bg-blue-600 hover:text-white font-semibold rounded-full mr-2 uppercase">get started</a>
          </div>
        </div>
        <div class="card p-10 shadow max-w-sm mb-6 md:mb-6 md:w-1/3 md:pr-3 bg-white rounded-lg">
          <div class="flex flex-col items-center mt-2">
            <p class="text-3xl">Premium</p>
            <p class="text-4xl text-blue-600 mt-4"><sup>$</sup>79.99</p>
            <ul class="list-none mx-auto mb-5 mt-3">
              <li class="flex items-center mb-2">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature1 }}</span>
              </li>
              <li class="flex items-center mb-2">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature2 }}</span>
              </li>
              <li class="flex items-center">
                <span class="inline-block w-4 h-4 mr-2 bg-primary"></span>
                <span><i class="fas fa-check text-blue-600"></i> {{ card.feature3 }}</span>
              </li>
            </ul>
            <a href="#" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-full mr-2 uppercase">get started</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const title = "Pricing";
  const subtitle = "Pricing for everyone. Choose your plan now!";

  const card = {
    feature1: "There live the blind texts",
    feature2: "Far far away behind the word",
    feature3: "Far from the countries Vokalia and Consonantia",
  };
</script>

<style scoped>
@media (max-width: 767px) {
  .mx-4 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
@media (min-width: 768px) {
  .mx-4 {
    margin-left: 2rem;
    margin-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .mx-4 {
    margin-left: 3rem;
    margin-right: 3rem;
  }
}
</style>
