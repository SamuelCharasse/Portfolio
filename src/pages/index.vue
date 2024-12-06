<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import Menu from '@/components/icons/Menu.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'
import Tile from '@/components/Tile.vue'
import Popup from '@/components/Popup.vue'

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

const showMenuOverlay = ref(false)

const toggleMenuOverlay = () => {
  showMenuOverlay.value = !showMenuOverlay.value
}

const closeMenuOverlay = () => {
  showMenuOverlay.value = false
}
</script>

<template>
  <main class="relative flex min-h-screen items-center justify-center">
    <img
      src="/public/Portfolio Sam V2.webp"
      alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
      class="absolute inset-0 z-0 h-screen w-screen"
    />

    <!-- Menu positionné -->
    <div class="absolute left-8 top-4 z-10">
      <Menu @click="toggleMenuOverlay" />
    </div>
    <MenuOverlay v-if="showMenuOverlay" @close="closeMenuOverlay" />
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
    <RouterView class="relative z-10" />

    <!-- Pop-up -->
    <Popup v-if="showPopup" @close="closePopup" />
  </main>
</template>
