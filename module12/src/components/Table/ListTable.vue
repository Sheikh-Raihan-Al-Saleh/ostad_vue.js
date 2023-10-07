<script setup>
import { ref } from 'vue'

import { searchField, Header, products } from '../../products.js'
const searchValue = ref('')
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h1 class="mt-4">Product List</h1>
            <div>
              <input
                placeholder="Search..."
                class="form-control mb-2 w-auto form-control-sm"
                type="text"
                v-model="searchValue"
              />
              <EasyDataTable
                buttons-pagination
                alternating
                :headers="Header"
                :items="products"
                :rows-per-page="10"
                :search-field="searchField"
                :search-value="searchValue"
              >
                <template #item-number="{ id }">
                  <router-link :to="'/details/' + id" class="btn btn-primary btn-sm"
                    >View Details</router-link
                  >
                </template>
              </EasyDataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
