<script setup>
import { ref } from 'vue'
import { products } from '../../products.js'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.id
const product = ref(products.find((p) => p.id === Number(productId)))
</script>

<template>
  <div class="container">
    <div class="row col-md-2">
      <RouterLink to="/" class="btn btn-primary btn-sm mt-4">Back</RouterLink>
    </div>

    <h1 class="mt-4">Product Details</h1>
    <div class="row mt-4">
      <div class="col-md-6">
        <div class="card bg-light">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text mt-2">Description: {{ product.details }}</p>
            <h5 class="card-text">Price: {{ product.unitPrice }} tk</h5>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped></style>
