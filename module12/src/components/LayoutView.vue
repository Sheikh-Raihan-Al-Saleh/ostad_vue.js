<script setup>

    const NavOpenClose = () => {
      let sideNav = document.getElementById('sideNav')
      let content =document.getElementById('content')
      let topNav = document.getElementById('topNav')
      if (sideNav.classList.contains("side-nav-open")) {
        sideNav.classList.add("side-nav-close");
        sideNav.classList.remove("side-nav-open");
        content.classList.add("content-expand");
        content.classList.remove("content");
        topNav.classList.add("top-navbar-expand");
        topNav.classList.remove("top-navbar");
      } else {
        sideNav.classList.remove("side-nav-close");
        sideNav.classList.add("side-nav-open");
        content.classList.remove("content-expand");
        content.classList.add("content");
        topNav.classList.remove("top-navbar-expand");
        topNav.classList.add("top-navbar");
      }
    }



</script>

<template>
  <div>

    <nav id="topNav" class="navbar fixed-top bg-primary top-navbar">
      <div class="container-fluid">
        <a id="MenuBar" @click="NavOpenClose" class="icon-nav mx-0 my-1 h5">
          <i class="fa text-white fa-bars"></i>
        </a>
      </div>
    </nav>

    <div id="sideNav" class="side-nav-open bg-white">
      <div class="side-nav-top text-center">
        <h3>Module 12</h3>
        <span>Assignment</span>
      </div>

      <router-link to="/" class="side-bar-item">
        <span class="side-bar-item-icon"><i class="fa text-green fa-circle-notch"/></span>
        <span class="side-bar-item-caption">Product List</span>
      </router-link>
      
      
    </div>

    <div id="content" class="content">
      <div class="container-fluid">
        <main>
          <slot></slot>
        </main>
      </div>
    </div>
  </div>

</template>