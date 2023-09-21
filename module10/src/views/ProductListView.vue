<script setup>
import { products } from '../products.js';
</script>
<template>
  <div class="container">
    <h1 class="mt-4">Product List</h1>
    <div class="row mt-4">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
        <div class="card bg-light">
          <div class="card-body">
            <img :src="product['image']" class="card-img-top" style="height: 80%; width: 80%;"/>

            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">Price: {{ product.price }} tk</p>
            <router-link :to="`/product/${product.id}`" class="btn btn-success">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
