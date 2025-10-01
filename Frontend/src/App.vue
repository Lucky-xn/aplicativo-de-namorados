<template>
  <div class="h-[100vh] w-[100vw] overflow-hidden">
    <Navbar />
    <router-view/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';

</script>