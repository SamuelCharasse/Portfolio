<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import Menu from '@/components/icons/Menu.vue'
import Tile from '@/components/Tile.vue'
import Popup from '@/components/Popup.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'
import { useSeoMeta } from '@unhead/vue'
import { useStorage } from '@vueuse/core'
// Gestion du SEO
useSeoMeta({
  title: 'Accueil',
  description: 'Portofolio de Samuel Charasse, Narrative Designer et Développeur Web',
  ogDescription: 'Portofolio de Samuel Charasse, Narrative Designer et Développeur Web',
  ogTitle: 'Accueil',
  ogImage: 'https://scharasse.fr/PortfolioSamV2.webp'
})

//Playlist de la page
const playlistIndex = [
  '/sounds/SoundIndex.mp3',
  '/sounds/SoundIndex2.mp3',
  '/sounds/SoundIndex3.mp3',
  '/sounds/SoundIndex4.mp3'
]
// Gestion du popup à la première connexion
const hasVisited = useStorage('hasVisited', false)

// Gestion du menu
const showMenuOverlay = ref(false)

const toggleMenuOverlay = () => {
  showMenuOverlay.value = !showMenuOverlay.value
}

const closeMenuOverlay = () => {
  showMenuOverlay.value = false
}

// Gestion de la position des Tiles avec Canvas
onMounted(() => {
  const canvas = document.getElementById('backgroundCanvas') as HTMLCanvasElement
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const image = new Image()
      image.src = '/PortfolioSamV2.webp'
      image.onload = () => {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
      }
    }
  }


  const btn = document.getElementById('set') as HTMLButtonElement
  if (btn) {
    btn.click();
    btn.remove();
  }
})
</script>

<template>
  <main class="relative flex min-h-screen items-center justify-center">
    <canvas
      id="backgroundCanvas"
      width="1920"
      height="1080"
      class="absolute inset-0 z-0 h-screen w-screen"
    ></canvas>

    <!-- Menu positionné -->
    <div class="absolute left-12 top-4 z-10">
      <Menu @click="toggleMenuOverlay" />
    </div>
    <MenuOverlay v-if="showMenuOverlay" @close="closeMenuOverlay" class="fixed left-0 top-20" />

    <!-- Placer les éléments "Tile" en utilisant des unités relatives -->
    <div class="absolute top-[150px] left-[50px] md:top-[350px] md:left-[700px]">
      <Tile>
        <RouterLink to="/projectSolo">Projets Perso</RouterLink>
      </Tile>
    </div>
    <div class="absolute top-[220px] left-[50px] md:top-[420px] md:left-[1074px]">
      <Tile>
        <RouterLink to="/about">À Propos</RouterLink>
      </Tile>
    </div>
    <div class="absolute top-[290px] left-[50px] md:top-[280px] md:left-[170px]">
      <Tile>
        <RouterLink to="/realisations">Réalisations</RouterLink>
      </Tile>
    </div>
    <div class="absolute top-[360px] left-[50px] md:top-[30px] md:left-[730px]">
      <Tile>
        <a href="mailto:voxorproduction@gmail.com">Contact</a>
      </Tile>
    </div>
    <RouterView class="relative z-10" />
    <!-- Pop-up -->
    <Popup v-if="!hasVisited" @close="hasVisited = true" />

    <button id="set" @click="$emit('custom-event', playlistIndex)">Bouton test</button>
  </main>
</template>
