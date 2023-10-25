<script setup>
import {cart} from '../store/cart'
import { authStore } from '../store/store';
const auth = authStore
</script>
<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <a href="" class="logo d-flex align-items-center me-auto me-lg-0">
        <h1>JustDrip (<span>{{ auth.user?.name }}</span>)</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/products">Products</router-link>
          </li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>

          <li v-if="auth.isAuthenticated">
            <router-link to="/order">Orders </router-link>
          </li>
          
        </ul>
      </nav>
      <!-- .navbar -->

      <router-link to="/cart" class="btn-book-a-table" v-if="auth.isAuthenticated">Cart <i class="fas fa-shopping-cart"></i> ({{ cart.totalCartItems }})</router-link>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      <button v-if="auth.isAuthenticated" @click="auth.logout()" class="btn btn-danger">
          <span>Logout <i class="fas fa-sign-out"></i></span>
        </button>
      
    </div>
    <router-link v-if="!auth.isAuthenticated" to="/login" class="btn btn-success mx-2">Login</router-link>
      <router-link v-if="!auth.isAuthenticated" to="/registration" class="btn btn-success mx-2">Signup</router-link>
  </header>
  <!-- End Header -->
    
</template>

<style></style>
