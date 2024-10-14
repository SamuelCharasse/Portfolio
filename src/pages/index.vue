<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import MenuOverlay from '@/components/MenuOverlay.vue';
import Menu from '@/components/icons/Menu.vue';

const isOverlayVisible = ref(false);

const openOverlay = () => {
  isOverlayVisible.value = true;
};

const closeOverlay = () => {
  isOverlayVisible.value = false;
};
</script>

<template>
  <main class="relative flex justify-center items-center min-h-screen overflow-hidden">
    <img 
      src="/src/assets/Portfolio Sam V2.webp" 
      alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
      class="absolute inset-0 w-full h-auto max-w-none object-cover z-0">
    
    <!-- Exemple d'élément positionné -->
    <div class="absolute top-8 left-8 z-10">
      <Menu @click="openOverlay"/>
    </div>

    <MenuOverlay :isVisible="isOverlayVisible" @close="closeOverlay"/>
    
    <RouterView class="relative z-10"/>
  </main>
</template>