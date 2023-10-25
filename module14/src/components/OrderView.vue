<script setup>
import { onBeforeMount } from 'vue'
import { order } from '../store/order'
import { authStore } from '../store/store'

onBeforeMount(() => {
  order.fetchOrders()
})

function toggleProducts(orderId) {
  const order_item = order.orders.find((o) => o.id === orderId)
  if (order_item) {
    order_item.showProducts = !order_item.showProducts
  }
}
</script>

<template>
  <section class="mt-4">
    <div class="container">
      
      <div class="container px-4 py-4">
        <h5 class="display-4">My orders</h5>
        <p class="my-3"></p>
      </div>
      <div class="container py-4">
        <table class="table table-bordered item-center">
            <thead>
                <th>Order ID</th>
                <th>Total Amount</th>
            </thead>

            <tbody>
                <tr v-for="s_order in order.orders" :key="order.id">
                    <td>{{ s_order.id }}</td>
                    <td>${{ s_order.totalAmount }}</td>
                    <td>
                        <button @click="toggleProducts(s_order.id)" class="btn btn-primary">
                            Show Detail
                        </button>
                    </td>

                    <table class="table">
                        <tbody v-if="s_order.showProducts">
                            <tr v-for="product in s_order.products" :key="product.id">
                                <td>{{ product.title }}</td>
                                <td>{{ product.price }}</td>
                                <td>Quantity: {{ product.quantity }}</td>
                            </tr>

                        </tbody>
                    </table>
                </tr>
            </tbody>
        </table>
       
      </div>
    </div>
  </section>
</template>

<style scoped></style>
