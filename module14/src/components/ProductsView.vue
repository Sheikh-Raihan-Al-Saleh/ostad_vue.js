<script setup>
import {ref, computed, onBeforeMount} from 'vue'

import axios from 'axios'

import { cart } from '../store/cart'
const products=ref([])

const selectedCategory = ref('');

onBeforeMount(()=>{
  axios.get('http://localhost:8000/api/products')
  .then((res)=>{
    products.value=res.data
  })
})

const uniqueCategories = computed(() => {
  const categories = new Set();
  products.value.forEach((product) => {
    categories.add(product.category);
  });
  return [''].concat(Array.from(categories));
});

</script>

<template>
  <!-- ======= Menu Section ======= -->
  <section id="products" class="menu mt-4">
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Our Products</h2>
        <p>Check Our <span>Dashing Products</span></p>
      </div>

      <ul class="nav nav-tabs d-flex justify-content-center my-5" data-aos="fade-up" data-aos-delay="200">
        <!-- Add an "All" category tab -->
        <li class="nav-item" :class="{ active: selectedCategory === '' }">
          <a class="nav-link" @click="selectedCategory = ''">
            <h4>All</h4>
          </a>
        </li>
        
        <!-- Loop through unique categories in products -->
        <li class="nav-item" v-for="category in uniqueCategories" :key="category">
          <a
            class="nav-link"
            @click="selectedCategory = category"
            :class="{ active: selectedCategory === category }"
          >
            <h4>{{ category }}</h4>
          </a>
        </li>
      </ul>



      <div class="tab-content" data-aos="fade-up" data-aos-delay="300">
        <div class="tab-pane fade active show" id="menu-starters">
          <div class="row gy-5">
            <div class="col-lg-3 menu-item" v-for="product in products" :key="product.id" v-show="product.category === selectedCategory || selectedCategory === ''">
              <div class="row">
                 <router-link class="glightbox" :to="{ name: 'ProductDetails', params: { id: product.id } }">
                  <img :src="product.image" class="menu-img img-fluid" alt=""/>
                </router-link>
              </div>
              
              <div class="row">
                <router-link class="glightbox" :to="{ name: 'ProductDetails', params: { id: product.id } }">
                  <h4>{{ product.title }}</h4>
                </router-link>
                
              </div>
              <div class="row">
                <p class="price">{{ product.price }}</p>
              </div>
              <div>
                <button @click="cart.addItem(product)" class="btn btn-success btn-sm"><i class="fas fa-shopping-cart"></i></button>
              </div>
              
              
              
            </div>
            <!-- Menu Item -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Menu Section -->
</template>

<style scoped>
/* Apply CSS to make the card and image size the same */
.menu-item {
  text-align: center; /* Center align content within the card */
  padding: 20px; /* Add padding to create space around the card */
}

.menu-item a {
  display: block; /* Make the anchor element a block-level element */
  max-height: 200px; /* Set a fixed maximum height for the card */
  overflow: hidden; /* Hide any overflow beyond the maximum height */
}

.menu-img {
  max-width: 100%; /* Ensure the image doesn't exceed its container's width */
  height: 100%; /* Make the image fill the entire available space */
  object-fit: cover; /* Crop or stretch the image to fit the container */
}

h4 {
  font-size: 1.5rem; /* Set a specific font size for the title */
  margin: 10px 0; /* Add margin for spacing */
}

.price {
  font-size: 1.25rem; /* Set a specific font size for the price */
  margin: 5px 0; /* Add margin for spacing */
}

.btn {
  padding: 5px 10px; /* Adjust button padding */
  font-size: 1rem; /* Set a specific font size for the button */
}

/* Style the card on hover for a better user experience */
.menu-item:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add a subtle shadow on hover */
  transform: scale(1.05); /* Slightly scale up the card on hover */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Apply smooth transitions */
}


</style>