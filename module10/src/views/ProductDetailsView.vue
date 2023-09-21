<template>
  <div class="container">
    <h1 class="mt-4">Product Details</h1>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="card bg-light">
         
          <div class="card-body">
            <img :src="product['image']" class="card-img-top" style="height: 50%; width: 50%;" />
            <p class="card-text mt-2">Description: {{ product.description }}</p>
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">Price: {{ product.price }} tk</p>
          </div>
        </div>
      </div>
      
    </div>
    <div class="row col-md-2">
        <RouterLink to="/productlist" class="btn btn-secondary mt-4">Back to Product List</RouterLink>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { products } from '../products.js';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;
const product = ref(products.find((p) => p.id === Number(productId)));
</script>

<style scoped>
/* Add any custom styling here or use Bootstrap classes */
</style>
