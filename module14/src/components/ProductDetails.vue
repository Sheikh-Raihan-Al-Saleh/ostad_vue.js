<script setup>
import {reactive, onBeforeMount} from 'vue'
import axios from 'axios';
import {useRoute} from 'vue-router';

const route=useRoute()
const id=route.params.id

const product = reactive({})
import {cart} from '../store/cart'
onBeforeMount(()=>{
    axios.get(`http://localhost:8000/api/products/${id}`)

       .then(res=>{
            product.id=res.data.id
            product.title = res.data.title
            product.image = res.data.image
            product.price = res.data.price
            product.description = res.data.description
            product.category = res.data.category
       })
})
</script>

<template>
    <section class="menu mt-5">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <div class="card bg-gray">
                    <div class="card-header">
                       <h1>Product Details</h1>
                    </div>

                    <div class="card-body">
                        <div>
                            <h3>{{ product.title }} - {{ product.category }}</h3>
                            <img :src="product.image" alt="" style="width: 20%; height: 20%;">
                        </div>

                        <div class="card mt-3">

                            <div class="card-body">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td style="width: 25%;">{{ product.category }}</td>
                                            <td style="width: 50%;">{{ product.description }}</td>
                                            <td>{{ product.price }}</td>
                                        </tr>
                                    </tbody>
                                    

                                </table>

                            </div>

                        </div>

                        <div class="mt-4">

                            <button class="btn btn-warning" @click="cart.addItem(product)">Add to Cart</button>

                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>