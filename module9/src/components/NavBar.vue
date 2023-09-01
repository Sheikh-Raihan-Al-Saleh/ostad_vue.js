<script setup>
 import axios from "axios";
 import {ref} from 'vue'

const navitems=ref([]);

async function navItems()
 {
    let url="https://basic-blog.teamrabbil.com/api/post-categories";
    let res=await axios.get(url);
    navitems.value=res.data;
 }
 navItems();

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand fw-bolder" href="#">MR VLOG</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">হোম</a>
          </li>
          <li class="nav-item" v-for="items in navitems" :key="items.id">
            <router-link class="nav-link" :to="'/' + items.name">{{ items['name'] }}</router-link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
</template>
