<script setup>
import { cart } from '../store/cart'

</script>

<template>
    <section class="menu mt-5">
        <div class="container" data-aos="fade-up">
            <div class="section-header">
                <div class="card bg-gray">
                    <div class="card-header">
                       <h1>Shopping Cart</h1>
                    </div>

                    <div class="card-body">
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quanitty</th>
                                    
                                </tr>
                            </thead>

                            <tbody>
                                <tr v-for="item in cart.items" :key="item.id">
                                    <td> {{ item.product.title }}</td>
                                    <td> {{ item.product.price }}</td>
                                    <td>
                                        <input type="number" class="form-control" v-model="item.quantity">
                                    </td>
                                    <td><button class="btn btn-danger"  @click="cart.removeItem(item.product)"><i class="fas fa-trash"></i></button></td>
                                    
                                </tr>
                                <tr>
                                    <td></td>
                                    <td style="width: 40%;">
                                        <span v-if="cart.discountApplied" class="mx-2">
                                            <del>{{ cart.originalPrice }}</del>
                                        </span>
                                        <strong>{{ cart.totalPrice }}</strong>
                                        
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                <td>
                                    <div style="display: flex; align-items: center;" v-if="!cart.discountApplied">
                                        <input v-model="cart.couponCode" type="text" class="form-control mx-2" placeholder="Apply Coupon here..." style="width: 40%;">
                                        <button @click="cart.applyCoupon()" class="btn btn-success">Apply Coupon</button>
                                    </div>
                                    <div style="display: flex; align-items: center;" v-if="cart.discountApplied">
                                        <button @click="cart.removeCoupon()" class="btn btn-success">Remove Coupon</button>
                                    </div>
                                </td>

                                   
                                </tr>
                            </tbody>
                        </table>
                        <button @click="cart.emptyCart()" class="btn btn-danger rounded mx-3">
                            Empty Cart
                        </button>
                        
                        <button @click="cart.checkout()" class="btn btn-success">
                            Place Order
                        </button>

                    </div>

                </div>
            </div>

            

            
        </div>
    </section>
    
</template>