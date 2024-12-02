<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import Menu from '@/components/icons/Menu.vue';
import Tile from '@/components/Tile.vue';
import Popup from '@/components/Popup.vue';

const showPopup = ref(false);

onMounted(() => {
  if (!localStorage.getItem('hasVisited')) {
    showPopup.value = true;
    localStorage.setItem('hasVisited', 'true');
  }
});

const closePopup = () => {
  showPopup.value = false;
};
</script>

<template>
  <main class="relative flex justify-center items-center min-h-screen">
    <img 
      src="/public/Portfolio Sam V2.webp" 
      alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
      class="absolute inset-0 w-screen h-screen z-0">
    
    <!-- Menu positionné -->
    <div class="absolute z-10 top-4 left-8">
      <Menu />
    </div>
    <div class="absolute">
      <Tile>
        <RouterLink to="/projectSolo">Projets Perso</RouterLink>
      </Tile>
    </div>
    <div class="absolute right-2">
      <Tile>
        <RouterLink to="/about">À Propos</RouterLink>
      </Tile>
    </div>
    <RouterView class="relative z-10"/>
    
    <!-- Pop-up -->
    <Popup v-if="showPopup" @close="closePopup"/>
  </main>
</template>