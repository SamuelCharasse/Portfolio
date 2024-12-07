<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
<<<<<<< HEAD
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Menu from '@/components/icons/Menu.vue';
import Tile from '@/components/Tile.vue';
import Popup from '@/components/Popup.vue';
import MenuOverlay from '@/components/MenuOverlay.vue';
import SoundOn from '@/components/icons/SoundOn.vue';
import SoundOff from '@/components/icons/SoundOff.vue';

const showPopup = ref(false);
const showOverlayMenu = ref(false);
const isSoundOn = ref(true);
const router = useRouter();
=======
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import Menu from '@/components/icons/Menu.vue'
import MenuOverlay from '@/components/MenuOverlay.vue'
import Tile from '@/components/Tile.vue'
import Popup from '@/components/Popup.vue'

const showPopup = ref(false)
>>>>>>> 6da4269110b2cb36505c8f2d2ef0e86913133cca

onMounted(() => {
  if (!localStorage.getItem('hasVisited')) {
    showPopup.value = true
    localStorage.setItem('hasVisited', 'true')
  }
<<<<<<< HEAD

  document.addEventListener('click', handleClickOutside);
  router.afterEach(() => {
    showOverlayMenu.value = false;
  });
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

const closePopup = () => {
  showPopup.value = false;
};

const toggleOverlayMenu = () => {
  showOverlayMenu.value = !showOverlayMenu.value;
};

const toggleSound = () => {
  isSoundOn.value = !isSoundOn.value;
};

const handleClickOutside = (event: MouseEvent) => {
  const overlayMenuElement = document.querySelector('.overlay-menu');
  const menuIconElement = document.querySelector('.menu-icon');
  if (
    overlayMenuElement &&
    !overlayMenuElement.contains(event.target as Node) &&
    menuIconElement &&
    !menuIconElement.contains(event.target as Node)
  ) {
    showOverlayMenu.value = false;
  }
};
=======
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
>>>>>>> 6da4269110b2cb36505c8f2d2ef0e86913133cca
</script>

<template>
  <main class="relative flex min-h-screen items-center justify-center">
    <img
<<<<<<< HEAD
      src="/src/assets/Portfolio Sam V2.webp"
      alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
      class="absolute inset-0 w-screen h-screen z-0">
    
      class="absolute inset-0 z-0 h-auto w-full max-w-none object-cover"
    />

    <!-- Menu positionné -->
    <div class="absolute left-[2.5%] top-[2.5%] z-10">
      <Menu @click="toggleOverlayMenu" class="menu-icon" />
      <!-- Menu overlay -->
      <MenuOverlay class="mt-2 overlay-menu" v-if="showOverlayMenu" />
=======
      src="/public/PortfolioSamV2.webp"
      alt="Cartographie d'un continent dans un style fantastique avec un effet de parchemin"
      class="absolute inset-0 z-0 h-screen w-screen"
    />

    <!-- Menu positionné -->
    <div class="absolute left-8 top-4 z-10">
      <Menu @click="toggleMenuOverlay" />
>>>>>>> 6da4269110b2cb36505c8f2d2ef0e86913133cca
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
<<<<<<< HEAD
    <div class="absolute bottom-[2.5%] right-[2.5%] z-10">
      <SoundOn v-if="isSoundOn" @click="toggleSound"></SoundOn>
      <SoundOff v-else @click="toggleSound"></SoundOff>
    </div>

=======
    <div class="absolute left-2">
      <Tile>
        <RouterLink to="/realisations">Réalisations</RouterLink>
      </Tile>
    </div>
    <div class="absolute top-2">
      <Tile>
        <RouterLink to="/">Contact</RouterLink>
      </Tile>
    </div>
>>>>>>> 6da4269110b2cb36505c8f2d2ef0e86913133cca
    <RouterView class="relative z-10" />

    <!-- Pop-up -->
    <Popup v-if="showPopup" @close="closePopup" />
  </main>
</template>
