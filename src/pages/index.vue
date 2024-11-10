<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router';
import Menu from '@/components/icons/Menu.vue';
import Tile from '@/components/Tile.vue';
</script>

<template>
  <main class="relative flex justify-center items-center min-h-screen">
    <img 
      src="/src/assets/Portfolio Sam V2.webp" 
      alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
      class="absolute inset-0 w-full h-auto max-w-none object-cover z-0">
    
    <!-- Menu positionné -->
    <div class="absolute z-10 top-[5%] left-[2.5%]">
      <Menu/>
    </div>
    <div class="absolute">
      <Tile>
        <RouterLink to="/">Test</RouterLink>
      </Tile>
    </div>
    <RouterView class="relative z-10"/>
  </main>
</template>