<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
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

onMounted(() => {
  if (!localStorage.getItem('hasVisited')) {
    showPopup.value = true;
    localStorage.setItem('hasVisited', 'true');
  }

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
</script>

<template>
  <main class="relative flex min-h-screen items-center justify-center">
    <img
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
    <div class="absolute bottom-[2.5%] right-[2.5%] z-10">
      <SoundOn v-if="isSoundOn" @click="toggleSound"></SoundOn>
      <SoundOff v-else @click="toggleSound"></SoundOff>
    </div>

    <RouterView class="relative z-10" />

    <!-- Pop-up -->
    <Popup v-if="showPopup" @close="closePopup" />
  </main>
</template>