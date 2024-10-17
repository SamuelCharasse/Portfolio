<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterView } from 'vue-router';
import Menu from '@/components/icons/Menu.vue';
</script>

<template>
  <main class="relative flex justify-center items-center min-h-screen">
    <img 
      src="/src/assets/Portfolio Sam V2.webp" 
      alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
      class="absolute inset-0 w-full h-auto max-w-none object-cover z-0">
    
    <!-- Menu positionné -->
    <div class="absolute top-8 left-8 z-10">
      <Menu/>
    </div>
    <RouterView class="relative z-10"/>
  </main>
</template>