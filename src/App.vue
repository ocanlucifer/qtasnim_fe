<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
// import Footer from '@/components/Footer.vue';

</script>

<template>
  <div>
    <Navbar :key="$route.fullPath" />
  </div>
  <RouterView />
  <!-- 
        <div>
          <Footer :key="$route.fullPath" />
        </div> -->
</template>