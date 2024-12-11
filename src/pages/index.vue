<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Menu from '@/components/icons/Menu.vue'
import Tile from '@/components/Tile.vue'
import Popup from '@/components/Popup.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'
import SoundOn from '@/components/icons/SoundOn.vue'
import SoundOff from '@/components/icons/SoundOff.vue'
//Gestion du popup à la première connexion
const showPopup = ref(false)

onMounted(() => {
  if (!localStorage.getItem('hasVisited')) {
    showPopup.value = true
    localStorage.setItem('hasVisited', 'true')
  }
})

const closePopup = () => {
  showPopup.value = false
}
// Gestion du menu
const showMenuOverlay = ref(false)

const toggleMenuOverlay = () => {
  showMenuOverlay.value = !showMenuOverlay.value
}

const closeMenuOverlay = () => {
  showMenuOverlay.value = false
}
// Gestion de l'icone SoundOn/Off
const isSoundOn = ref(true)

const toggleSound = () => {
  isSoundOn.value = !isSoundOn.value
}

// Gestion de la position des Tiles avec Canvas

onMounted(() => {
  const canvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const image = new Image();
      image.src = '/PortfolioSamV2.webp';
      image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      };
    }
  }
});
</script>

<template>
  <main class="relative flex min-h-screen items-center justify-center">
    <canvas id="backgroundCanvas" width="1920" height="1080" class="absolute inset-0 z-0 h-screen w-screen"></canvas>

    <!-- Menu positionné -->
    <div class="absolute left-12 top-4 z-10">
      <Menu @click="toggleMenuOverlay" />
    </div>
    <MenuOverlay v-if="showMenuOverlay" @close="closeMenuOverlay" />
    <div class="absolute" style="top: 350px; left: 700px;">
      <Tile>
        <RouterLink to="/projectSolo">Projets Perso</RouterLink>
      </Tile>
    </div>
    <div class="absolute" style="top: 420px; left: 1074px;">
      <Tile>
        <RouterLink to="/about">À Propos</RouterLink>
      </Tile>
    </div>
    <div class="absolute" style="top: 280px; left: 170px;">
      <Tile>
        <RouterLink to="/realisations">Réalisations</RouterLink>
      </Tile>
    </div>
    <div class="absolute" style="top: 30px; left: 730px;">
      <Tile>
        <RouterLink to="/">Contact</RouterLink>
      </Tile>
    </div>
    <RouterView class="relative z-10" />
    <div class="absolute bottom-4 right-12">
    <SoundOn v-if="isSoundOn" @click="toggleSound" />
    <SoundOff v-else @click="toggleSound" />
  </div>
    <!-- Pop-up -->
    <Popup v-if="showPopup" @close="closePopup" />
  </main>
</template>
